import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PagionationQueryDto } from '../common/dto/pagionation-query.dto';
import { Options } from './entities/options.entity';
import { CreateOptionsDto } from './dto/create-options.dto';
import { UpdateOptionsDto } from './dto/update-options.dto';

@Injectable()
export class OptionsService {
  constructor(
    @InjectModel(Options.name) private readonly optionsModel: Model<Options>,
  ) {}

  findAll(paginationQuery: PagionationQueryDto) {
    const { limit, offset } = paginationQuery;
    return this.optionsModel.find().skip(offset).limit(limit).exec();
  }

  async create(createOptionsDto: CreateOptionsDto) {
    const options = new this.optionsModel(createOptionsDto);
    return options.save();
  }

  async update(id: string, updateOptionsDto: UpdateOptionsDto) {
    let existingOptions;

    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      existingOptions = await this.optionsModel
        .findOneAndUpdate(
          { _id: id },
          { $set: updateOptionsDto },
          { new: true },
        )
        .exec();
    }

    if (!existingOptions) {
      throw new NotFoundException(`Options ${id} not found`);
    }

    return existingOptions;
  }

  async remove(id: string) {
    let options;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      options = await this.optionsModel.findById(id).exec();
    }

    if (!options) {
      throw new NotFoundException(`Options ${id} not found`);
    }

    return options.remove();
  }
}
