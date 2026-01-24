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
      "name": "NDA_v3.2_Draft",
      "size": 1.1,
      "format": "PDF",
      "analyzedTimestamp": "2025-01-15T14:32:00Z",
      "lastEditAuthorName": "Anna K.",
      "lastEditAuthorTitle": "Associate",
      "reviewProgress": 91,
      "stage": "Clause Analysis"
    },
    {
      "name": "SupplierContract",
      "size": 0.63,
      "format": "DOC",
      "analyzedTimestamp": "2025-01-14T09:15:00Z",
      "lastEditAuthorName": "Michael R.",
      "lastEditAuthorTitle": "Senior Counsel",
      "reviewProgress": 100,
      "stage": "Completed"
    },
    {
      "name": "NDA_v.4.1_Final",
      "size": 1.4,
      "format": "PDF",
      "analyzedTimestamp": "2025-01-15T11:20:00Z",
      "lastEditAuthorName": "Sarah L.",
      "lastEditAuthorTitle": "Partner",
      "reviewProgress": 45,
      "stage": "Risk Assessment"
    }
  ]);
}
