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
  AnalisaKeuangan: () => AnalisaKeuangan
});
var import_debitur = __toModule(require("src/debiturs/entities/debitur.entity"));
var import_input_keuangan = __toModule(require("src/input_keuangan/entities/input_keuangan.entity"));
var import_typeorm = __toModule(require("typeorm"));
let AnalisaKeuangan = class {
};
__decorateClass([
  (0, import_typeorm.PrimaryGeneratedColumn)()
], AnalisaKeuangan.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], AnalisaKeuangan.prototype, "total_aset", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], AnalisaKeuangan.prototype, "jumlah_aset_kini", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], AnalisaKeuangan.prototype, "total_angsuran_keseluruhan", 2);
__decorateClass([
  (0, import_typeorm.Column)("decimal", { precision: 5, scale: 2 })
], AnalisaKeuangan.prototype, "persen_omzet_kini", 2);
__decorateClass([
  (0, import_typeorm.Column)("decimal", { precision: 5, scale: 2 })
], AnalisaKeuangan.prototype, "persen_omzet_yad", 2);
__decorateClass([
  (0, import_typeorm.Column)("decimal", { precision: 5, scale: 2 })
], AnalisaKeuangan.prototype, "persen_biaya_bahan_kini", 2);
__decorateClass([
  (0, import_typeorm.Column)("decimal", { precision: 5, scale: 2 })
], AnalisaKeuangan.prototype, "persen_biaya_bahan_yad", 2);
__decorateClass([
  (0, import_typeorm.Column)("decimal", { precision: 5, scale: 2 })
], AnalisaKeuangan.prototype, "persen_biaya_operasi_kini", 2);
__decorateClass([
  (0, import_typeorm.Column)("decimal", { precision: 5, scale: 2 })
], AnalisaKeuangan.prototype, "persen_biaya_operasi_yad", 2);
__decorateClass([
  (0, import_typeorm.Column)("decimal", { precision: 5, scale: 2 })
], AnalisaKeuangan.prototype, "persen_biaya_upah_kini", 2);
__decorateClass([
  (0, import_typeorm.Column)("decimal", { precision: 5, scale: 2 })
], AnalisaKeuangan.prototype, "persen_biaya_upah_yad", 2);
__decorateClass([
  (0, import_typeorm.Column)("decimal", { precision: 5, scale: 2 })
], AnalisaKeuangan.prototype, "persen_biaya_hidup_kini", 2);
__decorateClass([
  (0, import_typeorm.Column)("decimal", { precision: 5, scale: 2 })
], AnalisaKeuangan.prototype, "persen_biaya_hidup_yad", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], AnalisaKeuangan.prototype, "total_laba_usaha_kini", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], AnalisaKeuangan.prototype, "total_laba_usaha_yad", 2);
__decorateClass([
  (0, import_typeorm.Column)("decimal", { precision: 5, scale: 2 })
], AnalisaKeuangan.prototype, "persen_laba_usaha_kini", 2);
__decorateClass([
  (0, import_typeorm.Column)("decimal", { precision: 5, scale: 2 })
], AnalisaKeuangan.prototype, "persen_laba_usaha_yad", 2);
__decorateClass([
  (0, import_typeorm.Column)("decimal", { precision: 5, scale: 2 })
], AnalisaKeuangan.prototype, "persen_ratio_kini", 2);
__decorateClass([
  (0, import_typeorm.Column)("decimal", { precision: 5, scale: 2 })
], AnalisaKeuangan.prototype, "persen_ratio_yad", 2);
__decorateClass([
  (0, import_typeorm.Column)("decimal", { precision: 5, scale: 2 })
], AnalisaKeuangan.prototype, "persen_roe_kini", 2);
__decorateClass([
  (0, import_typeorm.Column)("decimal", { precision: 5, scale: 2 })
], AnalisaKeuangan.prototype, "persen_roe_yad", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], AnalisaKeuangan.prototype, "keterangan_roe", 2);
__decorateClass([
  (0, import_typeorm.Column)("decimal", { precision: 5, scale: 2 })
], AnalisaKeuangan.prototype, "persen_roa_kini", 2);
__decorateClass([
  (0, import_typeorm.Column)("decimal", { precision: 5, scale: 2 })
], AnalisaKeuangan.prototype, "persen_roa_yad", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], AnalisaKeuangan.prototype, "keterangan_roa", 2);
__decorateClass([
  (0, import_typeorm.Column)("decimal", { precision: 5, scale: 2 })
], AnalisaKeuangan.prototype, "persen_der_kini", 2);
__decorateClass([
  (0, import_typeorm.Column)("decimal", { precision: 5, scale: 2 })
], AnalisaKeuangan.prototype, "persen_der_yad", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], AnalisaKeuangan.prototype, "keterangan_der", 2);
__decorateClass([
  (0, import_typeorm.Column)("decimal", { precision: 5, scale: 2 })
], AnalisaKeuangan.prototype, "persen_dsc_kini", 2);
__decorateClass([
  (0, import_typeorm.Column)("decimal", { precision: 5, scale: 2 })
], AnalisaKeuangan.prototype, "persen_dsc_yad", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], AnalisaKeuangan.prototype, "keterangan_dsc", 2);
__decorateClass([
  (0, import_typeorm.Column)("bool")
], AnalisaKeuangan.prototype, "kredit_disetujuin", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], AnalisaKeuangan.prototype, "pinjaman_maksimal", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], AnalisaKeuangan.prototype, "perhitungan_modal_kerja", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], AnalisaKeuangan.prototype, "kebutuhan_investasi", 2);
__decorateClass([
  (0, import_typeorm.Column)("bigint")
], AnalisaKeuangan.prototype, "kebutuhan_kredit", 2);
__decorateClass([
  (0, import_typeorm.Column)("double precision")
], AnalisaKeuangan.prototype, "total_crr_keuangan", 2);
__decorateClass([
  (0, import_typeorm.OneToOne)(() => import_input_keuangan.InputKeuangan, (inputKeuangan) => inputKeuangan, {
    onDelete: "CASCADE",
    cascade: true
  }),
  (0, import_typeorm.JoinColumn)()
], AnalisaKeuangan.prototype, "keuangan", 2);
__decorateClass([
  (0, import_typeorm.OneToOne)(() => import_debitur.Debitur, (debitur) => debitur, {
    onDelete: "CASCADE",
    cascade: true
  }),
  (0, import_typeorm.JoinColumn)()
], AnalisaKeuangan.prototype, "debitur", 2);
AnalisaKeuangan = __decorateClass([
  (0, import_typeorm.Entity)()
], AnalisaKeuangan);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AnalisaKeuangan
});
//# sourceMappingURL=analisa_keuangan.entity.js.map
