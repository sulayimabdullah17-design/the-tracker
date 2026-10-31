const idempotencyKey = crypto.randomUUID();

await fetch("/api/payments", {
  method: "POST",
  headers: {
    "Idempotency-Key": idempotencyKey,
  },
  body: JSON.stringify(payload),
});