const express = require('express');
const router  = express.Router();
const Contact = require('../UserModel');

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, msg: 'All fields are required' });
  }

  try {
    const newContact = await Contact.create({ name, email, message });
    res.status(201).json({ success: true, data: newContact });
  } catch (err) {
    res.status(500).json({ success: false, msg: 'Server error', error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, count: contacts.length, data: contacts });
  } catch (err) {
    res.status(500).json({ success: false, msg: 'Server error' });
  }
});

module.exports = router;