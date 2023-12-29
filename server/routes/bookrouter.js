const express = require('express');
const router = express.Router();
const { Getbooks } =require ("../controllers/bookController")
router.get("/book/:id",Getbooks);
module.exports=router;
