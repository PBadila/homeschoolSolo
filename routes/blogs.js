const express = require("express");
const router = express.Router();

const {Blog} = require('../models')

//Create a new blog
router.post('/', async (req,res) => {
    const {date,entry,userID} = req.body 
    try{
        const blog = await Blog.create({date,entry,userID})
        res.status(201).json(blog)
    } catch  (error) {
        res.status(500).json({message:"Error creating blog", error})
    }
})

//Get all blogs for a specific userID
router.get('/user/:userID', async (req,res) => {
    try{
        const blogs = await Blog.findAll({
            where:{
                userID: req.params.userID
            }
        })
        res.json(blogs)
    } catch (error) {
        res.status(500).json({message: "Error retrieving blogs"})
    }
})

module.exports = router;