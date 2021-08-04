import { useState } from 'react';
import style from './styles/ReviewCreateAnswer.module.scss'
function ReviewCreateAnswer(params:any) {
    return (
           <>
           <form className={style.createAnswer} action="" method="post">
               <input className={style.input} type="textarea" name="" id=""/>
               <div className={style.wrapper}>
                   <select className={style.rules} name="" id="">
                       <option value="rules">Правила сообщества</option>
                   </select>
                   <button className={style.cencel} type="reset">Отмена</button>
                   <button className={style.send} type="submit">Отправить</button>
               </div>
           </form>
           </>
    )
}

export default ReviewCreateAnswer;