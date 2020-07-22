const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ response: "Esta vivo, dijo el Dr. Franky Style" }).status(200);
});

module.exports = router;
