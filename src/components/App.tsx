import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.scss";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Raiting from "./raiting/Raiting";
import Options from "./options/Options";
import Review from "./review/Review";
import getData from "./App.service";
import RaitingDatails from "./raiting/RaitingDatails";
import Slide from "./slider/Slider";
import Pagination from './pagination/Pagination';
import Write from './writeReview/Write';

interface IProduct {
  rating: number;
  reviews_count: number;
  rating_details: [];
  review_photos: [];
  [key: string]: number | string | [];
}

function App() {
  const [selectValue, setSelectValue] = useState('created_at%3Adesc');
  const [product, setProduct] = useState<IProduct>();
  const [review, setReview] = useState<Array<{}>>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [form, setForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  function getNewData(page: string | undefined, sort: string | undefined) {
    getData(page, sort).then(
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

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, [isLoading])

  useEffect(() => {
    getData().then(
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
  }, []);

  if (error) {
    return <div className="App">Ощибка: {error.message}</div>;
  } else if (!isLoading) {
    return <div>Загрузка.</div>;
  } else if (product !== undefined && review !== undefined) {
    return (
      <div className="App">
        {form && <div className="cover"><Write setForm={setForm} /></div>}
        <div className="wrapper">


          <header className="header">
            <Raiting
              raiting_number={product.rating}
              size_of_grade={product.reviews_count}
            />
            <RaitingDatails
              raiting_number={product.rating_details}
              size_of_grade={product.reviews_count}
            />
            <div className="button-wrapper">
              <button className="button" onClick={() => {
                setForm(true)
              }}>
                Написать отзыв
              </button>
            </div>
          </header>

          <main>
            <div className="wrapper1">
              <Slide photos={product.review_photos} />
            </div>
            <div>
              <Options filterFunction={getNewData} loading={setIsLoading} setSelectValue={setSelectValue} selectValue={selectValue} />
            </div>
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
            <Pagination currentPage ={currentPage} setCurrentPage={setCurrentPage} filterFunction={getNewData} loading={setIsLoading} selectValue={selectValue} />
          </main>
        </div>
      </div>
    );
  } else {
    return <div>504</div>;
  }
}

export default App;
