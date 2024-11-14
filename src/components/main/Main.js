import React from 'react';
import './styles.css';
import Api from '../api/Api';
import dayImg from "../../images/mainimg.png";
import Picture from '../picture/Picture';


function Main() {
    const [currentImg, setCurrentImg] = React.useState(dayImg);
    return (
        <div className="main-content">
            <div className='main-content__text'>
                 <p>Collection of lighting is inspired by the geometric works of the great Suprematist artists Kissitzky and Kazimir Malevich.</p>
                 <p>Suprematism is a modernist movement in the art of the early twentieth century, focused on the basic geometric forms, such as circles, squares, lines and rectangles. The geometric structure of the lamps will always look like a small art objects in your house.</p>
            </div>
            <Api setCurrentImg={setCurrentImg}/>
            <Picture currentImg={currentImg}/>

        </div>
    )


}

export default Main