export type SurveyOption = {
    value: string;
    label: string; // Default label 
    short_label: string; // A more compact version of label
    easy_label: string; // For easy version of the language
    tooltip: string; //  A simple explanation of option. Adding this could help clarify the option. OPS! The tooltips explanation is not related to the question, just the option itself.

};


export type SurveyQuestion = {
    id: string;
    section?: string;
    section_subTitle?: string;
    question: string;
    tooltip: string; // An expanded explanation of the question.
    required: boolean;
    finalMsg?: string;
    options: SurveyOption[];
};


export const safetyOptions: SurveyOption[] = [
    {
        value: "very_safe", label: "Ja, mycket trygg",
        short_label: "Short label", easy_label: "Easy label . ", tooltip: "Tooltop .."
    },
    {
        value: "fairly_safe", label: "Ja, ganska trygg",
        short_label: "Short label", easy_label: "Easy label . ", tooltip: "Tooltop .."
    },
    {
        value: "fairly_unsafe", label: "Ja, ganska otrygg",
        short_label: "Short label", easy_label: "Easy label . ", tooltip: "Tooltop .."
    },
    {
        value: "very_unsafe", label: "Mycket otrygg",
        short_label: "Short label", easy_label: "Easy label . ", tooltip: "Tooltop .."
    },
    {
        value: "not_applicable", label: "Vet ej",
        short_label: "Short label", easy_label: "Easy label . ", tooltip: "Tooltop .."
    },
];
export const safetyOptions_multi_lang = {
    En: [
        {
            value: "very_safe", label: "Ja, mycket trygg",
            short_label: "Short label", easy_label: "Easy label . ", tooltip: "Tooltop .."
        },
        {
            value: "fairly_safe", label: "Ja, ganska trygg",
            short_label: "Short label", easy_label: "Easy label . ", tooltip: "Tooltop .."
        },
        {
            value: "fairly_unsafe", label: "Ja, ganska otrygg",
            short_label: "Short label", easy_label: "Easy label . ", tooltip: "Tooltop .."
        },
        {
            value: "very_unsafe", label: "Mycket otrygg",
            short_label: "Short label", easy_label: "Easy label . ", tooltip: "Tooltop .."
        },
        {
            value: "not_applicable", label: "Vet ej",
            short_label: "Short label", easy_label: "Easy label . ", tooltip: "Tooltop .."
        }]
}




export const surveyQuestions = [
    {
        id: "current-residential",
        question: "If you were free to choose, would you move away from your current residential area?",
        tooltip: "",
        required: true,
        options: [
            "No", "Yes, mainly due to insecurity, crime, and disturbances of the peace",
            "Yes, mainly due to other reasons", "Don't know"
        ]
    },
    {
        id: "problem-in-your-area",
        section: "Problems in the area where you live",
        section_subTitle: "Do you feel that the problems below occur where you live or nearby?",
        question: [
            "Dark or poorly lit areas",
            "Graffiti",
            "Littering",
            "Vandalism",
            "Setting fires, e.g. in rubbish bins",
            "Mopeds/motorbikes on foot paths/bicycle paths",
            "Cars on foot paths/bicycle paths",
            "Rowdy neighbours",
            "Drunk people who cause a nuisance",
            "Residences frequented by drug users",
            "Drug abusers who cause a nuisance in public areas",
            "Selling of drugs out in the open",
            "People who argue and fight outside",
            "Forceful begging",
        ],
        required: true,
        options: [
            "No", "Yes, to some degree", "Yes, to a large degree", "Yes, but I don't consider them problems"
        ]
    },
    {
        id: "vulnerability-to-crime",
        section: "Vulnerability to crime",
        question: "In the last 12 months, have you been the victim of physical violence that caused pain?",
        tooltip: "",
        required: true,
        options: [
            "Yes",
            "No"
        ]
    },
    {
        id: "close-relationships",
        section: "Violence and abuse in close relationships",
        question: "In the past year, has a current or former partner ever said or done things that made you feel offended, mocked, belittled or humiliated? This could include, for example, saying mean things to you or about you in front of others, ignores you or spitting on you.",
        tooltip: "",
        required: true,
        options: [
            "Yes",
            "Yes, several times",
            "No"
        ]
    },
    {
        id: "close-partner",
        section: "Violence and abuse in close relationships",
        question: "In the past year, has a current or former partner, in a violent way, held you down, pushed you, pulled your hair, slapped you, or similar?",
        tooltip: "",
        required: true,
        options: [
            "Yes",
            "Yes, several times",
            "No"
        ]
    },
    {
        id: "",
        section: "Violence and abuse in close relationships",
        question: "Has a current or former partner, in the past year, hit you with a fist or an object, choked you, kicked you, or similar?",
        tooltip: "",
        required: true,
        options: [
            "Yes",
            "Yes, several times",
            "No"
        ]
    },
    {
        id: "",
        section: "Violence and abuse in close relationships",
        question: "Has a current or former partner, in the past year, hit you with a fist or an object, choked you, kicked you, or similar?",
        tooltip: "",
        required: true,
        options: [
            "Yes",
            "Yes, several times",
            "No"
        ]
    },
    {
        id: "",
        section: "Worries about being the victim of crime",
        section_subTitle: "During the last 12 months, has it occurred...",
        question: [
            "that you have worried about being the victim of burglary in your own home?",
            "that you have worried about being the victim of burglary in your storage unit, basement, attic or garage?",
            "that you have worried that your car, motorcycle, moped or bicycle will be subjected to theft or vandalism if it is parked in the area where you live?",
            "that you have worried about being assaulted or physically abused in the area where you live?",

        ],
        required: true,
        options: [
            "Yes, very often", "Yes, very often", "Yes, but only rarely", "No, has not happend", "Don't know"
            ,]
    },
    {
        id: "", // final Question 
        section: "Something about yourself",
        question: "Which of the following applies to you?",
        tooltip: "",
        required: true,
        options: [
            "I live with my parents",
            "I am single and live alone",
            "I am single with children (children under 18)",
            "I am married/cohabiting with children",
            "I am married/cohabiting without children living at home",
            "Other"
        ],
        finalMsg: `You have now reached the end of the questionnaire.If you want to go back and edit any of your answers, you have the option to do so now via the bottom buttons.`
    },
]

// [
//     {
//         question: "If you were free to choose, would you move away from your current residential area?",
//         options: [
//             "No", "Yes, mainly due to insecurity, crime, and disturbances of the peace",
//             "Yes, mainly due to other reasons", "Don't know"
//         ]
//     },
//     {
//         question:"How do you feel about your loved ones (regardless of whether they live in the area or are visiting), when any of them go out alone in your residential area during daytime, do you feel secure or insecure, or do you prefer they don't go out alone?",
//         options:[
//             "Very secure", "Fairly secure", "Fairly insecure","Very insecure","Don't want the person to go out alone due to fear of crime", "Not applicable/ don't have children, partner, parent, relative"
//         ]
//     },
//     question:

// ]

const surveyQuestions_0: SurveyQuestion[] = [
    {
        id: "safety-evening",
        section: "Trygghet i området",
        section_subTitle: "Har det under senaste 12 månaderna hänt ...",
        question: "att du oroat dig för att bli utsatt för inbrott i den egna bostaden?",
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
]