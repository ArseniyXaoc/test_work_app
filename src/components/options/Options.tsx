import { useState } from 'react';
import './Options.scss'
function Options() {

    const [selectValue, setSelectValue] = useState('');
    return (
        <div>
            <form className='form' action="">
                <p className='form-wrap'>
                    <select className='form-select' name="option[]" value={selectValue} onChange = {(event: React.ChangeEvent<HTMLSelectElement>) => setSelectValue(event.target.value)}>
                    <option value="Сначало полезные">Сначало полезные</option>
                    <option value="Сначало новые">Сначало новые</option>
                    <option selected value="Сначало популярные">Сначало популярные</option>
                </select></p>
            </form>
        </div>
    )
}

export default Options;