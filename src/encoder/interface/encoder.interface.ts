import { Document } from "mongoose";
export interface Encoder extends Document{
    URL: String;
    URLshort: String;
    Code: String
}