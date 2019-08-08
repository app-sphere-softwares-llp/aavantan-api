import { Controller, Body, Post, Get } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './models/task.model';

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) {

    }
    @Get()
    async findAll(): Promise<Task[] | null> {
        return await this.taskService.get();
    }

    @Post()
    async create(@Body() user: Task): Promise<Task> {
        return await this.taskService.add(user);
    }
}
