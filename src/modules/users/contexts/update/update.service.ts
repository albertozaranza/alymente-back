import { Inject, Injectable } from '@nestjs/common';

import { User } from 'src/shared/modules/database/entities/user.entity';
import { DATABASE_PROVIDER } from 'src/shared/constants/providers';
import { IDatabaseProviders } from 'src/shared/modules/database/interfaces/database.interface';

@Injectable()
export class UpdateService {
  constructor(
    @Inject(DATABASE_PROVIDER)
    private db: IDatabaseProviders,
  ) {}

  async execute(id: string, user: Partial<User>) {
    return await this.db.repositories.userRepository.update(id, user);
  }
}
