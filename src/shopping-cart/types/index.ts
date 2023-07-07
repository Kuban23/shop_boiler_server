import { ApiProperty } from '@nestjs/swagger';

// описал все поля для типа элемента корзины
class ShoppingCartItem {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Omnis quis.' })
  name: string;

  @ApiProperty({ example: 2500 })
  price: number;

  @ApiProperty({
    example: 'https://loremflickr.com/640/480/technics?random=0826857116',
  })
  image: string;

  @ApiProperty({ example: 5 })
  in_stock: number;

  @ApiProperty({ example: 'Azure' })
  parts_manufacturer: string;

  @ApiProperty({ example: 'Bongioanni' })
  boiler_manufacturer: string;

  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: 1 })
  partId: number;

  @ApiProperty({ example: 3 })
  count: number;

  @ApiProperty({ example: 3 })
  total_price: number;

  @ApiProperty({ example: '2023-07-07T10:50:31.309Z' })
  createdAt: string;

  @ApiProperty({ example: '2023-07-07T10:50:31.309Z' })
  updatedAt: string;
}

//эндпоинты для shopping-cart.controller
export class GetAllResponse extends ShoppingCartItem {}
export class AddToCardResponse extends ShoppingCartItem {}
export class UpdateCountResponse {
  @ApiProperty({ example: 1 })
  count: number;
}
export class UpdateCountRequest {
  @ApiProperty({ example: 1 })
  count: number;
}
export class TotalPriceResponse {
  @ApiProperty({ example: 1000 })
  total_price: number;
}
export class TotalPriceRequest {
  @ApiProperty({ example: 1000 })
  total_price: number;
}
