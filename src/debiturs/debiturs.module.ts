import { DebitursRepository } from './debiturs.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { DebitursController } from './debiturs.controller';
import { DebitursService } from './debiturs.service';

@Module({
  imports: [TypeOrmModule.forFeature([DebitursRepository])],
  controllers: [DebitursController],
  providers: [DebitursService],
})
export class DebitursModule {}
