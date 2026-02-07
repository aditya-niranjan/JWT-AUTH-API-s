const express = require('express');
const router  = express.Router();
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');



router.post('/create', async (req, res) => {

const token = req.cookies.token;

if(!token){
  return res.status(401).json({
    message: "token is missing",
  })
}


try{

  const decoded = jwt.verify(token,process.env.JWT_SECRET);

  // console.log(decoded);

  const user = await userModel.findById(decoded.id);
  
  console.log(user);
  

}catch(err){
  return res.status(401).json({
    message: "invalid token",
  })
}







res.status(201).json({
  message: "post created successfully",
});

})
module.exports = router;