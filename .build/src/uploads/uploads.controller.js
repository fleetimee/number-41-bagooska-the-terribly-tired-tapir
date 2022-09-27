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
var __decorateParam = (index, decorator) => (target, key) => decorator(target, key, index);
__export(exports, {
  UploadsController: () => UploadsController
});
var import_platform_express = __toModule(require("@nestjs/platform-express"));
var import_common = __toModule(require("@nestjs/common"));
var import_crud = __toModule(require("@rewiko/crud"));
var import_upload = __toModule(require("./entities/upload.entity"));
var import_multer = __toModule(require("multer"));
var import_path = __toModule(require("path"));
let UploadsController = class {
  constructor(service) {
    this.service = service;
  }
  get base() {
    return this;
  }
  createOne(req, dto, files) {
    if (!files) {
      throw new import_common.BadRequestException("File bukan pdf/docx/doc");
    }
    dto.files = files.filename;
    const response = {
      message: "File berhasil diupload",
      filePath: `http://localhost:3000/uploads/files/${files.filename}`
    };
    return this.base.createOneBase(req, dto) && response;
  }
  async getPdf(res, filename) {
    res.sendFile(filename, { root: "./uploads/files" });
  }
};
__decorateClass([
  (0, import_common.UseInterceptors)((0, import_platform_express.FileInterceptor)("files", {
    storage: (0, import_multer.diskStorage)({
      destination: "./uploads/files",
      filename: (req, files, cb) => {
        const randomName = Array(32).fill(null).map(() => Math.round(Math.random() * 16).toString(16)).join("");
        return cb(null, `${randomName}${(0, import_path.extname)(files.originalname)}`);
      }
    }),
    fileFilter: (req, files, cb) => {
      if (!files.originalname.match(/\.(pdf|docx|doc)$/)) {
        return cb(null, false);
      }
      cb(null, true);
    }
  })),
  (0, import_common.UseInterceptors)((0, import_platform_express.FileInterceptor)("files", {
    storage: (0, import_multer.diskStorage)({
      destination: "./uploads/files",
      filename: (req, files, cb) => {
        const randomName = Array(32).fill(null).map(() => Math.round(Math.random() * 16).toString(16)).join("");
        return cb(null, `${randomName}${(0, import_path.extname)(files.originalname)}`);
      }
    }),
    fileFilter: (req, files, cb) => {
      if (!files.originalname.match(/\.(pdf|docx|doc)$/)) {
        return cb(null, false);
      }
      cb(null, true);
    }
  })),
  (0, import_crud.Override)(),
  __decorateParam(0, (0, import_crud.ParsedRequest)()),
  __decorateParam(1, (0, import_crud.ParsedBody)()),
  __decorateParam(2, (0, import_common.UploadedFile)())
], UploadsController.prototype, "createOne", 1);
__decorateClass([
  (0, import_common.Get)("/files/:filename"),
  __decorateParam(0, (0, import_common.Res)()),
  __decorateParam(1, (0, import_common.Param)("filename"))
], UploadsController.prototype, "getPdf", 1);
UploadsController = __decorateClass([
  (0, import_crud.Crud)({
    model: {
      type: import_upload.Upload
    },
    query: {
      join: {
        submission: {
          eager: true
        },
        "submission.nonfixed": {
          eager: true
        },
        "submission.fixed": {
          eager: true
        },
        createdBy: {
          eager: true,
          exclude: ["password"],
          allow: ["username"]
        }
      }
    }
  }),
  (0, import_common.Controller)("uploads")
], UploadsController);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UploadsController
});
//# sourceMappingURL=uploads.controller.js.map
