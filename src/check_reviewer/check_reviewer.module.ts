import { Module } from '@nestjs/common';
import { CheckReviewerService } from './check_reviewer.service';
import { CheckReviewerController } from './check_reviewer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CheckReviewer } from './entities/check_reviewer.entity';

@Module({
  controllers: [CheckReviewerController],
  providers: [CheckReviewerService],
  imports: [TypeOrmModule.forFeature([CheckReviewer])],
  exports: [CheckReviewerService],
})
export class CheckReviewerModule {}
