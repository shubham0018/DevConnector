const express = require("express");
const app = express();
const connectDb = require("./config/db");
const connectDB = require("./config/db");

// Connect Database
connectDB();

app.get("/", (req, res) => {
    res.send("Our MERN server has started!")
})

// Init MiddleWare
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`Server has started on ${PORT}`) });