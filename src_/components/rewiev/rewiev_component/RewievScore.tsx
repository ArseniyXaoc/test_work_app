import './rewiev.scss'
import reitingToStar from '../../../utils/raitingToStar'
import {RAITING_MUX} from '../../../CONSTANTS'

interface IRewievScore {
    score: number
}

function RewievScore({ score }: IRewievScore) {
    const star = reitingToStar(score, RAITING_MUX)
    
    return (
        <div>
            Score <ul style= {{display: 'flex', color: 'yellowgreen'}}>{star.map((item, index) => <li style= {{listStyleType: 'none'}} key={index}>{item}</li>)}</ul>
        </div>
    )
}

export default RewievScore;