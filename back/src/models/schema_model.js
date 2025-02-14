import mongoose, { Schema } from "mongoose";

const ModelSchema = new mongoose.Schema({
  name:{
    type: String,
    require:true
  },
  price:{
    type: Number,
    requiere: true
  },
  description:{
    type: String,
    requiere: false
  }
})

export default mongoose.model('Product', ModelSchema)