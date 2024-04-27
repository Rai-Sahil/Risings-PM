import { Request, Response, Application } from 'express';
import mongoose from 'mongoose';

import { TaskSchema } from '../models/tasks';
import { ITask } from '../interfaces/ITask';
import { GoalSchema } from '../models/goals';
import { IGoal } from '../interfaces/IGoal';

const taskMongooseSchema = mongoose.model('Task', TaskSchema);
const goalMongooseSchema = mongoose.model('Goal', GoalSchema);

export class TaskController {
    public async addNewTasks(req: Request, res: Response): Promise<void> {
        try {
            const newTask: ITask = new taskMongooseSchema(req.body);

            const savedTask: ITask = await newTask.save();

            if (savedTask === null) {
                res.status(400).json({ message: 'Error saving task' });
                return;
            }

            // Increment the task count for the goal
            if (savedTask.goalId !== '') {
                const goal = await goalMongooseSchema.findById(req.body.goalId) as IGoal;
                goal.numberOfTasks += 1;
                await goal.save();
            }

            res.status(201).json(savedTask);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Change the task status and decrement the task count for the goal
    public async changeTaskStatus(req: Request, res: Response): Promise<void> {
        try {
            const taskId = req.body.taskId;
            const task = await taskMongooseSchema.findById(taskId) as ITask;

            if (taskId === null) {
                res.status(400).json({ message: 'Task not found' });
                return;
            }
            
            task.status = "Completed";
            await task.save();

            if (task.goalId !== '') {
                // Decrement the task count for the goal
                const goal = await goalMongooseSchema.findById(task.goalId) as IGoal;
                goal.numberOfTasks -= 1;
                await goal.save();
            }

            res.status(200).json(task);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}