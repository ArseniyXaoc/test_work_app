import { useEffect } from "react";
import style from "./LoadPages.module.scss";
import { v4 as uuidv4 } from "uuid";


function LoadPages({
  currentPage,
  nextPage,
  selectValue,
  setCurrentPage,
  pages,
  setPages }:
  {
    currentPage: number,
    nextPage: (page: number | undefined, sort: string | undefined) => void,
    selectValue: string,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
    pages: number,
    setPages: React.Dispatch<React.SetStateAction<number>>
  }) {

  return (
    <div>
      <button className={style.button} onClick={() => { nextPage(currentPage + 1, selectValue); setCurrentPage(currentPage + 1); setPages(pages-10) }}>Загрузить еще 10 отзывов из {pages}</button>
    </div>
  )
}
export default LoadPages;
