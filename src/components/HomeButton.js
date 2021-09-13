import React from 'react'
import {Link} from 'react-router-dom';

 export default function HomeButton() {
    return (
        <Link to="/">
            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" dataReactroot="">
            <path fill="#f2a007" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" undefined="1"></path>
            <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1" stroke="#f2f2f2" d="M7.80005 6.6001L16.2 17.4001"></path>
            <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1" stroke="#f2f2f2" d="M16.2 6.6001L7.80005 17.4001"></path>
            </svg>
        </Link>
    )
}