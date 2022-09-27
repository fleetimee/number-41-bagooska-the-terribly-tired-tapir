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
  Submission: () => Submission
});
var import_character_analysis = __toModule(require("./../../character_analysis/entities/character_analysis.entity"));
var import_analysis = __toModule(require("./../../business_analysis/entities/analysis.entity"));
var import_collateral = __toModule(require("./../../collaterals/entities/collateral.entity"));
var import_non_fixed = __toModule(require("./../../non-fixeds/entities/non-fixed.entity"));
var import_nanoid = __toModule(require("nanoid"));
var import_user = __toModule(require("src/users/entities/user.entity"));
var import_typeorm = __toModule(require("typeorm"));
var import_fixed = __toModule(require("src/fixeds/entities/fixed.entity"));
let Submission = class {
  generateId() {
    const nanoid = (0, import_nanoid.customAlphabet)("1234567890", 10);
    this.no_pengajuan = nanoid();
  }
};
__decorateClass([
  (0, import_typeorm.PrimaryGeneratedColumn)()
], Submission.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], Submission.prototype, "no_pengajuan", 2);
__decorateClass([
  (0, import_typeorm.Column)("date", { default: () => "CURRENT_DATE" })
], Submission.prototype, "tgl_pengajuan", 2);
__decorateClass([
  (0, import_typeorm.ManyToMany)(() => import_non_fixed.NonFixed, (nonfixed) => nonfixed.submission, {
    cascade: true
  }),
  (0, import_typeorm.JoinTable)({
    name: "submission_nonfixed_junction"
  })
], Submission.prototype, "nonfixed", 2);
__decorateClass([
  (0, import_typeorm.ManyToMany)(() => import_fixed.Fixed, (fixed) => fixed.submission, {
    cascade: true
  }),
  (0, import_typeorm.JoinTable)({
    name: "submission_fixed_junction"
  })
], Submission.prototype, "fixed", 2);
__decorateClass([
  (0, import_typeorm.ManyToOne)(() => import_user.User, (user) => user, {
    nullable: false,
    onDelete: "CASCADE"
  })
], Submission.prototype, "createdBy", 2);
__decorateClass([
  (0, import_typeorm.OneToOne)(() => import_user.User, (user) => user, { nullable: true }),
  (0, import_typeorm.JoinColumn)()
], Submission.prototype, "updatedBy", 2);
__decorateClass([
  (0, import_typeorm.ManyToOne)(() => import_collateral.Collateral, (collateral) => collateral.submission, {
    cascade: true,
    onDelete: "SET NULL"
  })
], Submission.prototype, "collateral", 2);
__decorateClass([
  (0, import_typeorm.ManyToOne)(() => import_analysis.Analysis, (business_analysis) => business_analysis.submission, {
    cascade: true,
    onDelete: "SET NULL"
  })
], Submission.prototype, "business_analysis", 2);
__decorateClass([
  (0, import_typeorm.ManyToOne)(() => import_character_analysis.CharacterAnalysis, (character_analysis) => character_analysis.submission, {
    cascade: true,
    onDelete: "SET NULL"
  })
], Submission.prototype, "character_analysis", 2);
__decorateClass([
  (0, import_typeorm.BeforeInsert)()
], Submission.prototype, "generateId", 1);
Submission = __decorateClass([
  (0, import_typeorm.Entity)()
], Submission);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Submission
});
//# sourceMappingURL=submission.entity.js.map
