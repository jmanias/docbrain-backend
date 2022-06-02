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
import { Public } from '../common/decorators';

@ApiTags('surgeries')
@Controller('surgeries')
export class SurgeriesController {
  constructor(private readonly surgeriesService: SurgeriesService) {}

  @Public()
  @Get()
  findAll(@Query() paginationQuery: PagionationQueryDto) {
    return this.surgeriesService.findAll(paginationQuery);
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.surgeriesService.findSurgeryById(id);
  }

  @Public()
  @Post()
  create(@Body() createSurgeryDto: CreateSurgeryDto) {
    return this.surgeriesService.create(createSurgeryDto);
  }

  @Public()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSurgeryDto: UpdateSurgeryDto) {
    return this.surgeriesService.update(id, updateSurgeryDto);
  }

  @Public()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.surgeriesService.remove(id);
  }
}
