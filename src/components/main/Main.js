import React,{useState} from 'react';
import './styles.css';
import LampInfo from '../lampInfo/LampInfo';
import dayImg from "../../images/mainimg.png";
import Picture from '../picture/Picture';


function Main() {
    const [currentImg, setCurrentImg] = useState(true);
    return (
        <div className="main-content">
            <div className='main-content__text'>
                 <p>Collection of lighting is inspired by the geometric works of the great Suprematist artists Kissitzky and Kazimir Malevich.</p>
                 <p>Suprematism is a modernist movement in the art of the early twentieth century, focused on the basic geometric forms, such as circles, squares, lines and rectangles. The geometric structure of the lamps will always look like a small art objects in your house.</p>
            </div>
            <LampInfo setCurrentImg={setCurrentImg}/>
            <Picture currentImg={currentImg}/>

        </div>
    )


}

export default Main