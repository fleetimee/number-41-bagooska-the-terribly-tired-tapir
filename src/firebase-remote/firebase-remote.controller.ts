import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Delete, Put } from '@nestjs/common/decorators';
import { FirebaseRemoteDto } from './dto/firebase-login.dto';
import { FirebaseFormDto } from './dto/firebase-remote-user.dto';
import { FirebaseRemoteService } from './firebase-remote.service';

@Controller('firebase-remote')
export class FirebaseRemoteController {
  constructor(private readonly firebaseRemoteService: FirebaseRemoteService) {}

  @Get()
  findAll() {
    return this.firebaseRemoteService.findAll();
  }

  @Put(':uid')
  updateUser(
    @Param('uid') uid: string,
    @Body() firebaseFormDto: FirebaseFormDto,
  ) {
    return this.firebaseRemoteService.updateUsers(uid, firebaseFormDto);
  }

  @Delete(':uid')
  deleteUser(@Param('uid') uid: string) {
    return this.firebaseRemoteService.deleteUser(uid);
  }

  @Post(':uid/set-user-claims')
  setUserClaims(
    @Param('uid') uid: string,
    @Body() firebaseRemoteDto: FirebaseRemoteDto,
  ) {
    return this.firebaseRemoteService.setUserClaims(
      uid,
      firebaseRemoteDto.admin,
      firebaseRemoteDto.analis,
      firebaseRemoteDto.reviewer,
      firebaseRemoteDto.pengutus,
    );
  }
}
