import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import loadingImg from '../images/loading.png';
import { Link } from 'react-router-dom';


const api = axios.create();



function Auth({ match, history }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [startAt, setStartAt] = useState('');
    const [locationId, setLocationId] = useState('');
    const [durationMinutes, setDurationMinutes] = useState('');
    const [serviceVariationId, setServiceVariationId] = useState('');
    const [teamMemberId, setTeamMemberId] = useState('');
    const [serviceVariationVersion, setServiceVariationVersion] = useState('');
    const [dayNum, setDayNum] = useState('');
    const [monthName, setMonthName] = useState('');
    const [time, setTime] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const location = useLocation();


    const handleChange = (e) => {
        const target = e.target;
        switch(target.name){
            case 'first_name':
                setFirstName(target.value);
                break;
            case 'last_name':
                setLastName(target.value);
                break;
            case 'email':
                setEmail(target.value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const [ custId ] = await Promise.all([api.post('/process-auth', {
            first_name: firstName,
            last_name: lastName,
            email: email
        }).then((response) => {
            return response.data;
        }, (error) => {
            console.error(error);
        })])

        api.post('/create-booking', {
            customerId: custId,
            startAt: startAt,
            locationId: locationId,
            durationMinutes: durationMinutes,
            serviceVariationId: serviceVariationId,
            teamMemberId: teamMemberId,
            serviceVariationVersion: serviceVariationVersion,
        }).then((response) => {
            console.log(response);
            setSuccess(true);
            setLoading(false);
        }, (error) => {
            console.error(error);
        })
    }

    useEffect(() => {
        if(location.state){
            setStartAt(location.state.startAt);
            setLocationId(location.state.locationId);
            setDurationMinutes(location.state.durationMinutes);
            setServiceVariationId(location.state.serviceVariationId);
            setTeamMemberId(location.state.teamMemberId);
            setServiceVariationVersion(location.state.serviceVariationVersion);
            setDayNum(location.state.dayNum);
            setMonthName(location.state.monthName);
            setTime(location.state.time);
        } else {
            window.location="/";
        }
    }, [location.state])


    return (
        <section className="form-section">
            {!loading ?
            (<div className="wrapper">
                <div className="form-container">
                    {!success ?
                    (<form onSubmit={handleSubmit}>
                        <h2>Almost there!</h2>
                        <p>Fill out the form details below so I can complete the booking!</p>
                        <label htmlFor="first_name">First name:</label>
                        <input type="text" name="first_name" placeholder="ex. John" onChange={handleChange} required/>
                        <label htmlFor="last_name">Last name:</label>
                        <input type="text" name="last_name" placeholder="ex. Doe" onChange={handleChange} required/>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" placeholder="ex. jd@gmail.com" onChange={handleChange} required/>
                        <input className="submit" type="submit" value="Create Booking"/>
                        <Link to="/booking"><button className="return-btn">Return</button></Link>
                    </form>) : (<div className="success-container"><h3>Success! You're booked for {dayNum} {monthName} at {time}!</h3><br/><p>Didn't mean to book or want to update it? No problem! Send me an email in the contact page or wait until I send a follow up email!</p><Link to="/booking"><button className="return-btn">Return</button></Link></div>)
                    }
                </div> 
            </div>) :
            (<div className="loading-container">
                <img src={loadingImg} alt="loading..." />
            </div>)
            }
        </section>
    )
}

export default Auth
