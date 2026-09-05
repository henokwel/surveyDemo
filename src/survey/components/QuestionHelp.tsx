import { useState } from "react"
import "./QuestionHelp.css"
import type { LanguageType } from "../model/survey.types"


type QuestionHelpType = {
  helpText: string
  language: LanguageType
}

function QuestionHelp({ helpText, language }: QuestionHelpType) {
  const [isOpen, setIsOpen] = useState(false)
 

  if (!helpText) return null

  const isSwedish =
    language === "sv" || language === "sv_easy"

  const openLabel = isSwedish
    ? "Vad menas?"
    : "What does this mean?"

  const closeLabel = isSwedish
    ? "Dölj förklaring"
    : "Hide explanation"

  return (
    <div className="questionHelp">
      <button
        type="button"
        className="questionHelp_button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="questionHelp_icon">i</span>

        {isOpen ? closeLabel : openLabel}
      </button>

      {isOpen && (
        <p className="questionHelp_text">
          {helpText}
        </p>
      )}
    </div>
  )
}

export default QuestionHelp