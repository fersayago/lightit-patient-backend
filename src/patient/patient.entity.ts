import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  name: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  @IsPhoneNumber('any', { message: 'Invalid phone number' })
  phoneNumber: string;

  @Column()
  @IsNotEmpty()
  documentPhoto: string; // store the path to the photo
}
