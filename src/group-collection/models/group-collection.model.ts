import { BaseModel } from '../../models/baseModel';
import { ModelType, prop } from 'typegoose';
import { InstanceType } from 'typegoose';

export class GroupCollection extends BaseModel<GroupCollection> {
  @prop()
  email: string;

  @prop()
  password: string;

  static get model(): ModelType<GroupCollection> {
    return new GroupCollection().getModelForClass(GroupCollection, {});
  }

  static createModel(): InstanceType<GroupCollection> {
    return new this.model();
  }
}
