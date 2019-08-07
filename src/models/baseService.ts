import { ModelType, Typegoose } from 'typegoose';

export class BaseService<T extends Typegoose> {
  // tslint:disable-next-line:variable-name
  protected _model: ModelType<T>;

  async findAll(filter: any = {}) {
    return this._model.find(filter).exec();
  }
}
