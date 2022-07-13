import { FileInterceptor } from '@nestjs/platform-express';
import {
  BadRequestException,
  Controller,
  Get,
  Param,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import {
  Crud,
  CrudController,
  CrudRequest,
  CrudRequestInterceptor,
  Override,
  ParsedBody,
  ParsedRequest,
} from '@rewiko/crud';
import { Upload } from './entities/upload.entity';
import { UploadsService } from './uploads.service';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Response } from 'express';

@Crud({
  routes: {
    // createOneBase: {
    //   interceptors: [FileUploadingUtils.singleFileUploader('images')],
    // },
  },
  model: {
    type: Upload,
  },
})
@Controller('uploads')
export class UploadsController implements CrudController<Upload> {
  constructor(public service: UploadsService) {}

  get base(): CrudController<Upload> {
    return this;
  }

  // @Override()
  // createOne(
  //   @ParsedRequest() req: CrudRequest,
  //   @ParsedBody() dto: Upload,
  //   @UploadedFile() file,
  // ) {
  //   dto.images = file.filename; // log to see all available data
  //   return this.base.createOneBase(req, dto);
  // }

  // @UseInterceptors(CrudRequestInterceptor)
  // @Get('/images/:images')
  // async getPicture(
  //   @ParsedRequest() req: CrudRequest,
  //   @Res() res: Response,
  //   @Param('images') images: string,
  // ) {
  //   res.sendFile(images, { root: './uploads/images' });
  // }

  @UseInterceptors(
    FileInterceptor('images', {
      storage: diskStorage({
        destination: './uploads/images',
        filename: (req, images, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return cb(null, `${randomName}${extname(images.originalname)}`);
        },
      }),
      fileFilter: (req, images, cb) => {
        if (!images.originalname.match(/\.(pdf|docx|doc)$/)) {
          return cb(null, false);
        }
        cb(null, true);
      },
    }),
  )
  @Override()
  createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: Upload,
    @UploadedFile() images: Express.Multer.File,
  ) {
    if (!images) {
      throw new BadRequestException('File bukan pdf/docx/doc');
    }
    dto.images = images.filename; // log to see all available data

    const response = {
      message: 'File berhasil diupload',
      filePath: `http://localhost:3000/uploads/images/${images.filename}`,
    };
    return this.base.createOneBase(req, dto) && response;
  }

  @Get('/images/:filename')
  async getPdf(@Res() res: Response, @Param('filename') filename) {
    res.sendFile(filename, { root: './uploads/images' });
  }
}
