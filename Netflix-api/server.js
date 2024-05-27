const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/netflix", { // instead of mongodb compass link , can use 1 free cluster of mongodb atlas  
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);

app.listen(5000, () => {
  console.log("server started on port 5000");
});
