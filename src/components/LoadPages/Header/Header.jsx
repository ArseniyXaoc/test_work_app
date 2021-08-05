import Raiting from '../../raiting/Raiting'
import style from './Header.module.scss'
export default function Header ({rating, reviews_count, setForm}) {
    return (
        <header className={style.header}>
            <Raiting
              raiting_number={rating}
              size_of_grade={reviews_count}
            />
            <div>
              <button
                className={style.button}
                onClick={() => {
                  setForm(true);
                }}
              >
                Написать отзыв
              </button>
            </div>
          </header>
    )
}