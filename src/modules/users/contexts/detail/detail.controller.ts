import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { DetailService } from './detail.service';

@Controller('users')
export class DetailController {
  constructor(private readonly detailService: DetailService) {}

  @Get(':id')
  handle(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.detailService.execute(id);
  }
}
