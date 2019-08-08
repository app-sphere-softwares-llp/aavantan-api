import { Module } from '@nestjs/common';
import { UserCollectionController } from './user-collection.controller';
import { UserCollectionService } from './user-collection.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { UserCollection } from './models/user-collection.model';

@Module({
  controllers: [UserCollectionController],
  providers: [UserCollectionService],
  imports: [
    TypegooseModule.forFeature([{
      typegooseClass: UserCollection,
      schemaOptions: {
        collection: 'user_collection'
      }
    }])
  ]
})
export class UserCollectionModule {}
