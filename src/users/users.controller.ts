import { User } from './entities/user.entity';
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@rewiko/crud';
import { UsersService } from './users.service';

@Crud({
  model: {
    type: User,
  },
  query: {
    exclude: ['password'],
    join: {
      roles: {
        eager: true,
        allow: ['name'],
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
}
