import { useState, useEffect } from "react";
import "./Pagination.scss";

function Pagination({ filterFunction, loading, selectValue, currentPage, setCurrentPage }: {
  filterFunction: (page: string | undefined, sort: string | undefined) => void,
  loading: React.Dispatch<React.SetStateAction<boolean>>,
  selectValue: string, 
  currentPage:number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}) {  
  const totalPage = 20;
  const showedPageNum = 5;

  function pageArr() {
    const pages = [];
    if (currentPage <= 3) {
      for (let i = 1; i <= 1 + showedPageNum; i++) {
        if (i > totalPage) break;
        pages.push(i);
      }
    }
    if (currentPage > 3) {
      for (let i = currentPage - 3; i <= currentPage - 3 + showedPageNum; i++) {
        if (i > totalPage) break;
        pages.push(i);
      }
    }
    return pages;
  }

  useEffect(() => {
    pageArr();
  }, [currentPage]);

  function handler(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    // @ts-ignore
    const x: HTMLAnchorElement = event.target;
    const num = Number(x.innerHTML);  
    setCurrentPage(num);
    loading(false);
    filterFunction(String(num), selectValue);
  }
  const pages = pageArr();

  return <div className='pagination'>{pages.map((data, index) => {
      return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <button className={data === currentPage ? 'pagination-btn' : 'pagination-btn pagination-current'} onClick={handler}>
          {data}
        </button>
      );
  })}</div>;
}

export default Pagination;
