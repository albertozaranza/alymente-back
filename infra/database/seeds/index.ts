import { dataSource } from '../orm.config';

import createUsers from './createUsers';

(async () => {
  await dataSource.initialize();

  await createUsers(dataSource);

  await dataSource.destroy();
  process.exit(0);
})();
