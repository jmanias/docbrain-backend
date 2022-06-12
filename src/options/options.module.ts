import { Module } from '@nestjs/common';
import { OptionsService } from './options.service';
import { OptionsController } from './options.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Options, OptionSchema } from './entities/options.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Options.name,
        schema: OptionSchema,
      },
    ]),
  ],
  providers: [OptionsService],
  controllers: [OptionsController],
})
export class OptionsModule {}
