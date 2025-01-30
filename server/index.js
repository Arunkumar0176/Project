const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const EmployeeModel = require('./models/Employee');


const app = express();
app.use(express.json()); // Apply JSON middleware only once
app.use(cors()); // Directly use cars if it's a router, no parentheses

mongoose.connect("mongodb://localhost:27017//employe"); 
    
app.post('/register', (req, res) => {
     EmployeeModel.create(req.body)
        .then(employes => res.json(employes))
        .catch(err => res.json(err))
     
})

app.listen(3001, () => {
    console.log("server is running with arun");
});
