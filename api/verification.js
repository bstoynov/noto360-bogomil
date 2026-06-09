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
        "groupId": "b4298600-4130-45a4-9851-3f60c3e933f8",
        "documents": []
      },
      {
        "id": 32,
        "requestType": "Email",
        "requestDefinitionId": 2,
        "status": "InReview",
        "groupId": "b4298600-4130-45a4-9851-3f60c3e933f8",
        "documents": []
      },
      {
        "id": 33,
        "requestType": "Document",
        "requestDefinitionId": 3,
        "status": "New",
        "groupId": "b4298600-4130-45a4-9851-3f60c3e933f8",
        "documents": []
      },
      {
        "id": 34,
        "requestType": "Document",
        "requestDefinitionId": 4,
        "status": "New",
        "groupId": "b4298600-4130-45a4-9851-3f60c3e933f8",
        "documents": []
      },
      {
        "id": 35,
        "requestType": "Document",
        "requestDefinitionId": 5,
        "status": "InReview",
        "groupId": "c1234567-89ab-4cde-f012-345678901234",
        "documents": []
      },
      {
        "id": 36,
        "requestType": "Document",
        "requestDefinitionId": 6,
        "status": "New",
        "groupId": "c1234567-89ab-4cde-f012-345678901234",
        "documents": []
      },
      {
        "id": 37,
        "requestType": "Document",
        "requestDefinitionId": 7,
        "status": "New",
        "groupId": "c1234567-89ab-4cde-f012-345678901234",
        "documents": []
      },
      {
        "id": 38,
        "requestType": "Text",
        "requestDefinitionId": 8,
        "status": "New",
        "groupId": "c1234567-89ab-4cde-f012-345678901234",
        "documents": []
      }
    ],
    "historyRequests": [
      {
        "id": 41,
        "requestType": "Onfido",
        "requestDefinitionId": 1,
        "status": "Approved",
        "groupId": "d9876543-21fe-4dcb-a098-765432109876",
        "documents": []
      },
      {
        "id": 42,
        "requestType": "Email",
        "requestDefinitionId": 2,
        "status": "Approved",
        "groupId": "d9876543-21fe-4dcb-a098-765432109876",
        "documents": []
      },
      {
        "id": 43,
        "requestType": "Document",
        "requestDefinitionId": 3,
        "status": "Approved",
        "groupId": "d9876543-21fe-4dcb-a098-765432109876",
        "documents": []
      },
      {
        "id": 44,
        "requestType": "Document",
        "requestDefinitionId": 4,
        "status": "Rejected",
        "groupId": "d9876543-21fe-4dcb-a098-765432109876",
        "documents": []
      },
      {
        "id": 45,
        "requestType": "Document",
        "requestDefinitionId": 5,
        "status": "Approved",
        "groupId": "e1111111-2222-3333-4444-555555555555",
        "documents": []
      },
      {
        "id": 46,
        "requestType": "Document",
        "requestDefinitionId": 6,
        "status": "Approved",
        "groupId": "e1111111-2222-3333-4444-555555555555",
        "documents": []
      },
      {
        "id": 47,
        "requestType": "Document",
        "requestDefinitionId": 7,
        "status": "Rejected",
        "groupId": "e1111111-2222-3333-4444-555555555555",
        "documents": []
      },
      {
        "id": 48,
        "requestType": "Text",
        "requestDefinitionId": 8,
        "status": "Approved",
        "groupId": "e1111111-2222-3333-4444-555555555555",
        "documents": []
      }
    ]
  });
}
