var mongoose = require("mongoose");

var feedbackSchema = new mongoose.Schema({
    name:String,
    email:String,
    description:String
});

var Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
