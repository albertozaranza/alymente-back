import { Inject, Injectable } from '@nestjs/common';

import { DATABASE_PROVIDER } from 'src/shared/constants/providers';
import { User } from 'src/shared/modules/database/entities/user.entity';
import { IDatabaseProviders } from 'src/shared/modules/database/interfaces/database.interface';

@Injectable()
export class CreateService {
  constructor(
    @Inject(DATABASE_PROVIDER)
    private db: IDatabaseProviders,
  ) {}

  async execute(user: Partial<User>) {
    return await this.db.repositories.userRepository.create(user);
  }
}
