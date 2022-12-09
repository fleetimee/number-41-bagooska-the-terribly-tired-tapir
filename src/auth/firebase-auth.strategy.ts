import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy, ExtractJwt } from 'passport-firebase-jwt';
import { FirebaseAuthenticationService } from '@redredgroup/nestjs-firebase-admin';

@Injectable()
export class FirebaseAuthStrategy extends PassportStrategy(Strategy) {
  constructor(private firebaseAuth: FirebaseAuthenticationService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(token: string) {
    try {
      return await this.firebaseAuth.verifyIdToken(token, true);
    } catch (err) {
      throw new UnauthorizedException(err);
    }
  }
}
