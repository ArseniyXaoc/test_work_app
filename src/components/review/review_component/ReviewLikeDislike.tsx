import "./styles/Review.scss";
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
      <div style={{display:"flex"}}>
        <img onClick={() => setLikeSt(likeSt+1)} className="icons" src={likeIcon} alt="" />
       <span style={{marginLeft: '10px', color: 'rgb(124 124 124)', marginRight: '10px', fontWeight: 'bold', fontSize: '14px'}}> {likeSt}</span>
       {likeSt > 10 && <span>Полезный отзыв</span>}
      </div>
      <div style={{display:"flex"}}>
        <img onClick={() => setDislikeSt(dislikeSt+1)} className="icons" src={dislikeIcon} alt="" />
        <span style={{marginLeft: '10px', color: 'rgb(124 124 124)', fontWeight: 'bold', fontSize: '14px'}}>{dislikeSt}</span>
      </div>
    </div>
  );
}

export default ReviewLikeDislike;
