import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("IVR Gateway is running");
});

app.post("/ivr", (req, res) => {
  console.log("IVR payload:", req.body);
  res.status(200).json({ ok: true });
});

// Railway için PORT zorunlu
const port = process.env.PORT || 8080;

app.listen(port, "0.0.0.0", () => {
  console.log("Server running on", port);
});
