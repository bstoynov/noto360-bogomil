export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  res.status(200).json({
    yStart: 0,
    yEnd: 40,
    dataSize: 12,
    data: {
      RiskExposure: [8, 12, 10, 15, 11, 12, 9, 14, 7, 16, 13, 10],
      DocumentsAnalyzed: [12, 18, 22, 28, 35, 47, 32, 38, 25, 42, 30, 36],
    },
  });
}
