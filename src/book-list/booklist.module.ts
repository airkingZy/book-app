import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookListController } from './booklist.controller';
import { BookListService } from './booklist.service';
import { BookListSchema } from './booklist.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'BookList', schema: BookListSchema }]),
  ],
  controllers: [BookListController],
  providers: [BookListService],
})
export class BookListModule {}
