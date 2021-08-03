import "./Review.scss";
import { v4 as uuidv4 } from "uuid";

interface IReviewDetails {
  value: string;
  name: string;
  label: string;
}

function ReviewDetails({
  datails,
}: {
  datails: IReviewDetails[];
}) {
  if (datails) {
    return (
      <div>
        <div className='review-details'>
          {datails.map((data) => {
            return (
              <div key={uuidv4()} style= {{marginRight:'1vw'}}>
                <span className='details-label'>{data.label}</span>: <span className='details-value'>{data.value}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <div></div>
  }
}

export default ReviewDetails;
