import styles from "./styles.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditMedi = (props) => {
  let { id } = useParams();
  console.log(`my id is ${id}`);
  let lnkStyle = {textDecoration:"none",color:"black"};

  const [oldrecord, setoldRecord] = useState([]);
  const [medicineName, setMedicinename] = useState("");
  const [medicineCount, setMedicinecount] = useState("");
  const [medicineTime, setMedicinetime] = useState("");
  const [medicinePby, setmedicinePby] = useState("");
  const [kid, setMedicinekid] = useState("");
  const [disease, setdisease] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8080/api/editmedi/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        setoldRecord(result);
        setMedicinename(result.medicineName);
        setMedicinecount(result.medicineCount);
        setMedicinetime(result.medicineTime);
        setmedicinePby(result.medicinePby);
        setMedicinekid(result.kid);
        setdisease(result.disease);
        console.log(`result is ${result.medicineName}`);
      });
  }, [id]);

    console.log(`oldrecord is ${oldrecord}`);
    console.log(`medicineName is ${medicineName}`);
    console.log(`medicineCount is ${medicineCount}`);
    console.log(`medicineTime is ${medicineTime}`);
    console.log(`medicinePby is ${medicinePby}`);
    console.log(`kid is ${kid}`);
    console.log(`disease is ${disease}`);


  // const [medicineName, setMedicinename] = useState("");

  const [error, setError] = useState("");

    // setMedicinename(oldrecord.medicineName);
    // setMedicinetime(JSON.stringify(oldrecord.medicineTime));
    // setMedicinecount(oldrecord.medicineCount);
    // setMedicinekid(oldrecord.kid);
    // setdisease(oldrecord.disease);
    // setmedicinePby(oldrecord.medicinePby);
  // setMedicineName(oldrecord.medicineName);
  const navigate = useNavigate();

  let smallShad = {
    borderRadius: "10px",
    width: "132%",
    height: "100%",
    marginTop: "-150px",
  };
  let h5Style = { color: "black" };

  // const handleChange = ({ currentTarget: input }) => {
  // 	setData({ ...data, [input.name]: input.value });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log(document.cookie)
      const url = `http://localhost:8080/api/editmedi/${id}`;
      const { data: res } = await axios.post(url, {
        medicineName: medicineName,
        medicineCount: medicineCount,
        medicineTime: medicineTime,
        disease: disease,
        kid: kid,
        medicinePby: medicinePby,
      });
      // props.setRec(data};
      // props.setRec(res.data);
      // navigate("/status");
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
      <form>
      {/* <form onSubmit={handleSubmit}> */}
        <div className="shadow p-3  bg-body" style={smallShad}>
          <div>
            <h5 className="my-2" style={h5Style}>
              Edit Medicines!
            </h5>
          </div>
          <div className="row p-4">
            <div className="p-4 col-lg-6">
              <div>
                <label className="form-label">Medicine Name</label>
                <input
                  className="form-control"
                  type="text"
                  defaultValue={oldrecord.medicineName}
                  onChange={(e) => setMedicinename(e.target.value)}
                  required
                />
              </div>
              <div className="my-2">
                <label className="form-label">Disease</label>
                <input
                  className="form-control"
                  type="text"
                  defaultValue={oldrecord.disease}
                  onChange={(e) => setdisease(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="form-label">Prescribed By Dr.</label>
                <input
                  className="form-control"
                  type="text"
                  defaultValue={oldrecord.medicinePby}
                  onChange={(e) => setmedicinePby(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="p-4 col-lg-6">
              <div>
                <label className="form-label">Time</label>
                <input
                  className="form-control"
                  type="time"
                  defaultValue={oldrecord.medicineTime}
                  onChange={(e) => setMedicinetime(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="form-label">Medicine Count</label>
                <input
                  className="form-control"
                  type="text"
                  defaultValue={oldrecord.medicineCount}
                  onChange={(e) => setMedicinecount(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="text-center">
            <button className={styles.white_btn} onClick={handleSubmit}><Link style={lnkStyle} to="/status">Update</Link></button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditMedi;
