"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppointmentSchema = exports.Appointment = void 0;
var openapi = require("@nestjs/swagger");
var mongoose_1 = require("@nestjs/mongoose");
var mongoose = require("mongoose");
var mongoose_2 = require("mongoose");
var user_entity_1 = require("../../users/entities/user.entity");
var class_transformer_1 = require("class-transformer");
var patient_entity_1 = require("../../patients/entities/patient.entity");
var Appointment = /** @class */ (function (_super) {
    __extends(Appointment, _super);
    function Appointment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Appointment._OPENAPI_METADATA_FACTORY = function () {
        return { type: { required: true, type: function () { return String; } }, date: { required: true, type: function () { return Date; } }, startTime: { required: true, type: function () { return String; } }, notice: { required: true, type: function () { return String; } }, duration: { required: true, type: function () { return String; } }, reason: { required: true, type: function () { return String; } }, user: { required: true, type: function () { return require("mongoose").Schema.Types.ObjectId; } }, patient: { required: true, type: function () { return require("mongoose").Schema.Types.ObjectId; } } };
    };
    __decorate([
        (0, mongoose_1.Prop)()
    ], Appointment.prototype, "type");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Appointment.prototype, "date");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Appointment.prototype, "startTime");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Appointment.prototype, "notice");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Appointment.prototype, "duration");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Appointment.prototype, "reason");
    __decorate([
        (0, mongoose_1.Prop)({
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: user_entity_1.User.name
        }),
        (0, class_transformer_1.Type)(function () { return user_entity_1.User; })
    ], Appointment.prototype, "user");
    __decorate([
        (0, mongoose_1.Prop)({
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: patient_entity_1.Patient.name
        }),
        (0, class_transformer_1.Type)(function () { return patient_entity_1.Patient; })
    ], Appointment.prototype, "patient");
    Appointment = __decorate([
        (0, mongoose_1.Schema)({ timestamps: true })
    ], Appointment);
    return Appointment;
}(mongoose_2.Document));
exports.Appointment = Appointment;
exports.AppointmentSchema = mongoose_1.SchemaFactory.createForClass(Appointment);
