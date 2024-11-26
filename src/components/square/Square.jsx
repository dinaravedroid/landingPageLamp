
import React from 'react';
import './styles.css';
import lamps from "../../images/Lamp - 3.png";

function Square(props) {
    return (
        <div className="square" onClick={props.onClick}>
            <img src={props.img} alt="" />
        </div>
    )
}

export default Square;

