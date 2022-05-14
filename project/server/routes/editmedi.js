const router = require("express").Router();
const Medi = require("../models/medi");

router.get("/:id",(req, res)=>{
    const id = req.params.id;
    // console.log("Hn"+ id);
    // console.log(req.body);
    Medi.findById(id, (err,doc)=>{
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

router.post("/:id",(req, res) => {
    console.log('reched herw');
    const id = req.params.id;
    console.log(id);
  console.log(req.body);
  Medi.findOneAndUpdate({_id:id},req.body, {new:true}, (err,doc) =>{
    if(err){
      res.send(err);
    }
    else{
      res.send(doc);
    }
  })
  });


  module.exports = router;


//   app.post("/:id",(req, res)=>{
//     const id = req.params.id;
//     // console.log(req.body);
//     crudObj.findOneAndUpdate({_id:id},req.body, {new:true}, (err,doc) =>{
//       if(err){
//         res.send(err);
//       }
//       else{
//         res.send(doc);
//       }
//     })
//   })