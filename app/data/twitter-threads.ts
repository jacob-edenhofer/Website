export type TwitterThread = {
  id: string;
  title: string;
  date: string;
  language: "English" | "German";
};

export type ThreadGroup = {
  id: string;
  title: string;
  items: TwitterThread[];
};

// Dates and IDs come from the saved thread headers. Entries are newest first.
// The two threads on veto players and Ganghof were already linked on this page.
export const threadGroups: ThreadGroup[] = [
  {
    "id": "climate",
    "title": "Climate politics",
    "items": [
      {
        "id": "2012992239408984257",
        "title": "Voters and organised interests across stages of decarbonisation",
        "date": "2026-01-18",
        "language": "English"
      },
      {
        "id": "2005674033258606687",
        "title": "Favourite papers on climate policy and politics in 2025",
        "date": "2025-12-29",
        "language": "English"
      },
      {
        "id": "2000944001806168354",
        "title": "Gender, occupational status, and support for the green transition",
        "date": "2025-12-16",
        "language": "English"
      },
      {
        "id": "1975650537547972914",
        "title": "Badenoch’s proposed repeal of the Climate Change Act",
        "date": "2025-10-07",
        "language": "English"
      },
      {
        "id": "1939770607953989817",
        "title": "Introducing the Climate Politics Framework",
        "date": "2025-06-30",
        "language": "English"
      },
      {
        "id": "1876215518384079306",
        "title": "Why the energy transition remains vulnerable to Trump",
        "date": "2025-01-06",
        "language": "German"
      },
      {
        "id": "1770034720111251541",
        "title": "Elite cues and public opinion on climate policy",
        "date": "2024-03-19",
        "language": "English"
      },
      {
        "id": "1760635907995017502",
        "title": "The geopolitics of the green transition",
        "date": "2024-02-22",
        "language": "English"
      },
      {
        "id": "1752478438223495563",
        "title": "The political arguments for green subsidies",
        "date": "2024-01-30",
        "language": "English"
      },
      {
        "id": "1722216966608523757",
        "title": "Reforming Germany’s climate law",
        "date": "2023-11-08",
        "language": "German"
      },
      {
        "id": "1703329859324330241",
        "title": "Public attention and Germany’s national emissions trading system",
        "date": "2023-09-17",
        "language": "English"
      },
      {
        "id": "1679788474667356160",
        "title": "Regulatory capture and the choice of climate policies",
        "date": "2023-07-14",
        "language": "German"
      },
      {
        "id": "1679460462956511232",
        "title": "How climate policy can overcome collective action problems",
        "date": "2023-07-13",
        "language": "German"
      },
      {
        "id": "1635997715837452291",
        "title": "Carbon pricing and its political economy",
        "date": "2023-03-15",
        "language": "German"
      }
    ]
  },
  {
    "id": "populism",
    "title": "Populism and the radical right",
    "items": [
      {
        "id": "1993758805000147137",
        "title": "The difficulties of countering right-wing populism",
        "date": "2025-11-26",
        "language": "English"
      },
      {
        "id": "1982804858206859283",
        "title": "Credibility and the limits of accommodation on immigration",
        "date": "2025-10-27",
        "language": "English"
      },
      {
        "id": "1957046944724844966",
        "title": "When accommodation on immigration can work",
        "date": "2025-08-17",
        "language": "English"
      },
      {
        "id": "1946877895323844900",
        "title": "The political economy of banning the AfD",
        "date": "2025-07-20",
        "language": "German"
      },
      {
        "id": "1912818177555231055",
        "title": "The rationale and fragility of the cordon sanitaire",
        "date": "2025-04-17",
        "language": "English"
      },
      {
        "id": "1875127004326158567",
        "title": "The political logic of populist falsehoods",
        "date": "2025-01-03",
        "language": "German"
      },
      {
        "id": "1863743988974416222",
        "title": "The accommodation debate and party competition",
        "date": "2024-12-03",
        "language": "English"
      },
      {
        "id": "1668246736928755717",
        "title": "Electoral systems and the radical right’s threat to democracy",
        "date": "2023-06-12",
        "language": "English"
      }
    ]
  },
  {
    "id": "democracy",
    "title": "Liberal democracy and its tensions",
    "items": [
      {
        "id": "2007131571204001963",
        "title": "Voters’ responses to democratic backsliding",
        "date": "2026-01-02",
        "language": "English"
      },
      {
        "id": "1990822736554307921",
        "title": "Technocracy as insurance against losing political power",
        "date": "2025-11-18",
        "language": "English"
      },
      {
        "id": "1974069665338098008",
        "title": "German reunification and the persistence of political differences",
        "date": "2025-10-03",
        "language": "English"
      },
      {
        "id": "1886335627974651908",
        "title": "The rise and fall of technocratic democracies",
        "date": "2025-02-03",
        "language": "English"
      },
      {
        "id": "1869128300096110983",
        "title": "The case for liberal democracy and its limits",
        "date": "2024-12-17",
        "language": "German"
      },
      {
        "id": "1845826285060174328",
        "title": "Acemoglu and Robinson on inequality and democratisation",
        "date": "2024-10-14",
        "language": "English"
      },
      {
        "id": "1845435161850032510",
        "title": "The political consequences of technocratic economic policy",
        "date": "2024-10-13",
        "language": "English"
      },
      {
        "id": "1841780267230384498",
        "title": "German reunification and its lasting economic and political effects",
        "date": "2024-10-03",
        "language": "German"
      },
      {
        "id": "1821271761297789118",
        "title": "Autocratic learning from Orbán to Fico",
        "date": "2024-08-07",
        "language": "English"
      },
      {
        "id": "1815847355234525533",
        "title": "The limits of citizens’ assemblies",
        "date": "2024-07-23",
        "language": "English"
      },
      {
        "id": "1759718258234605742",
        "title": "Assessing the arguments for citizens’ assemblies",
        "date": "2024-02-19",
        "language": "English"
      },
      {
        "id": "1758084907597693402",
        "title": "The legacies of East Germany and the limits of simple comparisons",
        "date": "2024-02-15",
        "language": "English"
      },
      {
        "id": "1748083543480164666",
        "title": "Democratic hooliganism and faith in institutional resilience",
        "date": "2024-01-18",
        "language": "English"
      },
      {
        "id": "1716052321820455017",
        "title": "Voter ignorance and the rationality of electorates",
        "date": "2023-10-22",
        "language": "English"
      },
      {
        "id": "1601978348447711233",
        "title": "How EU membership helps sustain Orbán’s regime",
        "date": "2022-12-11",
        "language": "English"
      },
      {
        "id": "1597004142505263104",
        "title": "Information, trust, and pandemic policy in democracies and autocracies",
        "date": "2022-11-27",
        "language": "English"
      }
    ]
  },
  {
    "id": "institutions",
    "title": "Institutions and policymaking",
    "items": [
      {
        "id": "1987597300131147889",
        "title": "Political scandals and the clarity of accountability",
        "date": "2025-11-09",
        "language": "English"
      },
      {
        "id": "1985285872296620063",
        "title": "Political mistrust and the prospects for long-term reform",
        "date": "2025-11-03",
        "language": "English"
      },
      {
        "id": "1967573005074362380",
        "title": "Higher pay and the recruitment of politicians",
        "date": "2025-09-15",
        "language": "English"
      },
      {
        "id": "1932369783686615244",
        "title": "Voter rationality and explanations for Trump",
        "date": "2025-06-10",
        "language": "English"
      },
      {
        "id": "1878404899345444924",
        "title": "Germany’s debt brake, ageing voters, and public investment",
        "date": "2025-01-12",
        "language": "German"
      },
      {
        "id": "1878379229114487135",
        "title": "Ganghof on patterns of democracy",
        "date": "2025-01-12",
        "language": "English"
      },
      {
        "id": "1847043471879688293",
        "title": "Candidate selection and polarisation in the United States",
        "date": "2024-10-17",
        "language": "English"
      },
      {
        "id": "1824464754271789096",
        "title": "Legislative overload and administrative capacity",
        "date": "2024-08-16",
        "language": "German"
      },
      {
        "id": "1736338887486640624",
        "title": "Veto players and policy stability",
        "date": "2023-12-17",
        "language": "English"
      },
      {
        "id": "1713308082631999819",
        "title": "Clarity of responsibility under external constraints",
        "date": "2023-10-14",
        "language": "English"
      },
      {
        "id": "1690469312090263553",
        "title": "Lijphart on majoritarian and consensus democracy",
        "date": "2023-08-12",
        "language": "English"
      },
      {
        "id": "1610699608866406404",
        "title": "Lindvall on power sharing and the capacity for reform",
        "date": "2023-01-04",
        "language": "English"
      },
      {
        "id": "1605515288107024385",
        "title": "Jacobs on long-term policymaking",
        "date": "2022-12-21",
        "language": "English"
      },
      {
        "id": "1603519205650866178",
        "title": "Cox and McCubbins on institutions and policy outcomes",
        "date": "2022-12-15",
        "language": "English"
      },
      {
        "id": "1601210794259030016",
        "title": "Ostrom’s principles and the provision of global public goods",
        "date": "2022-12-09",
        "language": "English"
      }
    ]
  },
  {
    "id": "redistribution",
    "title": "Inequality and redistribution",
    "items": [
      {
        "id": "2009729310995665013",
        "title": "Meritocracy when luck and effort are hard to distinguish",
        "date": "2026-01-09",
        "language": "English"
      },
      {
        "id": "1980404444753010930",
        "title": "Compensation and the backlash against globalisation",
        "date": "2025-10-20",
        "language": "English"
      },
      {
        "id": "1969363353869951018",
        "title": "Wealth taxes and the political consequences of inequality",
        "date": "2025-09-20",
        "language": "English"
      },
      {
        "id": "1860686521809985660",
        "title": "Unions, political power, and inequality",
        "date": "2024-11-24",
        "language": "English"
      },
      {
        "id": "1847977851791810568",
        "title": "Ansell and Gingrich on education, insecurity, and political attitudes",
        "date": "2024-10-20",
        "language": "English"
      },
      {
        "id": "1841572542953230615",
        "title": "Cavaillé on fairness and support for redistribution",
        "date": "2024-10-02",
        "language": "English"
      },
      {
        "id": "1825935220031500339",
        "title": "Why inequality does not always produce more redistribution",
        "date": "2024-08-20",
        "language": "English"
      },
      {
        "id": "1727280137681457169",
        "title": "Iversen and Rosenbluth on work and gender inequality",
        "date": "2023-11-22",
        "language": "English"
      },
      {
        "id": "1714336624547381553",
        "title": "Core voters and regressive policies in Germany’s coalition government",
        "date": "2023-10-17",
        "language": "German"
      }
    ]
  },
  {
    "id": "advice",
    "title": "Expertise and policy advice",
    "items": [
      {
        "id": "1999224274582720740",
        "title": "The political economy of policy advice",
        "date": "2025-12-11",
        "language": "English"
      },
      {
        "id": "1968051040974147712",
        "title": "Expert advice, public opinion, and democratic accountability",
        "date": "2025-09-16",
        "language": "English"
      },
      {
        "id": "1805556455765930020",
        "title": "The foundations and limits of welfare economics",
        "date": "2024-06-25",
        "language": "English"
      }
    ]
  },
  {
    "id": "research",
    "title": "Other",
    "items": [
      {
        "id": "2085095990592188549",
        "title": "Lessons from an unsuccessful experiment on gender and climate policy",
        "date": "2026-08-05",
        "language": "English"
      },
      {
        "id": "1840790536929632517",
        "title": "Models of social change",
        "date": "2024-09-30",
        "language": "English"
      }
    ]
  }
];
