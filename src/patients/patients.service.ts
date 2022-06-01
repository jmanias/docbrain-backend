import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Patient } from './entities/patient.entity';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { CreatePatientDto } from './dto/create-patient.dto';
import { PagionationQueryDto } from '../common/dto/pagionation-query.dto';

@Injectable()
export class PatientsService {
  constructor(
    @InjectModel(Patient.name) private readonly patientModel: Model<Patient>,
  ) {}

  findAll(paginationQuery: PagionationQueryDto) {
    const { limit, offset } = paginationQuery;
    return this.patientModel.find().skip(offset).limit(limit).exec();
  }

  async findPatientById(id: string) {
    let patient;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      patient = await this.patientModel.findById(id).exec();
    }
    if (!patient) {
      throw new NotFoundException(`Patient ${id} not found`);
    }
    return patient;
  }

  async create(createPatientDto: CreatePatientDto) {
    if (
      await this.patientModel.findOne({
        insuranceNumber: createPatientDto.insuranceNumber,
      })
    ) {
      throw new ConflictException(
        `Patient with Insurance Number ${createPatientDto.insuranceNumber} already exists`,
      );
    }

    const patient = new this.patientModel(createPatientDto);
    return patient.save();
  }

  async update(id: string, updatePatientDto: UpdatePatientDto) {
    let existingPatient;

    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      existingPatient = await this.patientModel
        .findOneAndUpdate(
          { _id: id },
          { $set: updatePatientDto },
          { new: true },
        )
        .exec();
    }

    if (!existingPatient) {
      throw new NotFoundException(`Patient ${id} not found`);
    }

    return existingPatient;
  }

  async remove(id: string) {
    const patient = await this.findPatientById(id);

    if (!patient) {
      throw new NotFoundException(`Patient ${id} not found`);
    }

    return patient.remove();
  }
}
