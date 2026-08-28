import Radio from "./Checkbox"
import QuestionHelp from "./QuestionHelp";


export const MultipleQ_Card = ({ questionsBySection, currentSectionIndex, language, handleAnswers, answers }) => {
    const sectionTitles = Object.keys(questionsBySection)
    const paginationArr_ = Object.values(questionsBySection)
    console.log(sectionTitles);
    // console.log(paginationArr_);



    return (
        <div className='question_card' >
            <div className='question_container'>
                <p id="sectionTitle">{sectionTitles[currentSectionIndex]}</p>
                <p>{paginationArr_[currentSectionIndex][0].section_subTitle[language]}</p>


            </div>

            <div className="option_container multi_option">
                <div className="multi_option_lables">

                    <div className='optionLabel'>
                        {paginationArr_[currentSectionIndex][0].options.map(item => {
                            // Enable in case option text gets too long. 
                            const labelLengthCheck = item.label[language].length > 23 ? item.short_label[language] : item.label[language]
                            return (<p key={item.id}>{item.label[language]}</p>)
                            // return (<p key={item.id}>{labelLengthCheck}</p>)
                        })}
                    </div>


                </div>
            </div>

            <div className="choices_container">

                {
                    paginationArr_[currentSectionIndex].map(item => {
                        console.log(item);

                        return (
                            <>
                                <div className="choice_item" id={item.id}>
                                    <div className="choice_label">
                                        <p>{item.question[language]}</p>

                                        <QuestionHelp
                                            language={language}
                                            helpText={item.helpText[language]}
                                        />

                                    </div>
                                    <div className="choice_input">

                                        {
                                            paginationArr_[currentSectionIndex][0].options.map(opItem => {



                                                return (
                                                    <div className="inputDiv">
                                                        <Radio
                                                            key={Date.now() + opItem.value}
                                                            type='radio'
                                                            id={item.id}
                                                            name={item.id}
                                                            checked={answers[item.id] === opItem.value}
                                                            onChange={() => handleAnswers(item.id, opItem.value)}
                                                            value={opItem.value}
                                                            aria-label={opItem.value}
                                                        />
                                                        <label className='mobile_label multi_label' htmlFor={opItem.id}>{opItem.label[language]}</label>
                                                    </div>
                                                )
                                            }
                                            )
                                        }
                                    </div>
                                </div>
                                {/* <hr /> */}
                            </ >


                        )
                    })
                }
            </div>

        </div>
    )
}