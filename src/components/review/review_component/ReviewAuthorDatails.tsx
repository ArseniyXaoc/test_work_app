import "./styles/Review.scss";
import reitingToStar from '../../../utils/raitingToStar'
import { v4 as uuidv4 } from "uuid";

function ReviewAuthorDatails({
  rating_details,
}: {
  rating_details: { value: number; name: string; label: string }[];
}) {
  return (
      <ul className='review-author-details'>
          {rating_details.map(data => {
              return (
                  <li key={uuidv4()} ><span>{data.label}</span><span className='datails-value'>{reitingToStar(data.value)}</span></li>
              )
          })}
      </ul>
  );
}

export default ReviewAuthorDatails;
