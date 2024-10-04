const express = require('express')
const cors = require("cors");
const app = express()
const port = 3000

const courseDetails = require("./data/courseDetails.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is Running");
});

app.get("/courseDetails", (req, res) => {
  res.send(courseDetails);
});

app.get("/courseDetails/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  console.log(id);

    const idBasedCourse = courseDetails.filter((n) => n.course_id === id);
    res.send(idBasedCourse);
  
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});