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
  NonFixed: () => NonFixed
});
var import_submission = __toModule(require("./../../submissions/entities/submission.entity"));
var import_user = __toModule(require("src/users/entities/user.entity"));
var import_debitur = __toModule(require("./../../debiturs/entities/debitur.entity"));
var import_jenis_pengajuan = __toModule(require("src/fixeds/enum/jenis-pengajuan.enum"));
var import_jenis_penggunaan = __toModule(require("src/fixeds/enum/jenis-penggunaan.enum"));
var import_typeorm = __toModule(require("typeorm"));
let NonFixed = class {
};
__decorateClass([
  (0, import_typeorm.PrimaryGeneratedColumn)()
], NonFixed.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm.Column)({
    type: "enum",
    enum: import_jenis_pengajuan.JenisPengajuan,
    default: import_jenis_pengajuan.JenisPengajuan.BARU
  })
], NonFixed.prototype, "jenis_pengajuan", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], NonFixed.prototype, "plafon_fasilitas", 2);
__decorateClass([
  (0, import_typeorm.Column)({
    type: "enum",
    enum: import_jenis_penggunaan.JenisPenggunaan
  })
], NonFixed.prototype, "jenis_penggunaan", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], NonFixed.prototype, "tujuan_penggunaan", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], NonFixed.prototype, "jangka_waktu", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint", { nullable: true })
], NonFixed.prototype, "no_rekening", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint", { nullable: true })
], NonFixed.prototype, "plafon_kredit", 2);
__decorateClass([
  (0, import_typeorm.Column)("date", { nullable: true })
], NonFixed.prototype, "tanggal_mulai_kredit", 2);
__decorateClass([
  (0, import_typeorm.Column)({ nullable: true })
], NonFixed.prototype, "jangka_waktu_kredit", 2);
__decorateClass([
  (0, import_typeorm.Column)({ default: false })
], NonFixed.prototype, "is_approved", 2);
__decorateClass([
  (0, import_typeorm.ManyToOne)(() => import_debitur.Debitur, (debitur) => debitur.nonfixed, {
    cascade: true,
    onDelete: "CASCADE"
  })
], NonFixed.prototype, "debitur", 2);
__decorateClass([
  (0, import_typeorm.ManyToOne)(() => import_user.User, (user) => user, { nullable: false })
], NonFixed.prototype, "createdBy", 2);
__decorateClass([
  (0, import_typeorm.OneToOne)(() => import_user.User, (user) => user, { nullable: true }),
  (0, import_typeorm.JoinColumn)()
], NonFixed.prototype, "updatedBy", 2);
__decorateClass([
  (0, import_typeorm.ManyToMany)(() => import_submission.Submission, (submission) => submission.nonfixed)
], NonFixed.prototype, "submission", 2);
NonFixed = __decorateClass([
  (0, import_typeorm.Entity)()
], NonFixed);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  NonFixed
});
//# sourceMappingURL=non-fixed.entity.js.map
