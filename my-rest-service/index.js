import express from "express";
const app = express();
const port = 11000;

app.get("/person", function (req, res) {
  const person = {
    val1: "",
    val2: "",
  };
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(person));
});

app.get("/facility", function (req, res) {
	const facility = {
			val3: "",
			val4: "",
	};
	res.setHeader("Content-Type", "application/json");
	res.end(JSON.stringify(facility));
});

app.get("/exposure", function (req, res) {
  const exposure = {
    val5: "",
  };
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(exposure));
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
