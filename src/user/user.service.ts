import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  [x: string]: any;
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  findOne(filter: {
    where: { id?: number; fullName?: string; email?: string };
  }): Promise<UserEntity> {
    return this.usersRepository.findOne({ ...filter });
  }

  async create(
    dto: CreateUserDto,
  ): Promise<UserEntity | { warningMessage: string }> {
    const user = new UserEntity();
    const existingByUserName = await this.findOne({
      where: { fullName: dto.fullName },
    });
    const existingByEmail = await this.findOne({
      where: { email: dto.email },
    });
    //Делаю проверку
    if (existingByUserName) {
      return { warningMessage: 'Пользователь с таким именем уже существует' };
    }
    if (existingByEmail) {
      return { warningMessage: 'Пользователь с таким email уже существует' };
    }
    //Хэширую пароль пользователя
    const hashedPassword = await bcrypt.hash(dto.password, 10);

    //Обращаюсь к пользователю и присваиваю значения
    user.fullName = dto.fullName;
    user.email = dto.email;
    user.password = hashedPassword;
    return this.usersRepository.save(dto);
  }
}
