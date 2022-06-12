import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PagionationQueryDto } from '../common/dto/pagionation-query.dto';
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { ApiTags } from '@nestjs/swagger';
import { GetCurrentUserId } from '../common/decorators';
import mongoose from 'mongoose';

@ApiTags('appointments')
@Controller('appointments')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Get()
  findAll(@Query() paginationQuery: PagionationQueryDto) {
    return this.appointmentsService.findAll(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appointmentsService.findAppointmentById(id);
  }

  @Post()
  create(
    @Body() createAppointmentDto: CreateAppointmentDto,
    @GetCurrentUserId() userId: mongoose.Schema.Types.ObjectId,
  ) {
    return this.appointmentsService.create(createAppointmentDto, userId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAppointmentDto: UpdateAppointmentDto,
  ) {
    return this.appointmentsService.update(id, updateAppointmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appointmentsService.remove(id);
  }
}
