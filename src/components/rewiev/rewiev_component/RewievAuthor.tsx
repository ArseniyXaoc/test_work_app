import './rewiev.scss'

interface IRewievAuthor {
    name: string
    avatar: string
}

function RewievAuthor({name, avatar}: IRewievAuthor) {
    return (
        <div className='rewiev-author'>
            <span><img src={avatar} alt={name[0]} /></span>            
            <h3>{name}</h3>
        </div>
    )
}

export default RewievAuthor;