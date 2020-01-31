import { Model } from 'mongoose';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BookList } from './booklist.interface';
import { CreateBookListDto } from './create-booklist.dto';

@Injectable()
export class BookListService {
  constructor(
    @InjectModel('BookList') private readonly booklistModel: Model<BookList>,
  ) {}

  async create(CreateBookListDto: CreateBookListDto): Promise<BookList> {
    const createdCat = new this.booklistModel(CreateBookListDto);
    return createdCat.save();
  }
  async findAll(): Promise<BookList[]> {
    // const createdCat = new this.catModel({ title: 'newTitle', desc: 'knol' });
    // await createdCat.save();
    let res = await this.booklistModel.find().exec();
    const io = await res.map(item => {
      item['date'] = new Date();
      return item;
    });
    return io;
  }
  async createUser(): Promise<BookList[]> {
    return this.booklistModel.find().exec();
  }
}
