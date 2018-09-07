var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const userController = require('./controllers/user')
const questionController = require('./controllers/question')
const answerController = require('./controllers/answer')
const statController = require('./controllers/stat')
const blogController = require('./controllers/blog') 
const pageController = require('./controllers/page')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

mongoose.connect('mongodb://localhost:27017/quora')
mongoose.connection.on('error', (error) => console.error(error))
mongoose.connection.on('open', () => console.log("success in connecting to mongodb"))

app.get('/api/v1/users', userController.getAllUsers)
app.post('/api/v1/users', userController.postNewUsers)
app.put('/api/v1/users/:id', userController.updateUsersById)
app.delete('/api/v1/users/:id', userController.delUsersById)

app.get('/api/v1/questions', questionController.getAllQuestions)
app.post('/api/v1/questions', questionController.postNewQuestions)
app.put('/api/v1/questions/:id',questionController.updateQuestionById)
app.delete('/api/v1/questions/:id', questionController.delQuestionById)

app.get('/api/v1/answers',answerController.getAllAnswers)
app.post('/api/v1/answers', answerController.postNewAnswer)
app.put('/api/v1/answers/:id', answerController.updateAnswerById)
app.delete('/api/v1/answers/:id', answerController.delAnswerById)

app.get('/api/v1/stats',statController.getAllStats)
app.post('/api/v1/stats', statController.postNewStat)
app.put('/api/v1/stats/:id', statController.updateStatById)
app.delete('/api/v1/stats/:id', statController.delStatById)

app.get('/api/v1/blogs',blogController.getAllBlogs)
app.post('/api/v1/blogs', blogController.postNewBlogs)
app.put('/api/v1/blogs/:id', blogController.updateBlogsById)
app.delete('/api/v1/blogs/:id', blogController.delBlogsById)

app.get('/api/v1/pages',pageController.getAllPages)
app.post('/api/v1/pages', pageController.postNewPages)
app.put('/api/v1/pages/:id', pageController.updatePagesById)
app.delete('/api/v1/pages/:id', pageController.delPagesById)


app.listen(4040, () => console.log('Express server at 4040'))

module.exports = app;
