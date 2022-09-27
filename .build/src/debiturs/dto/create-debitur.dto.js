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
  CreateDebiturDto: () => CreateDebiturDto
});
var import_class_validator = __toModule(require("class-validator"));
class CreateDebiturDto {
}
__decorateClass([
  (0, import_class_validator.IsNumberString)({ message: "NIK harus berupa angka" }),
  (0, import_class_validator.IsNotEmpty)({ message: "NIK tidak boleh kosong" })
], CreateDebiturDto.prototype, "nik", 2);
__decorateClass([
  (0, import_class_validator.IsNotEmpty)({ message: "Nama debitur tidak boleh kosong" })
], CreateDebiturDto.prototype, "nama_debitur", 2);
__decorateClass([
  (0, import_class_validator.IsNotEmpty)({ message: "Alamat tidak boleh kosong" })
], CreateDebiturDto.prototype, "alamat", 2);
__decorateClass([
  (0, import_class_validator.IsNotEmpty)({ message: "Tempat lahir tidak boleh kosong" })
], CreateDebiturDto.prototype, "tempat_lahir", 2);
__decorateClass([
  (0, import_class_validator.IsDateString)({ message: "Tanggal lahir harus berupa tanggal" }),
  (0, import_class_validator.IsNotEmpty)({ message: "Tanggal lahir tidak boleh kosong" })
], CreateDebiturDto.prototype, "tanggal_lahir", 2);
__decorateClass([
  (0, import_class_validator.IsNotEmpty)({ message: "Pekerjaan tidak boleh kosong" })
], CreateDebiturDto.prototype, "pekerjaan", 2);
__decorateClass([
  (0, import_class_validator.IsNotEmpty)({ message: "Instansi tidak boleh kosong" })
], CreateDebiturDto.prototype, "instansi", 2);
__decorateClass([
  (0, import_class_validator.IsNotEmpty)({ message: "Agama tidak boleh kosong" })
], CreateDebiturDto.prototype, "agama", 2);
__decorateClass([
  (0, import_class_validator.IsNotEmpty)({ message: "Jenis kelamin tidak boleh kosong" })
], CreateDebiturDto.prototype, "gender", 2);
__decorateClass([
  (0, import_class_validator.IsNotEmpty)({ message: "No telp tidak boleh kosong" })
], CreateDebiturDto.prototype, "no_telp", 2);
__decorateClass([
  (0, import_class_validator.IsNotEmpty)({ message: "No seluler tidak boleh kosong" })
], CreateDebiturDto.prototype, "no_seluler", 2);
__decorateClass([
  (0, import_class_validator.IsNotEmpty)({ message: "Email harus diisi" }),
  (0, import_class_validator.IsEmail)({ message: "Email tidak valid" })
], CreateDebiturDto.prototype, "email", 2);
__decorateClass([
  (0, import_class_validator.IsNotEmpty)({ message: "Nama ibu tidak boleh kosong" })
], CreateDebiturDto.prototype, "nama_ibu", 2);
__decorateClass([
  (0, import_class_validator.IsOptional)()
], CreateDebiturDto.prototype, "relationship", 2);
__decorateClass([
  (0, import_class_validator.IsOptional)()
], CreateDebiturDto.prototype, "nama_pasangan", 2);
__decorateClass([
  (0, import_class_validator.IsOptional)()
], CreateDebiturDto.prototype, "pekerjaan_pasangan", 2);
__decorateClass([
  (0, import_class_validator.IsOptional)()
], CreateDebiturDto.prototype, "tgl_lahir_pasangan", 2);
__decorateClass([
  (0, import_class_validator.IsOptional)()
], CreateDebiturDto.prototype, "tempat_lahir_pasangan", 2);
__decorateClass([
  (0, import_class_validator.IsOptional)()
], CreateDebiturDto.prototype, "nik_pasangan", 2);
__decorateClass([
  (0, import_class_validator.IsNotEmpty)({ message: "Total income tidak boleh kosong" })
], CreateDebiturDto.prototype, "total_income", 2);
__decorateClass([
  (0, import_class_validator.IsNotEmpty)({ message: "Bidang usaha tidak boleh kosong" })
], CreateDebiturDto.prototype, "bidang_usaha", 2);
__decorateClass([
  (0, import_class_validator.IsNumberString)({ message: "Jumlah tanggungan harus berupa angka" }),
  (0, import_class_validator.IsNotEmpty)({ message: "Jumlah tangunggan tidak boleh kosong" })
], CreateDebiturDto.prototype, "jumlah_tanggungan", 2);
__decorateClass([
  (0, import_class_validator.IsNotEmpty)({ message: "Provinsi tidak boleh kosong" })
], CreateDebiturDto.prototype, "provinsi", 2);
__decorateClass([
  (0, import_class_validator.IsNotEmpty)({ message: "Kabupaten tidak boleh kosong" })
], CreateDebiturDto.prototype, "kabupaten", 2);
__decorateClass([
  (0, import_class_validator.IsNotEmpty)({ message: "Kecamatan tidak boleh kosong" })
], CreateDebiturDto.prototype, "kecamatan", 2);
__decorateClass([
  (0, import_class_validator.IsNotEmpty)({ message: "Kelurahan tidak boleh kosong" })
], CreateDebiturDto.prototype, "kelurahan", 2);
__decorateClass([
  (0, import_class_validator.IsNumberString)(),
  (0, import_class_validator.IsNotEmpty)({ message: "RT tidak boleh kosong" })
], CreateDebiturDto.prototype, "rt", 2);
__decorateClass([
  (0, import_class_validator.IsNumberString)({ message: "RW harus berupa angka" }),
  (0, import_class_validator.IsNotEmpty)({ message: "RW tidak boleh kosong" })
], CreateDebiturDto.prototype, "rw", 2);
__decorateClass([
  (0, import_class_validator.IsNumberString)({ message: "Kode pos harus berupa angka" }),
  (0, import_class_validator.IsNotEmpty)({ message: "Kode pos tidak boleh kosong" })
], CreateDebiturDto.prototype, "kode_pos", 2);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreateDebiturDto
});
//# sourceMappingURL=create-debitur.dto.js.map
