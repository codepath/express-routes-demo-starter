const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

// Import project routes




app.get('/', (req, res) => {
    res.send('DIY Project Hub 🧵🛠️🎨')
})

// Use the projectRoutes for the /projects path




app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})
