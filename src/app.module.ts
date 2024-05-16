import { Module } from '@nestjs/common';

import { DatabaseModule } from './shared/modules/database/database.module';

import { UserModule } from './modules/users/contexts/user.module';

@Module({
  imports: [DatabaseModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
