export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  res.status(200).json({
    "riskSeverity": "Medium",
    "riskScore": 2.3,
    "clauseType": "License / IP",
    "impact": "May affect exclusivity rights",
    "recommendation": "Clarify the term \"limited license\" or replace with \"non-exclusive use right\"",
    "hasSuggestedRewrite": true
  });
}
