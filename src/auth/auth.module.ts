import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { FirebaseAuthStrategy } from './firebase-auth.strategy';

@Module({
  controllers: [AuthController],
  imports: [
    UsersModule,
    PassportModule,
    // JwtModule.registerAsync({
    //   imports: [ConfigModule],
    //   useFactory: async () => ({
    //     secret: process.env.JWT_SECRET,
    //   }),
    //   inject: [ConfigService],
    // }),
  ],
  providers: [FirebaseAuthStrategy, AuthService],
})
export class AuthModule {}
