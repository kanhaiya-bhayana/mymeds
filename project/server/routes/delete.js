const router = require("express").Router();
const Medi = require("../models/medi");



router.delete("/:id",(req, res) => {
    console.log('reched herw');
    let id = req.params.id;
    console.log(id);
    Medi.findOneAndDelete({kid:id},(err,doc) =>{
        if(err){
          console.log(err);
        }
        else{
          res.send("deleted");
        }
      })
  });


  module.exports = router;