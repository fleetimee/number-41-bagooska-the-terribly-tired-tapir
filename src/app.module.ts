import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FixedsModule } from './fixeds/fixeds.module';
import { NonFixedsModule } from './non-fixeds/non-fixeds.module';
import { DebitursModule } from './debiturs/debiturs.module';

// For Deploying to Heroku
// import { parse } from 'pg-connection-string';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { SubmissionsModule } from './submissions/submissions.module';
import { UploadsModule } from './uploads/uploads.module';
import { CollateralsModule } from './collaterals/collaterals.module';
import { AnalysisModule } from './business_analysis/analysis.module';
import { CharacterAnalysisModule } from './character_analysis/character_analysis.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { InputKeuanganModule } from './input_keuangan/input_keuangan.module';
import { AnalisaKeuanganModule } from './analisa_keuangan/analisa_keuangan.module';

// const config = parse(process.env.DATABASE_URL);
// TypeOrmModule.forRoot({
//       type: 'postgres',
//       host: config.host,
//       port: 5432,
//       username: config.user,
//       password: config.password,
//       database: config.database,
//       autoLoadEntities: true,
//       synchronize: true,
//       ssl: {
//         rejectUnauthorized: false,
//       },
//     }),

@Module({
  imports: [
    FixedsModule,
    NonFixedsModule,
    DebitursModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'webservice',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    UsersModule,
    RolesModule,
    SubmissionsModule,
    UploadsModule,
    CollateralsModule,
    AnalysisModule,
    CharacterAnalysisModule,
    InputKeuanganModule,
    AnalisaKeuanganModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
