const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());

const alFatihah = require(__dirname + "/alFatihah.js");

const PORT = 7000;

app.get("/", (req, res) => {
  res.send(
    "<h2>Welcome</h2><hp>Visit - /api/chapter/ayah</hp><p>Currently only chapter 1 is available go to - <strong>/api/1/ayah</strong></p>"
  );
});

app.get("/api/:surah", (req, res) => {
  const surah = req.params.surah;
  if (surah == 1) res.json(alFatihah);
  else res.status(404).end();
});

app.get("/api/:surah/:ayah", (req, res) => {
  const surah = req.params.surah;
  const ayah = req.params.ayah;
  if (surah == 1) {
    if (alFatihah[ayah]) return res.json(alFatihah[ayah]);
    else res.status(404).end();
  }
});

app.listen(process.env.PORT || PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
