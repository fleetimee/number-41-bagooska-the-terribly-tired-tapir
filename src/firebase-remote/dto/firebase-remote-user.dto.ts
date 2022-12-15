import { IsBoolean, IsEmail } from 'class-validator';

export class FirebaseFormDto {
  @IsEmail()
  email: string;

  phoneNumber: string;

  @IsBoolean()
  emailVerified: boolean;

  displayName: string;

  photoURL: string;

  @IsBoolean()
  disabled: boolean;

  password: string;
}
