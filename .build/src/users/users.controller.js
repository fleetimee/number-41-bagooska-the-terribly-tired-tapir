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
  UsersController: () => UsersController
});
var import_user = __toModule(require("./entities/user.entity"));
var import_common = __toModule(require("@nestjs/common"));
var import_crud = __toModule(require("@rewiko/crud"));
let UsersController = class {
  constructor(service) {
    this.service = service;
  }
};
UsersController = __decorateClass([
  (0, import_crud.Crud)({
    model: {
      type: import_user.User
    },
    query: {
      exclude: ["password"],
      join: {
        roles: {
          eager: true,
          allow: ["name"]
        },
        createdBy: {
          eager: true,
          exclude: ["password", "createdAt"]
        },
        "createdBy.user": {
          eager: true,
          required: true,
          exclude: ["password"]
        },
        updatedBy: {
          eager: true,
          exclude: ["password", "createdAt"]
        },
        "updatedBy.user": {
          eager: true,
          required: true,
          exclude: ["password"]
        }
      }
    }
  }),
  (0, import_common.Controller)("users")
], UsersController);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UsersController
});
//# sourceMappingURL=users.controller.js.map
