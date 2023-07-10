import { ForbiddenException, Injectable } from '@nestjs/common';
import axios from 'axios';

import { MakePaymentDto } from './dto/make-paymen.dto';

@Injectable()
export class PaymentService {
  // Запрос на оплату
  async makePayment(makePaymentDto: MakePaymentDto) {
    try {
      const { data } = await axios({
        method: 'POST',
        url: 'https://api.yookassa.ru/v3/payments',
        headers: {
          'Content-Type': 'application/json',
          'Idempotence-Key': Date.now(),
        },
        auth: {
          username: '229694',
          password: 'test_9rS7NKx1QcFhPl50Pn64HCEcgA8VQYEDDNDKbAMkN0E',
        },
        data: {
          amount: {
            value: makePaymentDto.amount,
            currency: 'RUB',
          },
          capture: true,
          confirmation: {
            type: 'redirect',
            return_url: 'http://localhost:3001/order',
          },
          description: 'Заказ №-1',
        },
      });

      return data;
    } catch (error) {
      throw new ForbiddenException(error);
    }
  }
}
