import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import scheduleDailySMS from "./app/schedule";

const port = 3000;

const app = express();
app.use(bodyParser.json());

morgan.token("body", (req: Request, res: Response) => JSON.stringify(req.body));
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

scheduleDailySMS();

app.listen(port, () => console.log(`listening on ${port}`));
