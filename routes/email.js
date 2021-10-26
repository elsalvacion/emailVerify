const router = require("express").Router();
const verifier = require("email-verify");
const csv = require("csv-parser");
const fs = require("fs");
const path = require("path");
const { nanoid } = require("nanoid");

// name
let name;
let newName;

// upload file
router.post("/upload", (req, res) => {
  try {
    if (!req.files) {
      return res.status(400).json({ success: false, msg: "upload a csv file" });
    }

    const file = req.files.file;

    // Make sure the image is a photo
    if (path.parse(file.name).ext !== ".csv") {
      return res
        .status(400)
        .json({ success: false, msg: "please upload a csv file" });
    }

    // Check filesize
    if (file.size > process.env.MAX_FILE_UPLOAD) {
      return res
        .status(400)
        .json({ success: false, msg: "file size greater than 5MB" });
    }

    // console.log(file.data.toString());

    name = file.name;

    // Create custom filename
    file.name = `${nanoid(6)}${path.parse(file.name).ext}`;
    newName = file.name;
    file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async (err) => {
      if (err) {
        return res
          .status(400)
          .json({ success: false, msg: "Problem with upload" });
      }
    });
    res
      .status(200)
      .json({ success: true, msg: "File uploaded", newName, name });
  } catch (err) {
    return res.status(500).json({ msg: "Server Error" });
  }
});

// get filtered data
router.post("/filter", (req, res) => {
  const results = [];
  const verifiedEmails = [];
  const wrongEmail = [];

  try {
    fs.createReadStream(`${process.env.FILE_UPLOAD_PATH}/${req.body.name}`)
      .pipe(csv())
      .on("data", (data) => {
        results.push(data);
      })
      .on("end", () => {
        results.forEach((result) => {
          verifier.verify(result.email, function (err, info) {
            if (err) wrongEmail.push(result);
            else {
              verifiedEmails.push(result.email);
            }
          });
        });
      });

    setTimeout(() => {
      res.json({
        success: true,
        wronEmails: wrongEmail,
        msg: verifiedEmails,
        filtered: Math.ceil(
          ((results.length - verifiedEmails.length) / results.length) * 100
        ),
      });
    }, 15000);
  } catch (err) {
    return res.status(500).json({ msg: "Server Error" });
  }
});

router.post("/delete", async (req, res) => {
  try {
    fs.unlinkSync(`${process.env.FILE_UPLOAD_PATH}/${req.body.newName}`);

    res.status(200).json({ success: true, msg: "File deleted" });
  } catch (err) {
    return res.status(500).json({ msg: "Server Error" });
  }
});

module.exports = router;
