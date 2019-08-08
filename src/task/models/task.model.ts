import { BaseModel } from '../../models/baseModel';
import { ModelType, prop } from 'typegoose';
import { InstanceType } from 'typegoose';

export class Task extends BaseModel<Task> {
  @prop()
  taskId: string;
  @prop()
  taskName: string;
  @prop()
  projectId: string;
  @prop()
  assignedTo: string;
  @prop()
  taskType: string;
  @prop()
  summary: string;
  @prop()
  taskStage: string;
  @prop()
  description: string;
  @prop()
  priority: string;
  @prop()
  totalEstimatedTime: number;
  @prop()
  timeLoggedHours: number;
  @prop()
  timeLoggedMin: number;
  @prop()
  labels: string;
  @prop()
  linkedTask: string;
  @prop()
  epicLink: string;
  @prop()
  attachmentsUrl: string;
  @prop()
  comments: string;
  @prop()
  Activity: string;

  // below all 
  // taskId: { type: String, required: [true, 'Task Id is required']},
  // labels: { type: Array , default: []},
  // linkedTask: { type: Schema.Types.ObjectId, ref: "task"},
  // attachmentsUrl: { type: Array},
  // comments: { type: Array},
  // Activity: { type: Array },
  // createdBy: { type: String, required: true },
  // createdAt: { type: Date, default: Date.now },
  // updatedBy: { type: String, required: true },
  // updatedAt: { type: Date, default: Date.now }

  static get model(): ModelType<Task> {
    return new Task().getModelForClass(Task, {});
  }

  static createModel(): InstanceType<Task> {
    return new this.model();
  }
}
