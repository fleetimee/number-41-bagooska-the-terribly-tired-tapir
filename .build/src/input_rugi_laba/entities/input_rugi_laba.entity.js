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
  InputRugiLaba: () => InputRugiLaba
});
var import_debitur = __toModule(require("src/debiturs/entities/debitur.entity"));
var import_input_neraca = __toModule(require("./../../input_neraca/entities/input_neraca.entity"));
var import_typeorm = __toModule(require("typeorm"));
let InputRugiLaba = class {
};
__decorateClass([
  (0, import_typeorm.PrimaryGeneratedColumn)()
], InputRugiLaba.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputRugiLaba.prototype, "kas", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputRugiLaba.prototype, "bank", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputRugiLaba.prototype, "piutang", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputRugiLaba.prototype, "persediaan", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputRugiLaba.prototype, "jumlah_aktiva_lancar", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint", {
    nullable: true
  })
], InputRugiLaba.prototype, "peralatan", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint", {
    nullable: true
  })
], InputRugiLaba.prototype, "kendaraan", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint", {
    nullable: true
  })
], InputRugiLaba.prototype, "tanah_bangunan", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputRugiLaba.prototype, "jumlah_aktiva_tetap", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputRugiLaba.prototype, "sum_aktiva", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputRugiLaba.prototype, "hutang_usaha", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputRugiLaba.prototype, "hutang_bank", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputRugiLaba.prototype, "hutang_lainnya", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputRugiLaba.prototype, "jumlah_hutang", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputRugiLaba.prototype, "jumlah_modal", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputRugiLaba.prototype, "sum_pasiva", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputRugiLaba.prototype, "omzet", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputRugiLaba.prototype, "harga_pokok", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputRugiLaba.prototype, "laba_kotor", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputRugiLaba.prototype, "biaya_tenaga_kerja", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputRugiLaba.prototype, "biaya_operasional", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputRugiLaba.prototype, "biaya_lainnya", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputRugiLaba.prototype, "total_biaya", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputRugiLaba.prototype, "laba_sebelum_pajak", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputRugiLaba.prototype, "perkiraan_pajak", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputRugiLaba.prototype, "laba_setelah_pajak", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputRugiLaba.prototype, "penghasilan", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputRugiLaba.prototype, "biaya_hidup", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputRugiLaba.prototype, "sisa_penghasilan", 2);
__decorateClass([
  (0, import_typeorm.OneToOne)(() => import_input_neraca.InputNeraca, (inputNeraca) => inputNeraca, {
    cascade: true,
    onDelete: "CASCADE"
  }),
  (0, import_typeorm.JoinColumn)()
], InputRugiLaba.prototype, "neraca", 2);
__decorateClass([
  (0, import_typeorm.OneToOne)(() => import_debitur.Debitur, (debitur) => debitur, {
    cascade: true,
    onDelete: "CASCADE"
  }),
  (0, import_typeorm.JoinColumn)()
], InputRugiLaba.prototype, "debitur", 2);
InputRugiLaba = __decorateClass([
  (0, import_typeorm.Entity)()
], InputRugiLaba);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  InputRugiLaba
});
//# sourceMappingURL=input_rugi_laba.entity.js.map
