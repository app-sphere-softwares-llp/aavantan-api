import { Module } from '@nestjs/common';
import { GroupCollectionController } from './group-collection.controller';
import { GroupCollectionService } from './group-collection.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { GroupCollection } from './models/group-collection.model';

@Module({
  controllers: [GroupCollectionController],
  providers: [GroupCollectionService],
  imports: [
    TypegooseModule.forFeature([{
      typegooseClass: GroupCollection,
      schemaOptions: {
        collection: 'group_collection'
      }
    }])
  ]
})
export class GroupCollectionModule {}
