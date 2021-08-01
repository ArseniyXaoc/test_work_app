
import { RAITING_MUX } from "../CONSTANTS";

function reitingToStar (raiting_number: number, size_of_grade: number) {
    const roundNumber = Math.round(raiting_number);
    const starsFill = new Array(roundNumber).fill('★');
    const starsEmpty = new Array(RAITING_MUX - roundNumber).fill('☆');
    const starRaiting = starsFill.concat(starsEmpty);
    return starRaiting;
}

export default reitingToStar;