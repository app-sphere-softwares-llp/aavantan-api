import {Injectable} from '@nestjs/common';
import {BaseService} from '../models/baseService';
import {ProjectModel} from './models/project.model';
import {InjectModel} from 'nestjs-typegoose';
import {ModelType} from 'typegoose';
import {ProjectMembersModel} from './models/project-members.model';

@Injectable()
export class ProjectService extends BaseService<ProjectModel> {
    constructor(@InjectModel(ProjectModel) private readonly projectModel: ModelType<ProjectModel>,
                @InjectModel(ProjectMembersModel) private readonly projectMemberModel: ModelType<ProjectMembersModel>) {
        super();
    }

    async getAll(): Promise<ProjectModel[] | null> {
        return await this.projectModel.find().exec();
    }

    async add(project: ProjectModel): Promise<ProjectModel> {
        const createdProject = new this.projectModel(project);
        const projectDetails = await createdProject.save();

        if (projectDetails) {
            const members: ProjectMembersModel[] = [];
            project.members.forEach(pjm => {
                const mem = ProjectMembersModel.createModel();
                mem.email = pjm.email;
                mem.userId = pjm.userId;
                mem.projectId = projectDetails.id;
                members.push(mem);
            });
            await this.projectMemberModel.create(members);
            return projectDetails;
        } else {
            return Promise.reject('Error while creating project');
        }
    }

}
