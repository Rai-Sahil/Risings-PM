import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const SubTasksSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    assignee: {
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
    taskId: {
        type: String,
        required: true
    }
});