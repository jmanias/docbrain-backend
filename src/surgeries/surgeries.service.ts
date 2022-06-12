import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Surgery } from './entities/surgery.entity';
import mongoose, { Model } from 'mongoose';
import { PagionationQueryDto } from '../common/dto/pagionation-query.dto';
import { UpdateSurgeryDto } from './dto/update-surgery.dto';
import { CreateSurgeryDto } from './dto/create-surgery.dto';
import { PatientsService } from '../patients/patients.service';

@Injectable()
export class SurgeriesService {
  constructor(
    @InjectModel(Surgery.name)
    private readonly surgeryModel: Model<Surgery>,
    private readonly patientsService: PatientsService,
  ) {}

  findAll(paginationQuery: PagionationQueryDto) {
    const { limit, offset } = paginationQuery;
    return this.surgeryModel.find().skip(offset).limit(limit).exec();
  }

  async findSurgeryById(id: string) {
    let surgery;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      surgery = await this.surgeryModel
        .findById(id)
        .populate('user', 'firstName lastName email role')
        .populate('patient')
        .exec();
    }
    if (!surgery) {
      throw new NotFoundException(`Surgery ${id} not found`);
    }
    return surgery;
  }

  async create(
    createSurgeryDto: CreateSurgeryDto,
    userId: mongoose.Schema.Types.ObjectId,
  ) {
    await this.patientsService.findPatientById(createSurgeryDto.patient);

    //TODO: if surgery on same time, then error
    const surgery = new this.surgeryModel({
      ...createSurgeryDto,
      user: userId,
    });
    return surgery.save();
  }

  async update(id: string, updateSurgeryDto: UpdateSurgeryDto) {
    let existingSurgery;

    if (updateSurgeryDto.patient) {
      await this.patientsService.findPatientById(updateSurgeryDto.patient);
    }

    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      existingSurgery = await this.surgeryModel
        .findOneAndUpdate(
          { _id: id },
          { $set: updateSurgeryDto },
          { new: true },
        )
        .exec();
    }

    if (!existingSurgery) {
      throw new NotFoundException(`Surgery ${id} not found`);
    }

    return existingSurgery;
  }

  async remove(id: string) {
    const surgery = await this.findSurgeryById(id);

    if (!surgery) {
      throw new NotFoundException(`Surgery ${id} not found`);
    }

    return surgery.remove();
  }
}
