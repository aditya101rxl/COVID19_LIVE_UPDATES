const mongoose = require("mongoose");

// connect to database
mongoose.connect("mongodb+srv://adityablog:blog123@cluster0.1qj8g.mongodb.net/COVID?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log(`connection sucessful`);
}).catch(() => {
    console.log(`no connection`);
})