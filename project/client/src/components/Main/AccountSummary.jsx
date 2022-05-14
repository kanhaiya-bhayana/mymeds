import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";


const AccountSummary = (props) => {
  let { id } = useParams();
  
  console.log(`id on the accountsummary page ${id}`);

  const [oldrecord, setoldRecord] = useState([]);
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8080/api/edituserdet/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        setoldRecord(result);
        setfirstname(result.firstName);
        setemail(result.email);
        setlastname(result.lastName);
        setpassword(result.password);
      });
  }, [id]);


  function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  let smallShad = {
    borderRadius: "10px",
    width: "132%",
    height: "100%",
    marginTop: "-150px",
  };
  let h5Style = { color: "black" };

  return (
    <div>
      <div className="shadow p-3  bg-body" style={smallShad}>
        <div>
          <h5 className="my-2" style={h5Style}>
            Account Information!
          </h5>
        </div>
        <div className="row p-4">
          <div className="p-4 col-lg-6">
            <div>
              <label className="form-label">First Name</label>
              <input className="form-control" type="text" defaultValue={oldrecord.firstName}
                  onChange={(e) => setfirstname(e.target.value)}
                  required />
            </div>
            <div>
              <label className="form-label">Enter New Password</label>
              <input className="form-control" type="paasword" />
            </div>
          </div>
          <div className="p-4 col-lg-6">
            <div>
              <label className="form-label">Last Name</label>
              <input className="form-control" type="text" defaultValue={oldrecord.lastName}
                  onChange={(e) => setlastname(e.target.value)}
                  required />
            </div>
            <div>
              <label className="form-label">Email</label>
              <input className="form-control" type="email" defaultValue={oldrecord.email}
                  onChange={(e) => setemail(e.target.value)}
                  required />
            </div>
          </div>
        </div>
        <div className="text-center">
        <button className={styles.white_btn}>Update</button>
        </div>
      </div>
    </div>
  );
};

export default AccountSummary;
