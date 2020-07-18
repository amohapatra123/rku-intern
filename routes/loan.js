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
  });
  newLoan.save();
});
module.exports = router;
