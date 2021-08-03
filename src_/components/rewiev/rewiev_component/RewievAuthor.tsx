import './rewiev.scss'

interface IRewievAuthor {
    name: string
    avatar: string
    avatar_url: string
}

function RewievAuthor({name, avatar, avatar_url}: IRewievAuthor) {
    return (
        <div className='rewiev-author'>
            <span>{avatar_url ? <img src={avatar_url} alt={name[0]} /> : <div>{avatar}</div>}</span>            
            <h3>{name}</h3>
        </div>
        
    )
}

export default RewievAuthor;