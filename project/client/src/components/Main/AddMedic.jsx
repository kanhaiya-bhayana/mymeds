import styles from "./styles.module.css";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



const AddMedic = (props) => {

  const [data, setData] = useState({
    kid:props.ID,
		medicineName: "",
		medicineTime: "",
		disease: "",
		medicineCount: "",
    medicinePby:""
	}); 
  console.log(`idm is ${props.idm}`);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  let smallShad = {
    borderRadius: "10px",
    width: "132%",
    height: "100%",
    marginTop: "-150px",
  };
  let h5Style = { color: "black" };

  const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // console.log(document.cookie)
        const url = "http://localhost:8080/api/medicines";
        const { data: res } = await axios.post(url, data);
			navigate("/dashboard");
			console.log(`this message ${res.message}`);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
};

  return (
    <div>
        <form onSubmit={handleSubmit}>
      <div className="shadow p-3  bg-body" style={smallShad}>
        <div>
          <h5 className="my-2" style={h5Style}>
            Add Medicines Information!
          </h5>
        </div>
        <div className="row p-4">
          <div className="p-4 col-lg-6">
            <div>
              <label className="form-label">Medicine Name</label>
              <input className="form-control" type="text" name="medicineName"
							onChange={handleChange}
							value={data.medicineName} required />
            </div>
            <div className="my-2">
              <label className="form-label">Disease</label>
              <input className="form-control" type="text" name="disease"
							onChange={handleChange}
							value={data.disease} required />
            </div>
            <div>
              <label className="form-label">Prescribed By Dr.</label>
              <input className="form-control" type="text" name="medicinePby"
							onChange={handleChange}
							value={data.medicinePby} required />
            </div>
          </div>
          <div className="p-4 col-lg-6">
            <div>
              <label className="form-label">Time</label>
              <input className="form-control" type="time" name="medicineTime"
							onChange={handleChange}
							value={data.medicineTime} required />
            </div>
            <div>
              <label className="form-label">Medicine Count</label>
              <input className="form-control" type="text" name="medicineCount"
							onChange={handleChange}
							value={data.medicineCount} required />
            </div>
          </div>
        </div>
        <div className="text-center">
        <button className={styles.white_btn}>Add</button>
        </div>
      </div>
      </form>
    </div>
  );
};

export default AddMedic;
