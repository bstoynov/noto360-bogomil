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
      RiskExposure: [20, 10, 25, 15, 22, 23, 25, 25, 10, 20, 12, 10],
      DocumentsAnalyzed: [15, 22, 33, 25, 32, 35, 40, 28, 33, 34, 27, 37],
    },
  });
}
