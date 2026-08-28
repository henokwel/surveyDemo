import Radio from "./Checkbox"

function SingleQ_Card({ questionsBySection, currentSectionIndex, language, handleAnswers, answers }) {

    const sectionTitles = Object.keys(questionsBySection)
    const paginationArr_ = Object.values(questionsBySection)

    const itemID = paginationArr_[currentSectionIndex][0].id
    return (
        <div className='question_card'>

            <div className='question_container'>
                <p>{paginationArr_[currentSectionIndex][0].question[language]}</p>

            </div>

            {
                paginationArr_[currentSectionIndex][0].options.map(item =>
                    <div className="option_container singleQView" key={item.value}>
                        <div className="inputDiv ">
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

            {/* <div className="option_container">

                <div className='inputDiv'>
                    <Radio
                        aria-label="Often"
                        name="frequency"
                        value="often"
                    // checked={answer === "often"}
                    // onChange={(event) => setAnswer(event.target.value)}
                    />
                    <label className='mobile_label' htmlFor="one">No</label>
                </div>

                <div className='inputDiv'>
                    <Radio />
                    <label className='mobile_label' htmlFor="one">Yes, mainly due to insecurity, crime, and disturbances of the peace</label>
                </div>

            </div> */}
        </div>
    )
}

export default SingleQ_Card