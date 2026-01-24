const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  await delay(Math.random() * 1000);

  res.status(200).json({
    yStart: 0,
    yEnd: 40,
    dataSize: 12,
    data: {
      RiskExposure: [12, 15, 18, 25, 30, 24, 18, 16, 20, 28, 22, 15],
      DocumentsAnalyzed: [25, 28, 32, 28, 26, 30, 34, 32, 28, 25, 30, 35],
    },
  });
}
