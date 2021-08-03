import { useCallback, useRef } from 'react';
import './Options.scss'
function Options({ filterFunction, loading, setSelectValue, selectValue }: { filterFunction: (page: string | undefined, sort: string) => void, 
    loading: React.Dispatch<React.SetStateAction<boolean>>,
    setSelectValue: React.Dispatch<React.SetStateAction<string>>,
    selectValue: string }) {

    const stateRef = useRef('');

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
                        <option value="helpfulness%3Adesc">полезные</option>
                        <option value="created_at%3Adesc">новые</option>
                        <option selected value="created_at%3Aasc">старые</option>
                        <option selected value="rating%3Adesc">с высокой оценкой</option>
                        <option selected value="rating%3Aasc">с низкой оценкой</option>
                    </select></p>
            </form>
        </div>
    )
}

export default Options;