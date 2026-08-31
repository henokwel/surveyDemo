// Backup
import './App.css'
import { useState, useEffect, useMemo } from 'react'
import { surveyQuestions_0, type LanguageType, paginationHint, type SurveyQuestion } from './Q3'
import SingleQuestionCard from './components/SingleQuestionCard'
import LanguageDropdown from './components/LangDropDown'
import DemoToggle from './components/DemoToggle'
import { FinalMessage } from './components/FinalMessage'
import { MultipleQuestionCard } from './components/MultipleQuestionCard'

function App() {
  const [currentSectionIndex, setcurrentSectionIndex] = useState(0)
  const [skippedQuestion, setSkippedQuestion] = useState(false)
  const [answers, setAnswers] = useState([])
  const [answerCheck, setAnswerCheck] = useState([])
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

  // const sectionTitles = Object.keys(questionsBySection)
  const sectionQuestionGroups = Object.values(questionsBySection)


  useEffect(() => {
    const sectionArr = Object.values(questionsBySection).map(item => {
      console.log(item);
      return item.map(item => {
        return { id: item.id, check: false }
      })
    })

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAnswerCheck(sectionArr)

  }, [])

  console.log(answerCheck);


  const isFirstSection = currentSectionIndex === 0
  const isLastSection = currentSectionIndex === sectionQuestionGroups.length - 1
  // 

  const handleSectionNavigation = (type: "Back" | "Next") => {

    const isCurrentSectionComplete = (answerCheck[currentSectionIndex].find(item => item.check === false))
    // console.log("isCurrentSectionComplete ", isCurrentSectionComplete);
    // console.log("isCurrentSectionComplete anser ", answerCheck[currentSectionIndex]);
    if (type === "Next") {

      if (isCurrentSectionComplete) {
        // console.log("isCurrentSectionComplete true ", isCurrentSectionComplete);
        setSkippedQuestion(true)
        return
      }
      setSkippedQuestion(false)

      if (isLastSection) {
        console.log("isLastSection ", isLastSection, sectionQuestionGroups.length);

        setEndOfSurvey(true)
        window.location.href = "https://www.origogroup.com"
      }
      setcurrentSectionIndex(index => index + 1)

    } else if (type === "Back") {

      setSkippedQuestion(false)
      setcurrentSectionIndex(index => Math.max(0, index - 1))
    }
  }

  const handleAnswers = (id, ans) => {

    setAnswers((prev) => ({
      ...prev,
      [id]: ans
    }))

    const currentPage = answerCheck[currentSectionIndex]
    console.log(currentPage);

    const newCheckAnswer = currentPage.map(item => {

      const checkForSelectedAnswer = currentPage.find(item => item.id === id).check === false

      if (item.id === id && checkForSelectedAnswer) {
        item.check = !item.check
        return item
      }
      return item
    })
    console.log(newCheckAnswer);
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
                  // disabled={isLastSection}
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
          {/* <h1>The End</h1> */}
          <button onClick={() => window.location.reload()}>Restart</button>
        </div>
      }

    </div>
  )
}

export default App
