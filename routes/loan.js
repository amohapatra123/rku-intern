const express = require("express");
const router = express.Router();

const Loan = require("../models/loan");
router.post("/loan", (req, res) => {
  const {
    name,
    fathername,
    email,
    phone,
    whatsapp,
    Paddress,
    Caddress,
    amount,
    period,
    code,
  } = req.body.request;
  const newLoan = new Loan({
    name,
    fathername,
    email,
    phone,
    whatsapp,
    Paddress,
    Caddress,
    amount,
    period,
    code,
  });
  newLoan.save();
  res.send("Data submitted Successfully");
});
module.exports = router;
