import { IsNotEmpty } from 'class-validator';

export class UploadDto {
  name: string;

  images: string;
}
