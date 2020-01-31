import { Document } from 'mongoose';

export interface Cat extends Document {
  readonly title: string;
  readonly desc: string;
}
