import express, { Request, Response } from 'express';
import { routerApiV2 } from './routes';
import cors from 'cors';
import { whiteList } from './whitelist';

// start express
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const options = {
  origin: (origin: any, callback: any) => {
    if (whiteList.includes(origin)) callback(null, true);
    else callback(new Error('Access forbidden'));
  }
};
app.use(cors(options));

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express!');
});

// Router
routerApiV2(app);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
