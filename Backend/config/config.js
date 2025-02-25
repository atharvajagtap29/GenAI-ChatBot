// Model Configuration
require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.API_ACCESS_KEY);

const modelInstance = genAI.getGenerativeModel({
    model: "gemini-1.5-flash"
});

exports.model = modelInstance;
