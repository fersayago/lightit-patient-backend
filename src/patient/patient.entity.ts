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
  @IsPhoneNumber(undefined, { message: 'Must be a valid phone number' })
  phoneNumber: string;

  @Column()
  @IsNotEmpty()
  documentPhoto: string; // store the path to the photo
}
