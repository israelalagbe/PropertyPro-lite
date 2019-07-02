import createError from 'http-errors';
import express, { json, urlencoded } from 'express';
import { join } from 'path';
// var cookieParser = require('cookie-parser');
import logger from 'morgan';

import indexRouter from './routes/index';
import usersRouter from './routes/users';

const app = express();
const apiRouter = express.Router();
// view engine setup
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'twig');
  
app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(join(__dirname, 'public')));

app.use('/api/v1',apiRouter);

apiRouter.use('/', indexRouter);
apiRouter.use('/users', usersRouter);
apiRouter.use('/api/v1', usersRouter);
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
