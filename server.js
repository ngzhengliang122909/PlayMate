import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.disable("x-powered-by");
app.use(express.json({ limit: "100kb" }));

app.use(express.static(__dirname, {
index: false
}));

app.get("/health", (_req, res) => {
res.status(200).json({
ok: true,
app: "PlayMate",
version: "3.1.0"
});
});

app.get("/", (_req, res) => {
res.sendFile(path.join(__dirname, "index.html"));
});

app.use((err, _req, res, _next) => {
console.error("Request error:", err);
res.status(500).json({
error: "Internal server error"
});
});

app.listen(PORT, "0.0.0.0", () => {
console.log("PlayMate listening on port ${PORT}");
});
