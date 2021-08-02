import {
  RewievAuthor,
  RewievScore,
  RewievDetails,
  RewievText,
  RewievQuality,
  RewievLikeDislike,
  RewievAnswer,
  RewievPhotos,
  RewievCreateAnswer,
  RewievLocation,
  RewievDate,
} from "./rewiev_component";

interface IRewiev {
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
}

function Rewiev(params: IRewiev) {
  return (
    <div>
      <RewievScore score={params.score} />
      <RewievAuthor name={params.name} avatar={params.avatar} avatar_url={params.avatar_url}/>
      <RewievLocation location={params.location}/>
      <RewievDate date={params.date}/>
      <RewievDetails datails={params.detailsOption} />
      <RewievText text={params.text} />
      <RewievLikeDislike
        like={params.like}
        dislike={params.dislike}
      />
      <RewievPhotos photos={params.photos} />
      <RewievCreateAnswer />
      <RewievAnswer />
    </div>
  );
}

export default Rewiev;
