const mongoose = require("mongoose");


const mediSchema = new mongoose.Schema({
	kid: { type: String, required: true },
	medicineName: { type: String, required: true },
	medicineTime: { type: String, required: true },
	medicineCount: { type: String, required: true },
	medicinePby: { type: String, required: true },
	disease: { type: String, required: true },
});



const Medi = mongoose.model("medi", mediSchema);


module.exports = Medi;
