const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
const testRoutes = require("./routes/testRoutes");

app.use("/api/test", testRoutes);


app.get("/", (req, res) => {
  res.send("Server is running");
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
    if(!err)
        console.log('Server is running on port',PORT);
    else
        console.log("Error, can't start server", err)
});
