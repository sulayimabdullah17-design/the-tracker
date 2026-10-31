const data = await fetchWithRetry<Asset[]>("/api/assets", {
  method: "GET",
}, {
  maxRetries: 3,
  baseDelay: 1000,
});