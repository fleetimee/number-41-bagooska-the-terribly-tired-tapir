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
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@Controller('debiturs')
@ApiTags('Debiturs')
export class DebitursController {
  constructor(private debitursService: DebitursService) {}

  @ApiOperation({ summary: 'Get debitur with params' })
  @Get()
  getDebiturs(
    /* A decorator that is used to get the query parameters from the URL. */
    @Query() filterDebitur: GetDebiturFiltersDto,
  ): Promise<Debitur[]> {
    /* Calling the getDebiturs function in the debiturs.service.ts file. */
    return this.debitursService.getDebiturs(filterDebitur);
  }

  @ApiOperation({ summary: 'Get debitur by id' })
  @Get('/:id')
  @ApiParam({
    name: 'id',
    description: 'The ID of the debitur',
    required: true,
  })
  getDebiturById(@Param('id') id: string): Promise<Debitur> {
    /* Calling the getDebiturById function in the debiturs.service.ts file. */
    return this.debitursService.getDebiturById(id);
  }

  @ApiOperation({ summary: 'Create new debitur' })
  @Post()
  createDebitur(@Body() createDebiturDto: CreateDebiturDto): Promise<Debitur> {
    /* Calling the createDebitur function in the debiturs.service.ts file. */
    return this.debitursService.createDebitur(createDebiturDto);
  }

  @ApiOperation({ summary: 'Delete debitur' })
  @Delete('/:id')
  deleteDebitur(@Param('id') id: string): Promise<void> {
    /* Calling the deleteDebitur function in the debiturs.service.ts file. */
    return this.debitursService.deleteDebitur(id);
  }

  @ApiOperation({ summary: 'Update status debitur' })
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
