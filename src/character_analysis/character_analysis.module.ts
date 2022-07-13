import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CharacterAnalysisService } from './character_analysis.service';
import { CharacterAnalysisController } from './character_analysis.controller';
import { CharacterAnalysis } from './entities/character_analysis.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CharacterAnalysis])],
  controllers: [CharacterAnalysisController],
  providers: [CharacterAnalysisService],
})
export class CharacterAnalysisModule {}
