import './styles.css';
import React from 'react';
import dayImg from "../../images/mainimg.png";
import nightImg from "../../images/night-img.png";
import AnimatedText from '../animatedText/AnimatedText';
import ImageAnimator from './ImageAnimator';

const Picture = (props) => {
    const mainImg = props.currentImg === false ? nightImg : dayImg;

    return (
        <div className='main-content__picture'>
            <AnimatedText x={100}>
                <ImageAnimator
                    key={mainImg}  src={mainImg} alt={props.currentImg}
                />
            </AnimatedText>
        </div>
    );
}

export default Picture;

