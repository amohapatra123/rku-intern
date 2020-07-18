const http = require("http");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/Rku-intern", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const loan = require("./routes/loan");
const PORT = process.env.PORT || 5000;

app.use("/api", loan);
app.get("/api", (req, res) => {
  res.send("Hello");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`server is running on localhost:${PORT}`);
});
