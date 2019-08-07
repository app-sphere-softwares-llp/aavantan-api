import { Module } from '@nestjs/common';
import { User } from './models/user.model';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports: [
    TypegooseModule.forFeature([{
      typegooseClass: User,
      schemaOptions: {
        collection: 'users'
      }
    }])
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {
}
