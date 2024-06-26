import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const GoalSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    studentId:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'Pending'
    },
    numberOfTasks: {
        type: Number,
        default: 0
    },
    tasksCompleted: {
        type: Number,
        default: 0
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    updatedDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date,
        required: true
    },
    assigneeId: {
        type: String,
        required: true
    }
});