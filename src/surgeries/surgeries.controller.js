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
exports.SurgeriesController = void 0;
var openapi = require("@nestjs/swagger");
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var decorators_1 = require("../common/decorators");
var SurgeriesController = /** @class */ (function () {
    function SurgeriesController(surgeriesService) {
        this.surgeriesService = surgeriesService;
    }
    SurgeriesController.prototype.findAll = function (paginationQuery) {
        return this.surgeriesService.findAll(paginationQuery);
    };
    SurgeriesController.prototype.findOne = function (id) {
        return this.surgeriesService.findSurgeryById(id);
    };
    SurgeriesController.prototype.create = function (createSurgeryDto, userId) {
        return this.surgeriesService.create(createSurgeryDto, userId);
    };
    SurgeriesController.prototype.update = function (id, updateSurgeryDto) {
        return this.surgeriesService.update(id, updateSurgeryDto);
    };
    SurgeriesController.prototype.remove = function (id) {
        return this.surgeriesService.remove(id);
    };
    __decorate([
        (0, common_1.Get)(),
        __param(0, (0, common_1.Query)())
    ], SurgeriesController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        openapi.ApiResponse({ status: 200, type: Object }),
        __param(0, (0, common_1.Param)('id'))
    ], SurgeriesController.prototype, "findOne");
    __decorate([
        (0, common_1.Post)(),
        openapi.ApiResponse({ status: 201, type: Object }),
        __param(0, (0, common_1.Body)()),
        __param(1, (0, decorators_1.GetCurrentUserId)())
    ], SurgeriesController.prototype, "create");
    __decorate([
        (0, common_1.Patch)(':id'),
        openapi.ApiResponse({ status: 200, type: Object }),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], SurgeriesController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        openapi.ApiResponse({ status: 200, type: Object }),
        __param(0, (0, common_1.Param)('id'))
    ], SurgeriesController.prototype, "remove");
    SurgeriesController = __decorate([
        (0, swagger_1.ApiTags)('surgeries'),
        (0, common_1.Controller)('surgeries')
    ], SurgeriesController);
    return SurgeriesController;
}());
exports.SurgeriesController = SurgeriesController;
