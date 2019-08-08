import { prop, Typegoose } from 'typegoose';

export class BaseModel<T> extends Typegoose {
  @prop()
  id: string;

  @prop()
  createdAt: Date;

  @prop()
  updatedAt: Date;

  @prop()
  updatedBy: string;

  @prop()
  createdBy: string;
}
