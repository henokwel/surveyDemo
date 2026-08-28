// import { useState, useEffect, useMemo } from 'react'
// import './App.css'
// import { SingleQ_Card } from './components/singleQ_Card'
// import { MultipleQ_Card } from './components/MultipleQ_Card'
// import { safetyOptions, surveyQuestions_0 } from "./Q"

// function App() {
//     const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
//     const [answersByQuestionId, setAnswersByQuestionId] = useState({})
//     const [isSurveyComplete, setIsSurveyComplete] = useState(false)

//     const questionsBySection = useMemo(() => {
//         return surveyQuestions.reduce((sections, question) => {
//             sections[question.section] ??= []
//             sections[question.section].push(question)

//             return sections
//         }, {})
//     }, [surveyQuestions])

//     const sectionTitles = Object.keys(questionsBySection)
//     const sectionQuestionGroups = Object.values(questionsBySection)

//     const currentSectionQuestions =
//         sectionQuestionGroups[currentSectionIndex] ?? []

//     const isCurrentSectionComplete = currentSectionQuestions.every(
//         question => answersByQuestionId[question.id] !== undefined
//     )

//     const isFirstSection = currentSectionIndex === 0
//     const isLastSection =
//         currentSectionIndex === sectionQuestionGroups.length - 1

//     const handleAnswerChange = (questionId, answerValue) => {
//         setAnswersByQuestionId(previousAnswers => ({
//             ...previousAnswers,
//             [questionId]: answerValue
//         }))
//     }

//     const handleNextSection = () => {
//         if (!isCurrentSectionComplete) {
//             return
//         }

//         if (isLastSection) {
//             setIsSurveyComplete(true)
//             return
//         }

//         setCurrentSectionIndex(index => index + 1)
//     }

//     const handlePreviousSection = () => {
//         setCurrentSectionIndex(index => Math.max(0, index - 1))
//     }

//     if (isSurveyComplete) {
//         return <p>End</p>
//     }

//     return (
//         <div className="app">
//             <div className="container">
//                 <SingleQuestionCard />

//                 <MultipleQuestionCard
//                     questionsBySection={questionsBySection}
//                     currentSectionIndex={currentSectionIndex}
//                     answers={answersByQuestionId}
//                     onAnswerChange={handleAnswerChange}
//                 />
//             </div>

//             <div className="pagination-container">
//                 <button
//                     disabled={isFirstSection}
//                     onClick={handlePreviousSection}
//                 >
//                     Back
//                 </button>

//                 <button
//                     disabled={!isCurrentSectionComplete}
//                     onClick={handleNextSection}
//                 >
//                     {isLastSection ? "Finish" : "Next"}
//                 </button>
//             </div>
//         </div>
//     )
// }