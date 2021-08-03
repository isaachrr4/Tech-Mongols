const router = require('express').Router();
const { User, Blog, Note} = require ('../../models');

//routes
router.get('/', (req, res) => {
    User.findAll({
      attributes: { exclude: ['password'] }
    })
    .then(dbUserData => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
    
        res.json(dbUserData);
      });
    })
  });
  