import { Document } from 'mongoose';

export interface BookList extends Document {
  readonly bookname: string;
  readonly title: string;
  readonly content: string;
}
