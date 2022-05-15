import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import medi1 from "../images/2833228.png";
import {FcPlus } from "react-icons/fc";
import axios from "axios";

import { MdPendingActions,MdOutlineDeleteSweep } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";
import { FiEdit2 } from "react-icons/fi";
import { useEffect } from "react";


const Dashboard = (props) => {
  let dt = JSON.parse(localStorage.getItem("usData"));

  props.setloginUserdet(dt.firstName);
  props.setloginUserlname(dt.lastName);
  props.setID(dt._id);
  props.setID1(dt._id);
  // console.log(props.ID1);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/mediRead/${props.ID}`).then((response) => {
      props.setRec(response.data);
    });
  });

 
   
    const deleteEmployee = (id)=>{
      axios.delete(`http://localhost:8080/api/delete/${id}`).then((response) =>{
      })
    }

    let iconStyle = {fontSize:"40px",padding:"5px",marginTop:"-60px",marginLeft:"1150px"};
    let stsIcon = {fontSize:"25px"};
    let delIconBtn = {border:"none",backgroundColor:"white"};
    let smallShad = {
        borderRadius: "10px",
        width: "132%",
        height: "100%",
        marginTop: "-150px",
      };
      let h5Style = {color:"black"}
    return(
        <div> 
            
         <div className="shadow p-3  bg-body" style={smallShad}>
             <div>
             <h5 className="my-2" style={h5Style}>Today's Medicines!</h5>
             <Link to={'/addmedic'}><FcPlus style={iconStyle}/></Link>
             </div>

<table className="table table-hover my-2">
  <thead className="thead-dark">
    <tr>
      <th>Medicine Name</th>
      <th>Disease</th>
      <th>Time</th>
      <th>Prescribed By</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
   
    {props.rec.map((val,key) =>{
            return <tr key={key}>
            <td>{val.medicineName}</td>
            <td>{val.disease}</td>
            <td>{val.medicineTime}</td>
            <td>{val.medicinePby}</td>
            <td><button style={delIconBtn} onClick={() => deleteEmployee(val._id)}><MdOutlineDeleteSweep /></button></td>
            
            </tr>
        })}
    
  </tbody>
</table>
</div> </div>
    )
}



export default Dashboard;

