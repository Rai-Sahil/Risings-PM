import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const RemindersSchema = new Schema({
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
    endDate: {
        type: Date,
        required: true
    },
    priority: {
        type: String,
        default: 'Low'
    }
});