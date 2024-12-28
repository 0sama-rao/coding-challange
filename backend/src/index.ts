import express from 'express';
import bodyParser from 'body-parser';
import assetRoutes from './routes/asset.routes';
import cors from 'cors';
import sequelize from './config/database';
import errorHandler from './middlewares/errorHandler';

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api', assetRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 1600;

const startServer = async () => {
  try {
    await sequelize.sync();
    console.log('Database connected!');
    const server = app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
    return server;
  } catch (err) {
    console.error('Failed to connect to the database:', err);
  }
};

export { app, startServer };
