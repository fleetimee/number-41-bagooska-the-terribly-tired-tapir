import { Module } from '@nestjs/common';
import { DebitursModule } from './debiturs/debiturs.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    DebitursModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'debitur-management',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
