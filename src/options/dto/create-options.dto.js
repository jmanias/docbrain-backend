"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateOptionsDto = void 0;
var openapi = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var CreateOptionsDto = /** @class */ (function () {
    function CreateOptionsDto() {
    }
    CreateOptionsDto._OPENAPI_METADATA_FACTORY = function () {
        return { name: { required: true, type: function () { return String; } }, desc: { required: true, type: function () { return String; } }, address: { required: true, type: function () { return String; } }, city: { required: true, type: function () { return String; } }, postCode: { required: true, type: function () { return String; } }, phone: { required: true, type: function () { return String; } }, email: { required: true, type: function () { return String; } } };
    };
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)()
    ], CreateOptionsDto.prototype, "name");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)()
    ], CreateOptionsDto.prototype, "desc");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)()
    ], CreateOptionsDto.prototype, "address");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)()
    ], CreateOptionsDto.prototype, "city");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)()
    ], CreateOptionsDto.prototype, "postCode");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsPhoneNumber)()
    ], CreateOptionsDto.prototype, "phone");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsEmail)()
    ], CreateOptionsDto.prototype, "email");
    return CreateOptionsDto;
}());
exports.CreateOptionsDto = CreateOptionsDto;
