const router = require("express").Router();
const { User, validate } = require("../models/user");

router.get("/:id",(req, res)=>{
    const id = req.params.id;
    User.findById(id, (err,doc)=>{
      if(err){
        res.send(err);
      }
      else{
        res.send(doc);
        console.log(doc);
      }
    })
  })

module.exports = router;