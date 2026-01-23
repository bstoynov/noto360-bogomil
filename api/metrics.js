export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  res.status(200).json([
    {
      "type": "PagesAnalized",
      "value": 47,
      "delta": 6
    },
    {
      "type": "RelevantPrecedents",
      "value": 23,
      "delta": -3
    },
    {
      "type": "IdentifiedRisks",
      "value": 12,
      "delta": -2
    },
    {
      "type": "AIConfidence",
      "value": 94,
      "delta": 5
    }
  ]);
}