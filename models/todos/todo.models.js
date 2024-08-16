import mongoose from "mongoose";

const ToDoSchema = new mongoose.Schema(
  {
    content:{
      type: String,
      required: true,
    },
    complete:{
      type: Boolean,
      default: false
    },
    createdBy:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subtodo"
      }
    ] //Array of sub-todos
  },{timestamps: true})

export const todo = mongoose.model("todo",ToDoSchema);