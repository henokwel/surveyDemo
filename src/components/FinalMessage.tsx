
type FinalMessageProps = {
    message: string[]
}

export const FinalMessage = ({
    message
}: FinalMessageProps) => {
    return (
        <div className='survery_endMsg'>
            {message.map((paragraph: string) => (
                <p key={paragraph}>{paragraph}</p>
            ))}
        </div>
    )
}