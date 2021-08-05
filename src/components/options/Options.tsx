import { useCallback, useEffect, useRef, useState } from 'react';
import './Options.scss'
function Options({ filterFunction, loading, setSelectValue, selectValue, onlyPhoto, setOnlyPhoto }: { filterFunction: (page: number | undefined, sort: string) => void, 
    loading: React.Dispatch<React.SetStateAction<boolean>>,
    setSelectValue: React.Dispatch<React.SetStateAction<string>>,
    selectValue: string, 
    onlyPhoto: boolean,
    setOnlyPhoto: React.Dispatch<React.SetStateAction<boolean>>  }) {
    
    const stateRef = useRef('');
    

    const handler = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
        stateRef.current = event.target.value;
        loading(false);
        setSelectValue(event.target.value);
        filterFunction(undefined, stateRef.current);
    }, [filterFunction, loading, setSelectValue])

    const handlerCheckbox = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.checked){
            setOnlyPhoto(true);
            console.log(onlyPhoto);
            console.log(1);   
        } else {
            setOnlyPhoto(false);
            console.log(onlyPhoto);
            console.log(2);
        } 
    }, [onlyPhoto]);

    useEffect(() => {
        console.log(onlyPhoto);
        filterFunction(undefined, selectValue);
    }, [onlyPhoto]);

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
                        <input type="checkbox" checked={onlyPhoto} name="check" id="check" onChange = {handlerCheckbox}/> 
                        <label htmlFor="check">Только с фото</label>
                    </div>
            </form>
        </div>
    )
}

export default Options;