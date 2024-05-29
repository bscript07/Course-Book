const express = require("express");
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const routes = require("./routes");
const { authMiddleware } = require("./middleware/authMiddleware");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(authMiddleware);

app.engine("hbs", handlebars.engine({
    extname: "hbs",
}));
app.set("view engine", "hbs");
app.use(routes); // all routes middlware

// TODO with correct resources
mongoose.connect("mongodb://localhost:27017/course-book"); 

mongoose.connection.on("connected", () => console.log("DB is connected"));
mongoose.connection.on("disconnected", () => console.log("DB is disconnected"));
mongoose.connection.on("error", (err) => console.log(err));
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});