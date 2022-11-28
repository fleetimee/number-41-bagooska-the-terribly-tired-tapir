import { Injectable } from '@nestjs/common';
import { v2 } from 'cloudinary';
import { CLOUDINARY } from './constant';

@Injectable()
export class Cloudinary {
  constructor() {
    v2.config({
      cloud_name: 'dhctegtby',
      api_key: '978245136562959',
      api_secret: 'dYUbLV29PvTUhT_z2FvxQt07cTA',
    });
  }

  async upload(file: any, options: any) {
    return await v2.uploader.upload(file, options);
  }
}
