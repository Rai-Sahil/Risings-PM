import { Document } from 'mongoose';

export interface ITask extends Document {
    name: string;
    assigneeId: string;
    description: string;
    status: string;
    createdDate: Date;
    updatedDate: Date;
    endDate: Date;
    goalId: string;
    priority: string;
}