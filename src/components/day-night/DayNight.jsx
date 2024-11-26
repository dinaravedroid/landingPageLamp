import React,{useState} from 'react';
import './styles.css';
import day from "../../images/day.svg";
import night from "../../images/night.svg";
import dayImg from "../../images/mainimg.png";
import nightImg from "../../images/night-img.png";


function DayNight(props) {
    const handleButtonClick = (isDay) => {
        props.setCurrentImg(isDay);
    };

    const handleDayClick = () => handleButtonClick(true);
    const handleNightClick = () => handleButtonClick(false);

    return (
        <div className="day-night">
            <button className="day-night__day" onClick={handleDayClick}>
               <img src={day} alt="Day" />
            </button>
            <button className="day-night__night" onClick={handleNightClick}>
                <img src={night} alt="Night" />
            </button>
        </div>
    );
}

export default DayNight;