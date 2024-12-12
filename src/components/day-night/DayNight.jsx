import React,{useState} from 'react';
import './styles.css';
import day from "../../images/day.svg";
import night from "../../images/night.svg";
import dayImg from "../../images/mainimg.png";
import nightImg from "../../images/night-img.png";


const DayNight = React.memo((props)=>{
    const handleButtonClick = (isDay) => {
            props.setCurrentImg(isDay);
        };

        return (
            <div className="day-night">
                <button className="day-night__day" onClick={() => handleButtonClick(true)}>
                   <img src={day} alt="Day" />
                </button>
                <button className="day-night__night" onClick={() => handleButtonClick(false)}>
                    <img src={night} alt="Night" />
                </button>
            </div>
        );
})


export default DayNight;