import style from "./styles/Comments.module.scss";
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
    <div className={style.wrapper}>
      {answer.map((data) => {
        return (
          <div key={uuidv4()} className={style.author}>
            <ReviewAuthor 
              name={data.author.name}
              avatar={data.author.initials}
              avatar_url=""
            />
            <div className={style.text}><ReviewText text = {data.text} /></div>
          </div>
        );
      })}
    </div>
  );
}

export default ReviewAnswer;
