import { Controller, Get, Post, Query, Body, Param } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './create-book.dto';

@Controller('/api/book')
export class BookController {
  constructor(private readonly bookService: BookService) {}
  @Get('findall/:name?')
  async searchList(@Param('name') name: string): Promise<Object> {
    return this.bookService.findAll();
  }
  @Post('created')
  async created(@Body() createBookDto: CreateBookDto): Promise<Object> {
    return this.bookService.create(createBookDto);
  }
}
