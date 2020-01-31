import * as mongoose from 'mongoose';

export const BookListSchema = new mongoose.Schema(
  {
    bookname: String,
    title: String,
    content: String,
  },
  { collection: 'booklist', versionKey: false },
);
