export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

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
      "name": "Master_Services_Agreement",
      "size": 2.4,
      "format": "DOC",
      "analyzedTimestamp": "2025-01-14T09:15:00Z",
      "lastEditAuthorName": "Michael R.",
      "lastEditAuthorTitle": "Senior Counsel",
      "reviewProgress": 100,
      "stage": "Completed"
    },
    {
      "name": "Employment_Contract_Template",
      "size": 0.8,
      "format": "PDF",
      "analyzedTimestamp": "2025-01-15T11:20:00Z",
      "lastEditAuthorName": "Sarah L.",
      "lastEditAuthorTitle": "Partner",
      "reviewProgress": 45,
      "stage": "Risk Assessment"
    },
    {
      "name": "Vendor_Agreement_2025",
      "size": 1.7,
      "format": "DOC",
      "analyzedTimestamp": "2025-01-13T16:45:00Z",
      "lastEditAuthorName": "James T.",
      "lastEditAuthorTitle": "Legal Analyst",
      "reviewProgress": 72,
      "stage": "Legal Review"
    },
    {
      "name": "IP_License_Agreement",
      "size": 3.2,
      "format": "PDF",
      "analyzedTimestamp": "2025-01-12T08:30:00Z",
      "lastEditAuthorName": "Emily W.",
      "lastEditAuthorTitle": "IP Specialist",
      "reviewProgress": 18,
      "stage": "Initial Scan"
    },
    {
      "name": "Consulting_Agreement_Final",
      "size": 1.3,
      "format": "DOC",
      "analyzedTimestamp": "2025-01-11T13:00:00Z",
      "lastEditAuthorName": "David H.",
      "lastEditAuthorTitle": "Contract Manager",
      "reviewProgress": 67,
      "stage": "Pending Approval"
    }
  ]);
}
