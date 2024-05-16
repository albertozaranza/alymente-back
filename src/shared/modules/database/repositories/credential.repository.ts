import { DataSource, Repository } from 'typeorm';

import { Credential } from '../entities/credential.entity';

export class CredentialRepository {
  private repository: Repository<Credential>;

  constructor(datasource: DataSource) {
    this.repository = datasource.getRepository(Credential);
  }

  async create(credential: Partial<Credential>): Promise<Credential> {
    const newCredential = this.repository.create(credential);

    return await this.repository.save(newCredential);
  }
}
