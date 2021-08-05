import { useEffect } from "react";
import style from "./LoadPages.module.scss";
import { v4 as uuidv4 } from "uuid";


function LoadPages({ currentPage, nextPage, selectValue, setCurrentPage }: {currentPage: number, nextPage: any, selectValue:any, setCurrentPage: any}) {
  
  return (
    <div>
      <button className={style.button} onClick={() => {nextPage(currentPage+1, selectValue); setCurrentPage(currentPage+1);}}>Загрузить еще 10 отзывов из 18</button>
    </div>
  )
}
export default LoadPages;
