// @vitest-environment jsdom

import "@testing-library/jest-dom/vitest"
import { cleanup, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterEach, describe, expect, it, vi } from "vitest"
import App from "./App"

vi.mock("./Q3", () => {
  const localizedText = (swedish: string, english: string) => ({
    sv: swedish,
    sv_easy: swedish,
    en: english,
    en_easy: english,
  })

  const options = [
    {
      value: "yes",
      label: localizedText("Ja", "Yes"),
      short_label: localizedText("Ja", "Yes"),
      tooltip: localizedText("Ja", "Yes"),
    },
    {
      value: "no",
      label: localizedText("Nej", "No"),
      short_label: localizedText("Nej", "No"),
      tooltip: localizedText("Nej", "No"),
    },
  ]

  return {
    paginationHint: localizedText(
      "Svara på frågan innan du fortsätter.",
      "Answer the question before continuing.",
    ),
    surveyQuestions_0: [
      {
        id: "question-one",
        section: localizedText("Första delen", "First section"),
        question: localizedText("Första frågan?", "First question?"),
        required: true,
        options,
      },
      {
        id: "question-two",
        section: localizedText("Andra delen", "Second section"),
        question: localizedText("Andra frågan?", "Second question?"),
        required: true,
        options,
        finalMsg: {
          sv: ["Kontrollera dina svar innan du skickar in."],
          sv_easy: ["Kontrollera dina svar innan du skickar in."],
          en: ["Check your answers before submitting."],
          en_easy: ["Check your answers before submitting."],
        },
      },
    ],
  }
})

afterEach(() => {
  cleanup()
})

describe("Survey", () => {
  it("selects an answer", async () => {
    const user = userEvent.setup()
    render(<App />)

    const yesAnswer = screen.getByRole("radio", { name: "Ja" })

    await user.click(yesAnswer)

    expect(yesAnswer).toBeChecked()
  })

  it("keeps an answer when navigating back", async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole("radio", { name: "Ja" }))
    await user.click(screen.getByRole("button", { name: "Nästa" }))
    await user.click(screen.getByRole("button", { name: "Bakåt" }))

    expect(screen.getByRole("radio", { name: "Ja" })).toBeChecked()
  })

  it("shows validation when an answer is missing", async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole("button", { name: "Nästa" }))

    expect(
      screen.getByText("Svara på frågan innan du fortsätter."),
    ).toBeInTheDocument()
    expect(screen.getByText("Första frågan?")).toBeInTheDocument()
  })

  it("switches language without losing the answer", async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole("radio", { name: "Ja" }))
    await user.click(screen.getByRole("button", { pressed: false }))
    await user.click(screen.getByRole("button", { name: "Select English" }))

    const englishOption = screen.getAllByRole("button", {
      name: "Select English",
    })[1]

    englishOption.focus()
    await user.keyboard("{Enter}")

    expect(screen.getByText("First question?")).toBeInTheDocument()
    expect(screen.getByRole("radio", { name: "Yes" })).toBeChecked()
  })

  it("completes the survey after the final answer", async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole("radio", { name: "Ja" }))
    await user.click(screen.getByRole("button", { name: "Nästa" }))
    await user.click(screen.getByRole("radio", { name: "Ja" }))
    await user.click(screen.getByRole("button", { name: "Nästa" }))

    expect(screen.getByRole("button", { name: "Restart" })).toBeInTheDocument()
  })
})
