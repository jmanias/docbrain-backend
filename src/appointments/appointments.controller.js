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
exports.AppointmentsController = void 0;
var openapi = require("@nestjs/swagger");
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var decorators_1 = require("../common/decorators");
var AppointmentsController = /** @class */ (function () {
    function AppointmentsController(appointmentsService) {
        this.appointmentsService = appointmentsService;
    }
    AppointmentsController.prototype.findAll = function (paginationQuery) {
        return this.appointmentsService.findAll(paginationQuery);
    };
    AppointmentsController.prototype.findOne = function (id) {
        return this.appointmentsService.findAppointmentById(id);
    };
    AppointmentsController.prototype.create = function (createAppointmentDto, userId) {
        return this.appointmentsService.create(createAppointmentDto, userId);
    };
    AppointmentsController.prototype.update = function (id, updateAppointmentDto) {
        return this.appointmentsService.update(id, updateAppointmentDto);
    };
    AppointmentsController.prototype.remove = function (id) {
        return this.appointmentsService.remove(id);
    };
    __decorate([
        (0, common_1.Get)(),
        __param(0, (0, common_1.Query)())
    ], AppointmentsController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        openapi.ApiResponse({ status: 200, type: Object }),
        __param(0, (0, common_1.Param)('id'))
    ], AppointmentsController.prototype, "findOne");
    __decorate([
        (0, common_1.Post)(),
        openapi.ApiResponse({ status: 201, type: Object }),
        __param(0, (0, common_1.Body)()),
        __param(1, (0, decorators_1.GetCurrentUserId)())
    ], AppointmentsController.prototype, "create");
    __decorate([
        (0, common_1.Patch)(':id'),
        openapi.ApiResponse({ status: 200, type: Object }),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], AppointmentsController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        openapi.ApiResponse({ status: 200, type: Object }),
        __param(0, (0, common_1.Param)('id'))
    ], AppointmentsController.prototype, "remove");
    AppointmentsController = __decorate([
        (0, swagger_1.ApiTags)('appointments'),
        (0, common_1.Controller)('appointments')
    ], AppointmentsController);
    return AppointmentsController;
}());
exports.AppointmentsController = AppointmentsController;
