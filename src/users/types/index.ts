import { ApiProperty } from '@nestjs/swagger';

export class LoginUserRequest {
  @ApiProperty({ example: 'Ira' })
  username: string;

  @ApiProperty({ example: 'ira123' })
  password: string;
}

export class LoginUserResponse {
  @ApiProperty({
    example: {
      user: {
        userId: 1,
        username: 'Ira',
        password: 'ira123',
      },
    },
  })
  user: {
    userId: number;
    username: string;
    password: string;
  };

  @ApiProperty({ example: 'Вы удачно вошли в систему' })
  message: string;
}

export class LogoutUserResponse {
  @ApiProperty({ example: 'Вы вышли из системы' })
  message: string;
}

export class LoginCheckResponse {
  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: 'Ira' })
  username: string;

  @ApiProperty({ example: 'ira@gmail.com' })
  email: string;
}

export class SignupResponse {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Ivan' })
  username: string;

  @ApiProperty({
    example: '$2b$10$FyioOnMUmh2MsW2.wutG3.LQCIf6l9a.1xmpk5o9U15KQkGHTFOxm',
  })
  password: string;

  @ApiProperty({ example: 'ira@gmail.com' })
  email: string;

  @ApiProperty({ example: '2023-07-04T09:56:55.667Z' })
  createdAt: string;

  @ApiProperty({ example: '2023-07-04T09:56:55.667Z' })
  updatedAt: string;
}
