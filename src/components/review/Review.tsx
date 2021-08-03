import {
  ReviewAuthor,
  ReviewScore,
  ReviewDetails,
  ReviewText,
  ReviewQuality,
  ReviewLikeDislike,
  ReviewAnswer,
  ReviewPhotos,
  ReviewCreateAnswer,
  ReviewLocation,
  ReviewDate,
  ReviewAuthorDatails,
} from "./review_component";

import "./review_component/Review.scss";

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
  return (
    <div className="review-wrapper">
      <hr />
      <div className="review-head">
        <ReviewScore score={params.score} />
        <ReviewDate date={params.date} />
      </div>
      <div className="review-autor-wrap">
        <ReviewAuthor
          name={params.name}
          avatar={params.avatar}
          avatar_url={params.avatar_url}
        />
        <ReviewLocation location={params.location} />
        <ReviewDetails datails={params.detailsOption} />
      </div>
      <div className="main-details">
        <ReviewText text={params.text} />
        {params.rating_details !== null && params.rating_details.length > 0 && <ReviewAuthorDatails rating_details={params.rating_details} />}        
      </div>
      <ReviewLikeDislike like={params.like} dislike={params.dislike} />
      <ReviewPhotos photos={params.photos} />
      <ReviewCreateAnswer />
      <ReviewAnswer answer={params.answer} />
    </div>
  );
}

export default Review;
