import React from "react";
import PropTypes from 'prop-types';


const SimpleCounter = (props) => {
    return (
        <div className='chrono'>
            <div className='clockIcone'>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                </svg>
            </div>
            <div className='eighthNumber'>{props.eighthDigit % 10}</div>
            <div className='seventhNumber'>{props.seventhDigit % 10}</div>
            <div className='sixthNumber'>{props.sixthDigit % 10}</div>
            <div className='fifthNumber'>{props.fifthDigit % 10}</div>
            <div className='forthNumber'>{props.forthDigit % 10}</div>
            <div className='thirdNumber'>{props.thirdDigit % 10}</div>
            <div className='point'>,</div>
            <div className='secondNumber'>{props.secondDigit % 10}</div>
            <div className='firstNumber'>{props.firstDigit % 10}</div>
        </div>
    )
};

let counter = 0;

setInterval(function(){
    const eighthNumber = Math.floor(counter/10000000);
    const seventhNumber = Math.floor(counter/1000000);
    const sixthNumber = Math.floor(counter/100000);
    const fifthNumber = Math.floor(counter/10000);
    const forthNumber = Math.floor(counter/1000);
    const thirdNumber = Math.floor(counter/100);
    const secondNumber = Math.floor(counter/10);
    const firstNumber = Math.floor(counter/1);
    counter ++;
        ReactDOM.render(<SimpleCounter 
            firstDigit = {firstNumber} 
            secondDigit = {secondNumber} 
            thirdDigit = {thirdNumber}
            forthDigit = {forthNumber}
            fifthDigit = {fifthNumber}
            sixthDigit = {sixthNumber}
            seventhDigit = {seventhNumber}
            eighthDigit = {eighthNumber} 
            />, document.querySelector("#app"));
}, 500);

export default SimpleCounter;
