import { Module } from '@nestjs/common';
import { FirebaseRemoteService } from './firebase-remote.service';
import { FirebaseRemoteController } from './firebase-remote.controller';

@Module({
  controllers: [FirebaseRemoteController],
  providers: [FirebaseRemoteService]
})
export class FirebaseRemoteModule {}
