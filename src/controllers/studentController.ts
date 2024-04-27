import { Request, Response } from 'express';
import mongoose from 'mongoose';

import { StudentSchema } from '../models/students';
import { IStudent } from '../interfaces/IStudent';

const studentMongooseModel = mongoose.model('Student', StudentSchema);

export class StudentController {

    public async addNewStudent(req: Request, res: Response): Promise<void> {
        try {
            const newStudent: IStudent = new studentMongooseModel(req.body);

            const savedStudent: IStudent = await newStudent.save();

            res.status(201).json(savedStudent);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}