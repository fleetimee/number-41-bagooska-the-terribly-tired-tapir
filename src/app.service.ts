import { Injectable } from '@nestjs/common';
import { FirebaseAuthenticationService } from '@redredgroup/nestjs-firebase-admin';

@Injectable()
export class AppService {
  constructor(private firebaseAuth: FirebaseAuthenticationService) {}

  getHello() {
    return this.firebaseAuth.getUser('khmBwgyttMa0hq9cGrZELcLrs1X2');
  }

  getToken() {
    return this.firebaseAuth.createCustomToken('khmBwgyttMa0hq9cGrZELcLrs1X2');
  }
}
