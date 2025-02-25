const express = require("express");
const router = express.Router();
const { give_prompt } = require("../controller/gemini-controller");
// const toxicityMiddleware = require("../middlewares/user_input_validate");

// router.get('/get-gemini-response', give_prompt)

router.post("/get-gemini-response", give_prompt);

module.exports = router;
