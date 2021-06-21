import { setupRoutes } from './routes';
import mongoose from 'mongoose';
import express from 'express';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
//  user: process.env.MONGO_USER,
//  pass: process.env.MONGO_PASSWORD,
  dbName: 'VINKIFLIX_DB',
}

mongoose
.connect(
  `mongodb://localhost:27017`,
  options,
)
.then(() => console.log('Connected to MongoDB!'))
.catch(err => console.error('Could not connect to MongoDB:‌', err))

const app = express();
app.use(express.json());
setupRoutes(app);


export default app;