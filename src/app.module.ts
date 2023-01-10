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
import { AgunanLosModule } from './agunan_los/agunan_los.module';
import { AgunanCashModule } from './agunan_cash/agunan_cash.module';
import { AgunanLainnyaModule } from './agunan_lainnya/agunan_lainnya.module';
import { AgunanPeralatanModule } from './agunan_peralatan/agunan_peralatan.module';
import { AgunanTanahBangunanModule } from './agunan_tanah_bangunan/agunan_tanah_bangunan.module';
import { SyaratLainModule } from './syarat_lain/syarat_lain.module';
import { AnalisaAgunanModule } from './analisa_agunan/analisa_agunan.module';
import { IjinLegitimasiModule } from './ijin_legitimasi/ijin_legitimasi.module';
import { AsuransiModule } from './asuransi/asuransi.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { AuthModule } from './auth/auth.module';

// import firebase admin
import * as admin from 'firebase-admin';
import { FirebaseAdminModule } from '@redredgroup/nestjs-firebase-admin';
import { ConfigModule } from '@nestjs/config';
import { FirebaseRemoteModule } from './firebase-remote/firebase-remote.module';
import { PengajuanModule } from './pengajuan/pengajuan.module';
import { CheckReviewerModule } from './check_reviewer/check_reviewer.module';
import { CheckPengutusModule } from './check_pengutus/check_pengutus.module';

import * as serviceAccount from './serviceAccountKey.json';

// import service account from json file

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
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    AuthModule,
    DebitursModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'tiny.db.elephantsql.com',
      port: 5432,
      username: 'tldlahwl',
      password: 'R2LwSynWBu6jY7u_hC4b_A04Gf1s5Z5a',
      database: 'tldlahwl',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'john.db.elephantsql.com',
    //   port: 5432,
    //   username: 'vrjfixpq',
    //   password: '1h_mjJHhiuKuI8McAq4_-sKJ2Go7QwdU',
    //   database: 'vrjfixpq',
    //   autoLoadEntities: true,
    //   synchronize: true,
    //   // logging: true,
    // }),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'postgres',
    //   password: 'postgres',
    //   database: 'fleetime',
    //   autoLoadEntities: true,
    //   synchronize: true,
    //   logging: true,
    // }),
    FirebaseAdminModule.forRootAsync({
      useFactory: () => ({
        credential: admin.credential.cert(
          serviceAccount as admin.ServiceAccount,
        ),
        databaseURL: process.env.FIREBASE_DATABASE_URL,
        projectId: 'analisis-kredit-mikro',
        serviceAccountId: process.env.FIREBASE_SERVICE_ACCOUNT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      }),
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
    AgunanLosModule,
    AgunanCashModule,
    AgunanLainnyaModule,
    AgunanPeralatanModule,
    AgunanTanahBangunanModule,
    SyaratLainModule,
    AnalisaAgunanModule,
    IjinLegitimasiModule,
    AsuransiModule,
    CloudinaryModule,
    FirebaseAdminModule,
    FirebaseRemoteModule,
    PengajuanModule,
    CheckReviewerModule,
    CheckPengutusModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
