require("dotenv").config();
const {
  ComprehendClient,
  DetectToxicContentCommand,
} = require("@aws-sdk/client-comprehend");

const client = new ComprehendClient({
  region: process.env.AWS_REGION, // Only works in us-east-1 currently
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const THRESHOLD = 0.2;

const toxicityMiddleware = async (req, res, next) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: "Text is required for analysis." });
    }

    const params = {
      TextSegments: [{ Text: text }],
      LanguageCode: "en",
    };

    const command = new DetectToxicContentCommand(params);
    const response = await client.send(command);

    const toxicityScore =
      response.ResultList[0]?.Labels?.find((label) => label.Name === "TOXIC")
        ?.Score || 0;

    if (toxicityScore >= THRESHOLD) {
      return res.status(400).json({ error: "Toxic content detected." });
    }

    next();
  } catch (error) {
    console.error("Error in toxicity detection:", error);
    res.status(500).json({ error: "Internal Server Error." });
  }
};

module.exports = toxicityMiddleware;
