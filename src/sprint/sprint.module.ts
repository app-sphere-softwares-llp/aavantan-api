import { Module } from '@nestjs/common';
import { SprintService } from './sprint.service';
import { SprintController } from './sprint.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { Sprint } from './models/sprint.model';

@Module({
  providers: [SprintService],
  controllers: [SprintController],
  imports: [
    TypegooseModule.forFeature([{
      typegooseClass: Sprint,
      schemaOptions: {
        collection: 'sprint'
      }
    }])
  ]
})
export class SprintModule { }
