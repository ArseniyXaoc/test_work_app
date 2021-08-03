import { useCallback, useEffect, useRef, useState } from 'react';
import './Options.scss'
function Options({ filterFunction }: { filterFunction: (page:string | undefined, sort: string) => void }) {

    const stateRef = useRef('');
    const [selectValue, setSelectValue] = useState('created_at%3Adesc');
    const [isLoading, setIsLoading] = useState(false);

    const handler = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
        stateRef.current = event.target.value;
        setSelectValue(event.target.value);
        setIsLoading(true);
        filterFunction(undefined, stateRef.current);
    }, [selectValue])


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