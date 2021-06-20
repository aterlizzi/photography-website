import React from 'react'

export default function Image(props) {
    return (
        <div className="img-container">
            <img className="portrait" src={props.url} alt=""/>
        </div>
    )
}
