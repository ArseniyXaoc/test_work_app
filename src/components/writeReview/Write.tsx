import { useEffect } from 'react'
import style from './Write.module.scss'

export default function Write ({setForm}:{setForm: React.Dispatch<React.SetStateAction<boolean>>}) {
    useEffect(() =>{
        const cov = document.getElementsByClassName('cover');
        const set = (event: any) => {
            if(event.target.className === "cover") setForm(false)
        };
        cov[0].addEventListener('click', set)
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        }
      })
    return (
        <div className={style.write}>
            <button className={style.write_button} onClick={() => setForm(false)}>X</button>
            <form className={style.write_form} action="POST">
                <label htmlFor="writeReview">
                    Ваш отзыв:
                </label>
                <input className={style.write_text} type="text" name="writeReview" id="writeReview" />
                <label htmlFor="writeReview">
                    Достоинства:
                </label>
                <input className={style.write_text} type="text" name="writeReview" id="writeReview" />
                <label htmlFor="writeReview">
                    Недостатки:
                </label>
                <input className={style.write_text} type="text" name="writeReview" id="writeReview" />
                <input type="button" value="Отправить" />
            </form>
        </div>
    )
}