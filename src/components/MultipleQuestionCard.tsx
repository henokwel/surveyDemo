import { Fragment, useEffect, useRef } from "react";
import type { QuestionCardProps } from "../types/survey";
import Radio from "./Radio"
import QuestionHelp from "./QuestionHelp";

export const MultipleQuestionCard = ({ questionsBySection, currentSectionIndex, language, handleAnswers, answers, improvedUI }: QuestionCardProps) => {

    const sectionTitles = Object.keys(questionsBySection)
    const sectionGroups = Object.values(questionsBySection)
    const currentSection = sectionGroups[currentSectionIndex]
    const firstQuestion = currentSection?.[0]


    const sectionTitleRef =
        useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        sectionTitleRef.current?.focus()
    }, [currentSectionIndex])

    if (!firstQuestion || !firstQuestion.section_subTitle) {
        return null
    }

    return (
        <div className='question_card' >
            <div className='question_container'>
                <p
                    id="sectionTitle"
                    ref={sectionTitleRef}
                    tabIndex={-1}
                >{sectionTitles[currentSectionIndex]}</p>
                <p>{firstQuestion.section_subTitle[language]}</p>
            </div>

            <div className="option_container multi_option">
                <div className="multi_option_lables">

                    <div className='optionLabel'>
                        {currentSection[0].options.map(item => {

                            // Enable in case option text gets too long. 
                            // const labelLengthCheck = item.label[language].length > 23 ? item.short_label[language] : item.label[language]
                            return (<p key={item.label[language]}>{item.label[language]}</p>)
                        })}
                    </div>
                </div>
            </div>

            <div className="choices_container">
                {
                    currentSection.map(item => {
                        return (
                            <Fragment key={item.id}>
                                <div
                                    className="choice_item"
                                    id={item.id}
                                    key={item.id}
                                    role="radiogroup"
                                    aria-labelledby={`question-${item.id}`}

                                >
                                    <div className="choice_label">
                                        <p>{item.question[language]}</p>
                                        {
                                            improvedUI && item.helpText ?
                                                <QuestionHelp
                                                    language={language}
                                                    helpText={item.helpText[language]}
                                                />
                                                : <></>
                                        }
                                    </div>
                                    <div className="choice_input" key={item.id} >
                                        {
                                            currentSection[0].options.map(option => {
                                                const optionId = `${item.id}-${option.value}`
                                                return (
                                                    <div className="inputDiv" key={optionId}>
                                                        <Radio
                                                            key={optionId}
                                                            type='radio'
                                                            id={optionId}
                                                            name={optionId}
                                                            checked={answers[item.id] === option.value}
                                                            onChange={() => handleAnswers(item.id, option.value)}
                                                            value={option.value}
                                                            aria-label={option.value}
                                                        />
                                                        <label className='mobile_label multi_label' htmlFor={optionId}>{option.label[language]}</label>
                                                    </div>
                                                )
                                            }
                                            )
                                        }
                                    </div>
                                </div >
                            </ Fragment>
                        )
                    }
                    )
                }
            </div>
        </div >
    )
}