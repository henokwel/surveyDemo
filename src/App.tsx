import './App.css'
import { useState, useMemo } from 'react'
import type { AnswerChangeHandler, LanguageType, SurveyAnswers, SurveyQuestion } from "./model/survey.types";
import { surveyQuestions, paginationHint } from './data/survey.data';
import SingleQuestionCard from './survey/components/SingleQuestionCard';
import LanguageDropdown from './survey/components/LangDropDown';
import DemoToggle from './survey/components/DemoToggle';
import { FinalMessage } from './survey/components/FinalMessage';
import { MultipleQuestionCard } from './survey/components/MultipleQuestionCard';

function App() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const [validationAttempted, setValidationAttempted] = useState(false)
  const [answers, setAnswers] = useState<SurveyAnswers>({})
  const [isSurveyComplete, setEndOfSurvey] = useState(false)
  const [language, setLanguage] = useState<LanguageType>("sv")
  const [improvedUI, setImprovedUI] = useState(false)


  const handleLangChange = (newLang: LanguageType) => {
    setLanguage(newLang)
  }

  const questionsBySection = useMemo<Record<string, SurveyQuestion[]>>(() => {
    return surveyQuestions.reduce((acc, question) => {
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
        setValidationAttempted(true)
        return
      }
      setValidationAttempted(false)

      if (isLastSection) {

        setEndOfSurvey(true)
        return
      }
      setCurrentSectionIndex(index => index + 1)

    } else if (type === "Back") {

      setValidationAttempted(false)
      setCurrentSectionIndex(index => Math.max(0, index - 1))
    }
  }

  const handleAnswers: AnswerChangeHandler = (id, answerValue) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: answerValue
    }))
  }


  const currentQuestionType = sectionQuestionGroups[currentSectionIndex]?.[0]?.description
  const currentSection = sectionQuestionGroups[currentSectionIndex]

  const finalMsg = currentSection?.at(-1)?.finalMsg

  const isSwedish = language.startsWith("sv")

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




            <div className='pagination_container'>
              <div className='navigation-hint'>
                {
                  validationAttempted ? <p>{paginationHint[language]}</p> : <></>
                }
              </div>
              {finalMsg && (
                <FinalMessage message={finalMsg[language]} />
              )}
              {/* <FinalMessage message={finalMsg[language]} /> */}
              <div>
                {/* "sv" | "sv_easy" | "en" | "en_easy" */}
                <button
                  disabled={isFirstSection}
                  onClick={() => handleSectionNavigation("Back")}>{isSwedish ? "Bakåt" : "Back"}</button>

                {finalMsg ?

                  <button
                    onClick={() => handleSectionNavigation("Next")}>
                    {isSwedish ? "Skicka in" : "Submit"}
                  </button>
                  :
                  <button
                    onClick={() => handleSectionNavigation("Next")}>
                    {isSwedish ? "Nästa" : "Next"}
                  </button>

                }
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
          <button onClick={() => window.location.reload()}>{isSwedish ? "Starta om" : "Restart"}</button>
        </div>
      }

    </div>
  )
}

export default App
