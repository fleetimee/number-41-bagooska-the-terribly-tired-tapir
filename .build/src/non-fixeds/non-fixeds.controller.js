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
  NonFixedsController: () => NonFixedsController
});
var import_update_non_fixed = __toModule(require("./dto/update-non-fixed.dto"));
var import_create_non_fixed = __toModule(require("./dto/create-non-fixed.dto"));
var import_common = __toModule(require("@nestjs/common"));
var import_swagger = __toModule(require("@nestjs/swagger"));
var import_crud = __toModule(require("@rewiko/crud"));
var import_non_fixed = __toModule(require("./entities/non-fixed.entity"));
let NonFixedsController = class {
  constructor(service) {
    this.service = service;
  }
  get base() {
    return this;
  }
  getMany(req) {
    return this.base.getManyBase(req);
  }
  getOneAndDoStuff(req) {
    return this.base.getOneBase(req);
  }
  createOne(req, dto) {
    return this.base.createOneBase(req, dto);
  }
  createMany(req, dto) {
    return this.base.createManyBase(req, dto);
  }
  coolFunction(req, dto) {
    return this.base.updateOneBase(req, dto);
  }
  awesomePUT(req, dto) {
    return this.base.replaceOneBase(req, dto);
  }
  async deleteOne(req) {
    return this.base.deleteOneBase(req);
  }
};
__decorateClass([
  (0, import_crud.Override)(),
  __decorateParam(0, (0, import_crud.ParsedRequest)())
], NonFixedsController.prototype, "getMany", 1);
__decorateClass([
  (0, import_crud.Override)("getOneBase"),
  __decorateParam(0, (0, import_crud.ParsedRequest)())
], NonFixedsController.prototype, "getOneAndDoStuff", 1);
__decorateClass([
  (0, import_crud.Override)(),
  __decorateParam(0, (0, import_crud.ParsedRequest)()),
  __decorateParam(1, (0, import_crud.ParsedBody)())
], NonFixedsController.prototype, "createOne", 1);
__decorateClass([
  (0, import_crud.Override)(),
  __decorateParam(0, (0, import_crud.ParsedRequest)()),
  __decorateParam(1, (0, import_crud.ParsedBody)())
], NonFixedsController.prototype, "createMany", 1);
__decorateClass([
  (0, import_crud.Override)("updateOneBase"),
  __decorateParam(0, (0, import_crud.ParsedRequest)()),
  __decorateParam(1, (0, import_crud.ParsedBody)())
], NonFixedsController.prototype, "coolFunction", 1);
__decorateClass([
  (0, import_crud.Override)("replaceOneBase"),
  __decorateParam(0, (0, import_crud.ParsedRequest)()),
  __decorateParam(1, (0, import_crud.ParsedBody)())
], NonFixedsController.prototype, "awesomePUT", 1);
__decorateClass([
  (0, import_crud.Override)(),
  __decorateParam(0, (0, import_crud.ParsedRequest)())
], NonFixedsController.prototype, "deleteOne", 1);
NonFixedsController = __decorateClass([
  (0, import_swagger.ApiTags)("Penghasilan Tidak Tetap"),
  (0, import_crud.Crud)({
    model: {
      type: import_non_fixed.NonFixed
    },
    dto: {
      create: import_create_non_fixed.CreateNonFixedDto,
      update: import_update_non_fixed.UpdateNonFixedDto,
      replace: import_update_non_fixed.UpdateNonFixedDto
    },
    query: {
      join: {
        debitur: {
          eager: true,
          allow: ["nama_debitur", "no_debitur"]
        },
        submission: {
          eager: true
        },
        createdBy: {
          eager: true,
          allow: ["username"],
          exclude: ["password"]
        },
        updatedBy: {
          eager: true,
          allow: ["username"],
          exclude: ["password"]
        },
        "createdBy.user": {
          eager: true,
          required: true,
          allow: ["id", "name"]
        },
        "updatedBy.user": {
          eager: true,
          required: false,
          exclude: ["password"]
        }
      }
    }
  }),
  (0, import_common.Controller)("non-fixeds")
], NonFixedsController);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  NonFixedsController
});
//# sourceMappingURL=non-fixeds.controller.js.map
