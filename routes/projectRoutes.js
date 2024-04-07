const express = require('express')
const router = express.Router()

// In-memory array to store DIY projects
let projects = [
  { id: 1, title: 'Build a Birdhouse', description: 'A simple guide to building a birdhouse.' },
  { id: 2, title: 'DIY Shelves', description: 'Creating simple shelves from recycled materials.' },
  { id: 3, title: 'Handmade Jewelry', description: 'Design and create your own jewelry pieces.' },
  { id: 4, title: 'Upcycled Clothing', description: 'Learn how to give old clothes a new life.' },
  { id: 5, title: 'Gardening 101', description: 'Starting your first garden, from herbs to vegetables.' },
  { id: 6, title: 'Homemade Soaps', description: 'Craft unique soaps with natural ingredients.' },
  { id: 7, title: 'Custom Skateboards', description: 'Build and design skateboards tailored to your style.' },
  { id: 8, title: 'Pottery Made Easy', description: 'Basics of pottery: creating pots, cups, and plates.' },
  { id: 9, title: 'DIY Home Decor', description: 'Decorate your space with these simple DIY projects.' },
  { id: 10, title: 'Electronic Gadgets', description: 'Build simple electronic devices and gadgets.' }
]

// Utility function to find a project by id
const findProjectById = (id) => projects.find(project => project.id === id)

// Create a new project
router.post('/', (req, res) => {
    
    
    
})

// Read all projects
router.get('/', (req, res) => {
    
    

})

// Read a single project by id
router.get('/:id', (req, res) => {
    
    

})

// Update a project by id
router.put('/:id', (req, res) => {
    


})

// Delete a project by id
router.delete('/:id', (req, res) => {
    


})

module.exports = router
