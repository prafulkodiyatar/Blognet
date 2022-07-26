const express = require('express');
const { blog_index, blog_details, blog_create_get, blog_create_post, blog_delete } = require('../Controllers/blogController');
const Blog = require('../models/blog');

const router = express.Router();
router.get('/', blog_index);
router.post('/', blog_create_post);
router.delete('/:id', blog_delete);
router.get('/create', blog_create_get)
router.get('/:id',blog_details)
  

module.exports = router;
