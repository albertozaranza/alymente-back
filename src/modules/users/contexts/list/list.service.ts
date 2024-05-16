import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { DATABASE_PROVIDER } from 'src/shared/constants/providers';
import { IDatabaseProviders } from 'src/shared/modules/database/interfaces/database.interface';

@Injectable()
export class ListService {
  constructor(
    @Inject(DATABASE_PROVIDER)
    private db: IDatabaseProviders,
  ) {}

  async execute() {
    return await this.db.repositories.userRepository.list();
  }
}
