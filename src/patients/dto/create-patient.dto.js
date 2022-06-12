"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreatePatientDto = void 0;
var openapi = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var CreatePatientDto = /** @class */ (function () {
    function CreatePatientDto() {
    }
    CreatePatientDto._OPENAPI_METADATA_FACTORY = function () {
        return { firstName: { required: true, type: function () { return String; } }, lastName: { required: true, type: function () { return String; } }, fathersName: { required: true, type: function () { return String; } }, bornDate: { required: true, type: function () { return Date; } }, gender: { required: true, type: function () { return String; } }, address: { required: true, type: function () { return String; } }, city: { required: true, type: function () { return String; } }, state: { required: true, type: function () { return String; } }, postCode: { required: true, type: function () { return String; } }, insuranceType: { required: true, type: function () { return String; } }, insuranceNumber: { required: true, type: function () { return String; } }, phone: { required: true, type: function () { return String; } }, mobilePhone: { required: true, type: function () { return String; } }, email: { required: true, type: function () { return String; } } };
    };
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)()
    ], CreatePatientDto.prototype, "firstName");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)()
    ], CreatePatientDto.prototype, "lastName");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)()
    ], CreatePatientDto.prototype, "fathersName");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return Date; }),
        (0, class_validator_1.IsDate)()
    ], CreatePatientDto.prototype, "bornDate");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)()
    ], CreatePatientDto.prototype, "gender");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)()
    ], CreatePatientDto.prototype, "address");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)()
    ], CreatePatientDto.prototype, "city");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)()
    ], CreatePatientDto.prototype, "state");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)()
    ], CreatePatientDto.prototype, "postCode");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)()
    ], CreatePatientDto.prototype, "insuranceType");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)()
    ], CreatePatientDto.prototype, "insuranceNumber");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsPhoneNumber)()
    ], CreatePatientDto.prototype, "phone");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsMobilePhone)()
    ], CreatePatientDto.prototype, "mobilePhone");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsEmail)()
    ], CreatePatientDto.prototype, "email");
    return CreatePatientDto;
}());
exports.CreatePatientDto = CreatePatientDto;
