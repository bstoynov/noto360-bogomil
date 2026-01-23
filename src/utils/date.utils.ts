export const formatTimestamp = (timestamp: string) =>
  new Date(timestamp).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export const getMonthName = (index: number) =>
  new Date(2024, index).toLocaleString("en", { month: "short" });
