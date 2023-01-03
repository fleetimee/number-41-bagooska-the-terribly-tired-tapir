import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pengajuan } from './entities/pengajuan.entity';
import { TypeOrmCrudService } from '@rewiko/crud-typeorm';
import { FirebaseMessagingService } from '@redredgroup/nestjs-firebase-admin';

@Injectable()
export class PengajuanService extends TypeOrmCrudService<Pengajuan> {
  constructor(
    @InjectRepository(Pengajuan) repo,
    private firebaseMessaging: FirebaseMessagingService,
  ) {
    super(repo);
  }

  // send notification to other users if there is a new pengajuan
  async sendNotification(token: string, title: string, body: string) {
    const message = {
      notification: {
        title: title,
        body: body,
      },
      token: token,
    };

    const response = await this.firebaseMessaging
      .send(message)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });

    return response;
  }

  // send notification to all users that involved in the pengajuan
  async sendNotificationToAll(
    token: string[],
    title: string,
    body: string,
  ): Promise<any> {
    const message = {
      notification: {
        title: title,
        body: body,
      },
      tokens: token,
    };

    const response = await this.firebaseMessaging
      .sendMulticast(message)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });

    return response;
  }
}
