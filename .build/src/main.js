var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var import_common = __toModule(require("@nestjs/common"));
var import_core = __toModule(require("@nestjs/core"));
var import_crud = __toModule(require("@rewiko/crud"));
var import_app = __toModule(require("./app.module"));
var import_swagger = __toModule(require("@nestjs/swagger"));
var import_class_validator = __toModule(require("class-validator"));
import_crud.CrudConfigService.load({});
async function bootstrap() {
  const app = await import_core.NestFactory.create(import_app.AppModule);
  app.setGlobalPrefix("api/v1");
  app.enableCors();
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  (0, import_class_validator.useContainer)(app.select(import_app.AppModule), { fallbackOnErrors: true });
  const config = new import_swagger.DocumentBuilder().setTitle("Analisis Kredit Mikro").setDescription("API Documentation untuk Analisis Kredit Mikro").setVersion("1.0").build();
  const document = import_swagger.SwaggerModule.createDocument(app, config);
  import_swagger.SwaggerModule.setup("api", app, document);
  app.useGlobalPipes(new import_common.ValidationPipe());
  await app.listen(process.env.PORT || 3e3);
}
bootstrap();
//# sourceMappingURL=main.js.map
