import "./rewiev.scss";

function RewievLikeDislike({
  like,
  dislike,
}: {
  like: number;
  dislike: number;
}) {
  return (
    <div>
      <div>{like}</div>
      <div>{dislike}</div>
    </div>
  );
}

export default RewievLikeDislike;
