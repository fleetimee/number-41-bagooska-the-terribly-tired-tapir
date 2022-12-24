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

  async findByReviewersCustomClaims() {
    try {
      // get all users first
      const users = await this.firebaseAuth.listUsers(100);

      // query user by custom claims
      const reviewers = users.users.filter((user) => {
        return user.customClaims.reviewer;
      });

      return {
        status: 200,
        data: reviewers,
      };
    } catch (error) {
      return {
        status: 'error',
        message: error.message,
      };
    }
  }

  async findByAnalisCustomClaims() {
    try {
      // get all users first
      const users = await this.firebaseAuth.listUsers(100);

      // query user by custom claims
      const analis = users.users.filter((user) => {
        return user.customClaims.analis;
      });

      return {
        status: 200,
        data: analis,
      };
    } catch (error) {
      return {
        status: 'error',
        message: error.message,
      };
    }
  }

  async findByPengutusCustomClaims() {
    try {
      // get all users first
      const users = await this.firebaseAuth.listUsers(100);

      // query user by custom claims
      const pengutus = users.users.filter((user) => {
        return user.customClaims.pengutus;
      });

      return {
        status: 200,
        data: pengutus,
      };
    } catch (error) {
      return {
        status: 'error',
        message: error.message,
      };
    }
  }

  async findByAdminCustomClaims() {
    try {
      // get all users first
      const users = await this.firebaseAuth.listUsers(100);

      // query user by custom claims
      const admin = users.users.filter((user) => {
        return user.customClaims.admin;
      });

      return {
        status: 200,
        data: admin,
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
