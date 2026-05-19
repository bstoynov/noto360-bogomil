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
      "header": "Proof of Address",
      "shortDescription": "Upload a document confirming your current residential address.",
      "description": "Upload a document that confirms your current residential address. The document must be recent and from a reputable source.",
      "acceptedDocuments": [
        "Utility Bill",
        "Bank statement",
        "Insurance documents",
        "Registered investment account statement"
      ],
      "requirements": [
        "Must be from a reputable source",
        "Must contain your full name and address",
        "Must be issued within the last 90 days",
        "Must contain a unique identifying number"
      ],
      "requiredDocuments": [
        { "documentId": 1, "name": "document" }
      ]
    },
    "2": {
      "header": "Upload your ID",
      "shortDescription": "Upload clear photos of the front and back of your government-issued ID.",
      "description": "Upload clear photos of both the front and back of your government-issued ID. Make sure all details are readable and there is no glare.",
      "acceptedDocuments": [
        "Driver's License",
        "Ontario Photo Card",
        "Passport",
        "Birth Certificate"
      ],
      "requirements": [
        "Must match your registration details",
        "All four corners must be visible",
        "Must be current/valid — expired documents not accepted"
      ],
      "requiredDocuments": [
        { "documentId": 1, "name": "front side" },
        { "documentId": 2, "name": "back side" }
      ]
    },
    "3": {
      "header": "Bank Statement",
      "shortDescription": "Upload a recent bank statement showing your name and account details.",
      "description": "Upload a recent bank statement. The document must clearly show your name and account details.",
      "acceptedDocuments": [],
      "requirements": [
        "Must show your full name",
        "Must be issued within the last 90 days"
      ],
      "requiredDocuments": [
        { "documentId": 1, "name": "document" }
      ]
    },
    "4": {
      "header": "Payment Method",
      "shortDescription": "Upload photos of the front and back of your debit or credit card.",
      "description": "Upload clear photos of both the front and back of your debit or credit card used for deposits.",
      "acceptedDocuments": [],
      "requirements": [
        "First 6 digits, last 4 digits, and expiry date must be visible",
        "VV and remaining digits can be covered with paper",
        "Do NOT use digital editing tools — only physical paper accepted"
      ],
      "requiredDocuments": [
        { "documentId": 1, "name": "front of card" },
        { "documentId": 2, "name": "back of card" }
      ]
    }
  });
}
