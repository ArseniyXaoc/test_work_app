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
  answer: {
    author: {
      name: string;
      initials: string;
    };
    updated_at: string;
    text: string;
  }[];
}

function Review(params: IReview) {
  const [isReviev, setIsReviev] = useState(true);

  return (
    <div className="review-wrapper">
      <div>
        <hr />
        <div className="review-head">
          <div style={{ display: "flex" }}>
            <div className="author-avatar">
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
          <ReviewDate date={params.date} />
        </div>
        <div className="main-details">
          <ReviewText text={params.text} />
          <ReviewPhotos photos={params.photos} />
        </div>
        <div style={{ display: "flex", color: "#7b7b7b", fontSize: "12px" }}>
          <ReviewLikeDislike like={params.like} dislike={params.dislike} />
          <button className="answer-button">Ответить</button>
          Источник:
        </div>
      </div>
      {isReviev && <ReviewCreateAnswer/>}
      <ReviewComents answer={params.answer}/>
    </div>
  );
}

export default Review;
