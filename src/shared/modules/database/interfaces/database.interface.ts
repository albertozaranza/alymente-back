import { UserRepository } from '../repositories/user.repository';

export interface IDatabaseProviders {
  repositories: {
    userRepository: UserRepository;
  };
}
