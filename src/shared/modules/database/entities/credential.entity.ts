import bcrypt from 'bcrypt';

import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

const HASH_SALT = 10;

@Entity()
export class Credential {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  email: string;

  @ApiProperty()
  @ApiHideProperty()
  @Column({ select: false })
  password: string;

  @ApiProperty()
  @CreateDateColumn({ name: 'created_at', type: 'datetime' })
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn({ name: 'updated_at', type: 'datetime' })
  updatedAt: Date;

  @ApiProperty()
  @DeleteDateColumn({ name: 'deleted_at', type: 'datetime', nullable: true })
  deletedAt: Date | null;

  @OneToOne(() => User, (user) => user.credential)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @BeforeInsert()
  @BeforeUpdate()
  async encryptPassword() {
    this.password = await bcrypt.hash(this.password, HASH_SALT);
  }
}
