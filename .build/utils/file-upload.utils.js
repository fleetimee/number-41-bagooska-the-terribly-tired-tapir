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
__export(exports, {
  FileUploadingUtils: () => FileUploadingUtils
});
var import_platform_express = __toModule(require("@nestjs/platform-express"));
var import_multer = __toModule(require("multer"));
var import_path = __toModule(require("path"));
class FileUploadingUtils {
  static singleFileUploader(name, dest = "./uploads/images") {
    return (0, import_platform_express.FileInterceptor)(name, {
      storage: (0, import_multer.diskStorage)({
        destination: dest,
        filename: (req, file, cb) => {
          const randomName = Array(32).fill(null).map(() => Math.round(Math.random() * 16).toString(16)).join("");
          return cb(null, `${randomName}${(0, import_path.extname)(file.originalname)}`);
        }
      })
    });
  }
  static multipleFileUploader(name, dest = "./uploads/images", maxFileNumber = 20) {
    return (0, import_platform_express.FilesInterceptor)(name, maxFileNumber, {
      storage: (0, import_multer.diskStorage)({
        destination: dest,
        filename: (req, file, cb) => {
          const randomName = Array(32).fill(null).map(() => Math.round(Math.random() * 16).toString(16)).join("");
          return cb(null, `${randomName}${(0, import_path.extname)(file.originalname)}`);
        }
      })
    });
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FileUploadingUtils
});
//# sourceMappingURL=file-upload.utils.js.map
