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
  InputNeracaController: () => InputNeracaController
});
var import_input_neraca = __toModule(require("./entities/input_neraca.entity"));
var import_common = __toModule(require("@nestjs/common"));
var import_crud = __toModule(require("@rewiko/crud"));
let InputNeracaController = class {
  constructor(service) {
    this.service = service;
  }
};
InputNeracaController = __decorateClass([
  (0, import_crud.Crud)({
    model: {
      type: import_input_neraca.InputNeraca
    },
    query: {
      join: {
        debitur: {
          eager: true,
          allow: ["peminjam1", "no_debitur"]
        },
        inputRugiLaba: {
          eager: true
        }
      },
      sort: [
        {
          field: "id",
          order: "ASC"
        }
      ]
    }
  }),
  (0, import_common.Controller)("input-neraca")
], InputNeracaController);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  InputNeracaController
});
//# sourceMappingURL=input_neraca.controller.js.map
