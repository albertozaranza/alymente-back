import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';

import { Address } from './address.entity';
import { Credential } from './credential.entity';

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
  @CreateDateColumn({ name: 'created_at', type: 'datetime' })
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn({ name: 'updated_at', type: 'datetime' })
  updatedAt: Date;

  @ApiProperty()
  @DeleteDateColumn({ name: 'deleted_at', type: 'datetime', nullable: true })
  deletedAt: Date | null;

  @OneToOne(() => Credential, (credential) => credential.user)
  credential: Credential;

  @OneToMany(() => Address, (address) => address.user)
  addresses: Address[];
}
