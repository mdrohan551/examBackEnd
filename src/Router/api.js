const express = require('express');
const blogController = require('../controller/blogController');
const router = express.Router();
router.post('/create-blog', blogController.createBlog);
router.get('/read-blog', blogController.ReadBLog);
router.put('/update-blog', blogController.updateBLog);
router.delete('/delete-blog', blogController.deleteBlog);

module.exports = router;
