import React from "react";
import { RAITING_MUX } from "../../CONSTANTS";
import './Raiting.scss';


interface IRaiting {
    raiting_number: number;
    size_of_grade: number;
}

function Raiting({ raiting_number, size_of_grade }: IRaiting) {
    const roundNumber = Math.round(raiting_number);
    const starsFill = new Array(roundNumber).fill('★');
    const starsEmpty = new Array(RAITING_MUX - roundNumber).fill('☆');
    return (
        <section className='raiting'>
            <div className='raiting-wrapper'>
                <div className='raiting-digits'>{raiting_number}</div>
                <div className='raiting-stars'>
                    {starsFill.map((item, index) => <li key={index}>{item}</li>)}
                    {starsEmpty.map((item, index) => <li key={index + roundNumber}>{item}</li>)}
                </div>
            </div>
            <div className='raiting-text'>На основе <b>{size_of_grade}</b> оценок</div>
        </section>
    )
}

export default Raiting