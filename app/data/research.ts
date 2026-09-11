export type Programme = "climate" | "state-capacity" | "populism" | "cpe" | "democracy";

export type ResearchKind =
  | "manuscript"
  | "publication"
  | "forthcoming"
  | "revise-and-resubmit"
  | "working-paper"
  | "work-in-progress"
  | "book-review";

export type ResearchItem = {
  slug: string;
  title: string;
  authors: string;
  subtitle?: string;
  kind: ResearchKind;
  status: string;
  venue: string;
  year: string;
  date?: string;
  programmes: Programme[];
  summary: string;
  abstract: string;
  selected?: boolean;
  links: Array<{ label: string; href: string }>;
};

export const dphilManuscript: ResearchItem = {
  slug: "uncertain-mandates-durable-stringency",
  title: "Uncertain Mandates, Durable Stringency",
  authors: "Jacob Edenhofer",
  subtitle: "Electoral signals and producer adjustment in climate policy",
  kind: "manuscript",
  status: "DPhil manuscript",
  venue: "University of Oxford",
  year: "2024–27",
  programmes: ["climate"],
  summary: "The manuscript examines how temporary electoral activation can produce durable climate policy when credible adoption induces sufficiently rapid producer adjustment before the initial electoral impulse fades.",
  abstract: "Why do some increases in climate policy stringency persist while others are diluted, reversed or produce repeated cycles? This manuscript develops a comparative political economy account centred on the interaction between electoral signals and producer adjustment. Climate demand is often intermittent. Governments anticipate whether the issue will matter at the next election, what an activated signal would demand and how voters will respond when costs become visible. These expectations affect adopted stringency and the credibility of future policy. Producers facing costly and partly irreversible adjustment then decide whether to adjust, wait or resist. Firms with relatively low adjustment costs can defect from opposition when policy is credible. Their choices affect later compliance costs, the costs passed to voters and coordination among remaining opponents. The manuscript therefore distinguishes adopted stringency from durable stringency, understood as the amount of an adopted increase that can be sustained once expected net costs begin to crystallise. It explains how a temporary electoral episode can leave a persistent policy legacy, why ambitious adoption can decay when adjustment is slow and why quieter increases can accumulate when a stable non-electoral motive and policy credibility coincide. The proposed empirical programme would combine measures of prospective electoral conditions with evidence on sectoral policy, cost incidence and producer responses.",
  links: [],
};

export const research: ResearchItem[] = [
  {
    slug: "domestic-political-economy-net-zero",
    title: "The Domestic Political Economy of Net Zero",
    authors: "Jacob Edenhofer, Maurice Hirt and Federica Genovese",
    kind: "forthcoming",
    status: "Forthcoming",
    venue: "Oxford Review of Economic Policy",
    year: "2026",
    programmes: ["climate"],
    selected: true,
    summary: "Net zero requires a sequence of politically costly changes across sectors. We examine how electoral demand, visible costs and adjustment by producers influence the adoption and durability of climate policy.",
    abstract: "The transition to net zero requires governments to pursue a succession of politically costly changes across sectors. We develop a framework in which electoral demand, the relative power of clean and carbon-intensive producers, and the distribution of adjustment costs influence both adopted stringency and the share that can be sustained once costs become politically consequential. Quiet periods can permit policy when costs remain difficult to attribute. Clear electoral activation can support larger changes, while noisy signals weaken expectations of persistence. Adjustment by producers can reduce future opposition and alter the costs borne by households, which links early political choices to later durability.",
    links: [],
  },
  {
    slug: "political-consequences-energy-price-shocks",
    title: "The Political Consequences of Energy Price Shocks: Evidence from Germany",
    authors: "Théo Konc, Jan Christoph Steckel, Jacob Edenhofer, Jens Ewald and Thomas Sterner",
    kind: "working-paper",
    status: "Working paper",
    venue: "CESifo Working Paper No. 12887",
    year: "2026",
    programmes: ["populism"],
    selected: true,
    summary: "Households facing large electricity price increases became substantially more likely to support the AfD. The change persisted despite generous compensation.",
    abstract: "We study Germany’s electricity price increases in 2022 and 2023 using four waves of original panel data. Identification exploits the timing of changes in monthly household instalment payments, which was plausibly unrelated to household characteristics. In a staggered difference-in-differences design, respondents whose increase exceeded the median became 7.5 percentage points more likely to support the AfD. The change persisted, while broader political attitudes adjusted afterwards. The result arose although climate policy did not cause the shock and compensation was generous. We interpret the evidence through a spatial voting model in which the loss increases the value of a party’s promise of lower future energy costs.",
    links: [
      { label: "Paper", href: "https://www.ifo.de/DocDL/cesifo1_wp12887.pdf" },
      { label: "Rivista Eco", href: "https://www.rivistaeco.com/2024/10/18/in-germania-la-crisi-energetica-ha-favorito-la-destra-populista/" },
    ],
  },
  {
    slug: "climate-institutions",
    title: "(How) Do Climate Institutions Matter? Presenting and Applying a New Framework for the Comparative Analysis of Climate Institutions",
    authors: "Claudia Zwar, Jacob Edenhofer and Christian Flachsland",
    kind: "revise-and-resubmit",
    status: "Third-round revise and resubmit",
    venue: "Journal of European Public Policy",
    year: "2026",
    programmes: ["climate"],
    summary: "We develop a comparative framework for studying how climate laws and advisory bodies affect policymaking in different political contexts.",
    abstract: "Climate laws and advisory bodies have proliferated, yet existing work offers limited guidance for comparing their effects on the policymaking process. We develop the Climate Institutions Analysis Framework, which relates the formal functions of an institution to contextual characteristics and the political problems that the institution may address. Applications to Germany, the United Kingdom, Sweden and Australia show that these institutions can support agenda formation, increase transparency, signal commitment and hold governments accountable. Similar formal designs can have different effects across countries because political context influences how their functions operate.",
    links: [
      { label: "Preprint", href: "https://osf.io/preprints/socarxiv/jf8ah_v2/" },
      { label: "Ariadne report (2023)", href: "https://ariadneprojekt.de/en/publication/report-mapping-variation-in-institutions-for-climate-policymaking/" },
      { label: "Verfassungsblog", href: "https://verfassungsblog.de/german-federal-climate-protection-act/" },
    ],
  },
  {
    slug: "climate-politics-framework",
    title: "Introducing the Climate Politics Framework (CPF): An Application to German Climate Policy",
    authors: "Jacob Edenhofer and Christian Flachsland",
    kind: "working-paper",
    status: "Working paper",
    venue: "OSF preprint",
    year: "2025",
    programmes: ["climate"],
    summary: "The Climate Politics Framework provides a common structure for analysing climate policymaking and is illustrated through the German experience.",
    abstract: "The Climate Politics Framework organises research on climate policymaking around four fundamental problems. These concern collective action, distribution, long-term policy and deep uncertainty. The framework connects these problems to political constraints among voters and elites, the design of policy instruments and institutions, and recurrent tasks such as coordination, compensation and commitment. We apply the framework to four decades of German climate policy using elite interviews and the secondary literature. The application shows how a common conceptual structure can support comparison across periods, countries and policy instruments.",
    links: [{ label: "Preprint", href: "https://doi.org/10.31235/osf.io/qkbj3_v1" }],
  },
  {
    slug: "corporatism-dirty-clean",
    title: "Is Corporatism Clean or Dirty? Examining the Effects of Corporatism on Climate Policy",
    authors: "Jacob Edenhofer",
    kind: "work-in-progress",
    status: "Work in progress",
    venue: "Draft",
    year: "2025",
    programmes: ["climate"],
    summary: "The project examines whether corporatist institutions strengthen incumbent producers or facilitate negotiated adjustment during decarbonisation.",
    abstract: "Corporatist institutions may give organised incumbent producers greater influence over climate policy. The same institutions can facilitate information exchange, credible bargains and adjustment by firms. This project examines which tendency prevails across advanced democracies. It develops expectations about the circumstances in which coordination protects carbon-intensive assets and those in which it supports negotiated decarbonisation, with particular attention to the relative power of clean and carbon-intensive producers.",
    links: [{ label: "Project", href: "https://github.com/jacob-edenhofer/Research-paper-CPEAD" }],
  },
  {
    slug: "local-decline-populism",
    title: "Local Decline and Populism",
    authors: "Thiemo Fetzer, Jacob Edenhofer and Prashant Garg",
    kind: "publication",
    status: "Published",
    venue: "Economics Letters 252, 112360",
    year: "2025",
    programmes: ["populism"],
    selected: true,
    summary: "High-street vacancies are associated with greater support for UKIP, including among people who did not work in retail.",
    abstract: "Support for the populist right varies considerably across regions and is concentrated in places that have experienced economic decline. We assemble new data on roughly 83,000 vacant commercial premises in England and Wales and examine their association with support for UKIP between 2009 and 2019. Areas with higher high-street vacancy rates display greater UKIP support. The association also appears among residents who did not work in retail, which is consistent with political effects arising from a visible deterioration in the local environment.",
    links: [
      { label: "Article", href: "https://doi.org/10.1016/j.econlet.2025.112360" },
      { label: "VoxEU", href: "https://cepr.org/voxeu/columns/local-decline-and-populism" },
      { label: "FAZ", href: "https://zeitung.faz.net/faz/wirtschaft/2025-04-07/naehrboden-fuer-populisten/1151252.html#verschenken" },
    ],
  },
  {
    slug: "regional-economic-cost-brexit",
    title: "Measuring the Regional Economic Cost of Brexit: Evidence as of 2026",
    authors: "Eleonora Alabrese, Jacob Edenhofer, Thiemo Fetzer and Shizhuo Wang",
    kind: "working-paper",
    status: "Working paper",
    venue: "Warwick Economics Research Paper No. 1617",
    year: "2026",
    programmes: ["populism"],
    summary: "Brexit produced large and widespread losses in output and household income, with especially large effects in prosperous and trade-integrated regions.",
    abstract: "We estimate the regional distribution of Brexit’s economic costs using synthetic controls for real gross value added and nominal gross disposable household income at several levels of geographic aggregation. Placebo-weighted counterfactuals cover treatment windows beginning after 2016 and after 2020. Around 70 per cent of local authority districts record output or income below their synthetic counterfactual. Losses are concentrated in initially prosperous and trade-integrated regions, especially London, the South East and Scotland. Brexit therefore reduced some regional disparities through larger declines in initially stronger regions.",
    links: [
      { label: "Paper", href: "https://wrap.warwick.ac.uk/id/eprint/202321/" },
      { label: "Interactive results", href: "https://brexitcost.org/" },
      { label: "UKICE", href: "https://ukandeu.ac.uk/levelling-up-by-levelling-down-the-economic-and-political-costs-of-brexit/" },
      { label: "Warwick summary", href: "https://warwick.ac.uk/fac/soc/economics/news/2026/6/new_research_maps_the_regional_cost_of_brexit_uk_levelled_down_not_levelled_up/" },
      { label: "Financial Times", href: "https://www.ft.com/content/9edec5f5-c3aa-4dfc-8ab4-f7d4ef559a7a" },
      { label: "FT comment", href: "https://www.ft.com/content/c338cee8-3f61-4080-b4c7-a8817fd6cc8e" },
    ],
  },
  {
    slug: "informational-boundaries-state",
    title: "Informational Boundaries of the State",
    authors: "Thiemo Fetzer, Callum Shaw and Jacob Edenhofer",
    kind: "working-paper",
    status: "Working paper",
    venue: "CEPR Discussion Paper No. 18773",
    year: "2024",
    programmes: ["state-capacity"],
    summary: "We examine how limits on the information that governments can gather, process and use constrain fiscal responses to crises.",
    abstract: "Conventional accounts of state capacity emphasise fiscal or extractive capacity, although similar revenues can produce very different public outcomes. We examine the capacity of governments to gather, process and use information in fiscal policy. Limited informational capacity can make targeted and less distortionary responses difficult, particularly when governments must act quickly. A theoretical framework identifies the incentives to use broad or distortionary instruments. We apply it to the fiscal response to the energy price shock that followed Russia’s invasion of Ukraine.",
    links: [
      { label: "Paper", href: "https://cepr.org/publications/dp18773" },
      { label: "VoxEU", href: "https://cepr.org/voxeu/columns/informational-boundaries-state-and-energy-crisis" },
    ],
  },
  {
    slug: "taxing-ai-rents",
    title: "The Crisis of the Tax State Revisited: Artificial Intelligence, Business Conflict, and Digital Fiscal Capacity",
    authors: "Jacob Edenhofer and Ben Ansell",
    kind: "working-paper",
    status: "Working paper",
    venue: "SSRN Scholarly Paper No. 7368958",
    year: "2026",
    date: "28 August 2026",
    programmes: ["state-capacity"],
    summary: "We examine when conflict between conventional firms and AI firms creates support for investment in the legal and administrative capacity to tax rents from artificial intelligence.",
    abstract: "Artificial intelligence may reduce labour’s share of income and weaken revenues from taxes on labour. Taxing rents from AI requires legal and administrative capacity to identify and value those returns. In the absence of this capacity, governments may use broad taxes on capital that impose a substantial burden on conventional firms. More targeted taxation gives those firms a reason to support investment in fiscal capacity. We develop a political economy model to examine when this support leads to investment as AI firms gain political power. The analysis considers the effects of inequality, declining revenues from taxes on labour, the speed of the transition and the relative political power of conventional and AI firms.",
    links: [{ label: "Paper", href: "https://doi.org/10.2139/ssrn.7368958" }],
  },
  {
    slug: "inflation-redistribution",
    title: "Inflation and the Preferences for Redistribution",
    authors: "Jacob Edenhofer, Ivan Tubio Sanles and David Rueda",
    kind: "work-in-progress",
    status: "Work in progress",
    venue: "Draft",
    year: "2026",
    programmes: ["cpe"],
    summary: "We examine how unequal changes in purchasing power during inflation influence preferences for redistribution.",
    abstract: "Inflation changes real incomes unevenly because households differ in their consumption, income sources and protection through taxes and transfers. These differences make the distributional effects of inflation difficult for citizens to assess. We examine how personal exposure and information about unequal losses influence preferences for redistribution. The project links the political economy of inflation to broader debates about self-interest, fairness and the welfare state during economic crises.",
    links: [],
  },
  {
    slug: "aldrich-dixit-londregan",
    title: "Aldrich Meets Dixit–Londregan: Clarifying the Role of Core Voters and Government Partisanship",
    authors: "Jacob Edenhofer and David Rueda",
    kind: "work-in-progress",
    status: "Work in progress",
    venue: "Draft",
    year: "2026",
    programmes: ["cpe"],
    summary: "We clarify how party loyalty, electoral responsiveness and government partisanship relate to the allocation of benefits across voters.",
    abstract: "Accounts of distributive politics disagree over whether parties favour loyal supporters or direct resources towards voters who are more responsive. We distinguish durable party loyalty from current electoral responsiveness and examine how each affects incentives to allocate benefits. The framework clarifies when core voters receive favourable treatment, when electorally pivotal voters do, and how government partisanship changes these results. The project also develops implications for the empirical measurement of party-level loyalty.",
    links: [],
  },
  {
    slug: "fairness-tax-transfer-climate",
    title: "Fairness, Tax-and-Transfer Systems, and Climate Policy",
    authors: "Jacob Edenhofer and David Rueda",
    kind: "work-in-progress",
    status: "Work in progress",
    venue: "Draft",
    year: "2026",
    programmes: ["cpe"],
    summary: "We distinguish judgements about the distribution people face from judgements about the changes imposed by a policy.",
    abstract: "Citizens may evaluate fairness with reference to the resulting distribution or to the changes that a policy imposes on different groups. We distinguish cumulative from marginal fairness and apply the distinction to taxes, transfers and climate policy. The framework clarifies why a policy that reduces inequality can still be regarded as unfair, and why compensation can receive different evaluations depending on its beneficiaries and source of finance. Survey experiments will examine these mechanisms while keeping policy effectiveness constant.",
    links: [],
  },
  {
    slug: "sounds-of-salience-revisited",
    title: "The Sounds of Salience Revisited: Endogenous Salience and the Influence of Interest Groups",
    authors: "Jacob Edenhofer",
    kind: "work-in-progress",
    status: "Work in progress",
    venue: "Draft",
    year: "2025",
    programmes: ["cpe"],
    summary: "The project examines how interest groups influence the salience of political issues and how endogenous salience affects their political power.",
    abstract: "Standard accounts of interest-group influence often treat political salience as given. This project examines how organised interests can influence whether an issue attracts public attention and how endogenous salience alters their incentives and political power. The analysis distinguishes attempts to keep an issue quiet from efforts to increase attention to it. It considers when these strategies succeed and how they affect the relationship between public opinion, business power and policy choice.",
    links: [],
  },
  {
    slug: "shared-prosperity-review",
    title: "Shared Prosperity in a Fractured World by Dani Rodrik",
    authors: "Jacob Edenhofer and Gabriele Gratton",
    kind: "book-review",
    status: "Book review",
    venue: "Economic Record, Early View",
    year: "2026",
    programmes: ["cpe"],
    summary: "We assess Rodrik’s programme for reconciling prosperity in advanced economies, development opportunities in poorer countries and effective climate policy.",
    abstract: "This review considers Dani Rodrik’s programme for renewing middle-class prosperity in advanced economies while preserving development opportunities in poorer countries and meeting the demands of climate mitigation. We place the book within comparative political economy and examine the trade-offs among industrial policy, global integration, service-led growth and the distribution of income and wealth. The review also considers the domestic coalitions and international constraints that influence the political viability of the proposed economic programme.",
    links: [{ label: "Review", href: "https://doi.org/10.1111/1475-4932.70046" }],
  },
  {
    slug: "technocratic-democracies",
    title: "The Rise and Fall of Technocratic Democracies: Unstable Majorities and Delegation to Technocrats",
    authors: "Gabriele Gratton and Jacob Edenhofer",
    kind: "publication",
    status: "Published",
    venue: "Journal of European Public Policy, online first",
    year: "2025",
    programmes: ["democracy"],
    summary: "Delegation to technocrats can provide insurance for a majority that fears losing power, while changes in the persistence of majorities can generate institutional cycles.",
    abstract: "We develop a model of democracies that delegate policy to unelected technocrats. Delegation is attractive when a current majority fears losing power and expects technocrats to maintain policies it values. These arrangements can remain stable, while changes that make majority status or technocratic policy more persistent can generate repeated reforms between more technocratic and more majoritarian institutions. Applications to central bank independence, fiscal rules and climate policy illustrate how such cycles arise and how they can increase the risk of democratic backsliding.",
    links: [
      { label: "Article", href: "https://doi.org/10.1080/13501763.2025.2576160" },
      { label: "ProMarket", href: "https://www.promarket.org/2025/05/14/behind-populists-anti-technocratic-fervor-and-its-consequences-for-liberal-democracy/" },
    ],
  },

];

export const selectedResearch = research.filter((paper) => paper.selected);

const newestFirst = (papers: ResearchItem[]) =>
  [...papers].sort((left, right) => Number(right.year) - Number(left.year));

export const researchByKind = {
  publications: newestFirst(research.filter((paper) => paper.kind === "publication")),
  forthcoming: newestFirst(research.filter((paper) => paper.kind === "forthcoming")),
  reviseAndResubmit: newestFirst(research.filter((paper) => paper.kind === "revise-and-resubmit")),
  workingPapers: newestFirst(research.filter((paper) => paper.kind === "working-paper")),
  workInProgress: [dphilManuscript, ...newestFirst(research.filter((paper) => paper.kind === "work-in-progress"))],
  bookReviews: newestFirst(research.filter((paper) => paper.kind === "book-review")),
};

export const researchByProgramme = {
  climate: [dphilManuscript, ...newestFirst(research.filter((paper) => paper.programmes.includes("climate")))],
  stateCapacity: newestFirst(research.filter((paper) => paper.programmes.includes("state-capacity"))),
  populism: newestFirst(research.filter((paper) => paper.programmes.includes("populism"))),
  cpe: newestFirst(research.filter((paper) => paper.programmes.includes("cpe"))),
  democracy: newestFirst(research.filter((paper) => paper.programmes.includes("democracy"))),
};
