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
  InputKeuangan: () => InputKeuangan
});
var import_debitur = __toModule(require("./../../debiturs/entities/debitur.entity"));
var import_input_rugi_laba = __toModule(require("./../../input_rugi_laba/entities/input_rugi_laba.entity"));
var import_typeorm = __toModule(require("typeorm"));
let InputKeuangan = class {
};
__decorateClass([
  (0, import_typeorm.PrimaryGeneratedColumn)()
], InputKeuangan.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputKeuangan.prototype, "kredit_diusulkan", 2);
__decorateClass([
  (0, import_typeorm.Column)("int")
], InputKeuangan.prototype, "angsuran", 2);
__decorateClass([
  (0, import_typeorm.Column)("int")
], InputKeuangan.prototype, "bunga_per_tahun", 2);
__decorateClass([
  (0, import_typeorm.Column)("int")
], InputKeuangan.prototype, "provisi", 2);
__decorateClass([
  (0, import_typeorm.Column)("character varying")
], InputKeuangan.prototype, "sistem_angsuran", 2);
__decorateClass([
  (0, import_typeorm.Column)("text")
], InputKeuangan.prototype, "digunakan_untuk", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputKeuangan.prototype, "angsuran_rp", 2);
__decorateClass([
  (0, import_typeorm.Column)("int")
], InputKeuangan.prototype, "hpp", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputKeuangan.prototype, "penjualan_kini", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputKeuangan.prototype, "biaya_bahan_kini", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputKeuangan.prototype, "biaya_operasional_kini", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputKeuangan.prototype, "biaya_upah_kini", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputKeuangan.prototype, "biaya_hidup_kini", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputKeuangan.prototype, "penjualan_asumsi", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputKeuangan.prototype, "biaya_bahan_asumsi", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputKeuangan.prototype, "biaya_operasional_asumsi", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputKeuangan.prototype, "biaya_upah_asumsi", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputKeuangan.prototype, "biaya_hidup_asumsi", 2);
__decorateClass([
  (0, import_typeorm.Column)("int")
], InputKeuangan.prototype, "trade_cycle", 2);
__decorateClass([
  (0, import_typeorm.OneToOne)(() => import_input_rugi_laba.InputRugiLaba, (inputRugiLaba) => inputRugiLaba, {
    cascade: true,
    onDelete: "CASCADE"
  }),
  (0, import_typeorm.JoinColumn)()
], InputKeuangan.prototype, "rugilaba", 2);
__decorateClass([
  (0, import_typeorm.OneToOne)(() => import_debitur.Debitur, (debitur) => debitur, {
    cascade: true,
    onDelete: "CASCADE"
  }),
  (0, import_typeorm.JoinColumn)()
], InputKeuangan.prototype, "debitur", 2);
InputKeuangan = __decorateClass([
  (0, import_typeorm.Entity)()
], InputKeuangan);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  InputKeuangan
});
//# sourceMappingURL=input_keuangan.entity.js.map
