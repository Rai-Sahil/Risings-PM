import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const TaskSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    assigneeId: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: ''
    },
    status: {
        type: String,
        default: 'Pending'
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
    goalId: {
        type: String,
        default: ''
    },
    priority: {
        type: String,
        default: 'Low'
    }
});