import { Debitur } from './entities/debitur.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { DebitursService } from './debiturs.service';
import { DebitursController } from './debiturs.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Debitur])],
  exports: [DebitursService],
  controllers: [DebitursController],
  providers: [DebitursService],
})
export class DebitursModule {}
