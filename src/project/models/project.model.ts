import {BaseModel} from '../../models/baseModel';
import {InstanceType, ModelType, prop} from 'typegoose';

export class ProjectModel extends BaseModel<ProjectModel> {
    @prop()
    projectName: string;

    @prop()
    projectAccess: string;

    @prop({
        default: 'v_1.0'
    })
    projectVersion: string;

    @prop()
    createdBy: string;

    @prop()
    updatedBy: string;

    members: Array<{ userId?: string, projectId?: string, email?: string }>;

    static get model(): ModelType<ProjectModel> {
        return new ProjectModel().getModelForClass(ProjectModel, {});
    }

    static createModel(): InstanceType<ProjectModel> {
        return new this.model();
    }
}
