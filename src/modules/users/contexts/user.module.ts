import { Module } from '@nestjs/common';

import { DetailController } from './detail/detail.controller';
import { ListController } from './list/list.controller';

import { DetailService } from './detail/detail.service';
import { ListService } from './list/list.service';

import { DatabaseModule } from 'src/shared/modules/database/database.module';

@Module({
  controllers: [DetailController, ListController],
  providers: [DetailService, ListService],
  imports: [DatabaseModule],
})
export class UserModule {}
