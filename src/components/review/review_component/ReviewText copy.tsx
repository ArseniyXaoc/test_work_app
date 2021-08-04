import './styles/Review.scss'

function ReviewText({text}: {text: string}) {
    return (
        <div className='review-text'>
            {text}
        </div>
    )
}

export default ReviewText;