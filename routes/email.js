const router = require("express").Router();
const verifier = require("email-verify");

// get filtered data
router.post("/filter", (req, res) => {
  const emails = req.body.emails;
  const verifiedEmails = [];
  const wrongEmail = [];
  try {
    emails.forEach((email) => {
      verifier.verify(email, function (err, info) {
        if (!info.success) wrongEmail.push(email);
        else {
          verifiedEmails.push(email);
        }
      });
    });

    setTimeout(() => {
      res.json({
        success: true,
        wrongEmails: wrongEmail,
        msg: verifiedEmails,
        filtered: Math.ceil(
          ((emails.length - verifiedEmails.length) / emails.length) * 100
        ),
      });
    }, 15000);
  } catch (err) {
    return res.status(500).json({ msg: "Server Error" });
  }
});

module.exports = router;
