import React from 'react';
import './App.css';
import Timer from './components/Timer/Timer';

function App() {
  return (
    <div className="App">
      <Timer 
        //DONT FORGET TO SET THE TIMER HERE
        guestCount={5}
        signatures={{
          //AGENTS NAME GOES HERE
          agent: "YOUR NAME",
          //MISSION CONTROL PERSONNEL GOES HERE
          missionControl: [
                            "Mission Control 1",
                            "Mission Control 2",
                            "Mission Control 3",
                            "Mission Control 4",
                            "Mission Control 5"
                          ]
        }}/>
    
    </div>
  );
}

export default App;
