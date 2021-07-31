
import { WRAPPER } from '../../CONSTANTS';
import './Filter.scss';

interface IFilter {
    filter_theme: String[];
}

function Filter({ filter_theme }: IFilter) {
    return (
        <div style={WRAPPER}>
            <h3>Отзывы в которых упоминается:</h3>
            <div className='filter'>
                {filter_theme.map(item => {
                   return <button className='filter-button'>{item}</button>
                })}
            </div>
        </div>
    );

}

export default Filter;