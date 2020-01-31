import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
// import { CatsModule } from './cat/cats.module';
import { BookListModule } from './book-list/booklist.module';
import { BookModule } from './book/book.module';
//
let dbconfg = 'mongodb://test:!QAZ%40wsx@127.0.0.1:27017/test';
if (process.env.NODE_ENV === 'production') {
  dbconfg = 'mongodb://stone:!QAZ%40wsx@127.0.0.1:27017/stonebook';
} else {
  console.log(process.env.NODE_ENV);
}
@Module({
  imports: [
    MongooseModule.forRoot(
      dbconfg,
      // 'mongodb://stone:!QAZ%40wsx@127.0.0.1:27017/stonebook',
      {
        // MongooseModule.forRoot('mongodb://test:!QAZ%40wsx@127.0.0.1:27017/test', {
        useCreateIndex: true,
        useNewUrlParser: true,
      },
    ),
    // CatsModule,
    BookListModule,
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
