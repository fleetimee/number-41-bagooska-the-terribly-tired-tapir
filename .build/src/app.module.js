var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
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
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
__export(exports, {
  AppModule: () => AppModule
});
var import_common = __toModule(require("@nestjs/common"));
var import_typeorm = __toModule(require("@nestjs/typeorm"));
var import_fixeds = __toModule(require("./fixeds/fixeds.module"));
var import_non_fixeds = __toModule(require("./non-fixeds/non-fixeds.module"));
var import_debiturs = __toModule(require("./debiturs/debiturs.module"));
var import_users = __toModule(require("./users/users.module"));
var import_roles = __toModule(require("./roles/roles.module"));
var import_submissions = __toModule(require("./submissions/submissions.module"));
var import_uploads = __toModule(require("./uploads/uploads.module"));
var import_collaterals = __toModule(require("./collaterals/collaterals.module"));
var import_analysis = __toModule(require("./business_analysis/analysis.module"));
var import_character_analysis = __toModule(require("./character_analysis/character_analysis.module"));
var import_app = __toModule(require("./app.service"));
var import_app2 = __toModule(require("./app.controller"));
var import_input_keuangan = __toModule(require("./input_keuangan/input_keuangan.module"));
var import_analisa_keuangan = __toModule(require("./analisa_keuangan/analisa_keuangan.module"));
var import_input_neraca = __toModule(require("./input_neraca/input_neraca.module"));
var import_input_rugi_laba = __toModule(require("./input_rugi_laba/input_rugi_laba.module"));
var import_analisa_bisnis = __toModule(require("./analisa_bisnis/analisa_bisnis.module"));
var import_analisa_karakter = __toModule(require("./analisa_karakter/analisa_karakter.module"));
var import_analisa_jenis_usaha = __toModule(require("./analisa_jenis_usaha/analisa_jenis_usaha.module"));
let AppModule = class {
};
AppModule = __decorateClass([
  (0, import_common.Module)({
    imports: [
      import_fixeds.FixedsModule,
      import_non_fixeds.NonFixedsModule,
      import_debiturs.DebitursModule,
      import_typeorm.TypeOrmModule.forRoot({
        type: "postgres",
        host: "tiny.db.elephantsql.com",
        port: 5432,
        username: "tldlahwl",
        password: "R2LwSynWBu6jY7u_hC4b_A04Gf1s5Z5a",
        database: "tldlahwl",
        autoLoadEntities: true,
        synchronize: true,
        logging: true
      }),
      import_users.UsersModule,
      import_roles.RolesModule,
      import_submissions.SubmissionsModule,
      import_uploads.UploadsModule,
      import_collaterals.CollateralsModule,
      import_analysis.AnalysisModule,
      import_character_analysis.CharacterAnalysisModule,
      import_input_keuangan.InputKeuanganModule,
      import_analisa_keuangan.AnalisaKeuanganModule,
      import_input_neraca.InputNeracaModule,
      import_input_rugi_laba.InputRugiLabaModule,
      import_analisa_bisnis.AnalisaBisnisModule,
      import_analisa_karakter.AnalisaKarakterModule,
      import_analisa_jenis_usaha.AnalisaJenisUsahaModule
    ],
    controllers: [import_app2.AppController],
    providers: [import_app.AppService]
  })
], AppModule);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppModule
});
//# sourceMappingURL=app.module.js.map
