import "./styles/Review.scss";
import { v4 as uuidv4 } from "uuid";
import { IReviewPhotos } from "../../interfaces/Interfaces";
import style from './styles/ReviewPhotos.module.scss'

function ReviewPhotos({ photos }: { photos: IReviewPhotos[] }) {
    console.log(photos);
    return (
        <div className={style.wrapper}>{photos.map(data => {
            return <img className={style.photo} key={uuidv4()} src={data.url_thumb} alt="" />
        })}</div>
    )
}

export default ReviewPhotos;
