import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.scss";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import photoIcon from '../assets/icons/pngwing.com.png'
import Raiting from "./raiting/Raiting";
import Options from "./options/Options";
import Review from "./review/Review";
import getData from "./App.service";
import Slide from "./slider/Slider";
import Pagination from "./pagination/Pagination";
import Write from "./writeReview/Write";
import Filter from "./filter/Filter";
import LoadPages from "./LoadPages/LoadPages";
import Header from "./LoadPages/Header/Header";
import { IProduct } from "./interfaces/Interfaces";


function App() {
  const [selectValue, setSelectValue] = useState("created_at%3Adesc");
  const [product, setProduct] = useState<IProduct>();
  const [review, setReview] = useState<Array<{}>>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [form, setForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSort, setCurrentSort] = useState(1);
  const [pages, setPages] = useState(1);
  const [onlyPhoto, setOnlyPhoto] = useState(false);


  const filter_theme = [
    "Немного жмет",
    "Немного жмет",
    "Немного жмет",
    "Немного жмет",
    "Немного жмет",
    "Немного жмет",
    "Немного жмет",
    "Немного жмет",
    "Немного жмет",
    "Немного жмет",
    "Немного жмет",
    "Немного жмет",
  ];

  function getNewData(page: number | undefined, sort: string | undefined) {

    getData(onlyPhoto, page, sort).then(
      (data) => {
        setProduct(data.product);
        setReview(data.reviews);
        setIsLoading(true);
      },

      (error) => {
        setIsLoading(true);
        setError(error);
      }
    );
  }

  function nextPage(page: number | undefined, sort: string | undefined) {
    getData(onlyPhoto, page, sort).then(
      (data) => {
        setReview(() => review?.concat(data.reviews));
        setProduct(data.product);
        setIsLoading(true);
      },

      (error) => {
        setIsLoading(true);
        setError(error);
      }
    );
  }

  const send = <input className="hidden" type="file" id="uploadfile" />;

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, [isLoading]);

  useEffect(() => {
    getData(onlyPhoto).then(
      (data) => {
        setProduct(data.product);
        setReview(data.reviews);
        setPages(data.pages.total_pages);
        setIsLoading(true);
      },

      (error) => {
        setIsLoading(true);
        setError(error);
      }
    );
  }, []);

  if (error) {
    return <div className="App">Ощибка: {error.message}</div>;
  } else if (!isLoading) {
    return <div>Загрузка.</div>;
  } else if (product !== undefined && review !== undefined) {
    return (
      <div className="App">
        {form && (
          <div className="cover">
            <Write setForm={setForm} />
          </div>
        )}
        <div className="wrapper">
          <Header rating={product.rating} reviews_count={product.reviews_count} setForm={setForm} />

          <main>
            {send}
            <section className="sliderWrapper">
              <button
                className="sand-photo"
                onClick={() => {
                  const x = document.getElementById('uploadfile');
                  x?.click();
                }}
              ><img style={{width:'23px', height: '23px'}} src={photoIcon} alt="" /></button>
              <Slide photos={product.review_photos} />
            </section>

            <Filter filter_theme={filter_theme} />
            <section>
              <Options
                filterFunction={getNewData}
                loading={setIsLoading}
                setSelectValue={setSelectValue}
                selectValue={selectValue}
                onlyPhoto={onlyPhoto}
                setOnlyPhoto={setOnlyPhoto}
              />
            </section>
            <div>
              {review.map((data: any) => {

                const reviewSettings = {
                  key: uuidv4(),
                  name: data.author.name,
                  avatar: data.author.initials,
                  avatar_url: data.author.avatar_url,
                  score: data.rating,
                  location: data.author.location,
                  detailsOption: data.author.details,
                  date: data.published_at,
                  text: data.body,
                  photos: data.photos,
                  like: data.likes,
                  dislike: data.dislikes,
                  source: "http:sdfsdfsdf",
                  rating_details: data.rating_details,
                  answer: data.comments,
                };

                return <Review {...reviewSettings} />;
              })}
            </div>
            {pages > 10 && <LoadPages
              currentPage={currentPage}
              nextPage={nextPage}
              selectValue={selectValue}
              setCurrentPage={setCurrentPage}
              pages={pages}
              setPages={setPages}
            /> }
          </main>
        </div>
      </div>
    );
  } else {
    return <div>504</div>;
  }
}

export default App;
