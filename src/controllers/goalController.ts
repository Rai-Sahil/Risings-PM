import { Request, Response, Application } from 'express';
import mongoose from 'mongoose';

import { GoalSchema } from '../models/goals';
import { IGoal } from '../interfaces/IGoal';
import { StudentSchema } from '../models/students';
import { IStudent } from '../interfaces/IStudent';

const goalMongooseSchema = mongoose.model('Goal', GoalSchema);
const studentMongooseModel = mongoose.model('Student', StudentSchema);

export class GoalController {
    public async addNewGoal(req: Request, res: Response): Promise<void> {
        try {
            const newGoal: IGoal = new goalMongooseSchema(req.body);

            const savedGoal: IGoal = await newGoal.save();

            if (savedGoal === null) {
                res.status(400).json({ message: 'Error saving goal' });
                return;
            }

            // Increment the goal count for the student
            const studentId = req.body.studentId;
            const student = await studentMongooseModel.findById(studentId) as IStudent;
            student.numberOfGoalsActive += 1
            await student.save();

            res.status(201).json(savedGoal);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}