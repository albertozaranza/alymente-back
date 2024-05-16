import { DataSource, Repository } from 'typeorm';

import { User } from '../entities/user.entity';

export class UserRepository {
  private repository: Repository<User>;

  constructor(datasource: DataSource) {
    this.repository = datasource.getRepository(User);
  }

  async list(): Promise<User[]> {
    return this.repository.find();
  }

  async findOneById(id: string): Promise<User> {
    return this.repository.findOneBy({ id });
  }

  async create(user: Partial<User>): Promise<User> {
    const newUser = this.repository.create(user);

    return await this.repository.save(newUser);
  }
}
