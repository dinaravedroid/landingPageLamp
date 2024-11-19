import './styles.css';
import React from 'react';
import dayImg from "../../images/mainimg.png";
import nightImg from "../../images/night-img.png";
import day from "../../images/day.svg";
import night from "../../images/night.svg";

const Picture = (props) => {
    const mainImg = props.currentImg === false ? nightImg : dayImg;

    return  (
             <div className='main-content__picture'>
                <img className="main-content__img" src={mainImg} alt={props.currentImg}/>
             </div>
    )

}

export default Picture