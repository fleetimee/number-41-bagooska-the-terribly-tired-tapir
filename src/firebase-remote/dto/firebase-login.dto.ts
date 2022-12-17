import { IsBoolean } from 'class-validator';

export class FirebaseRemoteDto {
  @IsBoolean()
  admin: boolean;

  @IsBoolean()
  analis: boolean;

  @IsBoolean()
  reviewer: boolean;

  @IsBoolean()
  pengutus: boolean;
}
