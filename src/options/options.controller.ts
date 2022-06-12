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
import { PagionationQueryDto } from '../common/dto/pagionation-query.dto';
import { OptionsService } from './options.service';
import { CreateOptionsDto } from './dto/create-options.dto';
import { UpdateOptionsDto } from './dto/update-options.dto';

@ApiTags('options')
@Controller('options')
export class OptionsController {
  constructor(private readonly optionsService: OptionsService) {}

  @Get()
  findAll(@Query() paginationQuery: PagionationQueryDto) {
    return this.optionsService.findAll(paginationQuery);
  }

  @Post()
  create(@Body() createOptionsDto: CreateOptionsDto) {
    return this.optionsService.create(createOptionsDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOptionsDto: UpdateOptionsDto) {
    return this.optionsService.update(id, updateOptionsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.optionsService.remove(id);
  }
}
