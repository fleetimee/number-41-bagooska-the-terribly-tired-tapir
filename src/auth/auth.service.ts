import { Injectable, UnauthorizedException } from '@nestjs/common';
import { FirebaseAuthenticationService } from '@redredgroup/nestjs-firebase-admin';

import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { AuthLoginDto } from './dto/auth-login.dto';

@Injectable()
export class AuthService {
  constructor(
    private firebaseAuth: FirebaseAuthenticationService,
    private readonly usersService: UsersService,
  ) {}

  async login(authLoginDto: AuthLoginDto) {
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
}
