import { useState } from "react";
import {
  ReviewAuthor,
  ReviewScore,
  ReviewDetails,
  ReviewText,
  ReviewLikeDislike,
  ReviewComents,
  ReviewPhotos,
  ReviewCreateAnswer,
  ReviewLocation,
  ReviewDate,
  ReviewAuthorDatails,
} from "./review_component";

import "./review_component/styles/Review.scss";

export interface IReviewAnswer {
  author: {
    name: string;
    initials: string;
  };
  created_at: string;
  updated_at: string;
  text: string;
  likes: number;
  dislikes: number;
}

interface IReview {
  name: string;
  avatar: string;
  avatar_url: string;
  location: string;
  score: number;
  detailsOption: {
    value: string;
    name: string;
    label: string;
  }[];
  date: string;
  text: string;
  photos: string[];
  like: number;
  dislike: number;
  source: string;
  rating_details: {
    value: number;
    name: string;
    label: string;
  }[];
  answer: IReviewAnswer[];
}

function Review(params: IReview) {
  const [isReviev, setIsReviev] = useState(false);

  function randomColor (): string {
    const x: string = '#' + (Math.random().toString(16)+ '000000').substring(2,8).toUpperCase();
    return x+'40';
  }

  return (
    <div className="review-wrapper">
      <div>
        <div className="review-head">
          <div style={{ display: "flex" }}>
            <div className="author-avatar" style={{backgroundColor: randomColor()}}>
              {params.avatar_url ? (
                <img src={params.avatar_url} alt={params.avatar} />
              ) : (
                <div>{params.avatar}</div>
              )}
            </div>
            <div>
              <ReviewAuthor
                name={params.name}
                avatar={params.avatar}
                avatar_url={params.avatar_url}
              />
              <div style={{ display: "flex" }}>
                <ReviewScore score={params.score} />
                <ReviewDetails datails={params.detailsOption} />
              </div>
            </div>
          </div>
          <div style={{display: "flex"}}>
            <div className="verifed">проверенный покупатель</div>
            <div className="top">топ автор</div>
            <ReviewDate date={params.date} />
          </div>
        </div>
        <div className="main-details">
          <ReviewText text={params.text} />
          <ReviewPhotos photos={params.photos} />
        </div>
        <div className="review-bottom">
          <div style={{ display: "flex" }}>
            <ReviewLikeDislike like={params.like} dislike={params.dislike} />
            <button className="answer-button" onClick={() => setIsReviev(true)}>
              Ответить
            </button>
          </div>
          <span>Источник:</span>
        </div>
      </div>
      {isReviev && <ReviewCreateAnswer setIsReviev={setIsReviev} />}
      <ReviewComents answer={params.answer} />
    </div>
  );
}

export default Review;
