import { DataSource } from 'typeorm';

import { UserRepository } from 'src/shared/modules/database/repositories/user.repository';
import { AddressRepository } from 'src/shared/modules/database/repositories/address.repository';
import { CredentialRepository } from 'src/shared/modules/database/repositories/credential.repository';

import { User } from 'src/shared/modules/database/entities/user.entity';
import { Credential } from 'src/shared/modules/database/entities/credential.entity';
import { Address } from 'src/shared/modules/database/entities/address.entity';

import data from '../data/data.json';

export default async (dataSource: DataSource) => {
  try {
    const userRepository = new UserRepository(dataSource);
    const addressRepository = new AddressRepository(dataSource);
    const credentialRepository = new CredentialRepository(dataSource);

    await Promise.all(
      data.map(async (item) => {
        const user: Partial<User> = {
          name: item.nome,
          age: item.idade,
          cpf: item.cpf,
          rg: item.rg,
          birthDate: new Date(item.data_nasc),
          gender: item.sexo,
          sign: item.signo,
          mother: item.mae,
          father: item.pai,
          landline: item.telefone_fixo,
          phone: item.celular,
          height: parseInt(item.altura, 10),
          weight: item.peso,
          bloodType: item.tipo_sanguineo,
          color: item.cor,
        };

        const credential: Partial<Credential> = {
          email: item.email,
          password: item.senha,
        };

        const address: Partial<Address> = {
          address: item.endereco,
          number: item.numero.toString(),
          neighborhood: item.bairro,
          city: item.cidade,
          state: item.estado,
          zipCode: item.cep,
        };

        const newUser = await userRepository.create(user);
        await credentialRepository.create({ ...credential, user: newUser });
        await addressRepository.create({ ...address, user: newUser });
      }),
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
