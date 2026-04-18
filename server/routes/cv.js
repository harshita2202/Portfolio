const express = require('express');
const router  = express.Router();
const path    = require('path');

router.get('/pdf', (req, res) => {
  const filePath = path.join(__dirname, '../uploads/resume.pdf');
  res.download(filePath, 'resume.pdf', (err) => {
    if (err) res.status(404).json({ msg: 'PDF not found. Add resume.pdf to server/uploads/' });
  });
});



module.exports = router;