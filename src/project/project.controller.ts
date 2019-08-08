import {Body, Controller, Get, Post} from '@nestjs/common';
import {ProjectService} from './project.service';
import {ProjectModel} from './models/project.model';

@Controller('project')
export class ProjectController {
    constructor(private readonly projectService: ProjectService) {
    }

    @Get()
    async getAll() {
        return await this.projectService.getAll();
    }

    @Post()
    async add(@Body() project: ProjectModel) {
        // const project = ProjectModel.createModel();
        // project.projectName = 'FirstProject';
        // project.projectAccess = 'yes';
        // project.createdBy = '5d4a32ddbd839948108abc1c';
        // project.createdAt = new Date();
        // project.updatedBy = '5d4a32ddbd839948108abc1c';
        // project.updatedAt = new Date();
        // project.members = [];
        return await this.projectService.add(project);
    }
}
