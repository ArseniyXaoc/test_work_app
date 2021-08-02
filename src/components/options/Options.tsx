import { useState } from 'react';
import './Options.scss'
function Options() {

    const [selectValue, setSelectValue] = useState('useful');
    return (
        <div>
            <form className='form' action="">
                <p className='form-wrap'>
                    <select className='form-select' value={selectValue} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setSelectValue(event.target.value)}>
                        <option value="useful">полезные</option>
                        <option value="new">новые</option>
                        <option selected value="old">старые</option>
                        <option selected value="hight">с высокой оценкой</option>
                        <option selected value="low">с низкой оценкой</option>
                    </select></p>
            </form>
        </div>
    )
}

export default Options;