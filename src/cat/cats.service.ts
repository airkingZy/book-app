import { Model } from 'mongoose';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './cat.interface';
import { CreateCatDto } from './create-cat.dto';

@Injectable()
export class CatsService {
  constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) {}

  async create(createCatDto: CreateCatDto): Promise<any> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }
  async findAll(): Promise<Cat[]> {
    // const createdCat = new this.catModel({ title: 'newTitle', desc: 'knol' });
    // await createdCat.save();
    let res = await this.catModel.find().exec();
    const io = await res.map(item => {
      item['date'] = new Date();
      return item;
    });
    return io;
  }
  async createUser(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }
}
