import { DataSource, Repository } from 'typeorm';

import { Address } from '../entities/address.entity';

export class AddressRepository {
  private repository: Repository<Address>;

  constructor(datasource: DataSource) {
    this.repository = datasource.getRepository(Address);
  }

  async create(address: Partial<Address>): Promise<Address> {
    const newAddress = this.repository.create(address);

    return await this.repository.save(newAddress);
  }
}
