import { Body, Controller, Param, ParseUUIDPipe, Patch } from '@nestjs/common';
import { UpdateService } from './update.service';

import { User } from 'src/shared/modules/database/entities/user.entity';

@Controller('users')
export class UpdateController {
  constructor(private readonly updateService: UpdateService) {}

  @Patch(':id')
  handle(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() user: Partial<User>,
  ) {
    return this.updateService.execute(id, user);
  }
}
