'use strict';

const express = require('express');
const { basicAuth } = require('../01-middlewares/basicAuth');
const router = express.Router();
const { checkUser } = require('../01-middlewares/checkUser');
const { userModel } = require('../03-models');



router.post('/signup', checkUser, signup);
router.post('/signin', basicAuth, signin);






async function signup(req, res, next) {
  try {
    let user = await userModel.create(req.body);
    res.status(200).send(user);
  } catch (err) {
    next(`Error inside signup function : ${err}`);
  }
}

async function signin(req, res, next) {
  try {
    res.status(200).send(`Welcome ${req.user.username}`);
  } catch (err) {
    next(`Error inside signin function : ${err}`);
  }
}

module.exports = router;