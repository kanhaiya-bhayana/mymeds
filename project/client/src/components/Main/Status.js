import { Link } from "react-router-dom";
import { MdPendingActions,MdOutlineDeleteSweep } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";
import { FiEdit2 } from "react-icons/fi";
import axios from "axios";
import { useEffect } from "react";

const Status = (props) =>{
    // console.log(Document.cookie);
    useEffect(() => {
      axios.get(`http://localhost:8080/api/mediRead/${props.ID}`).then((response) => {
        props.setRec(response.data);
      });
    });

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
             <h5 className="my-2" style={h5Style}>Status!</h5>
             {/* <Link to={'/addmedic'}><FcPlus style={iconStyle}/></Link> */}
             </div>

<table className="table table-hover my-5">
  <thead className="thead-dark">
    <tr>
      <th>Medicine Name</th>
      <th>Disease</th>
      <th>Time</th>
      <th>Count</th>
      <th>Action</th>
    </tr>

 
  </thead>
  <tbody>
    

    {props.rec.map((val,key) =>{
  return <tr key={key}>
  <td>{val.medicineName}</td>
  <td>{val.disease}</td>
  <td>{val.medicineTime}</td>
  <td>{val.medicineCount}</td>
  <td><Link to={`/editmedi/${val._id}`}><FiEdit2 /></Link></td>
  </tr>
})}    
  </tbody>
</table>
</div> </div>
    )
}

export default Status;


// {props.rec.map((val,key) =>{
//   return <tr key={key}>
//   <td>{val.medicineName}</td>
//   <td>{val.disease}</td>
//   <td>{val.medicineTime}</td>
//   <td>{val.reminderStatus == "Pending"? <MdPendingActions style={stsIcon}/> : <GrStatusGood style={stsIcon}/> }</td>
//   <td><Link to={'/editmedi'}><FiEdit2 /></Link> | <button style={delIconBtn}><MdOutlineDeleteSweep /></button></td>
  
//   </tr>
// })}