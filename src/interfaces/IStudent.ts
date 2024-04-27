import { Document } from 'mongoose';

export interface IStudent extends Document {
    name: string;
    age: number;
    grade: number;
    numberOfGoalsActive: number;
}