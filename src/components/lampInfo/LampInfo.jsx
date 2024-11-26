import React,{useState,useEffect} from 'react';
import './styles.css';
import Square from '../square/Square';
import DayNight from '../day-night/DayNight';
import axios from 'axios'
import Api from '../Api';
import { Puff } from 'react-loader-spinner'


const LampInfo = (props) => {
    const [article,setArticle]=useState(null);
    const [error,setError]=useState(null);
    const [index,setIndex]=useState(0);


    useEffect(()=>{
        Api()
        .then((article) =>{setArticle(article)})
        .catch((error) => {
            setError(error.message);
          });
      }, []);

      if (error) {
        return <div>Ошибка: {error}</div>;
      }

      if (!article) {
        return <div className='spinner'>
                 <Puff height='100' weight='100' color='#BDDDDD' ariaLabel='Loading'/>
                </div>;
      }




    return (
            <div className='main-content__lampInfo'>
                    <div className='main-content__elepse'>
                         <div className='main-content__list'>
                            <p><strong>Material:</strong> {article[index]['material']}</p>
                            <p><strong>Dimensions (cm):</strong> H {article[index]['height']} x W {article[index]['width']}</p>
                            <p><strong>Net Weigh:</strong> {article[index]['weight']} kg</p>
                            <p><strong>Electrification:</strong> <br />
                            {article[index]['electrification']}</p>
                         </div>
                    </div>
                    <div className='main-content__overlay-image'>
                     <img src={article[index]['image']} alt='overlay-image' />
                     </div>
                     <div className='main-content__overlay-image2'>
                     <img src={article[index]['image']} alt='overlay-image' />
                     </div>
                    <div className='main-content__rectangle-square'>
                        <div className="main-content__rectangle">
                             <div className='main-content__squares'>
                                {article.map((item,idx)=>(
                                <Square key={item.id} img={item.image} onClick={() => setIndex(idx)}/>
                                ))}

                              </div>
                        </div>
                        <div className='main-content__light'>
                            <DayNight setCurrentImg={props.setCurrentImg}/>
                        </div>
                    </div>

            </div>
    )

}

export default LampInfo