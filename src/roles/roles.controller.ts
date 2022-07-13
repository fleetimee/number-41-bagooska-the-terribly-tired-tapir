import { Crud, CrudController } from '@rewiko/crud';
import { Controller } from '@nestjs/common';
import { RolesService } from './roles.service';
import { Role } from './entities/role.entity';

@Crud({
  model: {
    type: Role,
  },
  query: {
    join: {
      user: {
        eager: true,
        exclude: ['password'],
      },
      'user.role': {
        eager: false,
      },
    },
  },
  routes: {},
})
@Controller('roles')
export class RolesController implements CrudController<Role> {
  constructor(public service: RolesService) {}
}
