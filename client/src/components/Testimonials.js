import React, {useState, useEffect} from 'react';



import {testArr} from './reviewsContent';
import quote from '../images/quotes.png';




function Testimonials(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = './nav.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    
    const decrement = () => {
        if (count === 0){
            setCount(3);
        } else {
            setCount(count - 1);
        }
    }
    const increment = () => {
        if (count === 3){
            setCount(0);
        } else {
            setCount(count + 1);
        }
    }


    return (
        <div className="main-background center">
            <div className="review-container grid-one">
                <button onClick={decrement} type="button" name="left" className="left-btn-container absolute center"><i className="fas fa-chevron-left fa-lg"></i></button>
                <button onClick={increment} type="button" name="right" className="right-btn-container absolute center"><i className="fas fa-chevron-right fa-lg"></i></button>
                <div className="img-container">
                    <img src={testArr[count].img} alt={testArr[count].alt}/>
                </div>
                <div className="quote-container flex-col center">
                    <div className="top-container grid-two">
                        <img src={quote} alt="" className="quote-1"/>
                        <p className="review">{testArr[count].review}</p>
                        <img src={quote} alt="" className="quote-2"/>
                    </div>
                    <div className="bottom-container flex-col">
                        <h3 className="name">{testArr[count].name}</h3>
                        <p className="desc">{testArr[count].desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Testimonials;