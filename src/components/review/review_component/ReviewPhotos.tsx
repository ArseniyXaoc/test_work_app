import "./styles/Review.scss";
import { v4 as uuidv4 } from "uuid";

function ReviewPhotos({ photos }: { photos: string[] }) {
    if (photos.length !== 0){
        return (
        <div>{photos.map( data => {
            return <img  key={uuidv4()} src={data} alt="" />
        })}</div>
    )
    }
    else return (
        <div></div>
    )
}

export default ReviewPhotos;
