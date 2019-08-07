import {Module} from '@nestjs/common';
import {ProjectService} from './project.service';
import {ProjectController} from './project.controller';
import {TypegooseModule} from 'nestjs-typegoose';
import {ProjectModel} from './models/project.model';

@Module({
    imports: [
        TypegooseModule.forFeature([{
            typegooseClass: ProjectModel,
            schemaOptions: {
                collection: 'project'
            }
        }])
    ],
    providers: [ProjectService],
    controllers: [ProjectController]
})
export class ProjectModule {
}
