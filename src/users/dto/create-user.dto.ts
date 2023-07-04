import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Ira' })
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({ example: 'ira123' })
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty({ example: 'ira@gmail.com' })
  @IsNotEmpty()
  readonly email: string;
}
