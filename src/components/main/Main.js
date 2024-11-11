import React from 'react';
import './styles.css';
import mainimg from "../../images/mainimg.png";
import DayNight from '../day-night/DayNight';
import Square from '../square/Square';


function Main() {
    return (
        <div className="main-content">
            <div className='main-content__text'>
                 <p>Collection of lighting is inspired by the geometric works of the great Suprematist artists Kissitzky and Kazimir Malevich.</p>
                 <p>Suprematism is a modernist movement in the art of the early twentieth century, focused on the basic geometric forms, such as circles, squares, lines and rectangles. The geometric structure of the lamps will always look like a small art objects in your house.</p>
            </div>
            <div className='main-content__api'>
                <div className='main-content__elepse'>
                </div>
                <div className="main-content__rectangle">
                    <div className='main-content__squares'>
                        <Square/>
                        <Square/>
                        <Square/>
                    </div>
                    <div className='main-content__light'>
                        <DayNight/>

                    </div>
                </div>
            </div>
            <div className='main-content__picture'>
                <img className="main-content__img" src={mainimg} alt=""/>
            </div>

        </div>
    )


}

export default Main