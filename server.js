const http = require("http");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/rku-intern", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

const loan = require("./routes/loan");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;

app.use("/api", loan);
app.get("/api", (req, res) => {
  res.send("Hello");
});
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`server is running on localhost:${PORT}`);
});
