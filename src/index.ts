import express, { Request, Response } from 'express';
import { routerApiV2 } from './routes';

// start express
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

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
