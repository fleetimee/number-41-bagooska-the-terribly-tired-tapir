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
      host: 'ec2-44-198-82-71.compute-1.amazonaws.com',
      port: 5432,
      username: 'suawytuncesjej',
      password:
        '0d1f42a603a943a8292370e22b08a2d29b1e77bd625715c1002ecf835099279c',
      database: 'db2qsjphkj009j',
      autoLoadEntities: true,
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
  ],
})
export class AppModule {}
