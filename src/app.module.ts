import { Module } from '@nestjs/common';

import { DatabaseModule } from './shared/modules/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
