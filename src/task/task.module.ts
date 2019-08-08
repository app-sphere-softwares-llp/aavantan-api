import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { Task } from './models/task.model';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  providers: [TaskService],
  controllers: [TaskController],
  imports: [
    TypegooseModule.forFeature([{
      typegooseClass: Task,
      schemaOptions: {
        collection: 'task'
      }
    }])
  ]
})
export class TaskModule { }
