import {Body, Controller, Get, Post} from '@nestjs/common';
import {User} from './models/user.model';
import {UserService} from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {

    }

    @Get()
    async findAll(): Promise<User[] | null> {
        return await this.userService.get();
    }

    @Post()
    async create(@Body() user: User): Promise<User> {
        return await this.userService.add(user);
    }

}
