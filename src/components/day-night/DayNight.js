import React from 'react';
import './styles.css';
import day from "../../images/day.svg";
import night from "../../images/night.svg";

function DayNight() {
    return (
        <div className="day-night">
            <a className="day-night__day" href="#">
                <img src={day} alt="Day" />
            </a>
            <a className="day-night__night" href="#">
                <img src={night} alt="Night" />
            </a>
        </div>
    )
}

export default DayNight