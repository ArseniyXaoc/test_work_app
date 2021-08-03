import { useEffect } from 'react'
import './Write.scss'

export default function Write ({setForm}:{setForm: React.Dispatch<React.SetStateAction<boolean>>}) {
    useEffect(() =>{
        console.log('asd');
        const cov = document.getElementsByClassName('cover');
        console.log(cov);
        const set = (event: any) => {
            console.log(event.target.className);
            if(event.target.className === "cover") setForm(false)
        };
        cov[0].addEventListener('click', set)
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        }
      })
    return (
        <div className='write'>
            <button className='write-button' onClick={() => setForm(false)}>X</button>
            <form className='write-form' action="POST">
                <label htmlFor="writeReview">
                    Ваш отзыв:
                </label>
                <input className='write-text' type="text" name="writeReview" id="writeReview" />
                <label htmlFor="writeReview">
                    Достоинства:
                </label>
                <input className='write-text' type="text" name="writeReview" id="writeReview" />
                <label htmlFor="writeReview">
                    Недостатки:
                </label>
                <input className='write-text' type="text" name="writeReview" id="writeReview" />
                <input type="button" value="Отправить" />
            </form>
        </div>
    )
}