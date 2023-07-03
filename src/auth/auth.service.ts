import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  //Метод для валидации пользователя,сессия для авторзации
  // получаю UsersService чтобы вытащить findOne
  constructor(private readonly usersService: UsersService) {}
  // проверяю есть ли пользователь с таким именем и верный ли пароль
  async validateUser(username: string, password: string) {
    // ищу пользователя
    const user = await this.usersService.findOne({ where: { username } });
    // проверка на пользователя
    if (!user) {
      throw new UnauthorizedException('Неверные учетные данные');
    }
    // Если пользователь есть, то делаю проверку пароля
    // у bcrypt вызываю метод compare- он проверяет два пароля: пароль который получили при вводе пользователем и пароля у найденного
    // пользователя в БД, по итогу получаю булевое значение
    const passwordValid = await bcrypt.compare(password, user.password);
    // проверка на валидность пароля
    if (!passwordValid) {
      throw new UnauthorizedException('Не верный логин или пароль');
    }
    // если валидация прошла, возваращаю данные, эти данный я возьму для отображения в Header
    if (user && passwordValid) {
      return {
        userId: user.id,
        username: user.username,
        email: user.email,
      };
    }

    return null;
  }
}
