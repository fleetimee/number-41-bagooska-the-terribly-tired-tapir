import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { CrudConfigService } from "@rewiko/crud";

/* A configuration for the Crud module. */
CrudConfigService.load({
  // query: {
  //   alwaysPaginate: true,
  // },
});
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

/* For hot reloading. */
declare const module: any;

async function bootstrap() {
  /* It creates an instance of the NestJS application. */
  const app = await NestFactory.create(AppModule);

  /* It enables CORS. */
  app.enableCors();

  /* For hot reloading. */
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

  /* Creating a swagger documentation. */
  const config = new DocumentBuilder()
    .setTitle("Analisis Kredit Mikro")
    .setDescription("API Documentation untuk Analisis Kredit Mikro")
    .setVersion("1.0")

    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  /* A global pipe that validates the data that is passed to the controller. */
  app.useGlobalPipes(new ValidationPipe());
  /* Listening to the port 3000. */
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
