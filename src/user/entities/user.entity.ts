// export class User {}

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail } from 'class-validator';

@Entity('users')
export class UserEntity {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  @IsEmail()
  email: string;

  @Column({ nullable: true })
  password: string;

  //   @Column({ default: true })
  //   isActive: boolean;
}
