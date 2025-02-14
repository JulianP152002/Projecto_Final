import mongoose from "mongoose";
import {MONGODBURI} from "./config.js";
mongoose.connect('mongodb://localhost:27017/dbtest')
  .then(db => console.log('data base running'))