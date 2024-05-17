import { Body, Controller, Post } from '@nestjs/common';

import { CreateService } from './create.service';

import { User } from 'src/shared/modules/database/entities/user.entity';

@Controller('users')
export class CreateController {
  constructor(private readonly createService: CreateService) {}

  @Post()
  handle(@Body() user: Partial<User>) {
    return this.createService.execute(user);
  }
}
