import { Injectable } from '@nestjs/common';
import { FirebaseAuthenticationService } from '@redredgroup/nestjs-firebase-admin';
import { FirebaseFormDto } from './dto/firebase-remote-user.dto';

@Injectable()
export class FirebaseRemoteService {
  constructor(private firebaseAuth: FirebaseAuthenticationService) {}

  async findAll() {
    try {
      const users = await this.firebaseAuth.listUsers(100);

      return {
        status: 200,
        data: users,
      };
    } catch (error) {
      return {
        status: 'error',
        message: error.message,
      };
    }
  }

  async setUserClaims(
    uid: string,
    isAdmin: boolean,
    isAnalis: boolean,
    isReviewer: boolean,
    isPengutus: boolean,
  ) {
    try {
      await this.firebaseAuth
        .setCustomUserClaims(uid, {
          admin: isAdmin,
          analis: isAnalis,
          reviewer: isReviewer,
          pengutus: isPengutus,
        })
        .then(() => {
          // The new custom claims will propagate to the user's ID token the
          // next time a new one is issued.
          // if status is 201, then success
          return {
            status: 201,
            message: 'Success!',
          };
        });
    } catch (error) {
      return {
        status: 'error',
        message: error.message,
      };
    }
  }

  async updateUsers(uid: string, firebaseFormDto: FirebaseFormDto) {
    try {
      await this.firebaseAuth
        .updateUser(uid, firebaseFormDto)
        .then((userRecord) => {
          // See the UserRecord reference doc for the contents of userRecord.
          console.log('Successfully updated user', userRecord.toJSON());
          return {
            status: 200,
            message: 'Success!',
            data: userRecord.toJSON(),
          };
        });
    } catch (error) {
      return {
        status: 'error',
        message: error.message,
      };
    }
  }

  async deleteUser(uid: string) {
    try {
      await this.firebaseAuth.deleteUser(uid);
      return {
        status: 200,
        message: 'Success!',
      };
    } catch (error) {
      return {
        status: 'error',
        message: error.message,
      };
    }
  }
}
