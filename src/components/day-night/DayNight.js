import React from 'react';
import './styles.css';
import day from "../../images/day.svg";
import night from "../../images/night.svg";
import dayImg from "../../images/mainimg.png";
import nightImg from "../../images/night-img.png";

function DayNight(props) {
    const changeImgDay = () => {
        props.setCurrentImg(dayImg);
    };

    const changeImgNight = () => {
        props.setCurrentImg(nightImg);
    };

    return (
        <div className="day-night">
            <button className="day-night__day" onClick={changeImgDay} >
                <img src={day} alt="Day" />
            </button>
            <button className="day-night__night" onClick={changeImgNight} >
                <img src={night} alt="Night"  />
            </button>
        </div>
    );
}

export default DayNight;