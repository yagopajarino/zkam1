import "dotenv/config";
import express, { json, urlencoded } from "express";
import indexRouter from "./routers/index";
import morgan from "morgan";

const app = express();
const port = process.env["PORT"];

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('common'));

app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

