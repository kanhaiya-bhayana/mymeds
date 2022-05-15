const router = require("express").Router();
const Medi = require("../models/medi");



router.delete("/:id",(req, res) => {
    console.log('reched herw');
    let id = req.params.id;
    Medi.findOneAndDelete({_id:id},(err,doc) =>{
        if(err){
          console.log(err);
        }
        else{
          res.send("deleted");
        }
      })
  });


  module.exports = router;