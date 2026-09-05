
type FinalMessageProps = {
    message: string[]
}

export const FinalMessage = ({
    message
}: FinalMessageProps) => {
    return (
        <div className='surveyCompletionMessage'>
            {message.map((paragraph: string) => (
                <p key={paragraph}>{paragraph}</p>
            ))}
        </div>
    )
}