export type Programme = "climate" | "state-capacity" | "populism" | "cpe" | "democracy";

export type ResearchKind =
  | "manuscript"
  | "publication"
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
  title: "Politics Out of Time?",
  authors: "Jacob Edenhofer",
  subtitle: "Public Opinion Uncertainty, Producer Adjustment, and the Limits of Climate Ambition",
  kind: "manuscript",
  status: "DPhil manuscript",
  venue: "University of Oxford",
  year: "2024–2028 (expected)",
  programmes: ["climate"],
  summary: "The manuscript examines how temporary electoral activation can produce durable climate policy when credible adoption induces sufficiently rapid producer adjustment before the initial electoral impulse fades.",
  abstract: "My DPhil manuscript examines how uncertainty about future electoral incentives affects the policy choices of governments and the (non-market) behaviour of producers, especially whether they resist climate policy or adjust to it. I refer to uncertainty about whether electoral incentives favouring greater stringency will persist or reverse sign as *public opinion uncertainty*. Policies that initially attract electoral rewards may subsequently attract electoral penalties. Such reversals can arise when preferences are weakly anchored in broader political attitudes or when the costs of policy crystallise only later (when the benefits of these policies have faded from voters’ memory) and erode support for action.\n\nProducers assess these electoral prospects when deciding whether to make investments whose returns depend on policy remaining in place. Because producers evaluate these returns over longer time horizons than policymakers, their current decisions to adjust, defer investment, or organise opposition reflect expectations extending beyond the next election. These decisions affect the economic and political costs governments face today. Producers can therefore induce even myopic policymakers focused on winning the next election to take account of some future consequences of their policies.\n\nI argue that strong current electoral support for climate action can coexist with limited policy ambition when producers regard that support as too fickle to justify adjustment. Their decisions to defer investment or sustain organised opposition can increase the economic and political costs governments currently face. Expectations of future electoral hostility can consequently constrain policy before voters withdraw their support. Where delayed adjustment also leaves voters facing higher costs, producers’ responses can help produce the electoral reversal they anticipate. Modest but stable support can permit gradual progress when producers expect even limited increases in stringency to persist long enough to justify investment. Producers with lower adjustment costs then have stronger incentives to invest and withdraw from opposition. Where their adjustment lowers the costs borne by voters and weakens organised resistance, governments can sustain initial increases in stringency and pursue further changes without requiring a corresponding increase in electoral support.",
  links: [],
};

export const research: ResearchItem[] = [
  {
    slug: "domestic-political-economy-net-zero",
    title: "The Domestic Political Economy of Net Zero",
    authors: "Jacob Edenhofer, Maurice Hirt, and Federica Genovese",
    kind: "publication",
    status: "Forthcoming",
    venue: "Oxford Review of Economic Policy",
    year: "2026",
    programmes: ["climate"],
    selected: true,
    summary: "Net zero requires a sequence of politically costly changes across sectors. We examine how electoral demand, visible costs and adjustment by producers influence the adoption and durability of climate policy.",
    abstract: "The transition to net zero requires governments to sustain successive increases in policy stringency as their costs become politically consequential. We synthesise the climate politics literature via a conceptual framework linking electoral demand, the relative power of clean and carbon-intensive producers, and the distribution of adjustment costs to adopted stringency and the share that can be sustained. Durability depends on pro-climate electoral or policy-seeking incentives persisting or recurring long enough to induce adjustment and on policy design that contains costs for voters while preserving producers’ incentives to adjust. Persistent policy-seeking incentives under latent electoral demand can produce *quiet accumulation*, allowing gradual progress despite limited public attention. Such progress can stall below the stringency required for net zero when adjusted producers defend existing policy without supporting further increases. Episodes of clear electoral demand can produce *punctuated accumulation* if governments induce sufficient adjustment to sustain large adopted increases after electoral pressure subsides. Under *policy cycling*, repeated changes in governing incentives erode earlier gains, making cumulative progress dependent on strengthening the incentives of subsequent governments to retain adopted stringency.",
    links: [],
  },
  {
    slug: "political-consequences-energy-price-shocks",
    title: "The Political Consequences of Energy Price Shocks: Evidence from Germany",
    authors: "Théo Konc, Jan Christoph Steckel, Jacob Edenhofer, Jens Ewald, and Thomas Sterner",
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
    title: "How do climate institutions matter? Strategic challenges and the policy process effects of climate institutions",
    authors: "Claudia Zwar, Jacob Edenhofer, and Christian Flachsland",
    kind: "revise-and-resubmit",
    status: "Third-round revise and resubmit",
    venue: "Journal of European Public Policy",
    year: "2026",
    programmes: ["climate"],
    summary: "We develop a comparative framework for studying how climate laws and advisory bodies affect policymaking in different political contexts.",
    abstract: "Climate laws and advisory bodies have proliferated, yet existing work offers limited guidance for comparing their effects on the policymaking process. We develop the Climate Institutions Analysis Framework, which relates the formal functions of an institution to contextual characteristics and the political problems that the institution may address. Applications to Germany, the United Kingdom, Sweden and Australia show that these institutions can support agenda formation, increase transparency, signal commitment and hold governments accountable. Similar formal designs can have different effects across countries because political context influences how their functions operate.",
    links: [
      { label: "Paper", href: "https://osf.io/preprints/socarxiv/jf8ah_v2/" },
      { label: "Ariadne report (2023)", href: "https://ariadneprojekt.de/en/publication/report-mapping-variation-in-institutions-for-climate-policymaking/" },
      { label: "Verfassungsblog", href: "https://verfassungsblog.de/german-federal-climate-protection-act/" },
      { label: "Summary thread (Claudia Zwar)", href: "https://threadreaderapp.com/thread/1830612008401825845.html" },
      { label: "Thread on the Ariadne report (German)", href: "https://threadreaderapp.com/thread/1722216966608523757.html" },
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
    abstract: "This paper introduces the Climate Politics Framework (CPF), a novel and comprehensive approach to analysing climate policymaking. The CPF sets out four fundamental problems—pervasive collective action challenges, distributional dynamics, long-term policy, and deep uncertainty—that shape both elite and mass-level climate politics. These, in turn, influence the stringency and design of climate policy platforms, which consist of institutions, policy instruments, as well as framing and rhetoric. These platforms can both cause emissions reductions—the main dependent variable of interest—and address strategic challenges in the climate policy process (e.g. agenda-setting, coordination, compensation, and commitment), thereby altering political dynamics over time. Applying the CPF to Germany, based on elite interviews and a literature review, we analyse key episodes and structural features of German climate policy over the past four decades. The CPF offers both an academic contribution—by synthesising disparate strands of the climate politics literature—and, with a view to future applications, a practical tool for policymakers and stakeholders to diagnose political barriers and identify pathways for effective climate policymaking.",
    links: [
      { label: "Paper", href: "https://doi.org/10.31235/osf.io/qkbj3_v1" },
      { label: "Summary thread", href: "https://threadreaderapp.com/thread/1939770607953989817.html" },
    ],
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
    abstract: "The effect of corporatism on climate policy—which has received renewed attention as the literature on climate politics has taken an *institutional turn*—is theoretically disputed and empirically ambiguous. Given that, this paper seeks to revisit the relationship between corporatism and climate policy theoretically and empirically. Theoretically, I will defend two sets of claims. First, I argue that corporatism is, *ceteris paribus*, detrimental to stringent climate policy when the economic importance of carbon-intensive industry is high, while the reverse holds when electoral competition from green parties advocating stringent climate policy is high. Second, corporatism, I submit, has a tendency to impose a relatively greater share of costs on consumers than producers, especially when the economy is highly open. Yet, high electoral competitiveness, in particular when driven by green parties, counteracts this tendency.\n\nEmpirically, I extend existing analyses and use newly available data to provide evidence for these hypotheses by estimating a series of fixed-effects specifications.",
    links: [{ label: "Project", href: "https://github.com/jacob-edenhofer/Research-paper-CPEAD" }],
  },
  {
    slug: "local-decline-populism",
    title: "Local Decline and Populism",
    authors: "Thiemo Fetzer, Jacob Edenhofer, and Prashant Garg",
    kind: "publication",
    status: "Published",
    venue: "Economics Letters 252, 112360",
    year: "2025",
    programmes: ["populism"],
    selected: true,
    summary: "High-street vacancies are associated with greater support for UKIP, including among people who did not work in retail.",
    abstract: "Support for the populist right varies considerably across regions and is concentrated in places that have experienced economic decline. We assemble new data on roughly 83,000 vacant commercial premises in England and Wales and examine their association with support for UKIP between 2009 and 2019. Areas with higher high-street vacancy rates display greater UKIP support. The association also appears among residents who did not work in retail, which is consistent with political effects arising from a visible deterioration in the local environment.",
    links: [
      { label: "Paper", href: "https://doi.org/10.1016/j.econlet.2025.112360" },
      { label: "VoxEU", href: "https://cepr.org/voxeu/columns/local-decline-and-populism" },
      { label: "FAZ", href: "https://zeitung.faz.net/faz/wirtschaft/2025-04-07/naehrboden-fuer-populisten/1151252.html#verschenken" },
    ],
  },
  {
    slug: "regional-economic-cost-brexit",
    title: "Measuring the Regional Economic Cost of Brexit: Evidence as of 2026",
    authors: "Eleonora Alabrese, Jacob Edenhofer, Thiemo Fetzer, and Shizhuo Wang",
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
    authors: "Thiemo Fetzer, Callum Shaw, and Jacob Edenhofer",
    kind: "working-paper",
    status: "Working paper",
    venue: "CEPR Discussion Paper No. 18773",
    year: "2024",
    programmes: ["state-capacity"],
    summary: "We examine how limits on the information that governments can gather, process and use constrain fiscal responses to crises.",
    abstract: "Formal conceptions of state capacity have mostly focused on indirect measures of state capacity—by, for instance, using the state’s fiscal or extractive capacity as a proxy for its overall capacity. Yet, this input or extractive view of state capacity falls short, especially since cross-country empirical evidence suggests that similar levels of fiscal capacity, measured by tax revenues as a percentage of GDP, can produce starkly different outputs—both in classic economic terms and in broader terms that citizens would recognise as desirable outcomes, including quality of life, health, security, equality of opportunity, and inter-generational mobility. This paper argues that a central step towards addressing these shortcomings of the conventional view is to account for a crucial and largely ignored boundary of the state or dimension of state capacity: its capacity to gather, process, and deploy information in its conduct of fiscal policy. Specifically, we study how the presence or lack of such informational capacity constrains governments in responding to crises, such as the recent energy price shock. Our framework provides the analytical toolkit to examine how the informational boundary of the state shapes the incentives for policymakers to resort to untargeted and/or distortionary policy instruments, as opposed to targeted and non-distortionary ones, in responding to crises. The policy response to the energy crisis following the invasion of Ukraine provides the empirical context upon which we bring this theoretical framework to bear on data, though the latter can be straightforwardly extended to other recent crises.",
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
    authors: "Jacob Edenhofer, Iván Tubio Sanles, and David Rueda",
    kind: "work-in-progress",
    status: "Work in progress",
    venue: "Draft",
    year: "2026",
    programmes: ["cpe"],
    summary: "We examine how unequal changes in purchasing power during inflation influence preferences for redistribution.",
    abstract: "Inflation has returned to the political agenda with a vengeance and revived scholarly interest. The resulting literature has largely focused on the political and economic psychology of inflation—how people perceive and understand it—and on its electoral consequences. Valuable as this is, it overlooks how inflation affects demand for redistribution through material self-interest. Understanding this link is pressing in light of recent work documenting pronounced heterogeneity in exposure to inflation across the income distribution, yet such analysis has so far been impeded by surveys that contain detailed questions about redistribution but lack granular measures of exposure to inflation.\n\nWe make two contributions. Theoretically, we argue that the effect of inflation depends on the correlation between income and consumption baskets, and that its effect on demand for redistribution is largest for individuals whose positions in the present and expected future income distributions diverge. Empirically, we draw on ANES surveys merged with a distributional consumer price index and on SOEP surveys merged with a price index specific to each consumption basket, finding broad support for our theoretical predictions. Given the limitations of these observational analyses, we also outline a laboratory experiment to test our argument more directly.",
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
    abstract: "Mainstream parties sometimes protect their core voters and sometimes pursue policies that these voters oppose. We develop a dynamic account of this tension. Loyalty combines affective attachment with the accumulated consequences of earlier agreement between parties and their supporters. Inherited loyalty can give parties latitude to attract other voters while retaining existing supporters. Repeated departures from those supporters’ preferences can erode this advantage and strengthen incentives to restore alignment. The balance depends on the electoral gains available elsewhere and on the alternatives available to dissatisfied voters. This perspective connects accounts that emphasise mobilisation with accounts that emphasise parties’ ability to impose costs on loyal supporters. These incentives help explain variation in the policy consequences of government partisanship. Preliminary analyses of European party competition associate greater inherited loyalty with weaker subsequent movement towards the core after earlier divergence. These associations provide initial evidence, while the causal mechanism requires further investigation.",
    links: [],
  },
  {
    slug: "fairness-tax-transfer-climate",
    title: "Fairness, Tax-and-Transfer Systems, and Climate Policy",
    authors: "Jacob Edenhofer, David Rueda, and Michael Pahle",
    kind: "work-in-progress",
    status: "Work in progress",
    venue: "Draft",
    year: "2026",
    programmes: ["cpe"],
    summary: "We distinguish judgements about the distribution people face from judgements about the changes imposed by a policy.",
    abstract: "The perceived fairness of climate policy is among the strongest predictors of public support, yet the existing literature treats fairness as a property of the policy under evaluation, assessed in isolation. This pre-analysis plan describes a survey experiment testing whether judgements about the fairness of a new burden imposed by climate policy depend instead on the progressivity of the existing system of taxes and transfers. The argument distinguishes two standards against which a respondent can assess fairness. Under the cumulative criterion, a household has a fair total contribution defined over all fiscal instruments, and a new policy is fair to the extent that it moves the household towards that total. Under the marginal contribution criterion, each policy is assessed on the distribution of costs within it, and a progressive system may raise the progressivity expected of any new policy.\n\nThe two criteria yield opposite predictions. The design estimates their relative importance without presuming which criterion respondents adopt. A 2 × 2 factorial separates the history of cumulative contributions from the progressive structure in force by exploiting the timing of a concluded levy and a recently adopted reform.\n\nThe instrument elicits fairness benchmarks twice, once over fair totals and once over the division of a new burden, randomises whether a respondent judges as an impartial spectator or as a stakeholder with an assigned income position, and evaluates policy packages that hold totals constant while varying the targeting of revenue recycling. We do not assume that fair totals remain constant since the equilibrium relationship between institutions and beliefs gives a clear reason to expect them to move.",
    links: [],
  },
  {
    slug: "shared-prosperity-review",
    title: "Shared Prosperity in a Fractured World: A New Economics for the Middle Class, the Global Poor, and Our Climate, by Dani Rodrik (Princeton University Press, Princeton, US, 2025), Pp. 280.",
    authors: "Jacob Edenhofer and Gabriele Gratton",
    kind: "book-review",
    status: "Book review",
    venue: "Economic Record 102 (338), 476–80",
    year: "2026",
    programmes: ["cpe"],
    summary: "We assess Rodrik’s programme for reconciling prosperity in advanced economies, development opportunities in poorer countries and effective climate policy.",
    abstract: "We review Dani Rodrik’s case for productivism, which seeks to strengthen democratic stability and prosperity by creating good jobs, increasingly in services. We identify three limitations. First, good jobs and higher wages offer an incomplete basis for economic security, which also depends on affordable essentials and opportunities to accumulate wealth. Unequal access to housing and other assets can also weaken the political coalition supporting the programme. Second, growth driven by services can disproportionately benefit affluent urban populations while employment expands in services with limited scope for productivity growth. Third, unilateral industrial policy presupposes economic and geopolitical power that smaller countries often lack. These countries face tighter fiscal constraints and greater exposure to pressure from powerful states. Cooperation can strengthen their bargaining position while constraining domestic policy choices.",
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
      { label: "Paper", href: "https://doi.org/10.1080/13501763.2025.2576160" },
      { label: "ProMarket", href: "https://www.promarket.org/2025/05/14/behind-populists-anti-technocratic-fervor-and-its-consequences-for-liberal-democracy/" },
      { label: "The Argument", href: "https://www.theargumentmag.com/p/the-price-of-expertise" },
      { label: "Podcast with Gabriele Gratton", href: "https://www.theargumentmag.com/p/how-liberal-elite-failure-fueled" },
      { label: "Summary thread", href: "https://threadreaderapp.com/thread/1990822736554307921.html" },
      { label: "Longer thread (working paper)", href: "https://threadreaderapp.com/thread/1886335627974651908.html" },
    ],
  },

];

export const selectedResearch = research.filter((paper) => paper.selected);

const newestFirst = (papers: ResearchItem[]) =>
  [...papers].sort((left, right) => Number(right.year) - Number(left.year));

export const researchByKind = {
  publications: newestFirst(research.filter((paper) => paper.kind === "publication")),
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
