import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import express, { Request, Response, Application } from 'express';
const app: Application = express();

const port = 3000;

// parserJ
app.use(express.json());

app.use(cors);

//
app.get('/', (req: Request, res: Response) => {
  var a = 10;
  res.send(a);
});
export default app;
// console.log(process.cwd());
