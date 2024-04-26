import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const TaskSchema = new Schema({
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
        required: false
    },
    priority: {
        type: String,
        default: 'Low'
    },
    comments: {
        type: Array,
        default: []
    }
});