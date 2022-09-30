import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DebitursModule } from './debiturs/debiturs.module';

// For Deploying to Heroku
// import { parse } from 'pg-connection-string';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';

import { UploadsModule } from './uploads/uploads.module';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { InputKeuanganModule } from './input_keuangan/input_keuangan.module';
import { AnalisaKeuanganModule } from './analisa_keuangan/analisa_keuangan.module';
import { InputNeracaModule } from './input_neraca/input_neraca.module';
import { InputRugiLabaModule } from './input_rugi_laba/input_rugi_laba.module';
import { AnalisaBisnisModule } from './analisa_bisnis/analisa_bisnis.module';
import { AnalisaKarakterModule } from './analisa_karakter/analisa_karakter.module';
import { AnalisaJenisUsahaModule } from './analisa_jenis_usaha/analisa_jenis_usaha.module';
import { AgunanModule } from './agunan/agunan.module';
import { AgunanTanahModule } from './agunan_tanah/agunan_tanah.module';
import { AgunanKendaraanModule } from './agunan_kendaraan/agunan_kendaraan.module';
import { AgunanKiosModule } from './agunan_kios/agunan_kios.module';

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
    DebitursModule,
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'tiny.db.elephantsql.com',
    //   port: 5432,
    //   username: 'tldlahwl',
    //   password: 'R2LwSynWBu6jY7u_hC4b_A04Gf1s5Z5a',
    //   database: 'tldlahwl',
    //   autoLoadEntities: true,
    //   synchronize: true,
    //   logging: true,
    // }),
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
    UploadsModule,
    InputKeuanganModule,
    AnalisaKeuanganModule,
    InputNeracaModule,
    InputRugiLabaModule,
    AnalisaBisnisModule,
    AnalisaKarakterModule,
    AnalisaJenisUsahaModule,
    AgunanModule,
    AgunanTanahModule,
    AgunanKendaraanModule,
    AgunanKiosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
