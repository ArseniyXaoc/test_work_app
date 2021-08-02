import "./rewiev.scss";

function RewievPhotos({ photos }: { photos: string[] }) {
    if (photos.length !== 0){
        return (
        <div>{photos.map( data => {
            return <a href={data}></a>
        })}</div>
    )
    }
    else return (
        <div></div>
    )
}

export default RewievPhotos;
