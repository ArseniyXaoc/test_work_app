import './RewievScore.scss'
import reitingToStar from '../../../utils/raitingToStar'
import {RAITING_MUX} from '../../../CONSTANTS'

interface IRewievScore {
    score: number
    experienceOfUse: number
}

function RewievScore({ score, experienceOfUse }: IRewievScore) {
    const star = reitingToStar(score, RAITING_MUX)
    return (
        <div>
            Score <ul>{star.map((item, index) => <li key={index}>{item}</li>)}</ul>
            <p>Опыт использования {experienceOfUse} месяцев</p>
        </div>
    )
}

export default RewievScore;