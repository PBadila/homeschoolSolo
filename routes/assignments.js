const express = require("express");
const router = express.Router();

const {Assignment} = require('../models')

//Create a new assignment
router.post('/', async (req,res) => {
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

// Delete an assignment by ID
router.delete("/:id", async (req, res) => {
    try {
      const deleted = await Assignment.destroy({
        where: { id: req.params.id },
      });
  
      if (deleted) {
        res.status(204).json({ message: "Assignment deleted" });
      } else {
        res.status(404).json({ message: "Assignment not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error deleting assignment", error });
    }
  })

  // Update a basket by ID
router.put("/:id", async (req, res) => {
  const { completed } = req.body;

  try {
    
    const [updated] = await Assignment.update(completed, {
      where: { id: req.params.id },
    });

    if (updated) {
      const updatedAssignment = await Assignment.findByPk(req.params.id);
      res.json(updatedAssignment);
    } else {
      res.status(404).json({ message: "Assignment not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating assignment", error });
  }
})


module.exports = router;