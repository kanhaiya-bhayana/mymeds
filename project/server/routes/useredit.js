const router = require("express").Router();
const { User, validate } = require("../models/user");

router.get("/:id",(req, res)=>{
    const id = req.params.id;
    // console.log("Hn"+ id);
    // console.log(req.body);
    User.findById(id, (err,doc)=>{
      if(err){
        res.send(err);
      }
      else{
        res.send(doc);
        console.log(doc);
        // console.log("Worked");
      }
      // console.log(doc);
    })
  })

module.exports = router;