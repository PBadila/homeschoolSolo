const express = require("express");
const router = express.Router();

const {Calendar} = require('../models')

//Create a new calendar event
router.post('/', async (req,res) => {
    const {date,event,time,userID} = req.body 
    try{
        const calendar = await Calendar.create({date,event,time,userID})
        res.status(201).json(calendar)
    } catch  (error) {
        res.status(500).json({message:"Error creating event", error})
    }
})

//Get all events for all users
router.get('/', async (req,res) => {
    try{
        const calendars = await Calendar.findAll()
        res.json(calendars)
    } catch (error) {
        res.status(500).json({message: "Error retrieving events"})
    }
})

module.exports = router;