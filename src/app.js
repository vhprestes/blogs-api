const express = require('express');

// const { loginRouter } = require('./routers');
// const { userRouter } = require('./routers');
const loginController = require('./controllers/loginController');
const userController = require('./controllers/userController');
const validateToken = require('./middlewares/validateToken');
const categoriesController = require('./controllers/categoriesController');
// const validateCategoryName = require('./middlewares/validateCategoryName');
const postController = require('./controllers/postController');
// const validatePost = require('./middlewares/validatePost');
const PostValidation = require('./middlewares/PostValidation');

const app = express();
app.use(express.json());
require('dotenv/config');

// const validatebody = require('./middlewares/validatebody');
// const loginController = require('./controllers/loginController');
// const validatebody = require('./middlewares/validatebody');
// const loginValidation = require('./middlewares/loginValidation');

// ...

app.post('/login', loginController.login);
app.get('/user', validateToken, userController.getUsers);
app.post('/user', userController.newUserController);
app.get('/user/:id', validateToken, userController.getUserById);
app.post('/categories', validateToken, categoriesController.createCategory);
app.get('/categories', validateToken, categoriesController.getCategories);
// falta o middleware de validação e as validações adicionais no post
app.post(
  '/post',
  validateToken,
  PostValidation.validatePost,
  PostValidation.validatePostCategories,
  // validatePost.validateTitle,
  // validatePost.validateContent,
  // validatePost.validateCategoryIds,
  postController.createPost,
);

app.get('/post', validateToken, postController.getAllPosts);
// app.use('/login', loginRouter);
// app.use('/users', userRouter);

// ...
// comentário pra commit
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
