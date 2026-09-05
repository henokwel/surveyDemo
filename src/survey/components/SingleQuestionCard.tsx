import type { QuestionCardProps } from "../model/survey.types"
import Radio from "./Radio"
import QuestionHelp from "./QuestionHelp"




function SingleQuestionCard({ questionsBySection, currentSectionIndex, language, handleAnswers, answers, improvedUI }: QuestionCardProps) {


    const sectionGroups = Object.values(questionsBySection)
    const currentQuestion =
        sectionGroups[currentSectionIndex]?.[0]

    if (!currentQuestion) {
        return null
    }

    const itemID = currentQuestion.id
    const question = currentQuestion.question
    const helperText = currentQuestion?.helpText


    return (

        <fieldset className="question_card">
            <legend className="question_container">
                {question[language]}
            </legend>

            {improvedUI && helperText && (
                <QuestionHelp
                    language={language}
                    helpText={helperText[language]}
                />
            )}

            {
                currentQuestion.options.map(option => {
                    const optionId =
                        `${itemID}-${option.value}`

                    return (
                        <div
                            className="option_container singleQView"
                            key={optionId}
                        >
                            <div className="inputDiv inputDiv_singleQView">
                                <Radio
                                    type="radio"
                                    id={optionId}
                                    name={itemID}
                                    value={option.value}
                                    checked={
                                        answers[itemID] === option.value
                                    }
                                    onChange={() =>
                                        handleAnswers(
                                            itemID,
                                            option.value
                                        )
                                    }
                                />

                                <label
                                    className="mobile_label"
                                    htmlFor={optionId}
                                >
                                    {option.label[language]}
                                </label>
                            </div>
                        </div>
                    )
                })}
        </fieldset>
    )
}

export default SingleQuestionCard