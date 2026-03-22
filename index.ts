import express from "express";

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  res
    .json({
      message: "Get request success",
    })
    .status(200);
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
