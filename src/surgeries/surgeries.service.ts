import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Surgery } from './entities/surgery.entity';
import { Model } from 'mongoose';
import { PagionationQueryDto } from '../common/dto/pagionation-query.dto';
import { UpdateSurgeryDto } from './dto/update-surgery.dto';
import { CreateSurgeryDto } from './dto/create-surgery.dto';

@Injectable()
export class SurgeriesService {
  constructor(
    @InjectModel(Surgery.name) private readonly surgeryModel: Model<Surgery>,
  ) {}

  findAll(paginationQuery: PagionationQueryDto) {
    const { limit, offset } = paginationQuery;
    return this.surgeryModel.find().skip(offset).limit(limit).exec();
  }

  async findSurgeryById(id: string) {
    let surgery;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      surgery = await this.surgeryModel.findById(id).exec();
    }
    if (!surgery) {
      throw new NotFoundException(`Surgery ${id} not found`);
    }
    return surgery;
  }

  async create(createSurgeryDto: CreateSurgeryDto) {
    //TODO: if surgery on same time, then error
    const surgery = new this.surgeryModel(createSurgeryDto);
    return surgery.save();
  }

  async update(id: string, updateSurgeryDto: UpdateSurgeryDto) {
    let existingSurgery;

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
