import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthLoginDto } from './dto/auth-login.dto';
import { FirebaseAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body() authLoginDto: AuthLoginDto) {
    try {
      return this.authService.login(authLoginDto);
    } catch (error) {
      return error;
    }
  }

  @Post('/verify')
  async verify(@Body('token') token: string) {
    return this.authService.verify(token);
  }

  @UseGuards(FirebaseAuthGuard)
  @Get()
  async test() {
    return 'Success!';
  }
}
