import style from "./styles/ReviewComments.module.scss";

import likeIco from "../../../assets/icons/like.png";
import dislikeIco from "../../../assets/icons/dislike.png";
import ReviewCreateAnswer from "./ReviewCreateAnswer";
import { useEffect, useState } from "react";
import { IReviewAnswer } from "../../interfaces/Interfaces";

function ReviewAnswer({ answer }: { answer: Array<IReviewAnswer> }) {
  const length = answer.length;
  const firstComment = answer[0];
  const [commentPages, setCommentPages] = useState([firstComment]);
  const [pageCounter, setPageCounter] = useState(0);

  useEffect(() => {    
    if(pageCounter > 1 && length > 1){
      commentPages.push(answer[pageCounter-1]);
      commentPages.push(answer[pageCounter]);
    }
  }, [pageCounter]);

  if (length === 0) {
    return <></>;
  } else
    return (
      <>
        {commentPages.map((data) => {
          return <Card
            author={data.author}
            created_at={data.created_at}
            updated_at={data.created_at}
            text={data.text}
            likes={data.likes}
            dislikes={data.dislikes}
            pages={length}
            setPageCounter={setPageCounter}
            pageCounter={pageCounter}
          />;
        })}
      </>
    );
}
interface ICard extends IReviewAnswer {
  pages: number;
  setPageCounter: React.Dispatch<React.SetStateAction<number>>;
  pageCounter: number;
}

function Card(props: ICard) {
  const [isReviev, setIsReviev] = useState(true);

  const data = String(
    new Date(props.created_at).toLocaleString("ru", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    })
  );

  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.avatar}>{props.author.initials}</div>
        <div className={style.card}>
          <div className={style.header}>
            <span className={style.author}>{props.author.name}</span>
            &nbsp;&middot;&nbsp;
            <span className={style.info}>Представитель бренда</span>&nbsp;&middot;&nbsp;
            <span className={style.info}>{data}</span>
          </div>
          <div className={style.text}>{props.text}</div>
          <div className={style.bottom}>
            <span>
              <button className={style.button} onClick={() => {
                setIsReviev(true);
              }}>Oтветить</button>
              <span>&hellip;</span>
            </span>
            <div>
              <span className={style.icon}>
                <img src={likeIco} alt="" />
                {props.likes}
              </span>
              <span className={style.icon}>
                <img src={dislikeIco} alt="" />
                {props.dislikes}
              </span>
            </div>
          </div>
        </div>
      </div>
      {isReviev && <ReviewCreateAnswer setIsReviev={setIsReviev} />}
      {props.pages > 1 && (
        <button className={style.button} onClick={() => {props.setPageCounter(props.pageCounter + 1)}}>
          Загрузить ещё {props.pages - 1} коментария{" "}
        </button>
      )}
    </div>
  );
}

export default ReviewAnswer;
