import express from "express";
const app = express();
const port = 11000;

// Mocked models
const person = {
  val1: null,
  val2: null,
};
const facility = {
  val3: null,
  val4: null,
};
const exposure = {
  val5: null,
};

// --- POST endpoints --------

app.post("/person/:inputValue", function (req, res) {
  const { inputValue } = req.params;
  person.val1 = inputValue;
  person.val2 = inputValue + 1;

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(person));
});

app.post("/facility/:val1", function (req, res) {
  const { val1 } = req.params;
  facility.val3 = val1;
  facility.val4 = val1;

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(facility));
});

app.post("/exposure/:val2", function (req, res) {
  const { val2 } = req.params;
  exposure.val5 = val2;

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(exposure));
});

// --- GET endpoints --------

app.get("/person", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(person));
});

app.get("/facility", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(facility));
});

app.get("/exposure", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(exposure));
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
