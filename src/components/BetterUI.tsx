import { useState } from "react"
import "./BetterUI.css"

type LanguageFamily = "sv" | "en"

const questions = [
  "Mörka eller dåligt belysta platser",
  "Klotter",
  "Nedskräpning",
]

const options = [
  {
    value: "no",
    label: "Nej",
  },
  {
    value: "some",
    label: "Ja, till viss del",
  },
  {
    value: "large",
    label: "Ja, till stor del",
  },
  {
    value: "not-problem",
    label: "Ja, inget problem",
  },
]

function SurveyPreviewCard() {
  const [openLanguage, setOpenLanguage] =
    useState<LanguageFamily | null>(null)

  const [activeLanguage, setActiveLanguage] =
    useState<LanguageFamily>("sv")

  const handleLanguage = (language: LanguageFamily) => {
    setActiveLanguage(language)
    setOpenLanguage(null)
  }

  return (
    <div className="previewCard">
      <div className="previewCard_languageBar">
        <div className="previewCard_languages">

          {/* Swedish */}
          <div className="previewCard_languageGroup">
            <button
              type="button"
              className={`previewCard_flag ${
                activeLanguage === "sv" ? "active" : ""
              }`}
              onClick={() =>
                setOpenLanguage(
                  openLanguage === "sv" ? null : "sv"
                )
              }
            >
              🇸🇪
            </button>

            {openLanguage === "sv" && (
              <div className="previewCard_languageMenu">
                <button
                  type="button"
                  onClick={() => handleLanguage("sv")}
                >
                  Svenska
                </button>

                <button
                  type="button"
                  onClick={() => handleLanguage("sv")}
                >
                  Lätt svenska
                </button>
              </div>
            )}
          </div>

          {/* English */}
          <div className="previewCard_languageGroup">
            <button
              type="button"
              className={`previewCard_flag ${
                activeLanguage === "en" ? "active" : ""
              }`}
              onClick={() =>
                setOpenLanguage(
                  openLanguage === "en" ? null : "en"
                )
              }
            >
              🇬🇧
            </button>

            {openLanguage === "en" && (
              <div className="previewCard_languageMenu">
                <button
                  type="button"
                  onClick={() => handleLanguage("en")}
                >
                  English
                </button>

                <button
                  type="button"
                  onClick={() => handleLanguage("en")}
                >
                  Easy English
                </button>
              </div>
            )}
          </div>

        </div>
      </div>

      <div className="previewCard_content">
        <header className="previewCard_header">
          <h2>Problem i området där du bor</h2>

          <p>
            Upplever du att problemen nedan förekommer där du
            bor eller i närheten?
          </p>
        </header>

        {/* Desktop option headings */}
        <div className="previewCard_optionHeader">
          <div />

          {options.map(option => (
            <span key={option.value}>
              {option.label}
            </span>
          ))}
        </div>

        <div className="previewCard_questions">
          {questions.map((question, questionIndex) => (
            <div
              className="previewCard_questionRow"
              key={question}
            >
              <div className="previewCard_question">
                {question}
              </div>

              <div className="previewCard_options">
                {options.map(option => (
                  <label
                    className="previewCard_option"
                    key={option.value}
                  >
                    <input
                      type="radio"
                      name={`question-${questionIndex}`}
                      value={option.value}
                    />

                    <span className="previewCard_mobileLabel">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="previewCard_footer">
        <button
          type="button"
          className="previewCard_backButton"
        >
          Bakåt
        </button>

        <button
          type="button"
          className="previewCard_nextButton"
        >
          Nästa
        </button>
      </footer>
    </div>
  )
}

export default SurveyPreviewCard