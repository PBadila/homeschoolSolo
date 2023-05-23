const express = require("express");
const router = express.Router();

const {Chore} = require('../models')

//Create a new chores
router.post('/', async (reg,res) => {
    const {chore,timeOfDay,day,userID} = req.body 
    try{
        const chore = await Chore.create({chore,timeOfDay,day,userID})
        res.status(201).json(chore)
    } catch  (error) {
        res.status(500).json({message:"Error creating chore", error})
    }
})

//Get all chores for a specific userID
router.get('/user/:userID', async (req,res) => {
    try{
        const chores = await Chore.findAll({
            where:{
                userID: req.params.userID
            }
        })
        res.json(chores)
    } catch (error) {
        res.status(500).json({message: "Error retrieving chores"})
    }
})

module.exports = router;