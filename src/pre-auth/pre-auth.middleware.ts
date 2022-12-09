import { Injectable, NestMiddleware } from '@nestjs/common';
import { FirebaseAuthenticationService } from '@redredgroup/nestjs-firebase-admin';
import { Request, Response } from 'express';
import * as firebase from 'firebase-admin';

@Injectable()
export class PreAuthMiddleware implements NestMiddleware {
  private auth: FirebaseAuthenticationService;

  constructor(private firebaseApp: FirebaseAuthenticationService) {
    this.auth = firebaseApp;
  }

  use(req: any, res: any, next: () => void) {
    const token = req.headers.authorization;

    next();
  }
}
