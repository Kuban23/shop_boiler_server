import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';

@Module({
  providers: [AuthService],
  //для реализации логики с сессиями прописывю imports и устанавливаю пакеты (yarn add passport passport-local @nestjs/passport)
  //- эти пакеты нужны для авторизации на сервере сервере
  imports: [UserModule, PassportModule.register({ session: true })],
})
export class AuthModule {}
