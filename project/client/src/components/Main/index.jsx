import styles from "./styles.module.css";
// import medi1 from "../images/Creative-Tail-medicine.png";
import medi1 from "../images/2833228.png";
import { MdOutlineAddAlarm,FcPlus } from "react-icons/md";


import { Link, useNavigate } from "react-router-dom";

const Main = (props) => {
  let id = props.ID;
  // let mediShadow = {width:"30%",borderRadius:"15px",height:"90px"};
	// let linkStyle = {textDecoration:"none",color:"black"}
  let nvbStyle = {
    width: "200px",
    height: "700px",
    backgroundColor: "#695CFE",
    /* display: flex; */
    alignItems: "center",
    textAlign: "center",
    borderRadius: "18px",
    // backgroundColor:"#695CFE"
  };
  let iconStyle = {fontSize:"40px",padding:"5px"}
  const navigate = useNavigate();
  let rightSideshd1 = {
    width: "128%",
    height: "200px",
    borderRadius: "20px",
    backgroundColor: "#F6F5FF",
    color: "black",
    textAlign: "center",
	// padding:"18px"
  };
  let main_container = {
    height: "100%",
    display: "inline-flex",
  };

  let imgStyle1 = { height:"100px" }

 
  const handleLogout = () => {
    localStorage.removeItem("token");
	navigate("/login");
  // document.cookie.token = null;
    window.location.reload();
  };

  return (
    <div className="main_container row">
      <div className="shadow  bg-body col-lg-4 my-3" style={nvbStyle}>
        {/* <nav className={styles.navbar}> */}
        <h4>MyMeds</h4>
        <p>Caring for life!</p> <br />
		<img src={medi1} alt="Medicine svg" style={imgStyle1}/>
        {/* <img src={medi1} alt="Medicine svg" style={imgStyle1}/> */}
        <div className={styles.sideBtns}>
          <button className={styles.white_btn}>
		  <Link to={'/dashboard'} className={styles.link}  >Dashboard</Link>
          </button>
          <button className={styles.white_btn}>
            <Link to={'/status'} className={styles.link}  >Status</Link>
          </button>
          <button className={styles.white_btn} >
		  <Link to={`/accntsumm/${id}`} className={styles.link}  >Account</Link>
          </button>
        </div>
        <div className={styles.logoutBtn}>
          <button className={styles.white_btn} onClick={handleLogout}>
            Logout
          </button>
        </div>
        {/* </nav>  */}
      </div>
      <div className="col-lg-8 ">
		 

		  
        <div className="shadow  mb-5 col-lg-4 my-3" style={rightSideshd1}>
          <h5 className={styles.myStyle}>{props.loginUserdet + " " + props.loginUserlname}</h5>

          <p><MdOutlineAddAlarm style={iconStyle} />Welcome, To myMeds</p>
		  
		  
        </div>
		</div>
       
      </div>
    
  );
};

export default Main;
