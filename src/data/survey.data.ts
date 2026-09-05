import type { SurveyOption, LanguageType, SurveyQuestion } from "./model/survey.types";


export const languageOptions: { value: LanguageType; label: string }[] = [
    { value: "sv", label: "Svenska" },
    { value: "sv_easy", label: "Lätt svenska" },
    { value: "en", label: "English" },
    { value: "en_easy", label: "Easy English" },
];


export const paginationHint = {
    sv: "Besvara alla frågor för att gå vidare.",
    sv_easy: "Svara på alla frågor. Sedan kan du gå vidare.",
    en: "Answer all questions to continue.",
    en_easy: "Answer every question. Then you can continue.",
}


// ---------------------------------------
// Reusable options
// ---------------------------------------
export const agreementOptions_og: SurveyOption[] = [
    {
        value: "very_often",
        label: { sv: "Ja, mycket ofta", sv_easy: "Mycket ofta", en: "Yes, very often", en_easy: "Yes, very often" },
        short_label: { sv: "Mycket ofta", sv_easy: "Mycket ofta", en: "Very often", en_easy: "Very often" },
        tooltip: { sv: "Det har hänt mycket ofta.", sv_easy: "Det har hänt mycket ofta.", en: "It has happened very often.", en_easy: "It has happened very often." }
    },
    {
        value: "quite_often",
        label: { sv: "Ja, ganska ofta", sv_easy: "Ofta", en: "Yes, quite often", en_easy: "Yes, quite often" },
        short_label: { sv: "Ganska ofta", sv_easy: "Ganska ofta", en: "Quite often", en_easy: "Quite often" },
        tooltip: { sv: "Det har hänt ganska ofta.", sv_easy: "Det har hänt ganska ofta.", en: "It has happened quite often.", en_easy: "It has happened quite often." }
    },
    {
        value: "rarely",
        label: { sv: "Ja, men bara sällan", sv_easy: "Någon gång", en: "Yes, but only rarely", en_easy: "Yes, but not often" },
        short_label: { sv: "Sällan", sv_easy: "Sällan", en: "Rarely", en_easy: "Rarely" },
        tooltip: { sv: "Det har hänt, men bara sällan.", sv_easy: "Det har hänt, men bara sällan.", en: "It has happened, but only rarely.", en_easy: "It has happened, but only rarely." }
    },
    {
        value: "never",
        label: { sv: "Nej, det har inte hänt", sv_easy: "Aldrig", en: "No, it has not happened", en_easy: "No, never" },
        short_label: { sv: "Nej", sv_easy: "Nej", en: "No", en_easy: "No" },
        tooltip: { sv: "Det har inte hänt.", sv_easy: "Det har inte hänt.", en: "It has not happened.", en_easy: "It has not happened." }
    },
    {
        value: "dont_know",
        label: { sv: "Vet inte", sv_easy: "Osäker", en: "Don't know", en_easy: "Don't know" },
        short_label: { sv: "Vet inte", sv_easy: "Vet inte", en: "Don't know", en_easy: "Don't know" },
        tooltip: {
            sv: "Välj detta om du inte vet eller är osäker.",
            sv_easy: "Välj detta om du är osäker.",
            en: "Choose this if you do not know or are unsure.", en_easy: "Choose this if you are not sure."
        }
    },
];
export const agreementOptions: SurveyOption[] = [
    {
        value: "strongly_agree",
        label: { sv: "Instämmer helt", sv_easy: "Ja, helt", en: "Strongly agree", en_easy: "Agree completely" },
        short_label: { sv: "Helt", sv_easy: "Helt", en: "Strongly agree", en_easy: "Agree completely" },
        tooltip: {
            sv: "Du håller helt med om påståendet.",
            sv_easy: "Du håller helt med.",
            en: "You completely agree with the statement.", en_easy: "You agree completely."
        }
    },
    {
        value: "agree",
        label: { sv: "Instämmer delvis", sv_easy: "Ja, delvis", en: "Partly agree", en_easy: "Agree a little" },
        short_label: { sv: "Delvis", sv_easy: "Delvis", en: "Partly", en_easy: "Partly" },
        tooltip: {
            sv: "Du håller delvis med om påståendet.",
            sv_easy: "Du håller med till viss del.",
            en: "You partly agree with the statement.", en_easy: "You agree a little."
        }
    },
    {
        value: "disagree",
        label: { sv: "Instämmer inte", sv_easy: "Nej", en: "Disagree", en_easy: "Disagree" },
        short_label: { sv: "Instämmer inte", sv_easy: "Instämmer inte", en: "Disagree", en_easy: "Disagree" },
        tooltip: {
            sv: "Du håller inte med om påståendet.",
            sv_easy: "Du håller inte med.",
            en: "You do not agree with the statement.", en_easy: "You do not agree."
        }
    },
    {
        value: "strongly_disagree",
        label: { sv: "Instämmer inte alls", sv_easy: "Nej, inte alls", en: "Strongly disagree", en_easy: "Disagree completely" },
        short_label: { sv: "Inte alls", sv_easy: "Inte alls", en: "Not at all", en_easy: "Not at all" },
        tooltip: {
            sv: "Du håller inte alls med om påståendet.",
            sv_easy: "Du håller inte med alls.",
            en: "You do not agree with the statement at all.", en_easy: "You strongly disagree."
        }
    },
    {
        value: "dont_know",
        label: { sv: "Vet inte", sv_easy: "Osäker", en: "Don't know", en_easy: "Don't know" },
        short_label: { sv: "Vet inte", sv_easy: "Vet inte", en: "Don't know", en_easy: "Don't know" },
        tooltip: {
            sv: "Välj detta om du inte vet eller är osäker.",
            sv_easy: "Välj detta om du är osäker.",
            en: "Choose this if you do not know or are unsure.", en_easy: "Choose this if you are not sure."
        }
    },
];
// Used by questions about worries during the last 12 months.
export const safetyOptions: SurveyOption[] = agreementOptions_og;
export const frequencyOptions: SurveyOption[] = [
    {
        value: "never",
        label: { sv: "Aldrig", sv_easy: "Aldrig", en: "Never", en_easy: "Never" },
        short_label: { sv: "Aldrig", sv_easy: "Aldrig", en: "Never", en_easy: "Never" },
        tooltip: { sv: "Det händer aldrig.", sv_easy: "Det händer aldrig.", en: "It never happens.", en_easy: "It never happens." }
    },
    {
        value: "rarely",
        label: { sv: "Sällan", sv_easy: "Inte ofta", en: "Rarely", en_easy: "Rarely" },
        short_label: { sv: "Sällan", sv_easy: "Sällan", en: "Rarely", en_easy: "Rarely" },
        tooltip: { sv: "Det händer sällan.", sv_easy: "Det händer sällan.", en: "It happens rarely.", en_easy: "It happens rarely." }
    },
    {
        value: "sometimes",
        label: { sv: "Ibland", sv_easy: "Ibland", en: "Sometimes", en_easy: "Sometimes" },
        short_label: { sv: "Ibland", sv_easy: "Ibland", en: "Sometimes", en_easy: "Sometimes" },
        tooltip: { sv: "Det händer ibland.", sv_easy: "Det händer ibland.", en: "It happens sometimes.", en_easy: "It happens sometimes." }
    },
    {
        value: "often",
        label: { sv: "Ofta", sv_easy: "Ofta", en: "Often", en_easy: "Often" },
        short_label: { sv: "Ofta", sv_easy: "Ofta", en: "Often", en_easy: "Often" },
        tooltip: { sv: "Det händer ofta.", sv_easy: "Det händer ofta.", en: "It happens often.", en_easy: "It happens often." }
    },
    {
        value: "very_often",
        label: { sv: "Mycket ofta", sv_easy: "Väldigt ofta", en: "Very often", en_easy: "Very often" },
        short_label: { sv: "Mycket ofta", sv_easy: "Mycket ofta", en: "Very often", en_easy: "Very often" },
        tooltip: { sv: "Det händer mycket ofta.", sv_easy: "Det händer mycket ofta.", en: "It happens very often.", en_easy: "It happens very often." }
    },
];
export const yesNoOptions: SurveyOption[] = [
    {
        value: "yes",
        label: { sv: "Ja", sv_easy: "Ja", en: "Yes", en_easy: "Yes" },
        short_label: { sv: "Ja", sv_easy: "Ja", en: "Yes", en_easy: "Yes" },
        tooltip: {
            sv: "Välj Ja om detta har hänt.",
            sv_easy: "Välj Ja om detta har hänt.",
            en: "Choose Yes if this has happened.", en_easy: "Choose Yes if this has happened."
        }
    },
    {
        value: "no",
        label: { sv: "Nej", sv_easy: "Nej", en: "No", en_easy: "No" },
        short_label: { sv: "Nej", sv_easy: "Nej", en: "No", en_easy: "No" },
        tooltip: {
            sv: "Välj Nej om detta inte har hänt.",
            sv_easy: "Välj Nej om detta inte har hänt.",
            en: "Choose No if this has not happened.", en_easy: "Choose No if this has not happened."
        }
    },
];
export const occurrenceOptions: SurveyOption[] = [
    {
        value: "yes_once",
        label: { sv: "Ja", sv_easy: "Ja, en gång", en: "Yes", en_easy: "Yes" },
        short_label: { sv: "Ja", sv_easy: "Ja", en: "Yes", en_easy: "Yes" },
        tooltip: { sv: "Det har hänt en gång.", sv_easy: "Det har hänt en gång.", en: "It has happened once.", en_easy: "It has happened once." }
    },
    {
        value: "yes_several_times",
        label: { sv: "Ja, flera gånger", sv_easy: "Ja, mer än en gång", en: "Yes, several times", en_easy: "Yes, several times" },
        short_label: { sv: "Flera gånger", sv_easy: "Flera gånger", en: "Several times", en_easy: "Several times" },
        tooltip: {
            sv: "Det har hänt flera gånger.",
            sv_easy: "Det har hänt flera gånger.",
            en: "It has happened several times.", en_easy: "It has happened several times."
        }
    },
    {
        value: "no",
        label: { sv: "Nej", sv_easy: "Nej", en: "No", en_easy: "No" },
        short_label: { sv: "Nej", sv_easy: "Nej", en: "No", en_easy: "No" },
        tooltip: { sv: "Det har inte hänt.", sv_easy: "Det har inte hänt.", en: "It has not happened.", en_easy: "It has not happened." }
    },
];
export const areaProblemOptions: SurveyOption[] = [
    {
        value: "no",

        label: {
            sv: "Nej",
            sv_easy: "Nej",
            en: "No",
            en_easy: "No"
        },

        short_label: {
            sv: "Nej",
            sv_easy: "Nej",
            en: "No",
            en_easy: "No"
        },

        tooltip: {
            sv: "Du upplever inte att detta förekommer där du bor.",
            sv_easy: "Detta finns inte där du bor.",
            en: "You do not feel that this occurs where you live.",
            en_easy: "You do not see this where you live."
        }
    },

    {
        value: "some_degree",

        label: {
            sv: "Ja, till viss del",
            sv_easy: "Ja, lite",
            en: "Yes, to some degree",
            en_easy: "Yes, a little"
        },

        short_label: {
            sv: "Till viss del",
            sv_easy: "Lite",
            en: "To some degree",
            en_easy: "A little"
        },

        tooltip: {
            sv: "Det förekommer till viss del där du bor.",
            sv_easy: "Det finns lite av detta där du bor.",
            en: "It occurs to some degree where you live.",
            en_easy: "There is a little of this where you live."
        }
    },

    {
        value: "large_degree",

        label: {
            sv: "Ja, till stor del",
            sv_easy: "Ja, mycket",
            en: "Yes, to a large degree",
            en_easy: "Yes, a lot"
        },

        short_label: {
            sv: "Till stor del",
            sv_easy: "Mycket",
            en: "To a large degree",
            en_easy: "A lot"
        },

        tooltip: {
            sv: "Det förekommer till stor del där du bor.",
            sv_easy: "Det finns mycket av detta där du bor.",
            en: "It occurs to a large degree where you live.",
            en_easy: "There is a lot of this where you live."
        }
    },

    {
        value: "yes_not_problem",

        label: {
            sv: "Ja, men jag ser det inte som ett problem",
            sv_easy: "Ja, men det stör mig inte",
            en: "Yes, but I don't consider it a problem",
            en_easy: "Yes, but it is not a problem for me"
        },

        short_label: {
            sv: "Ja, inget problem",
            sv_easy: "Ja, inget problem",
            en: "Yes, not a problem",
            en_easy: "Yes, not a problem"
        },

        tooltip: {
            sv: "Det förekommer, men du ser det inte som ett problem.",
            sv_easy: "Det finns, men det stör dig inte.",
            en: "It occurs, but you do not consider it a problem.",
            en_easy: "It is there, but it does not bother you."
        }
    }
];

export const residentialOptions: SurveyOption[] = [
    {
        value: "no",
        label: { sv: "Nej", sv_easy: "Nej", en: "No", en_easy: "No" },
        short_label: { sv: "Nej", sv_easy: "Nej", en: "No", en_easy: "No" },
        tooltip: {
            sv: "Du skulle inte vilja flytta från området.",
            sv_easy: "Du vill inte flytta.",
            en: "You would not want to move away from the area.", en_easy: "You do not want to move."
        }
    },
    {
        value: "yes_safety",
        label: {
            sv: "Ja, främst på grund av otrygghet, brott och ordningsstörningar",
            sv_easy: "Ja, för att jag känner mig otrygg",
            en: "Yes, mainly due to insecurity, crime, and disturbances of the peace", en_easy: "Yes, because I feel unsafe in the area"
        },
        short_label: {
            sv: "Ja, på grund av otrygghet",
            sv_easy: "Ja, på grund av otrygghet",
            en: "Yes, due to safety", en_easy: "Yes, I feel unsafe"
        },
        tooltip: {
            sv: "Du skulle främst vilja flytta på grund av otrygghet eller brott.",
            sv_easy: "Du vill främst flytta för att du känner dig otrygg eller på grund av brott.",
            en: "You would mainly want to move because of insecurity or crime.", en_easy: "You want to move because you feel unsafe."
        }
    },
    {
        value: "yes_other",
        label: { sv: "Ja, främst av andra skäl", sv_easy: "Ja, av en annan anledning", en: "Yes, mainly due to other reasons", en_easy: "Yes, for other reasons" },
        short_label: { sv: "Ja, andra skäl", sv_easy: "Ja, andra skäl", en: "Yes, other reasons", en_easy: "Yes, other reasons" },
        tooltip: {
            sv: "Du skulle främst vilja flytta av andra skäl.",
            sv_easy: "Du vill främst flytta av en annan anledning.",
            en: "You would mainly want to move for other reasons.", en_easy: "You want to move for another reason."
        }
    },
    {
        value: "dont_know",
        label: { sv: "Vet inte", sv_easy: "Osäker", en: "Don't know", en_easy: "Don't know" },
        short_label: { sv: "Vet inte", sv_easy: "Vet inte", en: "Don't know", en_easy: "Don't know" },
        tooltip: {
            sv: "Du är osäker på om du skulle vilja flytta.",
            sv_easy: "Du vet inte om du vill flytta.",
            en: "You are unsure whether you would want to move.", en_easy: "You are not sure if you want to move."
        }
    },
];
export const householdOptions: SurveyOption[] = [
    {
        value: "parents",
        label: { sv: "Jag bor med mina föräldrar", sv_easy: "Jag bor med mina föräldrar", en: "I live with my parents", en_easy: "I live with my parents" },
        short_label: { sv: "Bor med föräldrar", sv_easy: "Bor med föräldrar", en: "Live with parents", en_easy: "Live with parents" },
        tooltip: {
            sv: "Du bor tillsammans med en eller båda dina föräldrar.",
            sv_easy: "Du bor med en eller båda dina föräldrar.",
            en: "You live with one or both of your parents.", en_easy: "You live with your parent or parents."
        }
    },
    {
        value: "single_alone",
        label: { sv: "Jag är ensamstående och bor själv", sv_easy: "Jag bor själv", en: "I am single and live alone", en_easy: "I am single and I live alone" },
        short_label: { sv: "Ensamstående", sv_easy: "Ensamstående", en: "Single, live alone", en_easy: "Single, live alone" },
        tooltip: {
            sv: "Du är ensamstående och bor ensam.",
            sv_easy: "Du bor ensam och har ingen partner.",
            en: "You are single and live alone.", en_easy: "You are single and live alone."
        }
    },
    {
        value: "single_children",
        label: {
            sv: "Jag är ensamstående med barn under 18 år",
            sv_easy: "Jag bor med barn men utan partner",
            en: "I am single with children under 18", en_easy: "I am single and live with children under 18"
        },
        short_label: { sv: "Ensamstående med barn", sv_easy: "Ensamstående med barn", en: "Single with children", en_easy: "Single with children" },
        tooltip: {
            sv: "Du är ensamstående och har barn under 18 år.",
            sv_easy: "Du har barn under 18 år och bor utan partner.",
            en: "You are single and have children under 18.", en_easy: "You are single and have children under 18."
        }
    },
    {
        value: "partner_children",
        label: {
            sv: "Jag är gift/sambo med hemmaboende barn",
            sv_easy: "Jag bor med partner och barn",
            en: "I am married/cohabiting with children", en_easy: "I live with my partner and children"
        },
        short_label: { sv: "Partner och barn", sv_easy: "Partner och barn", en: "Partner and children", en_easy: "Partner and children" },
        tooltip: {
            sv: "Du bor med en partner och har barn som bor hemma.",
            sv_easy: "Du bor med din partner och barn.",
            en: "You live with a partner and children.", en_easy: "You live with your partner and children."
        }
    },
    {
        value: "partner_no_children",
        label: {
            sv: "Jag är gift/sambo utan hemmaboende barn",
            sv_easy: "Jag bor med partner utan barn hemma",
            en: "I am married/cohabiting without children living at home", en_easy: "I live with my partner and no children live at home"
        },
        short_label: {
            sv: "Partner, inga hemmaboende barn",
            sv_easy: "Partner, inga hemmaboende barn",
            en: "Partner, no children at home", en_easy: "Partner, no children at home"
        },
        tooltip: {
            sv: "Du bor med en partner och har inga barn som bor hemma.",
            sv_easy: "Du bor med din partner och har inga barn hemma.",
            en: "You live with a partner and have no children living at home.", en_easy: "You live with your partner and no children live at home."
        }
    },
    {
        value: "other",
        label: { sv: "Annat", sv_easy: "Något annat", en: "Other", en_easy: "Other" },
        short_label: { sv: "Annat", sv_easy: "Annat", en: "Other", en_easy: "Other" },
        tooltip: {
            sv: "Ingen av de andra beskrivningarna passar.",
            sv_easy: "De andra alternativen passar inte.",
            en: "None of the other descriptions applies.", en_easy: "None of the other options fit."
        }
    },
];
// ---------------------------------------
// Questions
// ---------------------------------------
export const surveyQuestions: SurveyQuestion[] = [
    {
        id: "current-residential",
        question: {
            sv: "Om du fick välja fritt, skulle du vilja flytta från området där du bor idag?",
            sv_easy: "Om du fick välja själv, skulle du vilja flytta från området där du bor?",
            en: "If you were free to choose, would you move away from your current residential area?", en_easy: "If you could choose, would you like to move from the area where you live?"
        },
        helpText: {
            sv: "Tänk på om du skulle vilja bo i ett annat område om du själv fick välja.",
            sv_easy: "Tänk på om du hellre skulle vilja bo någon annanstans.",
            en: "Think about whether you would prefer to live in another area if you were free to choose.", en_easy: "Think about whether you would like to live somewhere else."
        },
        required: true,
        options: residentialOptions
    },
    // Worries about being the victim of crime
    {
        id: "safety-evening",
        section: {
            sv: "Oro för att utsättas för brott",
            sv_easy: "Oro för brott",
            en: "Worries about being the victim of crime", en_easy: "Worry about crime"
        },
        description: {
            sv: "Har det under de senaste 12 månaderna hänt ...",
            sv_easy: "Har detta hänt under de senaste 12 månaderna ...",
            en: "During the last 12 months, has it occurred...", en_easy: "In the last 12 months, have you..."
        },
        question: {
            sv: "Att du oroat dig för att bli utsatt för inbrott i den egna bostaden?",
            sv_easy: "Att du varit orolig för inbrott i ditt hem?",
            en: "That you have worried about being the victim of burglary in your own home?", en_easy: "Worried that someone might break into your home?"
        },
        helpText: {
            sv: "Frågan gäller hur ofta du har känt oro för inbrott i din bostad under de senaste 12 månaderna, inte om ett inbrott faktiskt har skett.",
            sv_easy: "Tänk på hur ofta du har varit orolig för att någon ska göra inbrott i ditt hem. Det behöver inte ha hänt ett inbrott.",
            en: "This question is about how often you have worried about burglary in your home during the last 12 months, not whether a burglary actually occurred.",
            en_easy: "Think about how often you worried that someone might break into your home. A burglary does not need to have happened."
        },
        required: true,
        options: safetyOptions
    },
    {
        id: "safety-daytime",
        section: {
            sv: "Oro för att utsättas för brott",
            sv_easy: "Oro för brott",
            en: "Worries about being the victim of crime", en_easy: "Worry about crime"
        },
        description: {
            sv: "Har det under de senaste 12 månaderna hänt ...",
            sv_easy: "Har detta hänt under de senaste 12 månaderna ...",
            en: "During the last 12 months, has it occurred...", en_easy: "In the last 12 months, have you..."
        },
        question: {
            sv: "Att du oroat dig för att bli utsatt för inbrott i förråd, källare, vindsutrymme eller garage?",
            sv_easy: "Att du varit orolig för inbrott i ditt förråd, din källare, vind eller garage?",
            en: "That you have worried about being the victim of burglary in your storage unit, basement, attic or garage?",
            en_easy: "Worried that someone might break into your storage room, basement, attic or garage?"
        },
        helpText: {
            sv: "Frågan gäller hur ofta du har känt oro för inbrott i förråd, källare, vindsutrymme eller garage under de senaste 12 månaderna.",
            sv_easy: "Tänk på hur ofta du har varit orolig för inbrott i förråd, källare, vind eller garage.",
            en: "This question is about how often you have worried about burglary in a storage unit, basement, attic or garage during the last 12 months.",
            en_easy: "Think about how often you worried that someone might break into your storage room, basement, attic or garage."
        },
        required: true,
        options: safetyOptions
    },
    {
        id: "safety-garage",
        section: {
            sv: "Oro för att utsättas för brott",
            sv_easy: "Oro för brott",
            en: "Worries about being the victim of crime", en_easy: "Worry about crime"
        },
        description: {
            sv: "Har det under de senaste 12 månaderna hänt ...",
            sv_easy: "Har detta hänt under de senaste 12 månaderna ...",
            en: "During the last 12 months, has it occurred...", en_easy: "In the last 12 months, have you..."
        },
        question: {
            sv: "Att du oroat dig för att din bil, motorcykel, moped eller cykel ska utsättas för stöld eller skadegörelse om den är parkerad i området där du bor?",
            sv_easy: "Att du varit orolig för att någon ska stjäla eller skada din bil, motorcykel, moped eller cykel där du bor?",
            en: "That you have worried that your car, motorcycle, moped or bicycle will be subjected to theft or vandalism if it is parked in the area where you live?",
            en_easy: "Worried that your car, motorcycle, moped or bicycle might be stolen or damaged where you live?"
        },
        helpText: {
            sv: "Frågan gäller hur ofta du har känt oro för att ditt fordon eller din cykel ska bli stulen eller skadad när den är parkerad där du bor.",
            sv_easy: "Tänk på hur ofta du har varit orolig för att någon ska stjäla eller skada ditt fordon eller din cykel där du bor.",
            en: "This question is about how often you have worried that your vehicle or bicycle might be stolen or damaged when parked where you live.",
            en_easy: "Think about how often you worried that someone might steal or damage your vehicle or bicycle where you live."
        },
        required: true,
        options: safetyOptions
    },
    {
        id: "safety-assault",
        section: {
            sv: "Oro för att utsättas för brott",
            sv_easy: "Oro för brott",
            en: "Worries about being the victim of crime", en_easy: "Worry about crime"
        },
        description: {
            sv: "Har det under de senaste 12 månaderna hänt ...",
            sv_easy: "Har detta hänt under de senaste 12 månaderna ...",
            en: "During the last 12 months, has it occurred...", en_easy: "In the last 12 months, have you..."
        },
        question: {
            sv: "Att du oroat dig för att bli överfallen eller misshandlad i området där du bor?",
            sv_easy: "Att du varit orolig för att någon ska överfalla eller slå dig där du bor?",
            en: "That you have worried about being assaulted or physically abused in the area where you live?",
            en_easy: "Worried that someone might attack or hurt you where you live?"
        },
        helpText: {
            sv: "Frågan gäller hur ofta du har känt oro för att bli överfallen eller misshandlad i området där du bor under de senaste 12 månaderna.",
            sv_easy: "Tänk på hur ofta du har varit orolig för att någon ska överfalla eller slå dig där du bor.",
            en: "This question is about how often you have worried about being assaulted or physically abused in the area where you live during the last 12 months.",
            en_easy: "Think about how often you worried that someone might attack or hurt you where you live."
        },
        required: true,
        options: safetyOptions
    },
    // Problems in the area
    {
        id: "problem-poor-lighting",
        section: {
            sv: "Problem i området där du bor",
            sv_easy: "Problem där du bor",
            en: "Problems in the area where you live", en_easy: "Problems where you live"
        },
        description: {
            sv: "Upplever du att problemen nedan förekommer där du bor eller i närheten?",
            sv_easy: "Finns något av problemen nedan där du bor eller nära dig?",
            en: "Do you feel that the problems below occur where you live or nearby?", en_easy: "Do you see any of these problems where you live or nearby?"
        },
        question: { sv: "Mörka eller dåligt belysta platser", sv_easy: "Mörka platser eller platser med dåligt ljus", en: "Dark or poorly lit areas", en_easy: "Dark places or places with poor lighting" },
        helpText: {
            sv: "Med detta menas platser där belysningen saknas eller är så svag att det är svårt att se ordentligt.",
            sv_easy: "Det betyder platser där det är mörkt eller där lamporna lyser för svagt.",
            en: "This means places where lighting is missing or too weak to see clearly.",
            en_easy: "This means places that are dark or do not have enough light."
        },
        required: true,
        options: areaProblemOptions
    },
    {
        id: "problem-graffiti",
        section: {
            sv: "Problem i området där du bor",
            sv_easy: "Problem där du bor",
            en: "Problems in the area where you live", en_easy: "Problems where you live"
        },
        description: {
            sv: "Upplever du att problemen nedan förekommer där du bor eller i närheten?",
            sv_easy: "Finns något av problemen nedan där du bor eller nära dig?",
            en: "Do you feel that the problems below occur where you live or nearby?", en_easy: "Do you see any of these problems where you live or nearby?"
        },
        question: { sv: "Klotter", sv_easy: "Klotter", en: "Graffiti", en_easy: "Graffiti" },
        helpText: {
            sv: "Med klotter menas text, symboler eller målningar som gjorts på byggnader eller andra ytor utan tillåtelse.",
            sv_easy: "Klotter är text eller bilder som någon har skrivit eller målat på en plats utan lov.",
            en: "Graffiti here means writing, symbols or drawings placed on buildings or other surfaces without permission.",
            en_easy: "Graffiti means writing or pictures put on a place without permission."
        },
        required: true,
        options: areaProblemOptions
    },
    {
        id: "problem-littering",
        section: {
            sv: "Problem i området där du bor",
            sv_easy: "Problem där du bor",
            en: "Problems in the area where you live", en_easy: "Problems where you live"
        },
        description: {
            sv: "Upplever du att problemen nedan förekommer där du bor eller i närheten?",
            sv_easy: "Finns något av problemen nedan där du bor eller nära dig?",
            en: "Do you feel that the problems below occur where you live or nearby?", en_easy: "Do you see any of these problems where you live or nearby?"
        },
        question: { sv: "Nedskräpning", sv_easy: "Nedskräpning", en: "Littering", en_easy: "Littering" },
        helpText: {
            sv: "Med nedskräpning menas skräp som lämnas på marken eller på andra allmänna platser.",
            sv_easy: "Det betyder att människor lämnar skräp på marken eller ute på allmänna platser.",
            en: "Littering means rubbish being left on the ground or in other public places.",
            en_easy: "This means people leaving rubbish on the ground or in public places."
        },
        required: true,
        options: areaProblemOptions
    },
    {
        id: "problem-vandalism",
        section: {
            sv: "Problem i området där du bor",
            sv_easy: "Problem där du bor",
            en: "Problems in the area where you live", en_easy: "Problems where you live"
        },
        description: {
            sv: "Upplever du att problemen nedan förekommer där du bor eller i närheten?",
            sv_easy: "Finns något av problemen nedan där du bor eller nära dig?",
            en: "Do you feel that the problems below occur where you live or nearby?", en_easy: "Do you see any of these problems where you live or nearby?"
        },
        question: { sv: "Skadegörelse", sv_easy: "Skadegörelse", en: "Vandalism", en_easy: "Vandalism" },
        helpText: {
            sv: "Med skadegörelse menas att någon medvetet skadar till exempel byggnader, fordon eller saker på allmän plats.",
            sv_easy: "Det betyder att någon med flit förstör eller skadar saker, byggnader eller fordon.",
            en: "Vandalism means deliberately damaging things such as buildings, vehicles or property in public places.",
            en_easy: "This means someone damages buildings, vehicles or other things on purpose."
        },
        required: true,
        options: areaProblemOptions
    },
    {
        id: "problem-fires",
        section: {
            sv: "Problem i området där du bor",
            sv_easy: "Problem där du bor",
            en: "Problems in the area where you live", en_easy: "Problems where you live"
        },
        description: {
            sv: "Upplever du att problemen nedan förekommer där du bor eller i närheten?",
            sv_easy: "Finns något av problemen nedan där du bor eller nära dig?",
            en: "Do you feel that the problems below occur where you live or nearby?", en_easy: "Do you see any of these problems where you live or nearby?"
        },
        question: {
            sv: "Anlagda bränder, till exempel i papperskorgar",
            sv_easy: "Bränder som någon har startat med flit, till exempel i papperskorgar",
            en: "Setting fires, e.g. in rubbish bins", en_easy: "People starting fires, for example in rubbish bins"
        },
        helpText: {
            sv: "Med anlagda bränder menas bränder som någon medvetet har startat, till exempel i papperskorgar.",
            sv_easy: "Det betyder bränder som någon har startat med flit, till exempel i en papperskorg.",
            en: "This means fires that someone has deliberately started, for example in rubbish bins.",
            en_easy: "This means fires that someone starts on purpose, for example in a rubbish bin."
        },
        required: true,
        options: areaProblemOptions
    },
    // Vulnerability to crime
    {
        id: "physical-violence",
        section: { sv: "Utsatthet för brott", sv_easy: "Om du har blivit utsatt för brott", en: "Vulnerability to crime", en_easy: "If you have been a victim of crime" },
        question: {
            sv: "Har du under de senaste 12 månaderna blivit utsatt för fysiskt våld som gjorde ont?",
            sv_easy: "Har någon använt fysiskt våld mot dig under de senaste 12 månaderna så att det gjorde ont?",
            en: "In the last 12 months, have you been the victim of physical violence that caused pain?", en_easy: "In the last 12 months, has someone used physical violence against you that hurt you?"
        },
        helpText: {
            sv: "Med fysiskt våld menas våld från en annan person som orsakat fysisk smärta.",
            sv_easy: "Fysiskt våld betyder att någon gör dig illa med kroppen eller ett föremål.",
            en: "Physical violence means violence by another person that caused physical pain.", en_easy: "Physical violence means someone hurt your body on purpose."
        },
        required: true,
        options: yesNoOptions
    },
    {
        id: "partner-severe-violence",
        section: {
            sv: "Våld och övergrepp i nära relationer",
            sv_easy: "Våld i nära relationer",
            en: "Violence and abuse in close relationships", en_easy: "Violence or abuse from a partner"
        },
        question: {
            sv: "Har en nuvarande eller tidigare partner under det senaste året slagit dig med knytnäve eller ett föremål, tagit strypgrepp på dig, sparkat dig eller gjort något liknande?",
            sv_easy: "Har en nuvarande eller tidigare partner under det senaste året slagit dig med knytnäven eller ett föremål, tagit strypgrepp eller sparkat dig?",
            en: "Has a current or former partner, in the past year, hit you with a fist or an object, choked you, kicked you, or done something similar?", en_easy: "In the past year, has a current or former partner punched you, hit you with an object, choked you, kicked you or hurt you in a similar way?"
        },
        helpText: {
            sv: "Frågan gäller allvarligare former av fysiskt våld från en nuvarande eller tidigare partner, som de handlingar som beskrivs i frågan.",
            sv_easy: "Det handlar om allvarligt fysiskt våld från en partner eller tidigare partner, till exempel slag, strypgrepp eller sparkar.",
            en: "This question concerns more serious forms of physical violence by a current or former partner, such as the actions described in the question.",
            en_easy: "This is about serious physical violence from a partner or former partner, such as punching, choking or kicking."
        },
        required: true,
        options: occurrenceOptions
    },

    // Final question
    {
        id: "about-yourself",
        section: { sv: "Något om dig själv", sv_easy: "Om dig", en: "Something about yourself", en_easy: "About you" },
        question: {
            sv: "Vilket av följande stämmer bäst in på dig?",
            sv_easy: "Vilket alternativ passar bäst för dig?",
            en: "Which of the following applies to you?", en_easy: "Which option describes you best?"
        },
        helpText: {
            sv: "Välj det alternativ som bäst beskriver din nuvarande boende- och familjesituation.",
            sv_easy: "Välj det alternativ som bäst beskriver hur du bor och vilka du bor med.",
            en: "Choose the option that best describes your current living and family situation.",
            en_easy: "Choose the option that best describes how you live and who you live with."
        },
        required: true,
        options: householdOptions,
        finalMsg: {
            sv: [
                "Du har nu kommit till slutet av enkäten. Om du vill gå tillbaka och ändra något av dina svar kan du göra det med hjälp av knapparna längst ner.",
                "När du klickar på Skicka in låses enkäten och dina svar skickas in."
            ],

            sv_easy: [
                "Du är nu klar med enkäten. Du kan gå tillbaka och ändra dina svar med knapparna längst ner.",
                "När du klickar på Skicka in kan du inte längre ändra dina svar. Då skickas enkäten in."
            ],

            en: [
                "You have now reached the end of the questionnaire. If you want to go back and edit any of your answers, you can do so using the buttons at the bottom.",
                "Once you click Submit, the questionnaire will be locked and submitted."
            ],

            en_easy: [
                "You are now at the end of the survey. You can use the buttons below to go back and change your answers.",
                "Once you click Submit, you cannot change your answers anymore. The survey will then be submitted."
            ]
        }
    },
];