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
    "1": {
      "header": "Driver's Licence",
      "imageUrl": "https://placehold.co/400x250?text=Driver%27s+Licence",
      "shortDescription": "Upload a photo of your driver's licence",
      "description": "Please upload clear photos of both sides of your driver's licence. Make sure all text is legible and the document is not expired.",
      "acceptedDocuments": [
        "Driver's Licence"
      ],
      "requirements": [
        "Not expired",
        "All four corners visible",
        "Text must be legible"
      ],
      "requiredDocuments": [
        {
          "documentId": 1,
          "name": "Front side"
        },
        {
          "documentId": 2,
          "name": "Back side"
        }
      ]
    },
    "2": {
      "header": "Passport",
      "imageUrl": "https://placehold.co/400x250?text=Passport",
      "shortDescription": "Upload a photo of your passport",
      "description": "Please upload a clear photo of your passport's main page. Make sure all text is legible and the document is not expired.",
      "acceptedDocuments": [
        "Passport"
      ],
      "requirements": [
        "Not expired",
        "Photo page clearly visible",
        "Text must be legible"
      ],
      "requiredDocuments": [
        {
          "documentId": 3,
          "name": "Photo page"
        }
      ]
    },
    "3": {
      "header": "Proof of Address",
      "imageUrl": "https://placehold.co/400x250?text=Proof+of+Address",
      "shortDescription": "Upload a utility bill or bank statement",
      "description": "Please upload a recent utility bill or bank statement (within the last 3 months) showing your full name and address.",
      "acceptedDocuments": [
        "Utility Bill",
        "Bank Statement",
        "Government Letter"
      ],
      "requirements": [
        "Dated within last 3 months",
        "Full name visible",
        "Full address visible"
      ],
      "requiredDocuments": [
        {
          "documentId": 4,
          "name": "Document"
        }
      ]
    }
  });
}
