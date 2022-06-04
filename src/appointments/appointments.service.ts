import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PagionationQueryDto } from '../common/dto/pagionation-query.dto';
import { Appointment } from './entities/appointment.entity';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectModel(Appointment.name)
    private readonly appointmentModel: Model<Appointment>,
  ) {}

  findAll(paginationQuery: PagionationQueryDto) {
    const { limit, offset } = paginationQuery;
    return this.appointmentModel.find().skip(offset).limit(limit).exec();
  }

  async findAppointmentById(id: string) {
    let appointment;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      appointment = await this.appointmentModel.findById(id).exec();
    }
    if (!appointment) {
      throw new NotFoundException(`Appointment ${id} not found`);
    }
    return appointment;
  }

  async create(createAppointmentDto: CreateAppointmentDto) {
    //TODO: if appointment on same time, then error
    const appointment = new this.appointmentModel(createAppointmentDto);
    return appointment.save();
  }

  async update(id: string, updateAppointmentDto: UpdateAppointmentDto) {
    let existingAppointment;

    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      existingAppointment = await this.appointmentModel
        .findOneAndUpdate(
          { _id: id },
          { $set: updateAppointmentDto },
          { new: true },
        )
        .exec();
    }

    if (!existingAppointment) {
      throw new NotFoundException(`Appointment ${id} not found`);
    }

    return existingAppointment;
  }

  async remove(id: string) {
    const appointment = await this.findAppointmentById(id);

    if (!appointment) {
      throw new NotFoundException(`Appointment ${id} not found`);
    }

    return appointment.remove();
  }
}
