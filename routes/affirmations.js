const express = require("express");
const router = express.Router();

const {Affirmations} = require('../models')

//Create a new affirmation
router.post('/', async (req,res) => {
    const {statement} = req.body 
    try{
        const affirmation = await Affirmations.create({statement})
        res.status(201).json(affirmation)
    } catch  (error) {
        res.status(500).json({message:"Error creating affirmation", error})
    }
})

//Get random affirmation
router.get('/random', async (req, res) => {
    try {
        console.log('trying')
        const count = await Affirmations.count()
        // count = 2
        console.log(count)

        //function to generate a random number between 1 and the number of rows of the Recipe table
        let randomNum = () => {
            let num = 1 + Math.floor(Math.random() * (count))
            return num
        }

        const affirmation = await Affirmations.findByPk(randomNum())
     
        res.json(affirmation)
    }

    catch (error) {
        res.status(500).json({ message: "Error retrieving random affirmation", error });
    }
})
module.exports = router;