import { useState } from "react"
import "./QuestionHelp.css"

function QuestionHelp({ helpText, language }) {
  const [isOpen, setIsOpen] = useState(false)
  console.log("QuestionHelp");


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
        <span className="questionHelp_icon">

          i
          {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
            <g fill="#045a3a" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(10.66667,10.66667)"><path d="M12,2c-5.511,0 -10,4.489 -10,10c0,5.511 4.489,10 10,10c5.511,0 10,-4.489 10,-10c0,-5.511 -4.489,-10 -10,-10zM12,4c4.43012,0 8,3.56988 8,8c0,4.43012 -3.56988,8 -8,8c-4.43012,0 -8,-3.56988 -8,-8c0,-4.43012 3.56988,-8 8,-8zM11,7v2h2v-2zM11,11v6h2v-6z"></path></g></g>
          </svg> */}

        </span>

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