"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PagionationQueryDto = void 0;
var openapi = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var PagionationQueryDto = /** @class */ (function () {
    function PagionationQueryDto() {
    }
    PagionationQueryDto._OPENAPI_METADATA_FACTORY = function () {
        return { limit: { required: true, type: function () { return Number; } }, offset: { required: true, type: function () { return Number; } } };
    };
    __decorate([
        (0, class_validator_1.IsOptional)()
    ], PagionationQueryDto.prototype, "limit");
    __decorate([
        (0, class_validator_1.IsOptional)()
    ], PagionationQueryDto.prototype, "offset");
    return PagionationQueryDto;
}());
exports.PagionationQueryDto = PagionationQueryDto;
