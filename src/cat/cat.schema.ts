import * as mongoose from 'mongoose';

export const CatSchema = new mongoose.Schema(
  {
    title: { type: String, unique: true },
    desc: String,
  },
  { collection: 'nestCat', versionKey: false },
);
