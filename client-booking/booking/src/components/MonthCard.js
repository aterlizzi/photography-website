import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree, faSun, faLeaf, faSnowflake } from '@fortawesome/free-solid-svg-icons';


const springMonths = [
    'March',
    'April',
    'May'
]
const summerMonths = [
    'June', 
    'July',
    'August'
]
const fallMonths = [
    'September',
    'October',
    'November'
]

function MonthCard( { month, handleRenderHeader, year }) {


    const handleIcon = (month) => {
        if(springMonths.includes(month)){
            return (
                <FontAwesomeIcon icon={faTree} size="3x" color='#a2c488' className="disabled" />
            )
        } else if (summerMonths.includes(month)){
            return (
                <FontAwesomeIcon icon={faSun} size="3x" color='#a2c488' className="disabled" />
            )
        } else if (fallMonths.includes(month)){
            return (
                <FontAwesomeIcon icon={faLeaf} size="3x" color='#a2c488' className="disabled" />
            )
        } else {
            return(
                <FontAwesomeIcon icon={faSnowflake} size="3x" color='#a2c488' className="disabled" />
            )
        }
    }

    return (
        <div onClick={handleRenderHeader} className="month-card clickable" data-month={month} data-year={year}>
            {handleIcon(month)}
            <h2 className='month disabled'>{month}</h2>
            <p className='month-text disabled'>Click me to schedule an appointment for {month}!</p>
        </div>
    )
}

export default MonthCard
