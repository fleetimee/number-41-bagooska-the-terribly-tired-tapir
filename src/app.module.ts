import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FixedsModule } from './fixeds/fixeds.module';
import { NonFixedsModule } from './non-fixeds/non-fixeds.module';
import { DebitursModule } from './debiturs/debiturs.module';
import { parse } from 'pg-connection-string';

const config = parse(process.env.DATABASE_URL);

@Module({
  imports: [
    FixedsModule,
    NonFixedsModule,
    DebitursModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: config.host,
      port: 5432,
      username: config.user,
      password: config.password,
      database: config.database,
      autoLoadEntities: true,
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
  ],
})
export class AppModule {}
