import { BaseModel } from '../../models/baseModel';
import { ModelType, prop } from 'typegoose';
import { InstanceType } from 'typegoose';

export class Sprint extends BaseModel<Sprint> {
  @prop()
  email: string;

  @prop()
  password: string;

  static get model(): ModelType<Sprint> {
    return new Sprint().getModelForClass(Sprint, {});
  }

  static createModel(): InstanceType<Sprint> {
    return new this.model();
  }
}
