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
exports.PatientsController = void 0;
var openapi = require("@nestjs/swagger");
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var PatientsController = /** @class */ (function () {
    function PatientsController(patientsService) {
        this.patientsService = patientsService;
    }
    PatientsController.prototype.findAll = function (paginationQuery) {
        return this.patientsService.findAll(paginationQuery);
    };
    PatientsController.prototype.findOne = function (id) {
        return this.patientsService.findPatientById(id);
    };
    PatientsController.prototype.create = function (createPatientDto) {
        return this.patientsService.create(createPatientDto);
    };
    PatientsController.prototype.update = function (id, updatePatientDto) {
        return this.patientsService.update(id, updatePatientDto);
    };
    PatientsController.prototype.remove = function (id) {
        return this.patientsService.remove(id);
    };
    __decorate([
        (0, common_1.Get)(),
        __param(0, (0, common_1.Query)())
    ], PatientsController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        openapi.ApiResponse({ status: 200, type: Object }),
        __param(0, (0, common_1.Param)('id'))
    ], PatientsController.prototype, "findOne");
    __decorate([
        (0, common_1.Post)(),
        openapi.ApiResponse({ status: 201, type: Object }),
        __param(0, (0, common_1.Body)())
    ], PatientsController.prototype, "create");
    __decorate([
        (0, common_1.Patch)(':id'),
        openapi.ApiResponse({ status: 200, type: Object }),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], PatientsController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        openapi.ApiResponse({ status: 200, type: Object }),
        __param(0, (0, common_1.Param)('id'))
    ], PatientsController.prototype, "remove");
    PatientsController = __decorate([
        (0, swagger_1.ApiTags)('patients'),
        (0, common_1.Controller)('patients')
    ], PatientsController);
    return PatientsController;
}());
exports.PatientsController = PatientsController;
