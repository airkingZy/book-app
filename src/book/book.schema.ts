import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema(
  {
    bookname: { type: String, unique: true },
    author: String,
    status: String,
    updateTime: String,
  },
  { collection: 'book', versionKey: false },
);
