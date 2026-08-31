import './App.css'
import { useState, useMemo } from 'react'
import type { AnswerChangeHandler, LanguageType, SurveyAnswers, SurveyQuestion } from "./types/survey";
import { surveyQuestions_0, paginationHint } from './Q3'
import SingleQuestionCard from './components/SingleQuestionCard'
import LanguageDropdown from './components/LangDropDown'
import DemoToggle from './components/DemoToggle'
import { FinalMessage } from './components/FinalMessage'
import { MultipleQuestionCard } from './components/MultipleQuestionCard'

function App() {
  const [currentSectionIndex, setcurrentSectionIndex] = useState(0)
  const [skippedQuestion, setSkippedQuestion] = useState(false)
  const [answers, setAnswers] = useState<SurveyAnswers>({})
  const [isSurveyComplete, setEndOfSurvey] = useState(false)
  const [language, setLanguage] = useState<LanguageType>("sv")
  const [improvedUI, setImprovedUI] = useState(false)


  const handleLangChange = (newLang: LanguageType) => {
    setLanguage(newLang)
  }

  const questionsBySection = useMemo(() => {
    return surveyQuestions_0.reduce((acc, question) => {
      const sectionTitle = question.section?.[language] ?? "no-section"
      acc[sectionTitle] ??= []
      acc[sectionTitle].push(question)

      return acc
    }, {} as { [key: string]: SurveyQuestion[] })
  }, [language])


  const sectionQuestionGroups = Object.values(questionsBySection)
  const isFirstSection = currentSectionIndex === 0
  const isLastSection = currentSectionIndex === sectionQuestionGroups.length - 1

  // Check for unanswerd Q, users must answer all Q to continue to the next section
  const currentSection_ = sectionQuestionGroups[currentSectionIndex] ?? []
  const hasUnansweredQuestions = currentSection_.some(
    question => answers[question.id] === undefined
  )


  const handleSectionNavigation = (type: "Back" | "Next") => {

    if (type === "Next") {

      if (hasUnansweredQuestions) {
        setSkippedQuestion(true)
        return
      }
      setSkippedQuestion(false)

      if (isLastSection) {

        setEndOfSurvey(true)
        return
      }
      setcurrentSectionIndex(index => index + 1)

    } else if (type === "Back") {

      setSkippedQuestion(false)
      setcurrentSectionIndex(index => Math.max(0, index - 1))
    }
  }

  const handleAnswers: AnswerChangeHandler = (id, answerValue) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: answerValue
    }))
  }


  const currentQuestionType = sectionQuestionGroups[currentSectionIndex]?.[0]?.section_subTitle
  const currentSection = sectionQuestionGroups[currentSectionIndex]

  const finalMsg = currentSection?.at(-1)?.finalMsg



  return (
    <div className='app'>

      {!isSurveyComplete ?
        <>
          <div className="container">

            {
              improvedUI ?
                <nav>
                  <LanguageDropdown language={language} onChange={handleLangChange} />
                </nav>
                : <></>
            }
            {
              !currentQuestionType ?
                <SingleQuestionCard
                  questionsBySection={questionsBySection}
                  currentSectionIndex={currentSectionIndex}
                  language={language}
                  handleAnswers={handleAnswers}
                  answers={answers}
                  improvedUI={improvedUI}


                /> :
                <MultipleQuestionCard
                  questionsBySection={questionsBySection}
                  currentSectionIndex={currentSectionIndex}
                  language={language}
                  handleAnswers={handleAnswers}
                  answers={answers}
                  improvedUI={improvedUI}

                />
            }

            <div className='navigation-hint'>
              {
                skippedQuestion ? <p>{paginationHint[language]}</p> : <></>
              }
            </div>



            <div className='pagination_container'>
              {finalMsg && (
                <FinalMessage message={finalMsg[language]} />
              )}
              {/* <FinalMessage message={finalMsg[language]} /> */}
              <div>

                <button
                  disabled={isFirstSection}
                  onClick={() => handleSectionNavigation("Back")}>Back</button>
                <button
                  onClick={() => handleSectionNavigation("Next")}>Next</button>
              </div>
            </div>
          </div>


          <DemoToggle
            enabled={improvedUI}
            onChange={setImprovedUI}
          />
        </>
        :
        <div className='ending'>
          <button onClick={() => window.location.reload()}>Restart</button>
        </div>
      }

    </div>
  )
}

export default App
