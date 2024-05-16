import 'dotenv/config';
import { join } from 'path';

import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'sqlite',
  database: 'infra/alymente.db',
  synchronize: true,
  logging: ['error'],
  entities: [
    join(
      './src/shared/modules/database',
      'entities/integration',
      '*.entity.{ts,js}',
    ),
  ],
  migrations: [join(__dirname, 'migrations', '*{.ts,.js}')],
});
