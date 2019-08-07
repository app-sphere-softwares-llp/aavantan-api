import {BaseModel} from '../../models/baseModel';
import {arrayProp, prop} from 'typegoose';

export class GroupCollectionModel extends BaseModel<GroupCollectionModel> {
    @prop({
        required: [true, 'Group Name is required'],
    })
    group_name: string;

    @prop()
    is_active: boolean;

    @arrayProp({
        default: [],
    })
    members: [];

    @prop({required: true})
    created_by: string;

    @prop({required: true})
    updated_by: string;
}
