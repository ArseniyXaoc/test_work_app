import "./Review.scss";
import likeIcon from "../../../assets/icons/like.png";
import dislikeIcon from "../../../assets/icons/dislike.png";
import { useState } from "react";
function ReviewLikeDislike({
  like,
  dislike,
}: {
  like: number;
  dislike: number;
}) {
  const [likeSt, setLikeSt] = useState(like);
  const [dislikeSt, setDislikeSt] = useState(dislike);
  return (
    <div className="icons-wrapper">
      <div className="icons">
        <img onClick={() => setLikeSt(likeSt+1)} className="icons" src={likeIcon} alt="" />
        {likeSt}
      </div>
      <div className="icons">
        <img onClick={() => setDislikeSt(dislikeSt+1)} className="icons" src={dislikeIcon} alt="" />
        {dislikeSt}
      </div>
    </div>
  );
}

export default ReviewLikeDislike;
