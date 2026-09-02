import type { QuestionCardProps } from "../types/survey"
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
        // <div className='question_card'>
        //     <div className='question_container'>
        //         <p>{question[language]}</p>
        //         {
        //             improvedUI && helperText ?
        //                 <QuestionHelp
        //                     language={language}
        //                     helpText={helperText[language]}
        //                 />
        //                 : <></>
        //         }
        //     </div>
        //     {
        //         sectionGroups[currentSectionIndex][0].options.map(option => {

        //             const optionId = `${itemID}-${option.value}`

        //             return (
        //                 <div className="option_container singleQView" key={optionId}>
        //                     <div className="inputDiv inputDiv_singleQView">
        //                         <Radio
        //                             key={itemID}
        //                             type='radio'
        //                             id={optionId}
        //                             name={itemID}
        //                             checked={answers[itemID] === option.value}
        //                             onChange={() => handleAnswers(itemID, option.value)}
        //                             value={option.value}
        //                             aria-label={option.value}
        //                         />
        //                         <label className='mobile_label'
        //                             htmlFor={optionId}>
        //                             {option.label[language]}
        //                         </label>
        //                     </div>
        //                 </div>
        //             )
        //         }
        //         )
        //     }

        // </div>
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