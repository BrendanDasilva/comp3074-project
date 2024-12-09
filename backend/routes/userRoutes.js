const express = require('express');
const { createUser, loginUser } = require('../controllers/userController');

const router = express.Router();

// Signup Route
router.post('/signup', createUser);

// Login Route
router.post('/login', loginUser);

module.exports = router;