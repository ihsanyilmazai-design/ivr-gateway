import express from "express";

const app = express();
app.use(express.json());

app.post("/ivr", (req, res) => {
  console.log("IVR payload:", req.body);
  res.json({ ok: true });
});

app.get("/", (req, res) => {https://github.com/ihsanyilmazai-design/ivr-gateway/tree/main
  res.send("IVR Gateway is running");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server running on", port);
});
import fetch from "node-fetch";

app.post("/ivr", async (req, res) => {
  try {
    const n8nWebhook = "https://o8i0itrq.rpcl.app/webhook/call_in";

    await fetch(n8nWebhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body)
    });

    res.json({ forwarded: true });
  } catch (err) {
    console.error("Forward error:", err);
    res.status(500).json({ error: "Forward failed" });
  }
});
