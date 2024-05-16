import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  age: number;

  @ApiProperty()
  @Column()
  cpf: string;

  @ApiProperty()
  @Column()
  rg: string;

  @ApiProperty()
  @Column({ name: 'birth_date' })
  birthDate: Date;

  @ApiProperty()
  @Column()
  gender: string;

  @ApiProperty()
  @Column()
  sign: string;

  @ApiProperty()
  @Column()
  mother: string;

  @ApiProperty()
  @Column()
  father: string;

  @ApiProperty()
  @Column()
  landline: string;

  @ApiProperty()
  @Column()
  phone: string;

  @ApiProperty()
  @Column()
  height: number;

  @ApiProperty()
  @Column()
  weight: number;

  @ApiProperty()
  @Column({ name: 'blood_type' })
  bloodType: string;

  @ApiProperty()
  @Column()
  color: string;

  @ApiProperty()
  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @ApiProperty()
  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deletedAt: Date | null;
}
