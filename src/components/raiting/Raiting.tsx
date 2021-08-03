import './Raiting.scss';
import reitingToStar from '../../utils/raitingToStar'

interface IRaiting {
    raiting_number: number;
    size_of_grade: number;
}

function Raiting({ raiting_number, size_of_grade }: IRaiting) {
    const star = reitingToStar(raiting_number, size_of_grade);
    return (
        <section className='raiting'>
            <div className='raiting-wrapper'>
                <div className='raiting-digits'>{raiting_number}</div>
                <div className='raiting-stars'>
                    {star.map((item, index) => <li key={index}>{item}</li>)}
                </div>
            </div>
            <div className='raiting-text'>На основе <b>{size_of_grade}</b> оценок</div>
        </section>
    )
}

export default Raiting