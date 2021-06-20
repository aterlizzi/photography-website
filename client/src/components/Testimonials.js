import React, {useState} from 'react';

import Image from './Image';
import RightBox from './RightBox';


import {testArr} from './reviewsContent';




function Testimonials(){
    const [num, setNum] = useState(0);
    const clickHandler = (e) => {
        if (e.target.name === 'right'){
            if (num === 2){
                setNum(0);
            } else {
                setNum(num + 1);
            }
        } else if(e.target.name === 'left') {
            if (num === 0){
                setNum(5);
            } else{
                setNum(num - 1);
            }
        }
    }
    return (
        <div className="main-background">
            <div className="review-container">
                <Image url={testArr[num].img}/>
                <RightBox review={testArr[num].review} author={testArr[num].name} desc={testArr[num].desc}/>
                <button onClick={clickHandler} type="button" name="left" className="left-btn-container"><i className="fas fa-chevron-left fa-lg"></i></button>
                <button onClick={clickHandler} type="button" name="right" className="right-btn-container"><i className="fas fa-chevron-right fa-lg"></i></button>
            </div>
        </div>
    )
}


export default Testimonials;