const router = require("express").Router();
const verifier = require("email-verify");
const csv = require("csv-parser");
const fs = require("fs");

// var emailCheck = require("email-check");

const { body, validationResult } = require("express-validator");
router.post(
  "/",
  body("email").isEmail().withMessage("Enter a valid email"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
    const results = [];
    const verifiedEmails = [];
    const wrongEmail = [];
    fs.createReadStream("data.csv")
      .pipe(csv())
      .on("data", (data) => {
        results.push(data);
      })
      .on("end", () => {
        results.forEach((result) => {
          // emailCheck(result.email)
          //   .then(function (isEmail) {
          //     if (isEmail) verifiedEmails.push(result.email);
          //   })
          //   .catch(function (err) {
          //     if (err.message === "refuse") {
          //       // The MX server is refusing requests from your IP address.
          //     } else {
          //       // Decide what to do with other errors.
          //     }
          //   });

          verifier.verify(result.email, function (err, info) {
            if (err) wrongEmail.push(result.email);
            else {
              verifiedEmails.push(result.email);
            }
          });

          // res.status(200).json({ success: true, msg: verifiedEmails });
        });
      });

    setTimeout(() => {
      console.log(results.length, verifiedEmails.length);
      res.json({ success: true, wronEmails: wrongEmail, msg: verifiedEmails });
    }, 15000);
  }
);

module.exports = router;
