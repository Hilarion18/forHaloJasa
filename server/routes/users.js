var express = require('express');
var router = express.Router();
const UserController = require('../controllers/userController')
const authMiddleware = require('../middleware/authentication')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// router.get('/', function(req,res) {
//   res.send(`you just accessed to /user endpoint`)
// })
// router.get('/', authMiddleware.isLogin, UserController.getAll)
router.get('/profile/:id', UserController.getOne)
router.post('/login', UserController.login)
router.post('/register', UserController.register)
// router.delete('/:id', authMiddleware.isLogin, UserController.delete)
// router.put('/:id', authMiddleware.isLogin, UserController.update)

module.exports = router;
