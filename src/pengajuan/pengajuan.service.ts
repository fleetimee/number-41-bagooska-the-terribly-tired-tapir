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
      android: {
        notification: {
          imageUrl:
            'https://media.hitekno.com/thumbs/2022/04/22/18456-spy-x-family-anya-forger/730x480-img-18456-spy-x-family-anya-forger.jpg',
        },
      },
      apns: {
        payload: {
          aps: {
            'mutable-content': 1,
          },
        },
        fcm_options: {
          image:
            'https://media.hitekno.com/thumbs/2022/04/22/18456-spy-x-family-anya-forger/730x480-img-18456-spy-x-family-anya-forger.jpg',
        },
      },
      webpush: {
        headers: {
          image:
            'https://media.hitekno.com/thumbs/2022/04/22/18456-spy-x-family-anya-forger/730x480-img-18456-spy-x-family-anya-forger.jpg',
        },
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

  // Send notification back to analis when pengajuan is reviewed
  async sendNotificationToAnalis(
    token: string,
    title: string,
    body: string,
  ): Promise<any> {
    const message = {
      notification: {
        title: title,
        body: body,
      },
      android: {
        notification: {
          imageUrl:
            'https://sm.ign.com/t/ign_in/screenshot/default/anya-forger_z3h8.1280.jpg',
        },
      },
      apns: {
        payload: {
          aps: {
            'mutable-content': 1,
          },
        },
        fcm_options: {
          image:
            'https://sm.ign.com/t/ign_in/screenshot/default/anya-forger_z3h8.1280.jpg',
        },
      },
      webpush: {
        headers: {
          image:
            'https://sm.ign.com/t/ign_in/screenshot/default/anya-forger_z3h8.1280.jpg',
        },
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

  async sendNotificationToAnalisAndReviewer(
    token: string[],
    title: string,
    body: string,
  ): Promise<any> {
    if (title === 'Pengajuan Disetujui') {
      const message = {
        notification: {
          title: title,
          body: body,
        },
        android: {
          notification: {
            imageUrl:
              'https://assets.promediateknologi.com/crop/0x0:0x0/0x0/webp/photo/2022/09/25/3234163569.jpeg',
          },
        },
        apns: {
          payload: {
            aps: {
              'mutable-content': 1,
            },
          },
          fcm_options: {
            image:
              'https://assets.promediateknologi.com/crop/0x0:0x0/0x0/webp/photo/2022/09/25/3234163569.jpeg',
          },
        },
        webpush: {
          headers: {
            image:
              'https://assets.promediateknologi.com/crop/0x0:0x0/0x0/webp/photo/2022/09/25/3234163569.jpeg',
          },
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
    } else {
      const message = {
        notification: {
          title: title,
          body: body,
        },
        android: {
          notification: {
            imageUrl: 'https://i.ytimg.com/vi/xwlnWJLbuFU/maxresdefault.jpg',
          },
        },
        apns: {
          payload: {
            aps: {
              'mutable-content': 1,
            },
          },
          fcm_options: {
            image: 'https://i.ytimg.com/vi/xwlnWJLbuFU/maxresdefault.jpg',
          },
        },
        webpush: {
          headers: {
            image: 'https://i.ytimg.com/vi/xwlnWJLbuFU/maxresdefault.jpg',
          },
        },
        token: token[0],
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
  }
}
