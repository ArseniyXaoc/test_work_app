import { useState } from "react";
import style from "./styles/ReviewCreateAnswer.module.scss";

function ReviewCreateAnswer(params: any) {
  return (
    <>
      <form className={style.createAnswer} action="" method="post">
        {/* <input className={style.input} type="textarea" placeholder="Коментировать отзыв ..." name="" id="" /> */}
        <textarea className={style.input} placeholder="Коментировать отзыв ..."></textarea>
        <div className={style.wrapper}>
          <select className={style.rules} name="" id="">
            <option value="rules">Правила сообщества</option>
          </select>
          <button className={style.cencel} type="reset" onClick={() => params.setIsReviev(false)}>
            Отмена
          </button>
          <button className={style.send} type="submit">
            Отправить
          </button>
        </div>

        <div className={style.header}>
          <div className={style.header_avatar}></div>
          <div className={style.header_user}>Аноним</div>
          <div className={style.header_icon}>|</div>
        </div>
      </form>
    </>
  );
}

export default ReviewCreateAnswer;
