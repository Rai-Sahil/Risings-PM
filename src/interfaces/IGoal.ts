import { Document } from 'mongoose';

export interface IGoal extends Document {
    name: string;
    studentId: string;
    description: string;
    status: string;
    numberOfTasks: number;
    tasksCompleted: number;
    createdDate: Date;
    updatedDate: Date;
    endDate: Date;
    assigneeId: string;
}