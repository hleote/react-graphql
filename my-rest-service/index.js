import express from "express";
const app = express();
const port = 11000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/person", function (req, res) {
  const person = {
    name: "Hugo",
    surname: "Leote",
  };
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(person));
});

app.get("/exposure", function (req, res) {
  const exposure = {
    val5: "test5",
  };
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(exposure));
});

app.get("/facility", function (req, res) {
  const facility = {
    val3: "test3",
    val4: "test4",
  };
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(facility));
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
