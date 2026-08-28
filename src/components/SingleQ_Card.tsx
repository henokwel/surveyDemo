import Radio from "./Checkbox"
import QuestionHelp from "./QuestionHelp"

function SingleQ_Card({ questionsBySection, currentSectionIndex, language, handleAnswers, answers, improvedUI }) {

    // const sectionTitles = Object.keys(questionsBySection)
    const paginationArr_ = Object.values(questionsBySection)

    const itemID = paginationArr_[currentSectionIndex][0].id
    const question = paginationArr_[currentSectionIndex][0].question
    const helperText = paginationArr_[currentSectionIndex][0]?.helpText
    console.log(question);

    return (
        <div className='question_card'>

            <div className='question_container'>
                <p>{question[language]}</p>

                {
                    improvedUI ?
                        <QuestionHelp
                            language={language}
                            helpText={helperText[language]}
                        />
                        : <></>
                }
            </div>

            {
                paginationArr_[currentSectionIndex][0].options.map(item =>
                    <div className="option_container singleQView" key={item.value}>
                        <div className="inputDiv inputDiv_singleQView">
                            <Radio
                                key={item.value}
                                type='radio'
                                id={item.label[language]}
                                name={itemID}
                                checked={answers[itemID] === item.value}
                                onChange={() => handleAnswers(itemID, item.value)}
                                value={item.value}
                                aria-label={item.value}
                            />
                            <label className='mobile_label'
                                htmlFor={itemID}>
                                {item.label[language]}
                            </label>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default SingleQ_Card