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
  AnalisaKarakter: () => AnalisaKarakter
});
var import_debitur = __toModule(require("./../../debiturs/entities/debitur.entity"));
var import_typeorm = __toModule(require("typeorm"));
let AnalisaKarakter = class {
};
__decorateClass([
  (0, import_typeorm.PrimaryGeneratedColumn)()
], AnalisaKarakter.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm.Column)("int")
], AnalisaKarakter.prototype, "nilai_umur", 2);
__decorateClass([
  (0, import_typeorm.Column)("numeric", { precision: 5, scale: 1 })
], AnalisaKarakter.prototype, "score_umur", 2);
__decorateClass([
  (0, import_typeorm.Column)("numeric", { precision: 5, scale: 1 })
], AnalisaKarakter.prototype, "crr_umur", 2);
__decorateClass([
  (0, import_typeorm.Column)("numeric", { precision: 5, scale: 1 })
], AnalisaKarakter.prototype, "score_pendidikan", 2);
__decorateClass([
  (0, import_typeorm.Column)("numeric", { precision: 5, scale: 1 })
], AnalisaKarakter.prototype, "crr_pendidikan", 2);
__decorateClass([
  (0, import_typeorm.Column)("int")
], AnalisaKarakter.prototype, "nilai_lamanya_berusaha", 2);
__decorateClass([
  (0, import_typeorm.Column)("numeric", { precision: 5, scale: 1 })
], AnalisaKarakter.prototype, "score_lamanya_berusaha", 2);
__decorateClass([
  (0, import_typeorm.Column)("numeric", { precision: 5, scale: 1 })
], AnalisaKarakter.prototype, "crr_lamanya_berusaha", 2);
__decorateClass([
  (0, import_typeorm.Column)("numeric", { precision: 5, scale: 1 })
], AnalisaKarakter.prototype, "score_ulet", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], AnalisaKarakter.prototype, "keterangan_ulet", 2);
__decorateClass([
  (0, import_typeorm.Column)("numeric", { precision: 5, scale: 1 })
], AnalisaKarakter.prototype, "crr_ulet", 2);
__decorateClass([
  (0, import_typeorm.Column)("numeric", { precision: 5, scale: 1 })
], AnalisaKarakter.prototype, "score_kaku", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], AnalisaKarakter.prototype, "keterangan_kaku", 2);
__decorateClass([
  (0, import_typeorm.Column)("numeric", { precision: 5, scale: 1 })
], AnalisaKarakter.prototype, "crr_kaku", 2);
__decorateClass([
  (0, import_typeorm.Column)("numeric", { precision: 5, scale: 1 })
], AnalisaKarakter.prototype, "score_kreatif", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], AnalisaKarakter.prototype, "keterangan_kreatif", 2);
__decorateClass([
  (0, import_typeorm.Column)("numeric", { precision: 5, scale: 1 })
], AnalisaKarakter.prototype, "crr_kreatif", 2);
__decorateClass([
  (0, import_typeorm.Column)("numeric", { precision: 5, scale: 1 })
], AnalisaKarakter.prototype, "score_kejujuran", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], AnalisaKarakter.prototype, "keterangan_kejujuran", 2);
__decorateClass([
  (0, import_typeorm.Column)("numeric", { precision: 5, scale: 1 })
], AnalisaKarakter.prototype, "crr_kejujuran", 2);
__decorateClass([
  (0, import_typeorm.Column)("text")
], AnalisaKarakter.prototype, "deskripsi_karakter", 2);
__decorateClass([
  (0, import_typeorm.Column)("numeric", { precision: 5, scale: 1 })
], AnalisaKarakter.prototype, "total_crr_karakter", 2);
__decorateClass([
  (0, import_typeorm.OneToOne)(() => import_debitur.Debitur, (debitur) => debitur, {
    onDelete: "CASCADE",
    cascade: true
  }),
  (0, import_typeorm.JoinColumn)()
], AnalisaKarakter.prototype, "debitur", 2);
AnalisaKarakter = __decorateClass([
  (0, import_typeorm.Entity)()
], AnalisaKarakter);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AnalisaKarakter
});
//# sourceMappingURL=analisa_karakter.entity.js.map
