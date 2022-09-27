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
  Analysis: () => Analysis
});
var import_submission = __toModule(require("src/submissions/entities/submission.entity"));
var import_user = __toModule(require("src/users/entities/user.entity"));
var import_typeorm = __toModule(require("typeorm"));
let Analysis = class {
};
__decorateClass([
  (0, import_typeorm.PrimaryGeneratedColumn)()
], Analysis.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], Analysis.prototype, "omset_penjualan", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], Analysis.prototype, "harga_bersaing", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], Analysis.prototype, "persaingan", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], Analysis.prototype, "lokasi", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], Analysis.prototype, "kualitas", 2);
__decorateClass([
  (0, import_typeorm.Column)("text")
], Analysis.prototype, "deskripsi_bisnis", 2);
__decorateClass([
  (0, import_typeorm.ManyToOne)(() => import_user.User, (user) => user, {
    nullable: false,
    onDelete: "CASCADE"
  })
], Analysis.prototype, "createdBy", 2);
__decorateClass([
  (0, import_typeorm.OneToOne)(() => import_user.User, (user) => user, { nullable: true }),
  (0, import_typeorm.JoinColumn)()
], Analysis.prototype, "updatedBy", 2);
__decorateClass([
  (0, import_typeorm.OneToMany)(() => import_submission.Submission, (submission) => submission.business_analysis)
], Analysis.prototype, "submission", 2);
Analysis = __decorateClass([
  (0, import_typeorm.Entity)()
], Analysis);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Analysis
});
//# sourceMappingURL=analysis.entity.js.map
