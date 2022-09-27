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
  UpdateFixedDto: () => UpdateFixedDto
});
var import_swagger = __toModule(require("@nestjs/swagger"));
var import_class_validator = __toModule(require("class-validator"));
var import_jenis_pengajuan = __toModule(require("../enum/jenis-pengajuan.enum"));
var import_jenis_penggunaan = __toModule(require("../enum/jenis-penggunaan.enum"));
var import_create_fixed = __toModule(require("./create-fixed.dto"));
class UpdateFixedDto extends (0, import_swagger.PartialType)(import_create_fixed.CreateFixedDto) {
}
__decorateClass([
  (0, import_class_validator.IsEnum)(import_jenis_pengajuan.JenisPengajuan)
], UpdateFixedDto.prototype, "jenis_pengajuan", 2);
__decorateClass([
  (0, import_class_validator.IsEnum)(import_jenis_penggunaan.JenisPenggunaan)
], UpdateFixedDto.prototype, "jenis_penggunaan", 2);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UpdateFixedDto
});
//# sourceMappingURL=update-fixed.dto.js.map
