import { TypeOrmCrudService } from '@rewiko/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FirebaseAuthenticationService } from '@redredgroup/nestjs-firebase-admin';

@Injectable()
export class UsersService extends TypeOrmCrudService<User> {
  constructor(
    private firebaseAuth: FirebaseAuthenticationService,
    @InjectRepository(User) repo,
  ) {
    super(repo);
  }

  // async createUser(dto: User) {
  //   const {
  //     email,
  //     emailVerified,
  //     password,
  //     phoneNumber,
  //     displayName,
  //     photoURL,
  //     disabled,
  //   } = dto;
  //   const user = await this.firebaseAuth
  //     .createUser({
  //       email,
  //       password,
  //       emailVerified,
  //       phoneNumber,
  //       displayName,
  //       photoURL,
  //       disabled,
  //     })
  //     .then(
  //       (userRecord) => {
  //         return userRecord.toJSON();
  //       },
  //       (error) => {
  //         return error;
  //       },
  //     );
  //   return user;
  // }

  async getToken(uid: string) {
    const token = await this.firebaseAuth
      .createCustomToken(uid)
      .then((token) => {
        return token;
      });
    return token;
  }

  async findByEmail(email: string) {
    // Using the email and password from the request body, we can validate the user
    // We used JWT Passport strategy to validate the user
    const user = await this.repo.findOne({
      where: { email }, // email: email
    });

    return user;
  }
}
