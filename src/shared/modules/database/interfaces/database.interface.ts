import { AddressRepository } from '../repositories/address.repository';
import { CredentialRepository } from '../repositories/credential.repository';
import { UserRepository } from '../repositories/user.repository';

export interface IDatabaseProviders {
  repositories: {
    userRepository: UserRepository;
    addressRepository: AddressRepository;
    credentialRepository: CredentialRepository;
  };
}
