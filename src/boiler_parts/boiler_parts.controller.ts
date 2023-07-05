import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';

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

  //получаю один продукт по id
  @UseGuards(AuthenticatedGuard)
  @Get('find/:id')
  getOne(@Param('id') id: string) {
    return this.boilerPartsService.findOne(id);
  }

  // получаю бестцеллеры
  @UseGuards(AuthenticatedGuard)
  @Get('bestsellers')
  getBestseller() {
    return this.boilerPartsService.bestsellers();
  }

  // получаю новые товары
  @UseGuards(AuthenticatedGuard)
  @Get('new')
  getNew() {
    return this.boilerPartsService.new();
  }
}
