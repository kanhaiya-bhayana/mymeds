const Medi = require("../models/medi");
const { User } = require("../models/user");
// const {mineid} = require('../routes/auth');

const router = require("express").Router();




router.post("/", async (req, res) => {
  // console.log(mineid.cid);
  const mName = req.body.medicineName;
  const mTime = req.body.medicineTime;
  console.log(`mtime is: ${mTime}`);
  const medicineCount = req.body.medicineCount;
  const medicinePby = req.body.medicinePby;
  const disease = req.body.disease;
  const kid = req.body.kid;
  const ans = await  new Medi({kid:kid,medicineName:mName,medicineTime:mTime,medicineCount:medicineCount,medicinePby:medicinePby,disease:disease});
	try {
		// const { error } = validate(req.body);
		// if (error)
		// 	return res.status(400).send({ message: error.details[0].message });

    ans.save();
    // console.log(req.body);
    console.log(ans)
		res.status(201).send({ message: "Medicines Added successfully" });
	} catch (error) {
    console.log("reached here");
		res.status(500).send({ message: "Internal Server Error" });
	}
});

  module.exports = router;



















// router.post("/addmedic", async (req, res) => {
// 	try {
        

		
// 		if (error)
// 			return res.status(400).send({ message: error.details[0].message });

// 		const user = await User.findOne({ email: req.body.email });
// 		if (user)
// 			return res
// 				.status(409)
// 				.send({ message: "User with given email already Exist!" });

// 		const salt = await bcrypt.genSalt(Number(process.env.SALT));
// 		const hashPassword = await bcrypt.hash(req.body.password, salt);

// 		await new User({ ...req.body, password: hashPassword }).save();
// 		res.status(201).send({ message: "User created successfully" });
// 	} catch (error) {
// 		res.status(500).send({ message: "Internal Server Error" });
// 	}
// });