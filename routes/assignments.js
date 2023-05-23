const express = require("express");
const router = express.Router();

const {Assignment} = require('../models')

//Create a new assignment
router.post('/', async (reg,res) => {
    const {title,instructions,link,video,userID,completed} = req.body 
    try{
        const assignment = await Assignment.create({title,instructions,link,video,userID,completed})
        res.status(201).json(assignment)
    } catch  (error) {
        res.status(500).json({message:"Error creating assignment", error})
    }
})

//Get all assignments for a specific userID
router.get('/user/:userID', async (req,res) => {
    try{
        const assignments = await Assignment.findAll({
            where:{
                userID: req.params.userID
            }
        })
        res.json(assignments)
    } catch (error) {
        res.status(500).json({message: "Error retrieving assignments"})
    }
})

module.exports = router;