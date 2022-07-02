import { GetDebiturFiltersDto } from './dto/get-debiturs-filter.dto';
import { CreateDebiturDto } from './dto/create-debitur.dto';
import { Debitur, DebiturStatus } from './debitur.model';
import { DebitursService } from './../debiturs/debiturs.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('debiturs')
export class DebitursController {
  constructor(private debitursService: DebitursService) {}

  /* A function that will be called when the user access the route /debiturs */
  @Get()
  getDebiturs(@Query() filterDto: GetDebiturFiltersDto): Debitur[] {
    if (Object.keys(filterDto).length) {
      return this.debitursService.getDebiturWithFilters(filterDto);
    } else {
      return this.debitursService.getallDebiturs();
    }
  }

  /* A function that will be called when the user access the route /debiturs/:id. */
  @Get('/:id')
  getDebiturById(@Param('id') id: string): Debitur {
    return this.debitursService.getDebiturById(id);
  }

  /* A function that will be called when the user access the route /debiturs/:id. */
  @Delete('/:id')
  deleteDebitur(@Param('id') id: string): void {
    this.debitursService.deleteDebitur(id);
  }

  /* A function that will be called when the user access the route /debiturs/createDebitur */
  @Post()
  createDebitur(@Body() createDebiturDto: CreateDebiturDto): Debitur {
    return this.debitursService.createDebitur(createDebiturDto);
  }

  /* A function that will be called when the user access the route /debiturs/:id/status. */
  @Patch('/:id/status')
  updateDebiturStatus(
    @Param('id') id: string,
    @Body('status') status: DebiturStatus,
  ): Debitur {
    return this.debitursService.updateDebiturStatus(id, status);
  }
}
