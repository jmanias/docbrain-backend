"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.OptionsController = void 0;
var openapi = require("@nestjs/swagger");
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var OptionsController = /** @class */ (function () {
    function OptionsController(optionsService) {
        this.optionsService = optionsService;
    }
    OptionsController.prototype.findAll = function (paginationQuery) {
        return this.optionsService.findAll(paginationQuery);
    };
    OptionsController.prototype.create = function (createOptionsDto) {
        return this.optionsService.create(createOptionsDto);
    };
    OptionsController.prototype.update = function (id, updateOptionsDto) {
        return this.optionsService.update(id, updateOptionsDto);
    };
    OptionsController.prototype.remove = function (id) {
        return this.optionsService.remove(id);
    };
    __decorate([
        (0, common_1.Get)(),
        __param(0, (0, common_1.Query)())
    ], OptionsController.prototype, "findAll");
    __decorate([
        (0, common_1.Post)(),
        openapi.ApiResponse({ status: 201, type: Object }),
        __param(0, (0, common_1.Body)())
    ], OptionsController.prototype, "create");
    __decorate([
        (0, common_1.Patch)(':id'),
        openapi.ApiResponse({ status: 200, type: Object }),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], OptionsController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        openapi.ApiResponse({ status: 200, type: Object }),
        __param(0, (0, common_1.Param)('id'))
    ], OptionsController.prototype, "remove");
    OptionsController = __decorate([
        (0, swagger_1.ApiTags)('options'),
        (0, common_1.Controller)('options')
    ], OptionsController);
    return OptionsController;
}());
exports.OptionsController = OptionsController;
