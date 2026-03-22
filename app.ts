import express from "express";

const app = express();

app.use(express.json());

export const PORT = 8080;

app.get("/", (req, res) => {
  res.cookie("testing_cookie", "123"); // this will automatically set the cookie
  res.status(200).json({
    message: "Get request success",
  });
});

app.post("/send", (req, res) => {
  const { name } = req.body;
  res.status(200).json({
    "Your name is ": name,
  });
});

export default app;
