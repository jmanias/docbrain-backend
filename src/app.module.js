"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var users_module_1 = require("./users/users.module");
var config_1 = require("@nestjs/config");
var auth_module_1 = require("./auth/auth.module");
var patients_module_1 = require("./patients/patients.module");
var surgeries_module_1 = require("./surgeries/surgeries.module");
var appointments_module_1 = require("./appointments/appointments.module");
var examinations_module_1 = require("./examinations/examinations.module");
var options_module_1 = require("./options/options.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                config_1.ConfigModule.forRoot({
                    isGlobal: true
                }),
                mongoose_1.MongooseModule.forRoot(process.env.DATABASE_CONNECTION_STRING),
                users_module_1.UsersModule,
                auth_module_1.AuthModule,
                patients_module_1.PatientsModule,
                surgeries_module_1.SurgeriesModule,
                appointments_module_1.AppointmentsModule,
                examinations_module_1.ExaminationsModule,
                options_module_1.OptionsModule,
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
