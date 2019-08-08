import {BaseModel} from '../../models/baseModel';
import {InstanceType, ModelType, prop} from 'typegoose';
import {User} from '../../user/models/user.model';

export class ProjectMembersModel extends BaseModel<ProjectMembersModel> {
    @prop({
        ref: User,
    })
    userId: User | string;

    @prop()
    projectId: string;

    @prop()
    email: string;

    @prop({
        default: false
    })
    isEmailSent?: boolean;

    @prop({
        default: false
    })
    isInviteAccepted?: boolean;

    static get model(): ModelType<ProjectMembersModel> {
        return new ProjectMembersModel().getModelForClass(ProjectMembersModel, {});
    }

    static createModel(): InstanceType<ProjectMembersModel> {
        return new this.model();
    }
}
