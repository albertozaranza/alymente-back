import { Controller, Get } from '@nestjs/common';
import { ListService } from './list.service';

@Controller('users')
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Get()
  handle() {
    return this.listService.execute();
  }
}
