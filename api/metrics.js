export default function handler(_, res) {
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