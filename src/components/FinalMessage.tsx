


export const FinalMessage = ({ message }) => {
    return (
        <div className='survery_endMsg'>
            {message.map((paragraph: string) => (
                <p key={paragraph}>{paragraph}</p>
            ))}
        </div>
    )
}