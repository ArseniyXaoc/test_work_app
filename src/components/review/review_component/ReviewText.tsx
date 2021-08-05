import './styles/Review.scss'

function ReviewText({text}: {text: string}) {
    if(text === null){
        return (<div className='review-text' style = {{backgroundColor: 'black'}}></div>)
    }
    else return (
        <div className='review-text'>
            {text}
        </div>
    )
}

export default ReviewText;