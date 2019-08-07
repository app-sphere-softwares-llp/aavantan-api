import {Injectable} from '@nestjs/common';
import {User} from './models/user.model';
import {ModelType} from 'typegoose';
import {InjectModel} from 'nestjs-typegoose';
import {BaseService} from '../models/baseService';

@Injectable()
export class UserService extends BaseService<User> {
    constructor(@InjectModel(User) private readonly userModel: ModelType<User>) {
        super();
    }

    async add(user: User): Promise<User> {
        const createdUser = new this.userModel(user);
        return await createdUser.save();
    }

    async get(): Promise<User[] | null> {
        return await this.userModel.find().exec();
    }

}
