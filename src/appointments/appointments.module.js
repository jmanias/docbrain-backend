"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppointmentsModule = void 0;
var common_1 = require("@nestjs/common");
var appointments_service_1 = require("./appointments.service");
var appointments_controller_1 = require("./appointments.controller");
var mongoose_1 = require("@nestjs/mongoose");
var appointment_entity_1 = require("./entities/appointment.entity");
var patient_entity_1 = require("../patients/entities/patient.entity");
var patients_module_1 = require("../patients/patients.module");
var AppointmentsModule = /** @class */ (function () {
    function AppointmentsModule() {
    }
    AppointmentsModule = __decorate([
        (0, common_1.Module)({
            imports: [
                patients_module_1.PatientsModule,
                mongoose_1.MongooseModule.forFeature([
                    {
                        name: appointment_entity_1.Appointment.name,
                        schema: appointment_entity_1.AppointmentSchema
                    },
                    {
                        name: patient_entity_1.Patient.name,
                        schema: patient_entity_1.PatientSchema
                    },
                ]),
            ],
            providers: [appointments_service_1.AppointmentsService],
            controllers: [appointments_controller_1.AppointmentsController]
        })
    ], AppointmentsModule);
    return AppointmentsModule;
}());
exports.AppointmentsModule = AppointmentsModule;
