import { Document } from 'mongoose';

export interface Book extends Document {
  readonly bookname: string;
  readonly author: string;
  readonly status: string;
  readonly updateTime: string;
}
