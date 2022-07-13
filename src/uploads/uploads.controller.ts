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
  model: {
    type: Upload,
  },
  query: {
    join: {
      submission: {
        eager: true,
      },
      'submission.nonfixed': {
        eager: true,
      },
      'submission.fixed': {
        eager: true,
      },
      createdBy: {
        eager: true,
        exclude: ['password'],
        allow: ['username'],
      },
    },
  },
})
@Controller('uploads')
export class UploadsController implements CrudController<Upload> {
  constructor(public service: UploadsService) {}

  /**
   * It returns the base class of the current class.
   * @returns The base property is being returned.
   */
  get base(): CrudController<Upload> {
    return this;
  }

  /* This is a decorator that intercepts the request and saves the file to the specified location. */
  @UseInterceptors(
    FileInterceptor('files', {
      storage: diskStorage({
        destination: './uploads/files',
        filename: (req, files, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return cb(null, `${randomName}${extname(files.originalname)}`);
        },
      }),
      fileFilter: (req, files, cb) => {
        if (!files.originalname.match(/\.(pdf|docx|doc)$/)) {
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
    @UploadedFile() files: Express.Multer.File,
  ) {
    if (!files) {
      throw new BadRequestException('File bukan pdf/docx/doc');
    }
    dto.files = files.filename; // log to see all available data

    const response = {
      message: 'File berhasil diupload',
      filePath: `http://localhost:3000/uploads/files/${files.filename}`,
    };
    return this.base.createOneBase(req, dto) && response;
  }

  /* A method to get the file from the server. */
  @Get('/files/:filename')
  async getPdf(@Res() res: Response, @Param('filename') filename) {
    res.sendFile(filename, { root: './uploads/files' });
  }
}
