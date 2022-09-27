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
  Fixed: () => Fixed
});
var import_typeorm = __toModule(require("typeorm"));
var import_debitur = __toModule(require("src/debiturs/entities/debitur.entity"));
var import_user = __toModule(require("src/users/entities/user.entity"));
var import_submission = __toModule(require("src/submissions/entities/submission.entity"));
let Fixed = class {
};
__decorateClass([
  (0, import_typeorm.PrimaryGeneratedColumn)()
], Fixed.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], Fixed.prototype, "jenis_pengajuan", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], Fixed.prototype, "plafon_fasilitas", 2);
__decorateClass([
  (0, import_typeorm.Column)({ nullable: true })
], Fixed.prototype, "jenis_penggunaan", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], Fixed.prototype, "tujuan_penggunaan", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], Fixed.prototype, "jangka_waktu", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], Fixed.prototype, "penghasilan_pemohon", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], Fixed.prototype, "potongan_gaji", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], Fixed.prototype, "sisa_penghasilan", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], Fixed.prototype, "nama_pejabat_penanggung_jawab", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], Fixed.prototype, "jabatan_pejabat_penanggung_jawab", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], Fixed.prototype, "nama_pejabat_pemotong_gaji", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], Fixed.prototype, "jabatan_pejabat_pemotong_gaji", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint", { nullable: true })
], Fixed.prototype, "no_rekening", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint", { nullable: true })
], Fixed.prototype, "plafon_kredit", 2);
__decorateClass([
  (0, import_typeorm.Column)("date", { nullable: true })
], Fixed.prototype, "tanggal_mulai_kredit", 2);
__decorateClass([
  (0, import_typeorm.Column)({ nullable: true })
], Fixed.prototype, "jangka_waktu_kredit", 2);
__decorateClass([
  (0, import_typeorm.Column)({ default: false })
], Fixed.prototype, "is_approved", 2);
__decorateClass([
  (0, import_typeorm.ManyToOne)(() => import_debitur.Debitur, (debitur) => debitur.fixed, {
    onDelete: "CASCADE"
  })
], Fixed.prototype, "debitur", 2);
__decorateClass([
  (0, import_typeorm.ManyToOne)(() => import_user.User, (user) => user, {
    nullable: false,
    onDelete: "CASCADE"
  })
], Fixed.prototype, "createdBy", 2);
__decorateClass([
  (0, import_typeorm.OneToOne)(() => import_user.User, (user) => user, { nullable: true }),
  (0, import_typeorm.JoinColumn)()
], Fixed.prototype, "updatedBy", 2);
__decorateClass([
  (0, import_typeorm.ManyToMany)(() => import_submission.Submission, (submission) => submission.fixed)
], Fixed.prototype, "submission", 2);
Fixed = __decorateClass([
  (0, import_typeorm.Entity)()
], Fixed);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Fixed
});
//# sourceMappingURL=fixed.entity.js.map
