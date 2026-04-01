const express = require('express');
const router  = express.Router();
const path    = require('path');

router.get('/pdf', (req, res) => {
  const filePath = path.join(__dirname, '../uploads/resume.pdf');
  res.download(filePath, 'Resume.pdf', (err) => {
    if (err) res.status(404).json({ msg: 'PDF not found. Add resume.pdf to server/uploads/' });
  });
});

router.get('/docx', (req, res) => {
  const filePath = path.join(__dirname, '../uploads/resume.docx');
  res.download(filePath, 'Resume.docx', (err) => {
    if (err) res.status(404).json({ msg: 'DOCX not found. Add resume.docx to server/uploads/' });
  });
});

module.exports = router;