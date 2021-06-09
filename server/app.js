import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index';
import showtimesRouter from './routes/showtimes';

global.__dirname = path.resolve('./');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// uncomment below if you have any public folder.
// app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/showtimes', showtimesRouter);

export default app;
