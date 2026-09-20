import express from "express";
const app = express();
app.use(express.json());
app.get("/health", (req, res) => {
  res.send("Health check passed!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});