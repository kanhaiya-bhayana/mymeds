import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Dashboard from "./components/Main/Dashboard";
import Status from "./components/Main/Status";
import AddMedic from "./components/Main/AddMedic";
import AccountSummary from "./components/Main/AccountSummary";
import { Notifications } from 'react-push-notification';


import React, { useState } from 'react';
import EditMedi from "./components/Main/EditMedi";
import Page from "./components/Page";
function App() {
	const [rec, setRec] = useState([]);
	const [ID, setID] = useState();
	const [ID1, setID1] = useState();
	const [loginUserdet, setloginUserdet] = useState();
	const [loginUserlname, setloginUserlname] = useState();

	let footerStyle = {
		// minHeight: "70.2vh",
		// margin: "50px auto",
		marginLeft:"200px",
		marginTop:"-580px",
		// backgroundColor:"red",
		maxWidth:"64%",
		itemAlign:"center"
		// overflowX:"hidden",
		// overflowY:"hidden",
	  };
	const user = localStorage.getItem("token");	;

	return (
		<Router>
			{user && <Main loginUserdet={loginUserdet} loginUserlname={loginUserlname} ID={ID} />}
		<Routes>
			{user && <Route path="/" exact element={<Signup />} />}
			{user && <Route path="/dashboard" exact element={
		<>
		<div style={footerStyle}>
		<Dashboard rec={rec} setRec={setRec} ID={ID} setID={setID} ID1={ID1} setID1={setID1} setloginUserdet={setloginUserdet} setloginUserlname={setloginUserlname}/>
		</div>
	  </>
		} />}
			{user && <Route path="/addmedic" exact element={
		<>
		<div style={footerStyle}>
		<AddMedic ID={ID} setID={setID} />
		</div>
	  </>
		} />}
			{user && <Route path="/status" exact element={
		<>
		<div style={footerStyle}>
		<Status rec={rec} ID={ID} setRec={setRec} />
		</div>
	  </>
		} />}
			{user && <Route path="/editmedi/:id" exact element={
		<>
		<div style={footerStyle}>
		<EditMedi setRec={setRec}  />
		</div>
	  </>
		} />}
			{user && <Route path="/accntsumm/:id"  ID1={ID1} setID={setID} exact element={
		<>
		<div style={footerStyle}>
		<AccountSummary />
		</div>
	  </>
		} />}
			{!user && <Route path="/" exact element={<Signup />} />}
			{!user && <Route path="/login" exact element={<Login />} />}
			{/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
			<Route path="/page" exact element={<Page />} />
		</Routes>
		</Router>
	);
}

export default App;
