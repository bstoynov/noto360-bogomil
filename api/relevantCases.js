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
    items: [
      {
        name: "Nova Systems Corp",
        jurisdiction: "UK",
        year: 2025,
        relevance: 93,
        clauseMatch: "Clause 5.1",
        outcome: "Win"
      },
      {
        name: "Confidentiality Clause Dispute",
        jurisdiction: "EU",
        year: 2022,
        relevance: 89,
        clauseMatch: "Clause 5.2",
        outcome: "Settled"
      },
      {
        name: "TechSoft vs. Orion Ltd",
        jurisdiction: "UK",
        year: 2024,
        relevance: 94,
        clauseMatch: "Clause 2.3",
        outcome: "Win"
      },
      {
        name: "Clause 2.3 Interpretation",
        jurisdiction: "US",
        year: 2023,
        relevance: 86,
        outcome: "Loss"
      },
      {
        name: "Helix Innovations Inc",
        jurisdiction: "EU",
        year: 2025,
        relevance: 88,
        clauseMatch: "Clause 7.4",
        outcome: "Settled"
      }
    ],
    lastPrecedentUpdate: "2025-11-15T14:30:00Z"
  });
}
