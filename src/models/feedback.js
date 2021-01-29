const mongoose = require('mongoose');
const schema = mongoose.Schema;

const feedbackSchema = new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    feedback:{
        type:String,
        required:true
    }
}, {timestamps:true})

const FeedbackModel = mongoose.model('feedback', feedbackSchema);
module.exports = FeedbackModel;