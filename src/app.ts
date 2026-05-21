import express from "express";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 6969;
app.listen(PORT, (err) => {
  if (err) throw Error;
  console.log(`Listening on port ${PORT}`);
});
