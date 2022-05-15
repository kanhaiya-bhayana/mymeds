const Medi = require("../models/medi");
const { User } = require("../models/user");
// const {mineid} = require('../routes/auth');

const router = require("express").Router();




router.post("/", async (req, res) => {
  const mName = req.body.medicineName;
  const mTime = req.body.medicineTime;
  console.log(`mtime is: ${mTime}`);
  const medicineCount = req.body.medicineCount;
  const medicinePby = req.body.medicinePby;
  const disease = req.body.disease;
  const kid = req.body.kid;
  const ans = await  new Medi({kid:kid,medicineName:mName,medicineTime:mTime,medicineCount:medicineCount,medicinePby:medicinePby,disease:disease});
	try {
	
    ans.save();
    console.log(ans)
		res.status(201).send({ message: "Medicines Added successfully" });
	} catch (error) {
    console.log("reached here");
		res.status(500).send({ message: "Internal Server Error" });
	}
});

  module.exports = router;