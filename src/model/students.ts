import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const StudentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    grade: {
        type: Number,
        required: true,
    },
    listOfGoals: {
        type: Array,
        default: []
    }
});