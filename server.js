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
