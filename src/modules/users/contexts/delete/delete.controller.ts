import { Controller, Delete, Param, ParseUUIDPipe } from '@nestjs/common';

import { DeleteService } from './delete.service';

import { User } from 'src/shared/modules/database/entities/user.entity';

@Controller('users')
export class DeleteController {
  constructor(private readonly deleteService: DeleteService) {}

  @Delete(':id')
  handle(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.deleteService.execute(id);
  }
}
