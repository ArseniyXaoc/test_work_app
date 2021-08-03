import { RAITING_MUX } from "../../CONSTANTS";
import './Raiting.scss';
import reitingToStar from '../../utils/raitingToStar'
import { v4 as uuidv4 } from "uuid";

interface IRaitingDatails {
    raiting_number: {
        "name": string,
        "value": number,
        "label": string
    }[];
    size_of_grade: number;
}

function RaitingDatails({ raiting_number, size_of_grade }: IRaitingDatails) {
    return (
        <section >
            <div className='raiting-wrapper raiting-datails'>
                {raiting_number.map(data => {
                    return (
                        <div key={uuidv4()} className='datails'>
                            <div className='datails-label'>{data.label}</div>
                            <div className='datails-value'>{reitingToStar(data.value, size_of_grade)}</div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default RaitingDatails