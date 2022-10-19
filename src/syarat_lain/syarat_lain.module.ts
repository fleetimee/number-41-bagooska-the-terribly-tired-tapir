import { SyaratLain } from './entities/syarat_lain.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { SyaratLainService } from './syarat_lain.service';
import { SyaratLainController } from './syarat_lain.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SyaratLain])],
  controllers: [SyaratLainController],
  providers: [SyaratLainService],
  exports: [SyaratLainService],
})
export class SyaratLainModule {}
