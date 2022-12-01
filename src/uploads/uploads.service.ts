import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@rewiko/crud-typeorm';
import { Upload } from './entities/upload.entity';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Injectable()
export class UploadsService extends TypeOrmCrudService<Upload> {
  constructor(
    private cloudinary: CloudinaryService,
    @InjectRepository(Upload) repo,
  ) {
    super(repo);
  }

  async uploadImageToCloudinary(file: Express.Multer.File) {
    return await this.cloudinary.uploadImage(file).catch(() => {
      throw new BadRequestException('Invalid file type.');
    });
  }
}
