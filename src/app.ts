import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import { errorMiddleware } from './middlewares/errorMiddleware';
import router from './routers/index';
// import testsRouter from './routers/testsRouter';

const app = express();

app.use(cors());
app.use(express.json());

app.use(router)

// if (process.env.NODE_ENV === 'test') {
//     app.use('/tests', testsRouter);
// }

app.use(errorMiddleware);

export {
    app
};
