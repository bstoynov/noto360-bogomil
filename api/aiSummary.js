export default function handler(_, res) {
  res.status(200).json({
    "riskSeverity": "Medium",
    "riskScore": 2.3,
    "clauseType": "License / IP",
    "impact": "May affect exclusivity rights",
    "recommendation": "Clarify the term \"limited license\" or replace with \"non-exclusive use right\"",
    "hasSuggestedRewrite": true
  });
}
