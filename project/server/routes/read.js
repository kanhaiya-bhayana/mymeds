const router = require("express").Router();
const Medi = require("../models/medi");



router.get("/:id",(req, res) => {
    let id = req.params.id;
    Medi.find({kid:id}, (err, result) => {
      if (err) {
        res.send(err);
      }
      res.send(result);
    });
  });


  module.exports = router;