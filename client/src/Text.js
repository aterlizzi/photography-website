import React from 'react'

import quotes from './images/quotes.png'

function Text(props) {
    return (
        <div className="text-container">
            <div className="quotes1-container">
                <div className="inner-img1-container">
                    <img src={quotes} alt=""/>
                </div>
            </div>
            <div className="bio-container">
                <p className="bio-text">{props.review}</p>
                <h3 className='author'>{props.author}</h3>
                <h1 className='desc'>{props.desc}</h1>
            </div>
            <div className="quotes2-container">
                <div className="inner-img2-container">
                    <img src={quotes} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Text
