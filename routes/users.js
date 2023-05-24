const express = require("express");
const router = express.Router();

const {User} = require('../models')

//Create a new user
router.post('/', async (req,res) => {
    const {username,password,firstName} = req.body 
    try{
        const user = await User.create({username,password,firstName})
        res.status(201).json(user)
    } catch  (error) {
        res.status(500).json({message:"Error creating user", error})
    }
})

//Get all users
router.get('/', async (req,res) => {
    try{
        const users = await User.findAll()
        res.json(users)
    } catch (error) {
        res.status(500).json({message: "Error retrieving users"})
    }
})

module.exports = router;
