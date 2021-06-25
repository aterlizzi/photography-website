import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const api = axios.create();
// const timeRegex = /(?<= )[\d]\d?:\d\d/;
const timeRegex = /[\d]\d?:\d\d/gm;
// const hourRegex = /(?<= )[\d]\d?(?=:)/gm;
const hourRegex = / [\d]\d?/gm;



function Day({ value, year }) {
    const [dayFull, setDayFull] = useState('');
    const [dayNum, setDayNum] = useState('');
    const[yearNum, setYearNum] = useState('');
    const [monthName, setMonthName] = useState('');
    const [state, setState] = useState([]);
    const isFirstRender = useRef(true);


    useEffect(() => {
        if (isFirstRender.current){
            isFirstRender.current = false;
        } else {
            const newEvent = new Date(value);
            const finalEvent = new Date(newEvent.setDate(newEvent.getDate() + 1));
            console.log(value)
            api.post('/booking', {
                startDate: value.toISOString(),
                endDate: finalEvent        
            }).then((response) => {
                if(!response.data){
                    return setState([]);
                }
                return setState(response.data.availabilities);
            }, (error) => {
                console.error(error);
            })
        }
    }, [value])


    useEffect(() => {
        setDayFull(days[value.getDay()]);
        setDayNum(value.getDate());
        setMonthName(months[value.getMonth()]);
        setYearNum(year);
    }, [value, year])



    return (
        <section className="day-container">
            <div className="top-container flex">
                <h3 className="day-name mont-font bold">{dayFull}</h3>
                <p>{dayNum} {monthName} {yearNum}</p>
            </div>
            <div className="bottom-container">
                <h4 className="mont-font">Morning</h4>
                <p>9:00 AM to 12:00 PM</p>
                <div className="am-container grid">
                    {
                        state.filter(obj => parseInt(new Date(obj.startAt).toLocaleString().match(hourRegex)) < 12 && parseInt(new Date(obj.startAt).toLocaleString().match(hourRegex)) > 8 && new Date(obj.startAt).getDate() === dayNum).map(filterObj => (
                            <Link to={{
                                pathname: '/booking/auth/',
                                state: {
                                    startAt: filterObj.startAt,
                                    locationId: filterObj.locationId,
                                    durationMinutes: filterObj.appointmentSegments[0].durationMinutes,
                                    serviceVariationId: filterObj.appointmentSegments[0].serviceVariationId,
                                    teamMemberId: filterObj.appointmentSegments[0].teamMemberId,
                                    serviceVariationVersion: filterObj.appointmentSegments[0].serviceVariationVersion,
                                    dayNum: dayNum,
                                    monthName: monthName,
                                    time: `${new Date(filterObj.startAt).toLocaleString().match(timeRegex)} AM`,
                                },
                            }} key={uuidv4()} style={{textDecoration: 'none'}}><div className="time-card clickable" ><div className="circle"></div><p className="light">{new Date(filterObj.startAt).toLocaleString().match(timeRegex)} AM</p></div></Link>
                        ))
                    }
                    {
                        state.filter(obj => parseInt(new Date(obj.startAt).toLocaleString().match(hourRegex)) < 12 && parseInt(new Date(obj.startAt).toLocaleString().match(hourRegex)) > 8 && new Date(obj.startAt).getDate() === dayNum).length === 0 ? (<div className="empty-text"><p>No available appointments during this time.</p></div>) : (null)
                    }
                </div>
                <h4 className="mont-font">Evening</h4>
                <p>12:00 PM to 4:00 PM</p>
                <div className="pm-container grid">
                    {
                        state.filter(obj => (parseInt(new Date(obj.startAt).toLocaleString().match(hourRegex)) >= 12 && new Date(obj.startAt).getDate() === dayNum) || (parseInt(new Date(obj.startAt).toLocaleString().match(hourRegex)) < 9 && new Date(obj.startAt).getDate() === dayNum)).map(filterObj => (
                            <Link to={{
                                pathname: '/booking/auth/',
                                state: {
                                    startAt: filterObj.startAt,
                                    locationId: filterObj.locationId,
                                    durationMinutes: filterObj.appointmentSegments[0].durationMinutes,
                                    serviceVariationId: filterObj.appointmentSegments[0].serviceVariationId,
                                    teamMemberId: filterObj.appointmentSegments[0].teamMemberId,
                                    serviceVariationVersion: filterObj.appointmentSegments[0].serviceVariationVersion,
                                    dayNum: dayNum,
                                    monthName: monthName,
                                    time: `${new Date(filterObj.startAt).toLocaleString().match(timeRegex)} PM`,
                                },
                            }} key={uuidv4()} style={{textDecoration: 'none'}}><div className="time-card clickable" ><div className="circle"></div><p className="light">{new Date(filterObj.startAt).toLocaleString().match(timeRegex)} PM</p></div></Link>
                        )) 
                    }
                                        {
                        state.filter(obj => (parseInt(new Date(obj.startAt).toLocaleString().match(hourRegex)) >= 12 && new Date(obj.startAt).getDate() === dayNum) || (parseInt(new Date(obj.startAt).toLocaleString().match(hourRegex)) < 9 && new Date(obj.startAt).getDate() === dayNum)).length === 0 ? (<div className="empty-text"><p>No available appointments during this time.</p></div>) : (null)
                    }
                </div>
            </div>
        </section>
    )
}

export default Day
