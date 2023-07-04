import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BoilerParts } from './boiler-parts.model';

import { BoilerPartsController } from './boiler_parts.controller';
import { BoilerPartsService } from './boiler_parts.service';

@Module({
  imports: [SequelizeModule.forFeature([BoilerParts])],
  controllers: [BoilerPartsController],
  providers: [BoilerPartsService],
  exports: [BoilerPartsService],
})
export class BoilerPartsModule {}
