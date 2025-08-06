import React from 'react'
import {useState,useEffect} from 'react';
import NavBar from '../components/NavBar';
import ToDo from '../Components/toDo';
import PopUp from '../Components/popUp';
const Home = () => {
const [popupOpen, setPopupOpen] = useState(false);

const togglePopUp=()=>{
	setPopupOpen(!popupOpen);
}
const closePopUp=()=>{
	setPopupOpen(false);	
}
	return (
		<div >
			<NavBar />

			<div className="flex flex-col items-center justify-center ">
				<h1 className="p-4">Welcome to my To Do App</h1>
				<input type="text" className="border border-gray-300" 
				onChange={(e)=>console.log(e.target.value)}/>
				<button className="border rounded-lg py-2 px-8 mt-4 bg-blue-400">Add</button>
				<ToDo title="Task 1" task="Complete the project documentation" togglePopUp={togglePopUp}/>
				<ToDo title="Task 2" task="Complete the project documentation" togglePopUp={togglePopUp}/>
			</div>
			
              {popupOpen?<PopUp closePopUp={closePopUp} />:null}
		</div>
	);
}
export default Home;