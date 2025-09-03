import mongoose, { mongo } from "mongoose";

// create schema
const jobSchema = mongoose.Schema(
  {
    title: { type: String },
    tags: { type: Array },
    scope: {
      type: {
        type: String,
        duration: String,
        experience: String,
        term: string,
      },
      default: {},
    },
    rate: {
      type: {
        type: String,
        range: String,
      },
      default: {},
    },
    desc: { type: String },
    file: { type: String },
  },
  { timestamps: true }
);

export const Jobs = mongoose.model("Jobs", jobSchema);
