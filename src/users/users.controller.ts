import { User } from './entities/user.entity';
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@rewiko/crud';
import { UsersService } from './users.service';

@Crud({
  model: {
    type: User,
  },
  params: {
    // id: {
    //   field: 'id',
    //   disabled: true,
    // },
    id: {
      field: 'id',
      type: 'string',
      primary: true,
    },
  },
  query: {
    exclude: ['password'],
    join: {
      roles: {
        eager: true,
        allow: ['name'],
      },
      debiturs: {
        eager: true,
      },
      pengajuan: {
        eager: true,
      },
      createdBy: {
        eager: true,
        exclude: ['password', 'createdAt'],
      },
      'createdBy.user': {
        eager: true,
        required: true,
        exclude: ['password'],
      },
      updatedBy: {
        eager: true,
        exclude: ['password', 'createdAt'],
      },
      'updatedBy.user': {
        eager: true,
        required: true,
        exclude: ['password'],
      },
    },
  },
})
@Controller('users')
export class UsersController implements CrudController<User> {
  constructor(public service: UsersService) {}

  get base(): CrudController<User> {
    return this;
  }

  // @Override()
  // async createOne(@ParsedRequest() req: CrudRequest, @ParsedBody() dto: User) {
  //   const user = await this.service.createUser(dto);
  //   dto.uid = user.uid;
  //   return await this.base.createOneBase(req, user);
  // }
}
