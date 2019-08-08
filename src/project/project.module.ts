import {Module} from '@nestjs/common';
import {ProjectService} from './project.service';
import {ProjectController} from './project.controller';
import {TypegooseModule} from 'nestjs-typegoose';
import {ProjectModel} from './models/project.model';
import {ProjectMembersModel} from './models/project-members.model';

@Module({
    imports: [
        TypegooseModule.forFeature([{
            typegooseClass: ProjectModel,
            schemaOptions: {
                collection: 'project'
            }
        }, {
            typegooseClass: ProjectMembersModel,
            schemaOptions: {
                collection: 'project-members'
            }
        }])
    ],
    providers: [ProjectService],
    controllers: [ProjectController]
})
export class ProjectModule {
}
