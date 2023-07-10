import { Body, Controller, Post, UseGuards } from '@nestjs/common';

import { PaymentService } from './payment.service';
import { MakePaymentDto } from './dto/make-paymen.dto';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';

@Controller('payment')
export class PaymentController {
  constructor(private paymentService: PaymentService) {}

  // Запрос на оплату
  @UseGuards(AuthenticatedGuard)
  @Post()
  makePayment(@Body() makePaymentDto: MakePaymentDto) {
    return this.paymentService.makePayment(makePaymentDto);
  }
}
