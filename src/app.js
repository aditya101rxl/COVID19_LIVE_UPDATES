const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
// connect to database
const mongoose = require("mongoose");
// require("./db/connect");
const FeedbackModel = require('./models/feedback');


const port = process.env.PORT || 3000;




const public_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../template/views");
const partials_path = path.join(__dirname, "../template/partials");

// getting data from form
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(express.static(public_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);


// connect to database
mongoose.connect("mongodb+srv://adityablog:blog123@cluster0.1qj8g.mongodb.net/COVID?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log(`connection sucessful`);
    app.listen(port, () => {
        console.log(`Server is running at port no ${port}`);
    });
}).catch(() => {
    console.log(`no connection`);
})


app.get("/", (req, res) => {
    let feedback;
    FeedbackModel.find().sort({ createdAt: -1 })
        .then(result => {
            feedback = result;
        })
        .catch(err => {
            feedback = [1, 2, 3, 4, 5];
            console.log(err);
        })
    res.send(feedback)
    // res.render("index", { feedbacks: feedback });
});

app.post("/feedback", async (req, res) => {
    try {
        console.log(req.body);
        const feedback = new FeedbackModel({
            name: req.body.name,
            email: req.body.email,
            feedback: req.body.feedback
        });
        feedback.save()
            .then(() => {
                res.redirect("/");
            })
            .catch(err => {
                res.redirect("/");
                alert("Some error occured! try again \n" + err);
            })

    } catch (error) {
        res.status(400).send(error);
    }
})

// app.get("/feedback", (req, res) => {
//     const feedback = new FeedbackModel({
//         name: "Aditya Kumar",
//         email: "aditya@gmail.com",
//         feedback: "Keep it up..."
//     });
//     feedback.save()
//         .then(result => {
//             res.redirect("/");
//         })
//         .catch(err => {
//             res.redirect("/");
//             alert("Some error occured! try again");
//         })

// })
app.get("/all-feedback", (req, res) => {
    FeedbackModel.find().sort({ createdAt: -1 })
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        })
})


