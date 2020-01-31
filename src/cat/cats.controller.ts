import { Controller, Get, Query, Param } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('/api')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  @Get('findall/:name?')
  async searchList(@Param('name') name: string): Promise<Object> {
    return this.catsService.findAll();
  }
  @Get('created/:name/:desc')
  async created(
    @Param('name') name: string,
    @Param('desc') desc: string,
  ): Promise<Object> {
    const parm = {
      title: name,
      desc: desc,
    };
    return this.catsService.create(parm);
  }
}
