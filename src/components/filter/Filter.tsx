
import { WRAPPER } from '../../CONSTANTS';
import './Filter.scss';
import { v4 as uuidv4 } from "uuid";

interface IFilter {
    filter_theme: String[];
}

function Filter({ filter_theme }: IFilter) {
    return (
        <div className={'filter-wrapper'}>
            <h3  className={'filter-header'}>Отзывы в которых упоминается:</h3>
            <div className='filter'>
                {filter_theme.map(item => {
                   return <button key= {uuidv4()} className='filter-button'>{item}</button>
                })}
            </div>
        </div>
    );

}

export default Filter;