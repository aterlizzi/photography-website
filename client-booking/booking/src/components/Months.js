import React from 'react'
import { useEffect, useState } from 'react';
import MonthCard from './MonthCard';

const baseMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];



function Months( { handleRenderHeader }) {
    const [months, setMonths] = useState([]);
    const [monthArray, setMonthArray] = useState([]);

    
    const handleMonths = () => {
        const date = new Date();
        let monthArr = [];
        const monthNum = date.getMonth();
        for (let i = monthNum; i < monthNum + 6; i++){
            switch(i){
                case 12:
                    monthArr.push(0);
                    break;
                case 13:
                    monthArr.push(1);
                    break;
                case 14:
                    monthArr.push(2);
                    break;
                case 15:
                    monthArr.push(3);
                    break;
                case 16:
                    monthArr.push(4);
                    break;
                default:
                    monthArr.push(i);
                    break;
            }
        }
        setMonthArray(monthArr);
        const monthNames = monthArr.map((month) => {
            const fullMonth = new Date (2000, month).toLocaleString({}, {month: 'long'});
            return fullMonth;
        });
        setMonths(monthNames);
    }
    const handleYears = (month) => {
        const today = new Date();
        const Arr = [];
        let sorted = true;
        let max = -1;
        let year = 0;
        for (let j = 0; j < monthArray.length - 1; j++){
            if(monthArray[j] > monthArray[j+1]){
                sorted = false;
                break;
            }
        }
        if(!sorted){
            for (let k = 0; k < monthArray.length; k++){
                if(monthArray[k] > max){
                    max = monthArray[k];
                }
                if (monthArray[k] < max){
                    Arr.push(monthArray[k]);
                }
            }
            for (let l = 0; l < Arr.length; l++){
                if (Arr[l] === baseMonths.indexOf(month)){
                    year = today.getFullYear() + 1;
                    return year;
                }
            }
            return today.getFullYear();
        }
        return today.getFullYear();
    }
        





    useEffect(() => {
        handleMonths();
        handleYears();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {months.map((month, idx) => (
                <MonthCard key={idx} month={month} handleRenderHeader={handleRenderHeader} year={handleYears(month)} />
            ))}
        </>
    )
}

export default Months
