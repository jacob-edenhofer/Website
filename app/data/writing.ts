export type WritingItem = {
  title: string;
  authors: string;
  outlet: string;
  date: string;
  href: string;
  description?: string;
  links?: Array<{ label: string; href: string }>;
};

export const researchCommentary: WritingItem[] = [
  {
    title: "Behind Populists’ Anti-Technocratic Fervor and Its Consequences for Liberal Democracy",
    authors: "With Gabriele Gratton",
    outlet: "ProMarket",
    date: "14 May 2025",
    href: "https://www.promarket.org/2025/05/14/behind-populists-anti-technocratic-fervor-and-its-consequences-for-liberal-democracy/",
  },
  {
    title: "Informational Boundaries of the State and the Energy Crisis",
    authors: "With Thiemo Fetzer and Callum Shaw",
    outlet: "VoxEU",
    date: "11 April 2025",
    href: "https://cepr.org/voxeu/columns/informational-boundaries-state-and-energy-crisis",
  },
  {
    title: "Nährboden für Populisten",
    authors: "With Thiemo Fetzer and Prashant Garg",
    outlet: "Frankfurter Allgemeine Zeitung",
    date: "7 April 2025",
    href: "https://zeitung.faz.net/faz/wirtschaft/2025-04-07/naehrboden-fuer-populisten/1151252.html#verschenken",
  },
  {
    title: "When and Why Compensation Can Unlock the Green Energy Transition",
    authors: "With Federica Genovese",
    outlet: "Progressive Politics Research Network",
    date: "December 2024",
    href: "https://politicscentre.nuffield.ox.ac.uk/media/zdubebua/1_edenhofer_genovese.pdf",
  },
  {
    title: "From Local to National: Austerity, Immigration and Support for UKIP",
    authors: "With Eleonora Alabrese, Thiemo Fetzer, and Shizhuo Wang",
    outlet: "UK in a Changing Europe",
    date: "5 November 2024",
    href: "https://ukandeu.ac.uk/from-local-to-national-austerity-immigration-and-support-for-ukip/",
  },
  {
    title: "Local Decline and Populism",
    authors: "With Thiemo Fetzer and Prashant Garg",
    outlet: "VoxEU",
    date: "15 September 2024",
    href: "https://cepr.org/voxeu/columns/local-decline-and-populism",
  },
  {
    title: "Levelling up by Levelling down? The Economic and Political Costs of Brexit",
    authors: "With Eleonora Alabrese, Thiemo Fetzer, and Shizhuo Wang",
    outlet: "UK in a Changing Europe",
    date: "6 September 2024",
    href: "https://ukandeu.ac.uk/levelling-up-by-levelling-down-the-economic-and-political-costs-of-brexit/",
  },
];

export const publicAffairsWriting: WritingItem[] = [
  {
    title: "Not a Disaster, but a Missed Opportunity",
    authors: "With Christian Flachsland and Claudia Zwar",
    outlet: "Verfassungsblog",
    date: "9 May 2024",
    href: "https://verfassungsblog.de/german-federal-climate-protection-act/",
  },
  {
    title: "Chancen der Klimapolitik in Zeiten geopolitischer Spannungen",
    authors: "With Ottmar Edenhofer, Matthias Kalkuhl, and Cecilia Kilimann",
    outlet: "Amos international",
    date: "2023",
    href: "https://www.amosinternational.de/user/pages/02.magazine/issue-2023-4/amos_23-4S27-16%20O.Edenhofer%2C%20J.%20Edenhofer%2C%20Kalkuhl%20u.%20Killimann.pdf?g-08381e3e=",
    links: [
      { label: "Summary thread (English)", href: "https://threadreaderapp.com/thread/1760635907995017502.html" },
    ],
  },
  {
    title: "Die Welt retten geht nur demokratisch",
    authors: "With Ottmar Edenhofer",
    outlet: "Publik-Forum",
    date: "17 November 2023",
    href: "https://www.publik-forum.de/politik-gesellschaft/die-welt-retten-geht-nur-demokratisch",
  },
];

export const reviewsAndEssays: WritingItem[] = [
  {
    title: "Shared Prosperity in a Fractured World: A New Economics for the Middle Class, the Global Poor, and Our Climate, by Dani Rodrik (Princeton University Press, Princeton, US, 2025), Pp. 280.",
    authors: "With Gabriele Gratton",
    outlet: "Economic Record 102 (338), 476–80",
    date: "2026",
    href: "https://doi.org/10.1111/1475-4932.70046",
    description: "We review Rodrik’s programme for the middle class, poorer countries, and climate policy.",
  },
  {
    title: "From Quiet to Noisy Politics: An Excellent Book on Corporate Power in Democracies",
    authors: "Jacob Edenhofer",
    outlet: "Amazon review",
    date: "24 March 2026",
    href: "https://www.amazon.co.uk/Billionaire-Backlash-Corporate-Scandal-Democracy/dp/1399424149#customerReviews",
    description: "I review Pepper Culpepper and Taeku Lee’s ‘Billionaire Backlash’.",
  },
];

export const democracyAndAdvice: WritingItem[] = [
  {
    title: "Wissenschaft und Politikberatung in Zeiten gesellschaftlicher Spaltung",
    authors: "With Ottmar Edenhofer",
    outlet: "Brandenburg state parliament, Potsdam",
    date: "8 July 2026",
    href: "https://mwfk.brandenburg.de/sixcms/media.php/9/05_ProfOttmarEdenhofer_Politikberatung_PowerPointVortrag.pdf",
    description: "We prepared these slides for the keynote given by [Ottmar Edenhofer](https://www.pik-potsdam.de/members/edenh) (Potsdam Institute for Climate Impact Research and TU Berlin) at ‘Resilienz des deutschen Wissenschaftssystems – Verantwortung gemeinsam übernehmen’, a conference on the resilience of Germany’s science system.",
  },
  {
    title: "60 Minuten: (Rechts-)Populismus: Altes Problem, junge Stimmen",
    authors: "With Christian Leßmann, Luisa Dörr, and Julius Kölzer",
    outlet: "ifo Institute and TU Dresden",
    date: "13 January 2026",
    href: "https://youtu.be/fkkVFYv_cL8?si=CxY9xmO0l2f9PR-f",
    description: "We discuss the sources of support for populist parties in Germany and elsewhere in Europe.",
  },
  {
    title: "“Social acceptability” via deservingness: Promising avenue or cul-de-sac?",
    authors: "Jacob Edenhofer",
    outlet: "Ariadne@Brussels",
    date: "9 December 2025",
    href: "/Brussels_Compensation_Presentation_2025.pdf",
    description: "Presentation at the Ariadne workshop [“EU Climate and Energy Policy in a Polarising World”](https://ariadneprojekt.de/en/events-en/ariadnebrussels-2025-insights/).",
  },
  {
    title: "Towards a more nuanced understanding of right-wing populism",
    authors: "Jacob Edenhofer",
    outlet: "Friedrich Naumann Foundation, Europe Workshop",
    date: "25 November 2025",
    href: "https://www.dropbox.com/scl/fi/v3nes994lb0ml0pwwu6xs/RWP_Naumann_Stiftung_EdenhoferNov2025_long.pdf?rlkey=d9e5dvibsc0fif4d3kd1809j6&st=gdul11fl&dl=0",
    description: "Across 85 slides, I offer a synthesis and my interpretation of the literature on the causes and consequences of right-wing populism and assess potential countermeasures.",
  },
  {
    title: "Does fairness matter for the political efficacy of compensation?",
    authors: "Jacob Edenhofer",
    outlet: "Ariadne@Brussels",
    date: "10 December 2024",
    href: "/Brussels_Compensation_Presentation_2024.pdf",
    description: "Discussion of Gruhl et al. at the Ariadne workshop [“Staying the Course in Turbulent Times”](https://ariadneprojekt.de/en/events-en/staying-the-course-in-turbulent-times/).",
  },
];

export const featuredWriting: WritingItem[] = [
  reviewsAndEssays[0],
  reviewsAndEssays[1],
  publicAffairsWriting[2],
  publicAffairsWriting[0],
];
