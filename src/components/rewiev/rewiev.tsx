import { RewievAuthor, RewievScore, RewievDetails, RewievText, RewievQuality, RewievLikeDislike, RewievAnswer, RewievPhotos, RewievCreateAnswer } from './rewiev_component';

interface IRewiev {
    name: string,
    avatar: string,
    score: number,
    experienceOfUse: number,
    detailsOption: string[],
    date: Date,
    text: string,
    dignity: string,
    limitations: string,
    photos: string[],
    like: number,
    dislike: number,
    source: string,
}

function Rewiev(params: IRewiev) {
    return (
        <div>
            <RewievAuthor name={params.name} avatar={params.avatar} />
            <RewievScore score={params.score} experienceOfUse={params.experienceOfUse} />
            <RewievDetails detailsOption={params.detailsOption} date={params.date} />
            <RewievText text={params.text} />
            <RewievQuality dignity={params.dignity} />
            <RewievLikeDislike like={params.like} dislike={params.dislike} source={params.source} />
            <RewievPhotos photos={params.photos} />
            <RewievCreateAnswer />
            <RewievAnswer />
        </div>
    )
}

export default Rewiev;