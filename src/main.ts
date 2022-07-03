import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /* A global pipe that validates the data that is passed to the controller. */
  app.useGlobalPipes(new ValidationPipe());
  /* Listening to the port 3000. */
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
