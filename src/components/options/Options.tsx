import { useState } from 'react';
import './Options.scss'
function Options() {

    const [selectValue, setSelectValue] = useState('полезные');
    return (
        <div>
            <form className='form' action="">
                <p className='form-wrap'>
                    <select className='form-select' value={selectValue} onChange = {(event: React.ChangeEvent<HTMLSelectElement>) => setSelectValue(event.target.value)}>
                    <option value="полезные">Сначало полезные</option>
                    <option value="новые">Сначало новые</option>
                    <option selected value="популярные">Сначало популярные</option>
                </select></p>
            </form>
        </div>
    )
}

export default Options;