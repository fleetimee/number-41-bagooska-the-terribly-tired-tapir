import { Debitur } from './debitur.model';
import { DebitursService } from './../debiturs/debiturs.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('debiturs')
export class DebitursController {
  constructor(private debitursService: DebitursService) {}

  /* A function that will be called when the user access the route /debiturs */
  @Get()
  getAllDebiturs() {
    return this.debitursService.getallDebiturs();
  }

  /* A function that will be called when the user access the route /debiturs/create */
  @Post()
  createDebitur(
    @Body('nama_debitur') nama_debitur,
    @Body('alamat') alamat,
  ): Debitur {
    return this.debitursService.createDebitur(nama_debitur, alamat);
  }
}
