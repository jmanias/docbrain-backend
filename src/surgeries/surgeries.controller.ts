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
import { ApiTags } from '@nestjs/swagger';
import { SurgeriesService } from './surgeries.service';
import { PagionationQueryDto } from '../common/dto/pagionation-query.dto';
import { CreateSurgeryDto } from './dto/create-surgery.dto';
import { UpdateSurgeryDto } from './dto/update-surgery.dto';
import { GetCurrentUserId } from '../common/decorators';
import mongoose from 'mongoose';

@ApiTags('surgeries')
@Controller('surgeries')
export class SurgeriesController {
  constructor(private readonly surgeriesService: SurgeriesService) {}

  @Get()
  findAll(@Query() paginationQuery: PagionationQueryDto) {
    return this.surgeriesService.findAll(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.surgeriesService.findSurgeryById(id);
  }

  @Post()
  create(
    @Body() createSurgeryDto: CreateSurgeryDto,
    @GetCurrentUserId() userId: mongoose.Schema.Types.ObjectId,
  ) {
    return this.surgeriesService.create(createSurgeryDto, userId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSurgeryDto: UpdateSurgeryDto) {
    return this.surgeriesService.update(id, updateSurgeryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.surgeriesService.remove(id);
  }
}
