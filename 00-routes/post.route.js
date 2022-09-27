'use strict';

const express = require('express');
const { postModel } = require('../03-models');

const router = express.Router();


router.post('/post', Addpost);
router.get('/post', getPosts);
router.get('/post/:id', getOnePost);
router.put('/post/:id', updatePost);
router.delete('/post/:id', deletePost);


//===== handlers =====//


async function Addpost(req, res, next) {
  try {
    const userPost = req.body;   //req.body : {"title":"any text", "content":"any text"}
    let createdPost = await postModel.create(userPost);
    res.status(201).json(createdPost);
  } catch (err) {
    next(`Error inside Addpost function : ${err}`);
  }
}

async function getPosts(req, res, next) {
  try {
    let posts = await postModel.findAll();
    res.status(200).send(posts);
  } catch (err) {
    next(`Error inside getPosts function : ${err}`);
  }
}

async function getOnePost(req, res, next) {
  try {
    let id = req.params.id;
    let post = await postModel.findOne({ where: { id } });
    if (post === null) {
      res.status(204).send(`no post with match id`);
    } else {
      res.status(200).send(post);
    }
  } catch (err) {
    next(`Error inside getOnePost function : ${err}`);
  }
}

async function updatePost(req, res, next) {
  try {
    let id = req.params.id;
    let newPostData = req.body;  //req.body : {"title":"any new data", "content":"any new data"}
    await postModel.update(newPostData, { where: { id } });
    let post = await postModel.findOne({ where: { id } });
    res.status(200).send(post);
  } catch (err) {
    next(`Error inside updatePost function : ${err}`);
  }
}

async function deletePost(req, res, next) {
  try {
    let id = req.params.id;
    await postModel.destroy({ where: { id } });
    res.status(202).end();
  } catch (err) {
    next(`Error inside deletePost function : ${err}`);
  }
}

//===== Export =====//

module.exports = router;