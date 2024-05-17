import { Module } from '@nestjs/common';

import { DetailController } from './detail/detail.controller';
import { ListController } from './list/list.controller';
import { CreateController } from './create/create.controller';
import { DeleteController } from './delete/delete.controller';
import { UpdateController } from './update/update.controller';

import { DetailService } from './detail/detail.service';
import { ListService } from './list/list.service';
import { CreateService } from './create/create.service';
import { DeleteService } from './delete/delete.service';
import { UpdateService } from './update/update.service';

import { DatabaseModule } from 'src/shared/modules/database/database.module';

@Module({
  controllers: [
    DetailController,
    ListController,
    CreateController,
    DeleteController,
    UpdateController,
  ],
  providers: [
    DetailService,
    ListService,
    CreateService,
    DeleteService,
    UpdateService,
  ],
  imports: [DatabaseModule],
})
export class UserModule {}
