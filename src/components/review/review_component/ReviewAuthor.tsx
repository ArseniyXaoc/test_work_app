import './styles/Review.scss'

interface IReviewAuthor {
    name: string
    avatar: string
    avatar_url: string
}

function ReviewAuthor({name, avatar, avatar_url}: IReviewAuthor) {
    return (
        <div className='review-author'>
            
            <h3 style={{margin: 0}}>{name}</h3>
        </div>
        
    )
}

export default ReviewAuthor;