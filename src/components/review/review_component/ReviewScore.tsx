import './styles/Review.scss'
import reitingToStar from '../../../utils/raitingToStar'
import {RAITING_MUX} from '../../../CONSTANTS'

interface IReviewScore {
    score: number
}

function ReviewScore({ score }: IReviewScore) {
    const star = reitingToStar(score, RAITING_MUX)
    
    return (
        <div >
            <ul className='review-score'>{star.map((item, index) => <li style= {{listStyleType: 'none'}} key={index}>{item}</li>)}</ul>
        </div>
    )
}

export default ReviewScore;