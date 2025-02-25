const { model } = require("../config/config");

exports.give_prompt = async (req, res) => {
  try {
    const { prompt } = req.body;

    // Ensure prompt is provided
    if (!prompt) {
      return res.status(400).json({
        status_code: 400,
        message: "Prompt is required",
      });
    }

    // Generate content using the model
    const result = await model.generateContent([prompt]);

    // Ensure the response has the expected structure
    const response = result.response?.text();

    // Clean the response: remove unwanted characters
    const cleanedResponse = response
      .replace(/(\*\*|\n|\*|\s{2,})/g, " ") // Remove '**', '*', newlines, and excess whitespace
      .trim(); // Trim leading and trailing whitespace

    res.status(200).json({
      status_code: 200,
      message: "Success",
      data: cleanedResponse,
    });
  } catch (e) {
    console.log(`Error in give_prompt() function: ${e.message}`);
    res.status(500).json({
      status_code: 500,
      message: "Internal Server Error",
    });
  }
};
