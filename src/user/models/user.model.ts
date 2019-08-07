import { BaseModel } from '../../models/baseModel';
import { ModelType, prop } from 'typegoose';
import { InstanceType } from 'typegoose';

export class User extends BaseModel<User> {
  @prop()
  email: string;

  @prop()
  password: string;

  static get model(): ModelType<User> {
    return new User().getModelForClass(User, {});
  }

  static createModel(): InstanceType<User> {
    return new this.model();
  }
}
