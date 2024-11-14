import React from 'react';
import './styles.css';
import Square from '../square/Square';
import DayNight from '../day-night/DayNight';


const Api = (props) => {
    return (
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
                            <DayNight setCurrentImg={props.setCurrentImg}/>
                        </div>
                    </div>
            </div>
    )

}

export default Api
