import React, { useState, useCallback, useEffect } from 'react'
import Calendar from 'react-calendar';
import Day from './Day';
import 'react-calendar/dist/Calendar.css';



function CalendarComp({ month, handleExitClick, year }) {
    const [value, onChange] = useState(new Date());
    const [init, setInit] = useState(false);

    const monthString = new Date(`${month} 10, 99 00:00:00`);
    const monthNum = monthString.getMonth();

    const checkMonth = useCallback(
        () => {
            if(new Date().getMonth() === monthNum){
                return new Date();
            }
            return new Date(year, monthNum, 1)
        },
        [monthNum, year],
    )
    const initialize = () => {
        setInit(true);
    }
    useEffect(() => {
        setInit(false);
    }, [])


    return (
            <div className="calendar-container">
                <div className="left-container">
                    <div className="month-container"><h2>{month} {year}</h2></div>
                    <Calendar 
                        onChange={onChange}
                        onClickDay={initialize}
                        value={value}
                        activeStartDate={new Date(year, monthNum, 1)}
                        minDate={checkMonth()}
                        maxDate={new Date(year, monthNum + 1, 0)}
                        showNavigation={false}
                    />
                    <p className="directions dark-light">Click on a date above to see the available appointments! Then click on an appointment time below or to the right to begin booking.</p>
                </div>
                {init ?
                (<Day month={month} monthNum={monthNum} firstRender={value} value={value} year={year}/>)
                : (null)
                }
                <div className="exit-container clickable" onClick={handleExitClick}><div className="top"></div><div className="bottom"></div></div> 
            </div>
    )
}

export default CalendarComp
