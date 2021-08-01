import {RewievAuthor, RewievScore, RewievDetails,RewievText, RewievQuality,RewievLikeDislike,RewievAnswer} from './rewiev_component';
function Rewiev(params: any) {
    return (
        <div>
            <RewievAuthor/>
            <RewievScore/>
            <RewievDetails/>
            <RewievText/>
            <RewievQuality/>
            <RewievLikeDislike/>
            <RewievAnswer/>
        </div>
    )
}

export default Rewiev;