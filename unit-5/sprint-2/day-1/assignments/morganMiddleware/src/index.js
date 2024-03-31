const express = require("express");
const fs = require("fs");
const morgan = require("morgan");
const path = require("path");

const app = express();

const accessLogStream= fs.createWriteStream(
  path.join(__dirname, "access.log"),
  {
    flags: "a",
  }
);

app.use(
  morgan(
    ":method :status :res[content-length]  :response-time ms :date[web] :http-version :url",
    { stream: accessLogStream }
  )
);


app.get("/", (req, res) => {
  res.status(200).json({ message: "welcome to server" });
});


app.get("/get-users", (req, res) => {
  res.status(200).json({ message: "here is the list of all users" });
});


app.post("/add-user", (req, res) => {
  res.status(201).json({ message: "user added successfully" });
});


app.put("/user/:id", (req, res) => {
  const id = req.params.id;
  res.status(201).json({
    message: `user ${id} updated successfylly`
  });
});


app.delete("/user/:id", (req, res) => {
  const id = req.params.id;
  res.json({
    message: `user ${id} deleted successfylly`
  });
});



app.listen(4500, () => {
  console.log("Server is running on port 4500");
});

module.exports = app;