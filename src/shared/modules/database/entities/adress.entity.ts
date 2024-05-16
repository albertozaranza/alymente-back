import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Address {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  cep: string;

  @ApiProperty()
  @Column()
  address: string;

  @ApiProperty()
  @Column()
  number: string;

  @ApiProperty()
  @Column()
  neighborhood: string;

  @ApiProperty()
  @Column()
  city: string;

  @ApiProperty()
  @Column()
  state: string;

  @ApiProperty()
  @CreateDateColumn({ name: 'created_at', type: 'datetime' })
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn({ name: 'updated_at', type: 'datetime' })
  updatedAt: Date;

  @ApiProperty()
  @DeleteDateColumn({ name: 'deleted_at', type: 'datetime', nullable: true })
  deletedAt: Date | null;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
