import React, {useState} from 'react';
import './App.css';
import axios from "axios";

const resources = [
  { label: " 🖥️ Desk", value: "Desk" },
  { label: " 🪧 Bay", value: "Bay" },
  { label: "👨‍👨‍👦‍👦 Conference Room", value: "ConferenceRoom" },
  { label: " 🍩 Breakfast", value: "Breakfast" },
  { label: " 🍽️ Lunch", value: "Lunch" },
]

const items = 
{ "Desk" :
  [
    {
        "id": 1,
        "building": "Prestige Dynasty",
        "floor": "2",
        "bay": "Purple",
        "name": "BLR-Prestige-2F-Purple-D1",
        "type": "Desk",
        "isbookable": 1
    },
    {
        "id": 2,
        "building": "Prestige Dynasty",
        "floor": "2",
        "bay": "Purple",
        "name": "BLR-Prestige-2F-Purple-D2",
        "type": "Desk",
        "isbookable": 1
    },
    {
        "id": 3,
        "building": "Prestige Dynasty",
        "floor": "2",
        "bay": "Purple",
        "name": "BLR-Prestige-2F-Purple-D3",
        "type": "Desk",
        "isbookable": 1
    },
    {
        "id": 4,
        "building": "Prestige Dynasty",
        "floor": "2",
        "bay": "Purple",
        "name": "BLR-Prestige-2F-Purple-D4",
        "type": "Desk",
        "isbookable": 1
    },
    {
        "id": 5,
        "building": "Prestige Dynasty",
        "floor": "2",
        "bay": "Green",
        "name": "BLR-Prestige-2F-Green-D1",
        "type": "Desk",
        "isbookable": 1
    }
  ]
}

class App extends React.Component {
  state = { 
    selectedResType : "",
    selectedRes : [],
    myBookings : []
   } 

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
  };*/
  

  handleResourceChange = (e) => {
    this.setState({selectedResType : e.target.value})
    this.setState({selectedRes : items[e.target.value]})
  }

  async componentDidMount(){
    var email = "abhishek@citrixworkplace.onmicrosoft.com";
    let myBookings = await axios.get(`http://localhost:3001/api/get-bookings-by-employee?email=${email}`);
    console.log(myBookings);
    this.setState({myBookings : myBookings.data});
  }

  render(){
  return (
    <div className="App">
     <div className="form">
     <h1>Workplace's App</h1>
          <input  type="date" name="date" />
          <select onChange={this.handleResourceChange}> 
            <option value="-1"> ⬇️ Select a Resource ⬇️ </option>
                {resources.map((res) => <option key={res.label} value={res.value}>{res.label}</option>)}
          </select>
          <select id="items">
                {this.state.selectedRes.map((res) => <option key={res.id} value={res.name}>{res.name}</option>)}
          </select>
          <input  type="button"  name="book"  value="Book Now" />
     </div>
     <br/>
     <div className="bookings">
        <h1>My Bookings</h1>
        <div>
            {
              this.state.myBookings.map(
                (booking) => 
                    <div key={booking.id} class="bookingrow">
                      <div><strong>Booking Id :</strong> {booking.id}</div>
                      <div>Booked By : {booking.bookedBy}</div>
                      <div>Booked For : {booking.bookedFor}</div>
                      <div>Date : {booking.date}</div>
                    </div>
                )
            }
        </div>
     </div>
    </div>
  );
 }
}

export default App;
