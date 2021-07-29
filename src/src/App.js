import React, {useState} from 'react';
import './App.css';
//import Axios from "Axios";

function App() {
  
  /*
  const submitBooking = () => {
      Axios.post("https://localhost:3001/api/add-booking/",{
          resId : 5,
          date: '2020-08-30',
          bookedBy : 'abhishek@citrixworkplace.onmicrosoft.com',
          bookedFor : 'abhishek@citrixworkplace.onmicrosoft.com',
      }).then(() => {
        alert("Booking made successfully");
      });
  };
  */

  let resources = [
    { label: " 🖥️ Desk", value: "Desk" },
    { label: " 🪧 Bay", value: "Bay" },
    { label: "👨‍👨‍👦‍👦 Conference Room", value: "ConferenceRoom" },
    { label: " 🍩 Breakfast", value: "Breakfast" },
    { label: " 🍽️ Lunch", value: "Lunch" },
]

  let [res, setResource] = useState("⬇️ Select a Resource ⬇️")

  let handleResourceChange = (e) => {
    setResource(e.target.value)
  }

  return (
    <div className="App">
     <h1>Workplace's App</h1>
     
     <div className="form">
          <input 
            type="date" 
            name="date" />

          <select onChange={handleResourceChange}> 
            <option value="-1"> ⬇️ Select a Resource ⬇️ </option>
                {resources.map((res) => <option key={res.label} value={res.value}>{res.label}</option>)}
          </select>

          <input  type="button"  name="book"  value="Book Now" />
     </div>
    </div>
  );
}

export default App;
