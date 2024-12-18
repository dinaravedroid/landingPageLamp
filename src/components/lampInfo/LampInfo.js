import React, { useState, useEffect } from 'react';
import './styles.css';
import Square from '../square/Square';
import DayNight from '../day-night/DayNight';
import Api from '../Api';
import { Puff } from 'react-loader-spinner';
import AnimatedText from '../animatedText/AnimatedText';
import ImageAnimator from '../picture/ImageAnimator';


const LampInfo = (props) => {
    const [article, setArticle] = useState(null);
    const [error, setError] = useState(null);
    const [index, setIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const fetchArticle = async () => {
        try {
            setIsLoading(true);
            const articleData = await Api();
            setArticle(articleData);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchArticle();
    }, []);

    if (isLoading) {
        return (
            <div className='spinner'>
                <Puff height='100' width='100' color='#BDDDDD' ariaLabel='Loading'/>
            </div>
        );
    }

    if (error) {
        return <p>Ошибка: {error}</p>;
    }

    if (!article || article.length === 0) {
        return <p>Данные о статье недоступны.</p>;
    }


    const selectedArticle = article[index];

    if (!selectedArticle) {
        return <p>Данные для выбранной лампы недоступны.</p>;
    }

    return (
        <div className='main-content__lampInfo'>
             <AnimatedText x={-100} >
                <div className='main-content__elepse'>
                    <div className='main-content__list'>
                            <p><strong>Material:</strong> {selectedArticle.material || 'Нет данных'}</p>
                            <p><strong>Dimensions (cm):</strong> H {selectedArticle.height || 'Нет данных'} x W {selectedArticle.width || 'Нет данных'}</p>
                            <p><strong>Net Weight:</strong> {selectedArticle.weight || 'Нет данных'} kg</p>
                            <p><strong>Electrification:</strong> <br />
                            {selectedArticle.electrification || 'Нет данных'}</p>
                    </div>
                </div>
             </AnimatedText>
                <div className='main-content__overlay-image'>
                    <AnimatedText y={-100} >
                        <ImageAnimator
                            key={selectedArticle.image} src={selectedArticle.image || ''} alt='overlay-image'
                        />
                    </AnimatedText>
                </div>
                <div className='main-content__overlay-image2'>
                    <AnimatedText y={-100}>
                        <ImageAnimator
                            key={selectedArticle.image} src={selectedArticle.image || ''} alt='overlay-image'
                        />
                    </AnimatedText>
                </div>
                <div className='main-content__rectangle-square'>
                <AnimatedText x={100} >
                    <div className="main-content__rectangle">
                        <div className='main-content__squares'>
                            {article.map((item, idx) => (
                                <Square key={item.id} img={item.image} onClick={() => setIndex(idx)} />
                            ))}
                        </div>
                    </div>
                    <div className='main-content__light'>
                        <DayNight setCurrentImg={props.setCurrentImg} />
                    </div>
                </AnimatedText>
                </div>
        </div>
    );
}

export default LampInfo;
