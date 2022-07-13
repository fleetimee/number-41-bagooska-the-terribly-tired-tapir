import { UpdateNonFixedDto } from './dto/update-non-fixed.dto';
import { CreateNonFixedDto } from './dto/create-non-fixed.dto';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  CreateManyDto,
  Crud,
  CrudController,
  CrudRequest,
  Override,
  ParsedBody,
  ParsedRequest,
} from '@rewiko/crud';
import { NonFixed } from './entities/non-fixed.entity';
import { NonFixedsService } from './non-fixeds.service';

@ApiTags('Penghasilan Tidak Tetap')
@Crud({
  model: {
    type: NonFixed,
  },
  dto: {
    create: CreateNonFixedDto,
    update: UpdateNonFixedDto,
    replace: UpdateNonFixedDto,
  },
  query: {
    join: {
      debitur: {
        eager: true,
        allow: ['nama_debitur', 'no_debitur'],
      },
      submission: {
        eager: true,
      },
      createdBy: {
        eager: true,
        allow: ['username'],
        exclude: ['password'],
      },
      updatedBy: {
        eager: true,
        allow: ['username'],
        exclude: ['password'],
      },
      'createdBy.user': {
        eager: true,
        required: true,
        allow: ['id', 'name'],
      },
      'updatedBy.user': {
        eager: true,
        required: false,
        exclude: ['password'],
      },
    },
  },
})
@Controller('non-fixeds')
export class NonFixedsController implements CrudController<NonFixed> {
  constructor(public service: NonFixedsService) {}

  get base(): CrudController<NonFixed> {
    return this;
  }

  @Override()
  getMany(@ParsedRequest() req: CrudRequest) {
    return this.base.getManyBase(req);
  }

  @Override('getOneBase')
  getOneAndDoStuff(@ParsedRequest() req: CrudRequest) {
    return this.base.getOneBase(req);
  }

  @Override()
  createOne(@ParsedRequest() req: CrudRequest, @ParsedBody() dto: NonFixed) {
    return this.base.createOneBase(req, dto);
  }

  @Override()
  createMany(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: CreateManyDto<NonFixed>,
  ) {
    return this.base.createManyBase(req, dto);
  }

  @Override('updateOneBase')
  coolFunction(@ParsedRequest() req: CrudRequest, @ParsedBody() dto: NonFixed) {
    return this.base.updateOneBase(req, dto);
  }

  @Override('replaceOneBase')
  awesomePUT(@ParsedRequest() req: CrudRequest, @ParsedBody() dto: NonFixed) {
    return this.base.replaceOneBase(req, dto);
  }

  @Override()
  async deleteOne(@ParsedRequest() req: CrudRequest) {
    return this.base.deleteOneBase(req);
  }
}
