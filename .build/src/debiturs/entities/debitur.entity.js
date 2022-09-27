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
  Debitur: () => Debitur
});
var import_analisa_jenis_usaha = __toModule(require("./../../analisa_jenis_usaha/entities/analisa_jenis_usaha.entity"));
var import_analisa_karakter = __toModule(require("./../../analisa_karakter/entities/analisa_karakter.entity"));
var import_analisa_bisni = __toModule(require("./../../analisa_bisnis/entities/analisa_bisni.entity"));
var import_analisa_keuangan = __toModule(require("./../../analisa_keuangan/entities/analisa_keuangan.entity"));
var import_input_keuangan = __toModule(require("./../../input_keuangan/entities/input_keuangan.entity"));
var import_input_rugi_laba = __toModule(require("./../../input_rugi_laba/entities/input_rugi_laba.entity"));
var import_input_neraca = __toModule(require("./../../input_neraca/entities/input_neraca.entity"));
var import_fixed = __toModule(require("./../../fixeds/entities/fixed.entity"));
var import_non_fixed = __toModule(require("./../../non-fixeds/entities/non-fixed.entity"));
var import_swagger = __toModule(require("@nestjs/swagger"));
var import_typeorm = __toModule(require("typeorm"));
var import_user = __toModule(require("src/users/entities/user.entity"));
let Debitur = class {
};
__decorateClass([
  (0, import_swagger.ApiProperty)(),
  (0, import_typeorm.PrimaryGeneratedColumn)()
], Debitur.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm.Generated)("uuid"),
  (0, import_typeorm.Column)({ unique: true })
], Debitur.prototype, "no_debitur", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], Debitur.prototype, "peminjam1", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], Debitur.prototype, "ktp1", 2);
__decorateClass([
  (0, import_typeorm.Column)({ nullable: true })
], Debitur.prototype, "peminjam2", 2);
__decorateClass([
  (0, import_typeorm.Column)({ nullable: true })
], Debitur.prototype, "ktp2", 2);
__decorateClass([
  (0, import_typeorm.Column)({ nullable: true })
], Debitur.prototype, "pemilik_agunan_1", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint", { nullable: true })
], Debitur.prototype, "no_ktp1", 2);
__decorateClass([
  (0, import_typeorm.Column)({ nullable: true })
], Debitur.prototype, "pemilik_agunan_2", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint", { nullable: true })
], Debitur.prototype, "no_ktp2", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], Debitur.prototype, "alamat_1", 2);
__decorateClass([
  (0, import_typeorm.Column)({ nullable: true })
], Debitur.prototype, "alamat_2", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], Debitur.prototype, "tempat_lahir", 2);
__decorateClass([
  (0, import_typeorm.Column)("date")
], Debitur.prototype, "tanggal_lahir", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], Debitur.prototype, "umur", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], Debitur.prototype, "status_keluarga", 2);
__decorateClass([
  (0, import_typeorm.Column)("int", { nullable: true })
], Debitur.prototype, "jumlah_tanggungan", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], Debitur.prototype, "lamanya_berusaha", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], Debitur.prototype, "lokasi_usaha", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], Debitur.prototype, "jenis_usaha", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], Debitur.prototype, "bidang_usaha", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], Debitur.prototype, "pendidikan", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], Debitur.prototype, "pekerjaan1", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], Debitur.prototype, "pekerjaan2", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint", { nullable: true })
], Debitur.prototype, "no_skpk", 2);
__decorateClass([
  (0, import_typeorm.Column)("date")
], Debitur.prototype, "tgl_sekarang", 2);
__decorateClass([
  (0, import_typeorm.Column)("text")
], Debitur.prototype, "deskripsi_debitur", 2);
__decorateClass([
  (0, import_typeorm.OneToMany)(() => import_non_fixed.NonFixed, (nonfixed) => nonfixed.debitur, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE"
  })
], Debitur.prototype, "nonfixed", 2);
__decorateClass([
  (0, import_typeorm.OneToMany)(() => import_fixed.Fixed, (fixed) => fixed.debitur, {
    onDelete: "CASCADE"
  })
], Debitur.prototype, "fixed", 2);
__decorateClass([
  (0, import_typeorm.ManyToOne)(() => import_user.User, (user) => user, {
    nullable: true,
    onDelete: "CASCADE"
  })
], Debitur.prototype, "createdBy", 2);
__decorateClass([
  (0, import_typeorm.OneToOne)(() => import_user.User, (user) => user, { nullable: true }),
  (0, import_typeorm.JoinColumn)()
], Debitur.prototype, "updatedBy", 2);
__decorateClass([
  (0, import_typeorm.OneToOne)(() => import_input_neraca.InputNeraca, (inputNeraca) => inputNeraca.debitur, {
    onDelete: "CASCADE"
  })
], Debitur.prototype, "inputNeraca", 2);
__decorateClass([
  (0, import_typeorm.OneToOne)(() => import_input_rugi_laba.InputRugiLaba, (inputRugiLaba) => inputRugiLaba.debitur, {
    onDelete: "CASCADE"
  })
], Debitur.prototype, "inputRugiLaba", 2);
__decorateClass([
  (0, import_typeorm.OneToOne)(() => import_input_keuangan.InputKeuangan, (inputKeuangan) => inputKeuangan.debitur, {
    onDelete: "CASCADE"
  })
], Debitur.prototype, "inputKeuangan", 2);
__decorateClass([
  (0, import_typeorm.OneToOne)(() => import_analisa_keuangan.AnalisaKeuangan, (analisaKeuangan) => analisaKeuangan.debitur, {
    onDelete: "CASCADE"
  })
], Debitur.prototype, "analisaKeuangan", 2);
__decorateClass([
  (0, import_typeorm.OneToOne)(() => import_analisa_bisni.AnalisaBisni, (analisaBisnis) => analisaBisnis.debitur, {
    onDelete: "CASCADE"
  })
], Debitur.prototype, "analisaBisnis", 2);
__decorateClass([
  (0, import_typeorm.OneToOne)(() => import_analisa_karakter.AnalisaKarakter, (analisaKarakter) => analisaKarakter.debitur, {
    onDelete: "CASCADE"
  })
], Debitur.prototype, "analisaKarakter", 2);
__decorateClass([
  (0, import_typeorm.OneToOne)(() => import_analisa_jenis_usaha.AnalisaJenisUsaha, (analisaJenisUsaha) => analisaJenisUsaha.debitur, {
    onDelete: "CASCADE"
  })
], Debitur.prototype, "analisaJenisUsaha", 2);
Debitur = __decorateClass([
  (0, import_typeorm.Entity)()
], Debitur);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Debitur
});
//# sourceMappingURL=debitur.entity.js.map
