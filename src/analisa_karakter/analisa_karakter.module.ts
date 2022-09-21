import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AnalisaKarakterService } from './analisa_karakter.service';
import { AnalisaKarakterController } from './analisa_karakter.controller';
import { AnalisaKarakter } from './entities/analisa_karakter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AnalisaKarakter])],
  controllers: [AnalisaKarakterController],
  exports: [AnalisaKarakterService],
  providers: [AnalisaKarakterService],
})
export class AnalisaKarakterModule {}
