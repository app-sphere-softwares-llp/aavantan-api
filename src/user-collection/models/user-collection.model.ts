import { BaseModel } from '../../models/baseModel';
import { ModelType, prop } from 'typegoose';
import { InstanceType } from 'typegoose';

export class UserCollection extends BaseModel<UserCollection> {
  @prop()
  email: string;

  @prop()
  password: string;

  static get model(): ModelType<UserCollection> {
    return new UserCollection().getModelForClass(UserCollection, {});
  }

  static createModel(): InstanceType<UserCollection> {
    return new this.model();
  }
}
