import express, { Request, Response } from 'express';
import { routerApiV2 } from './routes';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.use(express.json());

routerApiV2(app);
