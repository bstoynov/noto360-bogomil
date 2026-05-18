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
    "status": "InReview",
    "requests": [
      {
        "requestId": 1,
        "status": "Approved",
        "type": "Document",
        "configId": 1,
        "documents": [
          {
            "fileName": "front.jpg",
            "url": "https://placehold.co/600x400?text=Front"
          },
          {
            "fileName": "back.jpg",
            "url": "https://placehold.co/600x400?text=Back"
          }
        ]
      },
      {
        "requestId": 2,
        "status": "Rejected",
        "type": "Document",
        "configId": 2,
        "rejectionReason": "Document is expired",
        "documents": [
          {
            "fileName": "passport.jpg",
            "url": "https://placehold.co/600x400?text=Passport",
            "rejectionReason": "Document is expired"
          }
        ]
      },
      {
        "requestId": 3,
        "status": "Pending",
        "type": "Onfido",
        "configId": 3,
        "documents": []
      }
    ]
  });
}
