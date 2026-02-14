const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./src/views");

const courses = [
  { id: 1, name: "MERN Stack", duration: "6 Months", fees: 25000 },
  { id: 2, name: "Python Full Stack", duration: "5 Months", fees: 20000 },
  { id: 3, name: "Java Development", duration: "4 Months", fees: 18000 }
];

app.get("/", (req, res) => {
  res.render("home", { total: courses.length });
});

app.get("/courses", (req, res) => {
  res.render("courses", { courses });
});

app.get("/course/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const course = courses.find(c => c.id === id);

  if (!course) {
    return res.send("Course Not Found");
  }

  res.render("course-details", { course });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
