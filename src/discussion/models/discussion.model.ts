import { BaseModel } from '../../models/baseModel';
import { ModelType, prop } from 'typegoose';
import { InstanceType } from 'typegoose';

export class Discussion extends BaseModel<Discussion> {
  @prop()
  email: string;

  @prop()
  password: string;

  static get model(): ModelType<Discussion> {
    return new Discussion().getModelForClass(Discussion, {});
  }

  static createModel(): InstanceType<Discussion> {
    return new this.model();
  }
}
