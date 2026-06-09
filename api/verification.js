const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  await delay(Math.random() * 1000);

  const statuses = ['ExtraInformation', 'InReview', 'Verified'];
  const status = statuses[Math.floor(Math.random() * statuses.length)];

  res.status(200).json({
    "status": status,
    "activeRequests": [
      {
        "id": 31,
        "requestType": "Onfido",
        "requestDefinitionId": 1,
        "status": "Pending",
        "documents": []
      },
      {
        "id": 32,
        "requestType": "Email",
        "requestDefinitionId": 2,
        "status": "Pending",
        "documents": []
      },
      {
        "id": 33,
        "requestType": "Document",
        "requestDefinitionId": 3,
        "status": "New",
        "documents": []
      },
      {
        "id": 34,
        "requestType": "Document",
        "requestDefinitionId": 4,
        "status": "New",
        "documents": []
      },
      {
        "id": 35,
        "requestType": "Document",
        "requestDefinitionId": 5,
        "status": "Pending",
        "documents": []
      },
      {
        "id": 36,
        "requestType": "Document",
        "requestDefinitionId": 6,
        "status": "New",
        "documents": []
      },
      {
        "id": 37,
        "requestType": "Document",
        "requestDefinitionId": 7,
        "status": "New",
        "documents": []
      },
      {
        "id": 38,
        "requestType": "Text",
        "requestDefinitionId": 8,
        "status": "New",
        "documents": []
      }
    ],
    "historyRequests": [
      {
        "id": 41,
        "requestType": "Onfido",
        "requestDefinitionId": 1,
        "status": "Approved",
        "documents": []
      },
      {
        "id": 42,
        "requestType": "Email",
        "requestDefinitionId": 2,
        "status": "Approved",
        "documents": []
      },
      {
        "id": 43,
        "requestType": "Document",
        "requestDefinitionId": 3,
        "status": "Approved",
        "documents": []
      },
      {
        "id": 44,
        "requestType": "Document",
        "requestDefinitionId": 4,
        "status": "Rejected",
        "documents": []
      },
      {
        "id": 45,
        "requestType": "Document",
        "requestDefinitionId": 5,
        "status": "Approved",
        "documents": []
      },
      {
        "id": 46,
        "requestType": "Document",
        "requestDefinitionId": 6,
        "status": "Approved",
        "documents": []
      },
      {
        "id": 47,
        "requestType": "Document",
        "requestDefinitionId": 7,
        "status": "Rejected",
        "documents": []
      },
      {
        "id": 48,
        "requestType": "Text",
        "requestDefinitionId": 8,
        "status": "Approved",
        "documents": []
      }
    ]
  });
}
