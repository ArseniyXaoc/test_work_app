import './Review.scss'

interface IReviewAuthor {
    name: string
    avatar: string
    avatar_url: string
}

function ReviewAuthor({name, avatar, avatar_url}: IReviewAuthor) {
    return (
        <div className='review-author'>
            <span className='author-avatar'>{avatar_url ? <img src={avatar_url} alt={name[0]} /> : <div>{avatar}</div>}</span>            
            <h3 style={{margin: 0}}>{name}</h3>
        </div>
        
    )
}

export default ReviewAuthor;