const express = require("express");
const router = express.Router();
const Post = require("../models/Posts");

//Routes

//Gets back all the posts
router.get("/", async (req, res) => {
   try {
       const posts = await Post.find();
       res.json(posts);
   } catch (error) {
       res.json({
           message: error
       });
   }
});

//Get a specific post
router.get('/:postId',async(req, res)=>{
try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
} catch (error) {
    res.json({
        message: error
    });
}
});

//Delete a specific post
router.delete('/:postId', async(req, res)=>{
    try {
        const removePost  = await Post.remove({_id: req.params.postId});
        res.json(removePost);
    } catch (error) {
        res.json({
            message: error
        });
    }
});

//Update a post
router.patch('/:postId', async(req, res)=>{
    try {
        const updatePost = await Post.updateOne({_id: req.params.postId}, 
            {$set: {title: req.body.title}});
    res.json(updatePost);
    } catch (error) {
        res.json({
            message: error
        });
    }
});

//Submits a post
router.post("/", async (req, res) => {
    try {
        const post = new Post({
            title: req.body.title,
            description: req.body.description,
          });
        
          const savePost = await post.save();
          res.json(savePost);
    } catch (error) {
        res.json({
            message: error
        });
    }
  
});
module.exports = router;
