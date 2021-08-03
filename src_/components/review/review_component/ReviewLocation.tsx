import './Review.scss'

function ReviewLocation({location}:{location: string}) {
    return (
        <div className='details-location'>
            <span className="details-label">Из города:</span> <span className='details-value'>{location}</span>
        </div>
    )
}

export default ReviewLocation;