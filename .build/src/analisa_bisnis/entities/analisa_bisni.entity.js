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
  AnalisaBisni: () => AnalisaBisni
});
var import_debitur = __toModule(require("src/debiturs/entities/debitur.entity"));
var import_typeorm = __toModule(require("typeorm"));
let AnalisaBisni = class {
};
__decorateClass([
  (0, import_typeorm.PrimaryGeneratedColumn)()
], AnalisaBisni.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm.Column)("int")
], AnalisaBisni.prototype, "nilai_omzet", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], AnalisaBisni.prototype, "keterangan_omzet", 2);
__decorateClass([
  (0, import_typeorm.Column)("int")
], AnalisaBisni.prototype, "nilai_harga_bersaing", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], AnalisaBisni.prototype, "keterangan_harga_bersaing", 2);
__decorateClass([
  (0, import_typeorm.Column)("int")
], AnalisaBisni.prototype, "nilai_persaingan", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], AnalisaBisni.prototype, "keterangan_persaingan", 2);
__decorateClass([
  (0, import_typeorm.Column)("int")
], AnalisaBisni.prototype, "nilai_lokasi_usaha", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], AnalisaBisni.prototype, "keterangan_lokasi_usaha", 2);
__decorateClass([
  (0, import_typeorm.Column)("int")
], AnalisaBisni.prototype, "nilai_produktivitas", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], AnalisaBisni.prototype, "keterangan_produktivitas", 2);
__decorateClass([
  (0, import_typeorm.Column)("int")
], AnalisaBisni.prototype, "nilai_kualitas", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], AnalisaBisni.prototype, "keterangan_kualitas", 2);
__decorateClass([
  (0, import_typeorm.Column)("text")
], AnalisaBisni.prototype, "deskripsi_bisnis", 2);
__decorateClass([
  (0, import_typeorm.Column)("int")
], AnalisaBisni.prototype, "hasil_crr_bisnis", 2);
__decorateClass([
  (0, import_typeorm.OneToOne)(() => import_debitur.Debitur, (debitur) => debitur, {
    onDelete: "CASCADE",
    cascade: true
  }),
  (0, import_typeorm.JoinColumn)()
], AnalisaBisni.prototype, "debitur", 2);
AnalisaBisni = __decorateClass([
  (0, import_typeorm.Entity)()
], AnalisaBisni);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AnalisaBisni
});
//# sourceMappingURL=analisa_bisni.entity.js.map
