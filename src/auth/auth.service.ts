import { Injectable, UnauthorizedException } from '@nestjs/common';
import {
  FirebaseAuthenticationService,
  FirebaseMessagingService,
} from '@redredgroup/nestjs-firebase-admin';

import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { AuthLoginDto } from './dto/auth-login.dto';

@Injectable()
export class AuthService {
  constructor(
    private firebaseAuth: FirebaseAuthenticationService,
    private readonly usersService: UsersService,
    private firebaseMessaging: FirebaseMessagingService,
  ) {}

  // customClaims = {
  //   analis: true,
  // };

  async login(authLoginDto: AuthLoginDto) {
    try {
      const user = await this.validateUser(authLoginDto);

      const token = await this.firebaseAuth
        .createCustomToken(user.id)
        .then((token) => {
          return token;
        });

      return {
        status: 200,
        message: 'Login successful',
        data: {
          user,
        },
        access_token: token,
      };
    } catch (error) {
      throw new UnauthorizedException({
        status: 401,
        message: 'Invalid credentials',
      });
    }
  }

  async verify(token: string) {
    const decodedToken = await this.firebaseAuth.verifyIdToken(token);

    if (!decodedToken) {
      throw new UnauthorizedException({
        status: 401,
        message: 'Invalid token',
      });
    } else {
      return {
        message: 'Token is valid',
      };
    }
  }

  async validateUser(authLoginDto: AuthLoginDto): Promise<User> {
    const { email, password } = authLoginDto;

    const user = await this.usersService.findByEmail(email);
    if (!(await user?.validatePassword(password))) {
      throw new UnauthorizedException({
        status: 401,
        message: 'Invalid credentials',
      });
    }

    return user;
  }

  async notifyUser(message: any) {
    // send multicast
    const response = this.firebaseMessaging;

    return response.sendMulticast(message);
  }
}
