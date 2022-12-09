import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
// import { FirebaseAdminModule } from '@aginix/nestjs-firebase-admin';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, // private readonly firebaseSdk: FirebaseAdminModule,
  ) {}

  // @Get()
  // @UseGuards(AuthGuard('firebase'))
  @Get()
  getUserFirebase() {
    return this.appService.getHello();
  }

  @Get('token')
  getTokenFirebase() {
    return this.appService.getToken();
  }

  // @Get('upload')
  // createUserFirebase() {
  //   return this.appService.createUser();
  // }
}
