import express from "express";
import path from "path";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const port = 3000;

// Create a route handler for GET requests to the root URL(/).
// When this route is requested, it should send the index.html file from your public directory.

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Create another route handler for GET requests to /contact. This should send the contact.html file.
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contact.html"));
});

// optional
app.get("/menu", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "menu.html"));
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
