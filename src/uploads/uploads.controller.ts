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
import { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
// import fs
import * as fs from 'fs';

@Crud({
  model: {
    type: Upload,
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

  // @UseInterceptors(
  //   FileInterceptor('files', {
  //     storage: diskStorage({
  //       destination: './uploads/files',
  //       filename: (req, files, cb) => {
  //         const randomName = Array(32)
  //           .fill(null)
  //           .map(() => Math.round(Math.random() * 16).toString(16))
  //           .join('');
  //         return cb(null, `${randomName}${extname(files.originalname)}`);
  //       },
  //     }),
  //     fileFilter: (req, files, cb) => {
  //       if (!files.originalname.match(/\.(jpeg|jpg|png)$/)) {
  //         return cb(null, false);
  //       }
  //       cb(null, true);
  //     },
  //     limits: {
  //       // max file size 2MB
  //       fileSize: 2 * 1024 * 1024,
  //     },
  //   }),
  // )
  @UseInterceptors(FileInterceptor('file'))
  @Override()
  createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: Upload,
    @UploadedFile() files: Express.Multer.File,
  ) {
    if (!files) {
      throw new BadRequestException('File bukan pdf/docx/doc');
    }
    dto.file = files.filename; // log to see all available data

    const response = {
      originalname: files.originalname,
      filename: files.filename,

      path: files.path,
    };

    return this.service.uploadImageToCloudinary(files).then((result) => {
      dto.file = result.url;
      return this.base.createOneBase(req, dto);
    });

    // const upload = this.service.uploadImageToCloudinary(files);
    // return upload;
  }

  @Override()
  deleteOne(@ParsedRequest() req: CrudRequest) {
    // find one file from database
    const selectFile = this.service.findOne(
      // Get the id from the request
      { where: { id: req.parsed.paramsFilter[0].value } },
    );

    // Parse selectFile to string
    const parseFile = JSON.stringify(selectFile);

    // Parse parseFile to object
    const parseFileToObject = JSON.parse(parseFile);

    // Get the file name from the object
    const fileName = parseFileToObject.file;

    // Delete file from the folder
    fs.unlink(`./uploads/files/${fileName}`, (err) => {
      if (err) {
        console.log(err);
      }
    });

    console.log('File berhasil dihapus');
    // delete file from database

    return this.base.deleteOneBase(req);
  }

  /* A method to get the file from the server. */
  @Get('files/:file')
  async getFile(@Param('file') file, @Res() res: Response) {
    return res.sendFile(file, { root: './uploads/files' });
  }
}
