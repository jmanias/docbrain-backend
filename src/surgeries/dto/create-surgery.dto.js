"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateSurgeryDto = void 0;
var openapi = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var CreateSurgeryDto = /** @class */ (function () {
    function CreateSurgeryDto() {
    }
    CreateSurgeryDto._OPENAPI_METADATA_FACTORY = function () {
        return { type: { required: true, type: function () { return String; } }, place: { required: true, type: function () { return String; } }, date: { required: true, type: function () { return Date; } }, startTime: { required: true, type: function () { return String; } }, notice: { required: true, type: function () { return String; } }, patient: { required: true, type: function () { return String; } }, duration: { required: true, type: function () { return String; } }, anesthesia: { required: true, type: function () { return String; } } };
    };
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)()
    ], CreateSurgeryDto.prototype, "type");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)()
    ], CreateSurgeryDto.prototype, "place");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_transformer_1.Type)(function () { return Date; }),
        (0, class_validator_1.IsDate)()
    ], CreateSurgeryDto.prototype, "date");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)()
    ], CreateSurgeryDto.prototype, "startTime");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)()
    ], CreateSurgeryDto.prototype, "notice");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)()
    ], CreateSurgeryDto.prototype, "patient");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)()
    ], CreateSurgeryDto.prototype, "duration");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)()
    ], CreateSurgeryDto.prototype, "anesthesia");
    return CreateSurgeryDto;
}());
exports.CreateSurgeryDto = CreateSurgeryDto;
