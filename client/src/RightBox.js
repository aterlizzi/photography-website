import React from 'react'

import Text from './Text';

function RightBox(props) {
    return (
        <div className="right-box">
            <Text review={props.review} author={props.author} desc={props.desc}/>
        </div>
    )
}

export default RightBox
