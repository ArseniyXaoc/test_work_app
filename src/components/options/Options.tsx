import { useCallback, useRef, useState } from 'react';
import './Options.scss'
function Options({ filterFunction, loading, setSelectValue, selectValue }: { filterFunction: (page: number | undefined, sort: string) => void, 
    loading: React.Dispatch<React.SetStateAction<boolean>>,
    setSelectValue: React.Dispatch<React.SetStateAction<string>>,
    selectValue: string }) {
    
    const stateRef = useRef('');
    const [isChecked, setIsChecked] = useState(false);

    

    const handler = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
        stateRef.current = event.target.value;
        loading(false);
        setSelectValue(event.target.value);
        filterFunction(undefined, stateRef.current);
    }, [filterFunction, loading, setSelectValue])


    return (
        <div>
            <form className='form' action="">
                <p className='form-wrap'>
                    <select className='form-select' value={selectValue} onChange={handler}>
                        <option value="helpfulness%3Adesc">Сначала полезные</option>
                        <option value="created_at%3Adesc">Сначала новые</option>
                        <option selected value="created_at%3Aasc">Сначала старые</option>
                        <option selected value="rating%3Adesc">Сначала с высокой оценкой</option>
                        <option selected value="rating%3Aasc">Сначала с низкой оценкой</option>
                    </select></p>
                    <div className='checkBox'>
                        <input type="checkbox" checked={isChecked} name="check" id="check" onChange = {(e) => {e.target.checked? setIsChecked(true): setIsChecked(false)}}/> 
                        <label htmlFor="check">Только с фото</label>
                    </div>
            </form>
        </div>
    )
}

export default Options;