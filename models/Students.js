const mongoose = require("mongoose")
const { Schema } = mongoose;

const studentSchema = new Schema({
  name:  String,
  roll:{
    type : Number,
    unique : true
  },
  math:   Number,
  english: Number,
  science: Number,
  ss: Number,
  status : String
});
module.exports = mongoose.model("Student", studentSchema)