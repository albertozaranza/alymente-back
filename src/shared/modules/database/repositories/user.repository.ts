import { DataSource, Repository } from 'typeorm';

import { User } from '../entities/user.entity';

export class UserRepository {
  private repository: Repository<User>;

  constructor(datasource: DataSource) {
    this.repository = datasource.getRepository(User);
  }

  async findOneById(id: string): Promise<User> {
    return await this.repository.findOneBy({ id });
  }
}
