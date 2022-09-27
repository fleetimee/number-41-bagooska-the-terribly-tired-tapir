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
  InputNeraca: () => InputNeraca
});
var import_input_rugi_laba = __toModule(require("./../../input_rugi_laba/entities/input_rugi_laba.entity"));
var import_debitur = __toModule(require("src/debiturs/entities/debitur.entity"));
var import_typeorm = __toModule(require("typeorm"));
let InputNeraca = class {
};
__decorateClass([
  (0, import_typeorm.PrimaryGeneratedColumn)()
], InputNeraca.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm.Column)("date")
], InputNeraca.prototype, "tanggal_input", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputNeraca.prototype, "kas_on_hand", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputNeraca.prototype, "tabungan", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputNeraca.prototype, "jumlah_kas_dan_tabungan", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputNeraca.prototype, "jumlah_piutang", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputNeraca.prototype, "jumlah_persediaan", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputNeraca.prototype, "hutang_usaha", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputNeraca.prototype, "hutang_bank", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint", {
    nullable: true
  })
], InputNeraca.prototype, "peralatan", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint", {
    nullable: true
  })
], InputNeraca.prototype, "kendaraan", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint", {
    nullable: true
  })
], InputNeraca.prototype, "tanah_bangunan", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], InputNeraca.prototype, "aktiva_tetap", 2);
__decorateClass([
  (0, import_typeorm.OneToOne)(() => import_debitur.Debitur, (debitur) => debitur, {
    cascade: true,
    onDelete: "CASCADE"
  }),
  (0, import_typeorm.JoinColumn)()
], InputNeraca.prototype, "debitur", 2);
__decorateClass([
  (0, import_typeorm.OneToOne)(() => import_input_rugi_laba.InputRugiLaba, (inputRugiLaba) => inputRugiLaba.neraca)
], InputNeraca.prototype, "inputRugiLaba", 2);
InputNeraca = __decorateClass([
  (0, import_typeorm.Entity)()
], InputNeraca);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  InputNeraca
});
//# sourceMappingURL=input_neraca.entity.js.map
