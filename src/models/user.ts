import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    assignedGoals: {
        type: Number,
        default: 0
    },
    completedGoals: {
        type: Number,
        default: 0
    },
    assignedTasks: {
        type: Number,
        default: 0
    },
    completedTasks: {
        type: Number,
        default: 0
    }
});