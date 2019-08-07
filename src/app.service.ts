import { Injectable } from '@nestjs/common';
import { User } from './user/models/user.model';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from 'typegoose';

@Injectable()
export class AppService {  
  getHello(): string {
    return 'Hello World!';
  }
}
