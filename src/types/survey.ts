export type LanguageType = "sv" | "sv_easy" | "en" | "en_easy";

 export type FinalMessageProps = {
    sv: string[];
    sv_easy: string[];
    en: string[];
    en_easy: string[];

}
export type LocalizedText = {
    sv: string;
    sv_easy: string;
    en: string;
    en_easy: string;
};
export type SurveyOption = {
    value: string;
    label: LocalizedText;
    short_label: LocalizedText;
    tooltip: LocalizedText;
};
export type SurveyQuestion = {
    id: string;
    section?: LocalizedText;
    section_subTitle?: LocalizedText;
    question: LocalizedText;
    helpText?: LocalizedText;
    required: boolean;
    finalMsg?: FinalMessageProps;
    options: SurveyOption[];
};

export type SurveyAnswers = Partial<Record<string, string>>

export type AnswerChangeHandler = (
    questionId: string,
    answerValue: string
) => void

export type QuestionCardProps = {
    questionsBySection: Record<string, SurveyQuestion[]>
    currentSectionIndex: number
    language: LanguageType
    handleAnswers: AnswerChangeHandler
    answers: SurveyAnswers
    improvedUI: boolean
}