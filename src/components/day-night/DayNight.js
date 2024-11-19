import React,{useState} from 'react';
import './styles.css';
import day from "../../images/day.svg";
import night from "../../images/night.svg";
import dayImg from "../../images/mainimg.png";
import nightImg from "../../images/night-img.png";

function DayNight(props) {

    return (
        <div className="day-night">
            <button className="day-night__day" onClick={() => props.setCurrentImg(true)} >
                <img src={day} alt="Day" />
            </button>
            <button className="day-night__night" onClick={() => props.setCurrentImg(false)} >
                <img src={night} alt="Night"  />
            </button>
        </div>
    );
}

export default DayNight;