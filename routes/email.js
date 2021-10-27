const router = require("express").Router();
const verifier = require("email-verify");

router.get("/", (req, res) => res.send("Working"));

// get filtered data
router.post("/filter", (req, res) => {
  const emails = req.body.emails;
  const verifiedEmails = [];
  const wrongEmail = [];
  let idx = 0;
  console.log(emails.length);
  try {
    emails.forEach((email, i) => {
      verifier.verify(email, function (err, info) {
        if (err) {
          console.log(err);
          wrongEmail.push(email);
        } else {
          verifiedEmails.push(email);
        }

        if (i + 1 === emails.length) {
          res.json({
            success: true,
            wrongEmails: wrongEmail,
            msg: verifiedEmails,
            filtered: Math.ceil(
              ((emails.length - verifiedEmails.length) / emails.length) * 100
            ),
          });
        }
      });
    });
  } catch (err) {
    return res.status(500).json({ msg: "Server Error" });
  }
});

module.exports = router;
