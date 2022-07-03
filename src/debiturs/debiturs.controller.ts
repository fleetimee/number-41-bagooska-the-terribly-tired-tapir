import { GetDebiturFiltersDto } from './dto/get-debiturs-filter.dto';
import { UpdateDebiturStatusDto } from './dto/update-debiturs-status.dto';
import { Debitur } from './debitur.entity';
import { CreateDebiturDto } from './dto/create-debitur.dto';
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

  @Get()
  getDebiturs(
    /* A decorator that is used to get the query parameters from the URL. */
    @Query() filterDebitur: GetDebiturFiltersDto,
  ): Promise<Debitur[]> {
    /* Calling the getDebiturs function in the debiturs.service.ts file. */
    return this.debitursService.getDebiturs(filterDebitur);
  }

  @Get('/:id')
  getDebiturById(@Param('id') id: string): Promise<Debitur> {
    /* Calling the getDebiturById function in the debiturs.service.ts file. */
    return this.debitursService.getDebiturById(id);
  }

  @Post()
  createDebitur(@Body() createDebiturDto: CreateDebiturDto): Promise<Debitur> {
    /* Calling the createDebitur function in the debiturs.service.ts file. */
    return this.debitursService.createDebitur(createDebiturDto);
  }

  @Delete('/:id')
  deleteDebitur(@Param('id') id: string): Promise<void> {
    /* Calling the deleteDebitur function in the debiturs.service.ts file. */
    return this.debitursService.deleteDebitur(id);
  }

  @Patch('/:id/status')
  /* A function that is used to update the status of the debitur. */
  updateDebiturStatus(
    @Param('id') id: string,
    @Body() updateDebiturStatusDto: UpdateDebiturStatusDto,
  ): Promise<Debitur> {
    /* Destructuring the status from the updateDebiturStatusDto. */
    const { status } = updateDebiturStatusDto;
    return this.debitursService.updateDebiturStatus(id, status);
  }
}
