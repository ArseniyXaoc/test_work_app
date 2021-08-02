import './rewiev.scss'

function RewievDate({date}:{date: string}) {
    return (
        <div>
            {date.slice(0, 10)}
        </div>
    )
}

export default RewievDate;