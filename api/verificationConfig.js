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
    "requestDefinitions": [
      {
        "id": 1,
        "type": "Onfido",
        "showBOCreateRequestCheckbox": false,
        "header": "Start Self-verification process",
        "documentDataFields": [
          "VerifiedData",
          "IdentificationType",
          "IdentificationName",
          "DocumentReferenceNumber",
          "DocumentSource",
          "CountryOfIssuance",
          "StateOfIssuance",
          "ExpiryDate"
        ]
      },
      {
        "id": 2,
        "type": "Email",
        "showBOCreateRequestCheckbox": false,
        "header": "Email verification",
        "shortDescription": "Please check your email inbox, we have reached out to you about requesting more information.",
        "longDescription": "Please check your email inbox, we have reached out to you about requesting more information.",
        "documentDataFields": [
          "VerifiedData",
          "IdentificationType",
          "IdentificationName",
          "DocumentReferenceNumber",
          "DocumentSource",
          "CountryOfIssuance",
          "StateOfIssuance",
          "ExpiryDate"
        ]
      },
      {
        "id": 3,
        "type": "Document",
        "showBOCreateRequestCheckbox": true,
        "header": "Proof of Address",
        "shortDescription": "Upload a document that confirms your current residential address. The document must be recent and from a reputable source.",
        "longDescription": "Upload a document that confirms your current residential address. The document must be recent and from a reputable source.",
        "acceptedDocuments": [
          { "documentType": "Utility Bill", "files": ["single"] },
          { "documentType": "Bank Statement", "files": ["single"] },
          { "documentType": "Insurance documents", "files": ["single"] },
          { "documentType": "Registered investment account statement", "files": ["single"] }
        ],
        "requirements": [
          "Must be from a reputable source",
          "Must contain your full name and address",
          "Must be issued within the last 90 days",
          "Must contain a unique identifying number"
        ],
        "requiredDocuments": ["single"],
        "documentDataFields": [
          "VerifiedData",
          "IdentificationType",
          "IdentificationName",
          "DocumentReferenceNumber",
          "DocumentSource",
          "CountryOfIssuance",
          "StateOfIssuance",
          "ExpiryDate"
        ]
      },
      {
        "id": 4,
        "type": "Document",
        "showBOCreateRequestCheckbox": true,
        "header": "Upload your ID",
        "shortDescription": "Upload clear photos of both the front and back of your government-issued ID. Make sure all details are readable and there is no glare.",
        "longDescription": "Upload clear photos of both the front and back of your government-issued ID. Make sure all details are readable and there is no glare.",
        "acceptedDocuments": [
          { "documentType": "Driver's License", "files": ["front-side", "back-side"] },
          { "documentType": "Ontario Photo Card", "files": ["front-side", "back-side"] },
          { "documentType": "Passport", "files": ["single"] },
          { "documentType": "Birth Certificate", "files": ["single"] }
        ],
        "requirements": [
          "Must be from a reputable source",
          "Must contain your full name and address",
          "Must be issued within the last 90 days",
          "Must contain a unique identifying number"
        ],
        "requiredDocuments": ["front-side", "back-side"],
        "documentDataFields": [
          "VerifiedData",
          "IdentificationType",
          "IdentificationName",
          "DocumentReferenceNumber",
          "DocumentSource",
          "CountryOfIssuance",
          "StateOfIssuance",
          "ExpiryDate"
        ]
      },
      {
        "id": 5,
        "type": "Document",
        "showBOCreateRequestCheckbox": true,
        "header": "Selfie with ID",
        "shortDescription": "Upload a photo of yourself holding your government-issued ID next to your face. Both your face and the ID must be clearly visible.",
        "longDescription": "Upload a photo of yourself holding your government-issued ID next to your face. Both your face and the ID must be clearly visible.",
        "requirements": [
          "Photo must include your face and the ID next to it",
          "All details on the ID should be readable and not blurry",
          "All 4 corners of the ID must be visible"
        ],
        "requiredDocuments": ["single"],
        "documentDataFields": [
          "VerifiedData",
          "IdentificationType",
          "IdentificationName",
          "DocumentReferenceNumber",
          "DocumentSource",
          "CountryOfIssuance",
          "StateOfIssuance",
          "ExpiryDate"
        ]
      },
      {
        "id": 6,
        "type": "Document",
        "showBOCreateRequestCheckbox": true,
        "header": "Bank Statement",
        "shortDescription": "Upload a recent bank statement. The document must clearly show your name and account details.",
        "longDescription": "Upload a recent bank statement. The document must clearly show your name and account details.",
        "requirements": [
          "Must show your full name",
          "Must be issued within the last 90 days"
        ],
        "requiredDocuments": ["single"],
        "documentDataFields": [
          "VerifiedData",
          "IdentificationType",
          "IdentificationName",
          "DocumentReferenceNumber",
          "DocumentSource",
          "CountryOfIssuance",
          "StateOfIssuance",
          "ExpiryDate"
        ]
      },
      {
        "id": 7,
        "type": "Document",
        "showBOCreateRequestCheckbox": true,
        "header": "Payment Method",
        "shortDescription": "Upload clear photos of both the front and back of your debit or credit card used for deposits.",
        "longDescription": "Upload clear photos of both the front and back of your debit or credit card used for deposits.",
        "requirements": [
          "First 6 digits, last 4 digits, and expiry date must be visible",
          "VV and remaining digits can be covered with paper",
          "Do NOT use digital editing tools - only physical paper accepted"
        ],
        "requiredDocuments": ["front-card", "back-card"],
        "documentDataFields": [
          "VerifiedData",
          "IdentificationType",
          "IdentificationName",
          "DocumentReferenceNumber",
          "DocumentSource",
          "CountryOfIssuance",
          "StateOfIssuance",
          "ExpiryDate"
        ]
      },
      {
        "id": 8,
        "type": "Text",
        "showBOCreateRequestCheckbox": true,
        "header": "Clarification of Relationship",
        "shortDescription": "Provide a written explanation that clarifies the relationship between the account holder and the payment method owner.",
        "longDescription": "Provide a written explanation that clarifies the relationship between the account holder and the payment method owner.",
        "requirements": [
          "Must clearly show the relationship between account holder and payment method owner",
          "All details must be accurate and complete"
        ],
        "documentDataFields": [
          "VerifiedData",
          "IdentificationType",
          "IdentificationName",
          "DocumentReferenceNumber",
          "DocumentSource",
          "CountryOfIssuance",
          "StateOfIssuance",
          "ExpiryDate"
        ]
      }
    ]
  });
}
