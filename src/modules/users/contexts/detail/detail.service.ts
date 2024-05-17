import { Inject, Injectable } from '@nestjs/common';

import { DATABASE_PROVIDER } from 'src/shared/constants/providers';
import { IDatabaseProviders } from 'src/shared/modules/database/interfaces/database.interface';

@Injectable()
export class DetailService {
  constructor(
    @Inject(DATABASE_PROVIDER)
    private db: IDatabaseProviders,
  ) {}

  async execute(id: string) {
    return await this.db.repositories.userRepository.findOneById(id);
  }
}
