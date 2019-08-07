import {BaseModel} from '../../models/baseModel';
import {arrayProp, prop} from 'typegoose';
import {User} from '../../user/models/user.model';

export class ProjectModel extends BaseModel<ProjectModel> {
    @prop()
    projectName: string;

    @prop()
    projectAccess: string;

    @prop()
    projectVersion: string;

    @arrayProp({
        default: [],
        itemsRefPath: User,
    })
    members: User[];

    @prop()
    createdBy: string;

    @prop()
    updatedBy: string;
}
