import './Review.scss'

function ReviewDate({date}:{date: string}) {
    return (
        <div className='review-date'>
            {date.slice(0, 10)}
        </div>
    )
}

export default ReviewDate;