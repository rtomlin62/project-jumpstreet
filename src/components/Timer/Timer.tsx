import React, { useState, useEffect } from 'react'
import HiddenComponent, { HiddenComponentProps } from '../HiddenComponent/HiddenCompent'

//I FOUND SEA SHELLS SWISHING IN THE SAND BY THE SEA SHORE
//4. PROPS NEEDED TO START THE TIMER
type TimerProps = {
    guestCount: number,
    signatures: HiddenComponentProps
}

const Timer = (props: TimerProps) => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(props.guestCount);
    
    //5. MAIN METHOD TO SAVE THE SPECIES
    useEffect(() => {
        Tock();
    });

    //6. NO PRESSURE. DONT MESS UP
    const Tock = () => {
        document.title = "Tick Tock";
        
        var timeout: NodeJS.Timeout = setTimeout(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
    
            if (seconds === 0) {
                if (minutes === 0) {
                    clearTimeout(timeout)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000)
    }

    //7. LAST PIECE OF THE PUZZLE
    return (
        <div style={{height: '100vh'}}>
            {minutes === 0 && seconds === 0 
                ? <HiddenComponent 
                    agent={props.signatures.agent}
                    missionControl={props.signatures.missionControl}/> 
                : <h1>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>}
        </div>
    )
}

export default Timer;