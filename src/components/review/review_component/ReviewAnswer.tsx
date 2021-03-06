import "./Review.scss";
import ReviewAuthor from "./ReviewAuthor";
import ReviewText from "./ReviewText";
import { v4 as uuidv4 } from "uuid";
function ReviewAnswer({
  answer,
}: {
  answer: {
    author: {
      name: string;
      initials: string;
    };
    updated_at: string;
    text: string;
  }[];
}) {

  if(answer.length === 0) {
    return (
      <></>
    )
  }
  else return (
    <div className="answer">
      <div className="answer-main">Коментарии: </div>
      {answer.map((data) => {
        return (
          <div key={uuidv4()} className="answer-main">
            <ReviewAuthor 
              name={data.author.name}
              avatar={data.author.initials}
              avatar_url=""
            />
            <div className="answer-main"><ReviewText text = {data.text} /></div>
          </div>
        );
      })}
    </div>
  );
}

export default ReviewAnswer;
