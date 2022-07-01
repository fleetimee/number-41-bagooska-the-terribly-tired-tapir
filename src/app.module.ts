import { Module } from '@nestjs/common';
import { DebitursModule } from './debiturs/debiturs.module';

@Module({
  imports: [DebitursModule],
})
export class AppModule {}
