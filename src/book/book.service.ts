import { Model } from 'mongoose';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './book.interface';
import { CreateBookDto } from './create-book.dto';

@Injectable()
export class BookService {
  constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {}

  async create(CreateBookDto: CreateBookDto): Promise<Book> {
    const createdCat = new this.bookModel(CreateBookDto);
    return createdCat.save();
  }
  async findAll(): Promise<Book[]> {
    // const createdCat = new this.catModel({ title: 'newTitle', desc: 'knol' });
    // await createdCat.save();
    let res = await this.bookModel.find().exec();
    const io = await res.map(item => {
      item['date'] = new Date();
      return item;
    });
    return io;
  }
  async createUser(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }
}
