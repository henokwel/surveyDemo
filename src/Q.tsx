export type SurveyOption = {
  value: string;
  label: string;
};

export type SurveyQuestion = {
  id: string;
  section: string;
  section_subTitle?: string;
  question: string;
  helpText?: string;
  required: boolean;
  options: SurveyOption[];
};

export const agreementOptions_og: SurveyOption[] = [
  { value: "mycket_ofta", label: "Ja, mycket ofta" },
  { value: "ganska ofta", label: "Ja, ganska ofta" },
  { value: "sällan", label: "Ja, men bara sällan" },
  { value: "har_inte_hänt", label: "Nej, har inte hänt" },
  { value: "vet_ej", label: "Vet inte" },
];
export const agreementOptions: SurveyOption[] = [
  { value: "strongly_agree", label: "Instämmer helt" },
  { value: "agree", label: "Instämmer delvis" },
  { value: "disagree", label: "Instämmer inte" },
  { value: "strongly_disagree", label: "Instämmer inte alls" },
  { value: "dont_know", label: "Vet inte" },
];

export const safetyOptions: SurveyOption[] = [
  { value: "very_safe", label: "Ja, mycket trygg" },
  { value: "fairly_safe", label: "Ja, ganska trygg" },
  { value: "fairly_unsafe", label: "Ja, ganska otrygg" },
  { value: "very_unsafe", label: "Mycket otrygg" },
  { value: "not_applicable", label: "Vet ej" },
];

export const safetyOptions_EN: SurveyOption[] = [
  { value: "very_often", label: "Very often" },
  { value: "quite_often", label: "Quite often" },
  { value: "rarely", label: "Rarely" },
  { value: "never", label: "Never" },
  { value: "dont_know", label: "Don't know" },
];

export const safetyOptions_EN_old: SurveyOption[] = [
  { value: "very_unsafe", label: "Yes, very often" },
  { value: "fairly_unsafe", label: "Yes, quite often" },
  { value: "fairly_safe", label: "Yes, but only rarely" },
  { value: "very_safe", label: "No, has not happend" },
  { value: "not_applicable", label: "Don't know" }
  ,];

export const frequencyOptions: SurveyOption[] = [
  { value: "never", label: "Aldrig" },
  { value: "rarely", label: "Sällan" },
  { value: "sometimes", label: "Ibland" },
  { value: "often", label: "Ofta" },
  { value: "very_often", label: "Mycket ofta" },
];

export const surveyQuestions_0: SurveyQuestion[] = [
  {
    id: "safety-evening",
    section: "Trygghet i området",
    section_subTitle: "Har det under senaste 12 månaderna hänt ...",
    question: "att du oroat dig för att bli utsatt för inbrott i den egna bostaden?",
    required: true,
    options: safetyOptions,
  },
  {
    id: "safety-daytime",
    section: "Trygghet i området",
    section_subTitle: "Har det under senaste 12 månaderna hänt ...",
    question: "att du oroat dig för att bli utsatt för inbrott i förrad, källare, vindsutrymme eller",
    required: true,
    options: safetyOptions,
  },
  {
    id: "safety-garage",
    section: "Trygghet i området",
    section_subTitle: "Har det under senaste 12 månaderna hänt ...",
    question: "att du oroat dig för att din bil, mc, moped eller cykel ska utsättas för stöld eller skadegörelse om den är parkerad i omradet där du bor?",
    required: true,
    options: safetyOptions,
  },
  {
    id: "safety-assault",
    section: "Trygghet i området",
    section_subTitle: "Har det under senaste 12 månaderna hänt ...",
    question: "att du oroat dig för att bli överfallen eller misshandlad i omradet dar du bor",
    required: true,
    options: safetyOptions,
  },

  {
    id: "safety-evening_EN",
    section: "Neighborhood safety",

    section_subTitle: "During the last 12 months, has it occurred...",
    question: "that you have worried about being the victim of burglary in your own home?",
    required: true,
    options: safetyOptions_EN,
  },
  {
    id: "safety-daytime_EN",
    section: "Neighborhood safety",
    section_subTitle: "During the last 12 months, has it occurred...",

    question: "that you have worried about being the victim of burglary in your storage unit, basement, attic or garage?",
    required: true,
    options: safetyOptions_EN,
  },
  {
    id: "safety-garage_EN",
    section: "Neighborhood safety",
    section_subTitle: "During the last 12 months, has it occurred...",

    question: "that you have worried that your car, motorcycle, moped or bicycle will be subjected to theft or vandalism if it is parked in the area where you live?",
    required: true,
    options: safetyOptions_EN,
  },
  {
    id: "safety-assault_EN",
    section: "Neighborhood safety",
    section_subTitle: "During the last 12 months, has it occurred...",

    question: "that you have worried about being assaulted or physically abused in the area where you live?",
    required: true,
    options: safetyOptions_EN,
  },
]

export const surveyQuestions: SurveyQuestion[] = [
  {
    id: "safety-evening",
    section: "Trygghet i området",
    question: "Hur trygg känner du dig när du går ensam i ditt bostadsområde på kvällen?",
    required: true,
    options: safetyOptions,
  },
  {
    id: "safety-daytime",
    section: "Trygghet i området",
    question: "Hur trygg känner du dig när du vistas utomhus i ditt bostadsområde på dagtid?",
    required: true,
    options: safetyOptions,
  },
  {
    id: "avoid-areas",
    section: "Trygghet i området",
    question: "Det finns platser i mitt närområde som jag undviker på grund av oro eller otrygghet.",
    required: true,
    options: agreementOptions,
  },
  {
    id: "public-transport",
    section: "Trygghet i området",
    question: "Jag känner mig trygg när jag väntar vid busshållplatser eller stationer i området.",
    required: true,
    options: agreementOptions,
  },
  {
    id: "lighting",
    section: "Den fysiska miljön",
    question: "Belysningen på gator, gångvägar och offentliga platser är tillräcklig.",
    required: true,
    options: agreementOptions,
  },
  {
    id: "maintenance",
    section: "Den fysiska miljön",
    question: "Gator, parker och gemensamma ytor i området är välskötta.",
    required: true,
    options: agreementOptions,
  },
  {
    id: "graffiti",
    section: "Problem i närområdet",
    question: "Hur ofta ser du klotter, skadegörelse eller förstörda föremål i området?",
    required: true,
    options: frequencyOptions,
  },
  {
    id: "disturbances",
    section: "Problem i närområdet",
    question: "Hur ofta upplever du höga ljud, bråk eller andra störningar utomhus?",
    required: true,
    options: frequencyOptions,
  },
  {
    id: "reckless-driving",
    section: "Problem i närområdet",
    question: "Hur ofta upplever du fortkörning eller vårdslös körning i området?",
    required: true,
    options: frequencyOptions,
  },
  {
    id: "open-drug-use",
    section: "Problem i närområdet",
    question: "Hur ofta ser du öppen användning eller försäljning av narkotika i området?",
    required: false,
    options: frequencyOptions,
  },
  {
    id: "police-presence",
    section: "Polis och samhällsservice",
    question: "Polisen är tillräckligt synlig i mitt närområde.",
    required: true,
    options: agreementOptions,
  },
  {
    id: "police-confidence",
    section: "Polis och samhällsservice",
    question: "Jag har förtroende för att polisen agerar när brott eller ordningsproblem anmäls.",
    required: true,
    options: agreementOptions,
  },
  {
    id: "reporting-crime",
    section: "Polis och samhällsservice",
    question: "Jag vet hur jag ska kontakta polisen eller kommunen om jag upptäcker ett problem.",
    required: true,
    options: agreementOptions,
  },
  {
    id: "neighbour-support",
    section: "Gemenskap",
    question: "Människor i mitt bostadsområde hjälper varandra när det behövs.",
    required: true,
    options: agreementOptions,
  },
  {
    id: "neighbour-trust",
    section: "Gemenskap",
    question: "Jag känner förtroende för de flesta människor som bor i mitt område.",
    required: true,
    options: agreementOptions,
  },
  {
    id: "community-influence",
    section: "Gemenskap",
    question: "Boende har möjlighet att påverka frågor som rör området.",
    required: false,
    options: agreementOptions,
  },
];

