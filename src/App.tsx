import './App.css'
import { useState, useEffect, useMemo } from 'react'
import { MultipleQ_Card } from './components/MultipleQ_Card'
import { surveyQuestions_0, type LanguageType } from './Q3'
import SingleQ_Card from './components/SingleQ_Card'
import LanguageDropdown from './components/LangDropDown'

function App() {
  const [currentSectionIndex, setcurrentSectionIndex] = useState(0)
  const [answers, setAnswers] = useState([])
  const [answerCheck, setAnswerCheck] = useState([])
  const [isSurveyComplete, setEndOfSurvey] = useState(false)
  const [language, setLanguage] = useState<LanguageType>("sv")

  const handleLangChange = (newLang: LanguageType) => {
    console.log(newLang);
    setLanguage(newLang)

  }


  const questionsBySection = useMemo(() => {
    return surveyQuestions_0.reduce((acc, question) => {
      const sectionTitle = question.section?.[language] ?? "no-section"
      acc[sectionTitle] ??= []
      acc[sectionTitle].push(question)

      return acc
    }, {})
  }, [language])

  const sectionTitles = Object.keys(questionsBySection)
  const sectionQuestionGroups = Object.values(questionsBySection)


  useEffect(() => {
    const sectionArr = Object.values(questionsBySection).map(item => {
      // console.log(item);
      return item.map(item => {
        return { id: item.id, check: false }
      })
    })

    setAnswerCheck(sectionArr)

  }, [])

  console.log(answerCheck);


  const isFirstSection = currentSectionIndex === 0
  const isLastSection = currentSectionIndex === sectionQuestionGroups.length - 1
  // 

  const handleSectionNavigation = (type: "Back" | "Next") => {

    const isCurrentSectionComplete = (answerCheck[currentSectionIndex].find(item => item.check === false))
    console.log("isCurrentSectionComplete ", isCurrentSectionComplete);

    if (type === "Next") {

      if (isCurrentSectionComplete) {

        return
      }

      if (isLastSection) {
        setEndOfSurvey(true)
      }
      setcurrentSectionIndex(index => index + 1)
    } else if (type === "Back") {
      setcurrentSectionIndex(index => Math.max(0, index - 1))

    }
  }

  const handleAnswers = (id, ans) => {
    console.log("ans id ", id);
    console.log("ans ans ", ans);

    setAnswers((prev) => ({
      ...prev,
      [id]: ans
    }))


    const currentPage = answerCheck[currentSectionIndex]
    console.log(currentPage);

    const newCheckAnswer = currentPage.map(item => {
      // console.log(currentPage.find(item => item.id === id));

      const checkForSelectedAnswer = currentPage.find(item => item.id === id).check === false

      if (item.id === id && checkForSelectedAnswer) {
        item.check = !item.check
        return item
      }
      return item
    })
    console.log(newCheckAnswer);
  }


  const currentQuestionType = sectionQuestionGroups[currentSectionIndex][0]?.section_subTitle

  console.log(currentQuestionType);

  return (
    <div className='app'>

      {!isSurveyComplete ?
        <>
          <div className="container">
            <nav>
              <LanguageDropdown language={language} onChange={handleLangChange} />
            </nav>
            {
              !currentQuestionType ?
                <SingleQ_Card
                  questionsBySection={questionsBySection}
                  currentSectionIndex={currentSectionIndex}
                  language={language}
                  handleAnswers={handleAnswers}
                  answers={answers}

                /> :
                <MultipleQ_Card
                  questionsBySection={questionsBySection}
                  currentSectionIndex={currentSectionIndex}
                  language={language}
                  handleAnswers={handleAnswers}
                  answers={answers}

                />

            }
          </div>

          <div className='pagination_container'>
            <button
              disabled={isFirstSection}
              onClick={() => handleSectionNavigation("Back")}>Back</button>
            <button
              // disabled={isLastSection}
              onClick={() => handleSectionNavigation("Next")}>Next</button>
          </div>

        </> :
        <div>
          <p>End</p>
        </div>
      }

    </div>
  )
}

export default App
