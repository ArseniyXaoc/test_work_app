import React, { useState, useEffect, useContext, useCallback } from "react";
import { WRAPPER } from "../CONSTANTS";
import "./App.scss";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Raiting from "./raiting/Raiting";
import Filter from "./filter/Filter";
import Options from "./options/Options";
import Rewiev from "./rewiev/Rewiev";
import getData from "./App.service";
import { v4 as uuidv4 } from "uuid";
import RaitingDatails from "./raiting/RaitingDatails";
import Slide from './slider/Slider'

interface IProduct {
  rating: number;
  reviews_count: number;
  rating_details: [];
  review_photos: [],
  [key: string]: number | string | [];
}

function App() {
  const [data, setData] = useState();
  const [product, setProduct] = useState<IProduct>();
  const [review, setReview] = useState<Array<{}>>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);



  function getNewData(page: string | undefined, sort: string | undefined) {
    // rating:desc
    // rating:asc
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
  }, [isLoading]);

  if (error) {
    return <div className="App">Ощибка: {error.message}</div>;
  } else if (!isLoading) {
    return <div>Загрузка.</div>;
  } else if (product !== undefined && review !== undefined) {
    return (
      <div className="App">
        <div className='wrapper'>
          <header className="header">
            <Raiting raiting_number={product.rating} size_of_grade={product.reviews_count} />
            <RaitingDatails raiting_number={product.rating_details} size_of_grade={product.reviews_count} />
            <div className="button-wrapper">
              <button className="button" onClick={() => getData()}>
                Написать отзыв
              </button>
            </div>   
            
          </header>
          {/*  */}
          <main>
            <div className='wrapper'><Slide photos = {product.review_photos}/></div>
            <div>
              <Options filterFunction={getNewData} />
            </div>
            <div>
              {review.map((data: any) => {

                const rewievSettings = {
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
                }

                return (
                  <Rewiev {...rewievSettings} />
                );
              })}
            </div>
          </main>
        </div>
      </div>
    );
  } else {
    return <div>504</div>;
  }
}

export default App;
