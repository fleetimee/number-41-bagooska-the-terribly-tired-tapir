/* eslint-disable @typescript-eslint/no-var-requires */
import { Module } from '@nestjs/common';
import { DebitursModule } from './debiturs/debiturs.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    DebitursModule,
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'postgres',
    //   password: 'postgres',
    //   database: 'debitur-management',
    //   autoLoadEntities: true,
    //   synchronize: true,
    // }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'debitur-management',
      autoLoadEntities: true,
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
  ],
})
export class AppModule {}
