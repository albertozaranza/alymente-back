import { Module, Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';

import * as path from 'path';

import { DATABASE_PROVIDER } from 'src/shared/constants/providers';

import { IDatabaseProviders } from './interfaces/database.interface';

import { UserRepository } from './repositories/user.repository';
import { AddressRepository } from './repositories/address.repository';
import { CredentialRepository } from './repositories/credential.repository';

const databaseProviders: Provider[] = [
  {
    provide: DATABASE_PROVIDER,
    useFactory: async (): Promise<IDatabaseProviders> => {
      try {
        const dataSource = new DataSource({
          type: 'sqlite',
          database: 'infra/alymente.db',
          synchronize: true,
          logging: ['error'],
          entities: [path.join(__dirname, 'entities', '*.entity.{ts,js}')],
          migrations: [path.join(__dirname, 'migrations', '*{.ts,.js}')],
        });

        await dataSource.initialize();

        return {
          repositories: {
            userRepository: new UserRepository(dataSource),
            addressRepository: new AddressRepository(dataSource),
            credentialRepository: new CredentialRepository(dataSource),
          },
        };
      } catch (error) {
        throw error;
      }
    },
  },
];

@Module({
  providers: databaseProviders,
  exports: databaseProviders,
})
export class DatabaseModule {}
