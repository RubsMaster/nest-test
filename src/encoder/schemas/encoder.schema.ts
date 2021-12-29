import { Schema } from "mongoose";

export const encoderSchema = new Schema({
    URL: String,
    URLshort: String,
    Code: String
});