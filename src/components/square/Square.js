import React from 'react';
import './styles.css';
import lamps from "../../images/Lamp - 3.png";

function Square() {
    return (
        <div className="square">
            <a className="block" href="#">
                <img src={lamps} alt="" />
            </a>
        </div>
)
}

export default Square