import { Controller, Get, Post, Query, Body, Param } from '@nestjs/common';
import { BookListService } from './booklist.service';
import { CreateBookListDto } from './create-booklist.dto';
@Controller('/api/booklist')
export class BookListController {
  constructor(private readonly booklistService: BookListService) {}
  @Get('findall/:name?')
  async searchList(@Param('name') name: string): Promise<Object> {
    return this.booklistService.findAll();
  }
  @Post('created')
  async created(@Body() createBookListDto: CreateBookListDto): Promise<object> {
    return this.booklistService.create(createBookListDto);
  }
}
