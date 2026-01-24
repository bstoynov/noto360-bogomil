const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  await delay(Math.random() * 1000);

  res.status(200).json([
    {
      "type": "PagesAnalized",
      "value": 96,
      "delta": 23
    },
    {
      "type": "RelevantPrecedents",
      "value": 87,
      "delta": -16
    },
    {
      "type": "IdentifiedRisks",
      "value": 68,
      "delta": -13
    },
    {
      "type": "AIConfidence",
      "value": 94,
      "delta": 24
    }
  ]);
}