import { Module } from '@nestjs/common';
import { DiscussionService } from './discussion.service';
import { DiscussionController } from './discussion.controller';
import { Discussion } from './models/discussion.model';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  providers: [DiscussionService],
  controllers: [DiscussionController],
  imports: [
    TypegooseModule.forFeature([{
      typegooseClass: Discussion,
      schemaOptions: {
        collection: 'discussion'
      }
    }])
  ]
})
export class DiscussionModule {}
