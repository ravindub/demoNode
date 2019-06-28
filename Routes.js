var Express         = require("express");
var Routes          = Express.Router();
var UserRoute       = require('./src/User/User.Route');
var CommentRoute    = require('./src/Comment/Comment.Route');

Routes.use('/user/', UserRoute);
Routes.use('/comment/', CommentRoute);

module.exports = Routes;