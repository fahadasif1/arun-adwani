// All CV/profile data for Arun Adwani — single source of truth

export const profile = {
  name: "Arun Adwani",
  title: "Finance Professional & Researcher",
  email: "arun_adwani32@hotmail.com",
  phone: "+447522239124",
  linkedin: "https://www.linkedin.com/in/arunadwani/",
  googleScholar: "https://scholar.google.co.uk/citations?user=2kH6AhAAAAAJ&hl=en&oi=ao",
  location: "United Kingdom",
  bio: "A qualified finance professional with ACCA, CPA, and MSc FinTech credentials, combining deep expertise in accounting, audit, and regulatory compliance with a passion for fintech research. Currently serving as a Financial Planner at the NHS, with a track record spanning international banking, fund accounting, and financial technology. Published researcher with 24+ citations in fintech, digital payments, and AI-driven finance.",
  rotatingTitles: [
    "Finance Professional",
    "Published Researcher",
    "CPA • ACCA Qualified",
    "FinTech Specialist",
  ],
};

export const stats = [
  { label: "Publications", value: 6, suffix: "+" },
  { label: "Citations", value: 24, suffix: "+" },
  { label: "Years Experience", value: 7, suffix: "+" },
  { label: "Qualifications", value: 4, suffix: "" },
];

export interface Qualification {
  degree: string;
  institution: string;
  location: string;
  year: string;
  coursework: string[];
  badge?: string;
}

export const qualifications: Qualification[] = [
  {
    degree: "Master of Science in FinTech",
    institution: "Coventry University",
    location: "Coventry, UK",
    year: "September 2023",
    coursework: ["Applied FinTech", "Data Analysis using Python & R", "Corporate Finance", "Risk Management in FinTech"],
  },
  {
    degree: "Chartered Professional Accountant (CPA)",
    institution: "Chartered Professional Accountants (Canada)",
    location: "Canada",
    year: "August 2021",
    coursework: ["Performance Management", "Financial Management", "Audit and Assurance", "Taxation"],
    badge: "Member",
  },
  {
    degree: "Associate Chartered Certified Accountant (ACCA)",
    institution: "Association of Chartered Certified Accountants (UK)",
    location: "United Kingdom",
    year: "December 2020",
    coursework: ["Audit and Assurance", "Financial Accounting and Reporting", "Management Accounting"],
    badge: "Member",
  },
  {
    degree: "Bachelor of Science in Applied Accounting",
    institution: "Oxford Brookes University",
    location: "Oxford, UK",
    year: "April 2019",
    coursework: ["Accounting", "Derivatives", "IFRS", "Financial Modelling", "Portfolio Management", "Treasury", "Economics", "Financial Analysis"],
  },
];

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export const experience: Experience[] = [
  {
    title: "Financial Planner",
    company: "NHFT (NHS)",
    location: "Kettering, UK",
    period: "October 2024 – Present",
    bullets: [
      "Perform NHS-wide financial planning, budgeting, and forecasting to support trust-wide financial stability and strategic decision-making",
      "Develop and maintain dynamic dashboards for agency and bank activity, transforming complex datasets into actionable insights for senior management",
      "Manage the complete monthly accounting cycle for key income streams, including LVA income, ensuring accurate reconciliation and reporting",
      "Serve as the dedicated Finance Business Partner and primary financial contact for Clinical Budget Holders within Specialist Children and Young People's (CYP) Services",
      "Liaise directly with clinical and operational leads to provide financial guidance, support budget setting, and forecast service line performance",
    ],
  },
  {
    title: "Senior Fund Accountant",
    company: "Columbia Threadneedle (Ameriprise Financial)",
    location: "Swindon, UK",
    period: "November 2023 – September 2024",
    bullets: [
      "Prepare and review monthly Management Accounts, analysing Balance Sheet and Income Statement items, and compute Net Asset Value for investor communication",
      "Collaborated with the Client Accounting Manager to gather financial information from Luxembourg administrators for 3 specific entities, ensuring timely and accurate reporting",
      "Produce monthly Management Information and Liquidity Forecasts to aid fund management decisions",
      "Managed reconciliation of quarterly income and ad-hoc capital distributions for 10 investors, while overseeing loan compliance and ensuring timely payment of loan interest for 3 fund entities",
      "Completed and submitted 100% of quarterly VAT Returns and payments to HMRC, ensuring zero compliance issues",
      "Produced annual statutory Financial Statements and collaborate with auditors for audits and timely distribution of financial documents",
    ],
  },
  {
    title: "Finance Assistant",
    company: "WCAVA",
    location: "Leamington Spa, UK",
    period: "January 2023 – November 2023",
    bullets: [
      "Processed over 50 invoices and expense claims monthly, ensuring accurate payment processing and reducing payment delays by 100%",
      "Utilized Sage 50 to produce customer invoices and facilitate online payments, reducing invoice generation time by 60%",
      "Follow up with suppliers and customers to confirm timely payment receipts and to effectively manage liquidity by 100%",
      "Perform bank reconciliations using Sage 50 to maintain accurate financial records and facilitate financial analysis and reporting",
      "Provided daily support to the Finance Manager on financial and accounting issues, including budgeting, forecasting, and financial analysis",
    ],
  },
  {
    title: "Manager, Accounts and Finance",
    company: "Helpp Technologies",
    location: "Karachi, Pakistan",
    period: "March 2022 – September 2022",
    bullets: [
      "Made financial reports and timely tax payments, including VAT and PAYE, while conducting detailed analyses for management reporting",
      "Trained and supervised 2 interns, increasing team productivity by 60%",
      "Collaborated with auditors to review and make IFRS-compliant financial statements, reducing audit findings by 25%",
      "Evaluated internal controls and regulatory policies, identifying 15 improvements, enhancing compliance and efficiency",
      "Managed monthly disbursements for 50+ supplier payments, client refunds, and payroll for 25+ employees",
      "Implemented a paperless system, fixed asset tagging, and tax initiatives, reducing operational costs by 40%",
    ],
  },
  {
    title: "Regulatory Compliance & FATCA/CRS Officer",
    company: "Bank Al Habib",
    location: "Karachi, Pakistan",
    period: "February 2021 – March 2022",
    bullets: [
      "Warranted compliance with international tax regulations by identifying and reporting accounts held by US persons to the IRS, preventing tax evasion and money laundering",
      "Regularly liaised with branches and clients, the Documentation Handling Department, and the IT Division to obtain up-to-date customer information",
      "Influenced comprehensive guidance on policies and guidelines set forth by the Central Bank of Pakistan to warrant strict adherence to regulatory requirements",
      "Shepherded thorough reviews of departmental procedures outlined in the manuals to ensure compliance with regulatory standards",
      "Handled comprehensive FATCA training sessions to raise awareness among Account Opening Officers",
    ],
  },
  {
    title: "Internal Auditor",
    company: "Graton Pharma",
    location: "Karachi, Pakistan",
    period: "November 2019 – January 2021",
    bullets: [
      "Coordinated with external auditors to conduct thorough review, consolidation, and preparation of annual financial statements",
      "Assessed the company's internal control and ensured compliance with relevant laws and regulations",
      "Scrutinized and evaluated accounting statements pertaining to different products and operations",
      "Played an active role in managing various tax-related matters, ensuring timely payments and mitigating the risk of penalties",
    ],
  },
  {
    title: "ACCA Trainee Internal Auditor",
    company: "HBL",
    location: "Karachi, Pakistan",
    period: "April 2018 – October 2019",
    bullets: [
      "Assisted Line Manager in digital audit planning for departments, resolving issues efficiently",
      "Synthesized and investigated data to draft comprehensive reports for internal audits",
      "Accompanied audit testing to assess controls and compliance, making efficiency recommendations",
      "Provided strategic insights for integrated audits on technology applications in alignment with policy",
    ],
  },
];

export interface Publication {
  title: string;
  citations: number;
  scholarUrl: string;
  ssrnUrl?: string;
}

export const publications: Publication[] = [
  {
    title: "The Evolution of Digital Payments: Implications for Financial Inclusion and Risk Management",
    citations: 8,
    scholarUrl: "https://scholar.google.co.uk/citations?view_op=view_citation&hl=en&user=2kH6AhAAAAAJ&citation_for_view=2kH6AhAAAAAJ:d1gkVwhDpl0C",
  },
  {
    title: "The Role of AI and Big Data in Enhancing Financial Risk Assessment Models",
    citations: 6,
    scholarUrl: "https://scholar.google.co.uk/citations?view_op=view_citation&hl=en&user=2kH6AhAAAAAJ&citation_for_view=2kH6AhAAAAAJ:u5HHmVD_uO8C",
  },
  {
    title: "ESG Investing Trends in Emerging Markets: A Behavioral Finance Perspective",
    citations: 4,
    scholarUrl: "https://scholar.google.co.uk/citations?view_op=view_citation&hl=en&user=2kH6AhAAAAAJ&citation_for_view=2kH6AhAAAAAJ:UeHWp8X0CEIC",
  },
  {
    title: "Fintech Innovations and Financial Resilience: A Framework for Crisis Management",
    citations: 3,
    scholarUrl: "https://scholar.google.co.uk/citations?view_op=view_citation&hl=en&user=2kH6AhAAAAAJ&citation_for_view=2kH6AhAAAAAJ:9yKSN-GCB0IC",
  },
  {
    title: "Predictive Analytics for Business Strategy: Leveraging Machine Learning for Competitive Advantage",
    citations: 2,
    scholarUrl: "https://scholar.google.co.uk/citations?view_op=view_citation&hl=en&user=2kH6AhAAAAAJ&citation_for_view=2kH6AhAAAAAJ:qjMakFHDy7sC",
  },
  {
    title: "Foundations of FinTech: Navigating the Digital Financial Revolution",
    citations: 1,
    scholarUrl: "https://scholar.google.co.uk/citations?view_op=view_citation&hl=en&user=2kH6AhAAAAAJ&citation_for_view=2kH6AhAAAAAJ:u-x6o8ySG0sC",
  },
];

export const scholarMetrics = {
  totalCitations: 24,
  hIndex: 5,
  researchInterestScore: 43.7,
};

export interface AcademicProject {
  title: string;
  description: string;
}

export const academicProjects: AcademicProject[] = [
  {
    title: "Data Analysis using R",
    description: "Conducted data analysis using R on pre- and post-COVID, and Russia-Ukraine war data, examining market linkages between 5+ stock indices during crises.",
  },
  {
    title: "Financial and Business Analysis",
    description: "Analysed financial and business performance of 2 companies over 3 years, reviewing ratios, price movements, and performing variance analysis.",
  },
  {
    title: "Derivative Usage Research",
    description: "Researched derivative usage by 10+ airline companies, collecting and interpreting data, and providing recommendations on hedging strategies.",
  },
];

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Programming & Tools",
    skills: ["Python (Pandas, NumPy, Matplotlib, Sci-Kit Learn)", "R Programming (Tidyverse, ggplot2)", "Advanced Excel (Pivot Tables, V-Lookup)", "Sage 50", "Zoho Books", "QuickBooks", "Asana"],
  },
  {
    category: "Analytics",
    skills: ["Data Analytics", "Hypothesis Testing", "Quantitative Analysis", "Sentiment Analysis", "Financial Analysis", "Risk Management"],
  },
  {
    category: "Professional",
    skills: ["Clear Communicator", "Analytical Thinker", "Self-directed", "Team Member", "Adaptive", "Meticulous"],
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "My Career", href: "/career" },
  { label: "Publications", href: "/publications" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
