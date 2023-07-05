import { Controller, Get, Query, UseGuards } from '@nestjs/common';

import { BoilerPartsService } from './boiler_parts.service';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';

@Controller('boiler-parts')
export class BoilerPartsController {
  constructor(private readonly boilerPartsService: BoilerPartsService) {}

  // получаю элементы boiler-parts
  @Get()
  @UseGuards(AuthenticatedGuard)
  paginateAndFilter(@Query() query) {
    return this.boilerPartsService.paginateAndFilter(query);
  }
}
