import { Injectable } from '@nestjs/common';
import { Task } from './models/task.model';
import { ModelType, Typegoose } from 'typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { BaseService } from 'src/models/baseService';

@Injectable()
export class TaskService extends BaseService<Task> {
    constructor(@InjectModel(Task) private readonly taskModel: ModelType<Task>) {
        super();
    }

    async add(user: Task): Promise<Task> {
        const createdTask = new this.taskModel(user);
        return await createdTask.save();
    }

    async get(): Promise<Task[] | null> {
        return await this.taskModel.find().exec();
    }
}
