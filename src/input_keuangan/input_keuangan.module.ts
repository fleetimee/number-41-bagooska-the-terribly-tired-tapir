import { Module } from '@nestjs/common';
import { InputKeuanganService } from './input_keuangan.service';
import { InputKeuanganController } from './input_keuangan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InputKeuangan } from './entities/input_keuangan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InputKeuangan])],
  controllers: [InputKeuanganController],
  exports: [InputKeuanganService],
  providers: [InputKeuanganService],
})
export class InputKeuanganModule {}
