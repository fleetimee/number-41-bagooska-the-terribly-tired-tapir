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
  CreateFixedDto: () => CreateFixedDto
});
var import_jenis_penggunaan = __toModule(require("./../enum/jenis-penggunaan.enum"));
var import_class_validator = __toModule(require("class-validator"));
var import_jenis_pengajuan = __toModule(require("../enum/jenis-pengajuan.enum"));
class CreateFixedDto {
}
__decorateClass([
  (0, import_class_validator.IsNotEmpty)({ message: "Jenis pengajuan tidak boleh kosong" }),
  (0, import_class_validator.IsNumberString)({ message: "Jenis pengajuan harus berupa angka" })
], CreateFixedDto.prototype, "plafon_fasilitas", 2);
__decorateClass([
  (0, import_class_validator.IsNotEmpty)({ message: "Jenis penggunaan tidak boleh kosong" }),
  (0, import_class_validator.IsEnum)(import_jenis_pengajuan.JenisPengajuan, {
    message: "Jenis pengajuan tidak valid (BARU/ADENDUM/RESTRUK)"
  })
], CreateFixedDto.prototype, "jenis_pengajuan", 2);
__decorateClass([
  (0, import_class_validator.IsNotEmpty)({ message: "Tujuan penggunaan tidak boleh kosong" }),
  (0, import_class_validator.IsEnum)(import_jenis_penggunaan.JenisPenggunaan, {
    message: "Tujuan penggunaan tidak valid (MODAL_KERJA/INVESTASI/KONSUMSI)"
  })
], CreateFixedDto.prototype, "jenis_penggunaan", 2);
__decorateClass([
  (0, import_class_validator.IsNotEmpty)({ message: "Tujuan penggunaan tidak boleh kosong" })
], CreateFixedDto.prototype, "jangka_waktu", 2);
__decorateClass([
  (0, import_class_validator.IsNotEmpty)({ message: "Tujuan penggunaan tidak boleh kosong" })
], CreateFixedDto.prototype, "tujuan_penggunaan", 2);
__decorateClass([
  (0, import_class_validator.IsNumberString)({ message: "Penghasilan pemohon harus berupa angka" }),
  (0, import_class_validator.IsNotEmpty)({ message: "Penghasilan pemohon tidak boleh kosong" })
], CreateFixedDto.prototype, "penghasilan_pemohon", 2);
__decorateClass([
  (0, import_class_validator.IsNumberString)({ message: "Potongan gaji harus berupa angka" }),
  (0, import_class_validator.IsNotEmpty)({ message: "Potongan gaji tidak boleh kosong" })
], CreateFixedDto.prototype, "potongan_gaji", 2);
__decorateClass([
  (0, import_class_validator.IsNumberString)({ message: "Sisa penghasilan harus berupa angka" }),
  (0, import_class_validator.IsNotEmpty)({ message: "Sisa penghasilan tidak boleh kosong" })
], CreateFixedDto.prototype, "sisa_penghasilan", 2);
__decorateClass([
  (0, import_class_validator.IsNotEmpty)({ message: "Nama pejabat penanggung jawab tidak boleh kosong" })
], CreateFixedDto.prototype, "nama_pejabat_penanggung_jawab", 2);
__decorateClass([
  (0, import_class_validator.IsNotEmpty)({
    message: "Jabatan pejabat penanggung jawab tidak boleh kosong"
  })
], CreateFixedDto.prototype, "jabatan_pejabat_penanggung_jawab", 2);
__decorateClass([
  (0, import_class_validator.IsNotEmpty)({ message: "Nama pejabat pemotong gaji tidak boleh kosong" })
], CreateFixedDto.prototype, "nama_pejabat_pemotong_gaji", 2);
__decorateClass([
  (0, import_class_validator.IsNotEmpty)({ message: "Jabatan pejabat pemotong gaji tidak boleh kosong" })
], CreateFixedDto.prototype, "jabatan_pejabat_pemotong_gaji", 2);
__decorateClass([
  (0, import_class_validator.IsNumberString)({ message: "Nomor rekening harus berupa angka" }),
  (0, import_class_validator.IsOptional)()
], CreateFixedDto.prototype, "no_rekening", 2);
__decorateClass([
  (0, import_class_validator.IsNumberString)({ message: "Plafon kredit harus berupa angka" }),
  (0, import_class_validator.IsOptional)()
], CreateFixedDto.prototype, "plafon_kredit", 2);
__decorateClass([
  (0, import_class_validator.IsOptional)()
], CreateFixedDto.prototype, "tanggal_mulai_kredit", 2);
__decorateClass([
  (0, import_class_validator.IsOptional)()
], CreateFixedDto.prototype, "jangka_waktu_kredit", 2);
__decorateClass([
  (0, import_class_validator.IsNumberString)({ message: "Debitur harus berupa angka" }),
  (0, import_class_validator.IsNotEmpty)({ message: "Debitur tidak boleh kosong" })
], CreateFixedDto.prototype, "debitur", 2);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreateFixedDto
});
//# sourceMappingURL=create-fixed.dto.js.map
