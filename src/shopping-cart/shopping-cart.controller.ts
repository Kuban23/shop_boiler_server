import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ShoppingCartService } from './shopping-cart.service';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { AddToCartDto } from './dto/add-to-cart.dto';

@Controller('shopping-cart')
export class ShoppingCartController {
  constructor(private readonly shoppingCartService: ShoppingCartService) {}

  // получаю все элементы в корзине по userId
  @UseGuards(AuthenticatedGuard)
  @Get(':id')
  getAll(@Param('id') userId: string) {
    return this.shoppingCartService.findAll(userId);
  }

  // добавляю товар в корзину
  @UseGuards(AuthenticatedGuard)
  @Post('/add')
  addToCar(@Body() addToCartDto: AddToCartDto) {
    return this.shoppingCartService.add(addToCartDto);
  }

  // изменяю поле count
  @UseGuards(AuthenticatedGuard)
  @Patch('/count/:id')
  updateCount(
    @Body() { count }: { count: number },
    @Param('id') partId: string,
  ) {
    return this.shoppingCartService.updateCount(count, partId);
  }

  //обнавляю тотал-прайс
  @UseGuards(AuthenticatedGuard)
  @Patch('/total-price/:id')
  updateTotalPrice(
    @Body() { total_price }: { total_price: number },
    @Param('id') partId: string,
  ) {
    return this.shoppingCartService.updateTotalPrice(total_price, partId);
  }

  // удаляю один товар из корзины
  @UseGuards(AuthenticatedGuard)
  @Delete('/one/:id')
  removeOne(@Param('id') partId: string) {
    return this.shoppingCartService.remove(partId);
  }

  // удаляю все товары из корзины
  @UseGuards(AuthenticatedGuard)
  @Delete('/all/:id')
  removeAll(@Param('id') userId: string) {
    return this.shoppingCartService.removeAll(userId);
  }
}
