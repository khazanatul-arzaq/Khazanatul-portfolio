
export type Shot = {
  src?: string;
  caption: string;
};

export type Project = {
  slug: string;
  title: string;
  tool: string;
  context: string;
  summary: string;
  tools: string[];
  gallery: Shot[];
  problem: string[];
  action: string[];
  result: string[];
};

// Semua gambar diambil dari folder public/images/
const base = "images/";

export const profile = {
  name: "Khazanatul Arzaq",
  title: "Information Systems Student",
  location: "Padang, West Sumatra, Indonesia",
  email: "khazanatul.arzaq01@gmail.com",
  phone: "+62 831-8295-0607",
  phoneHref: "+6283182950607",
  linkedin: "https://www.linkedin.com/in/khazanatul-arzaq-241b263ba",
};

export const skills = [
  {
    t: "Data Visualization and Business Intelligence",
    i: ["Microsoft Power BI", "Tableau"],
  },
  {
    t: "Data Processing and Spreadsheet",
    i: [
      "Microsoft Excel",
      "Data Cleaning",
      "Data Organization",
      "Data Transformation",
      "Reporting",
    ],
  },
  {
    t: "Programming and Database",
    i: [
      "SQL (basic): SELECT, INSERT, UPDATE, DELETE, ORDER BY",
      "Python (basic): data processing, cleaning, Pandas, introductory KNN",
    ],
  },
  {
    t: "Analytical Skills",
    i: [
      "Exploratory Data Analysis (EDA)",
      "Data Visualization",
      "Dashboard Development",
      "Data Reporting",
      "Analytical Thinking",
    ],
  },
];


export const projects: Project[] = [
  {
    slug: "semen-padang-sales-revenue-dashboard",
    title: "PT Semen Padang Sales Revenue Dashboard",
    tool: "Microsoft Power BI, Microsoft Excel",
    context: "Internship Project",
    summary:
      "A business intelligence dashboard developed during an internship to organize and visualize cement sales performance.",
    tools: ["Microsoft Excel", "Microsoft Power BI"],
    gallery: [
      {
        src: base + "semen-padang/dashboard-overview.png",
        caption:
          "Power BI dashboard presenting cement sales performance through revenue, profit margin, and sales volume.",
      },
    ],
    problem: [
      "Sales data was stored in spreadsheets, making performance monitoring less straightforward.",
      "Key indicators such as revenue, profit margin, and sales volume needed clearer presentation.",
      "Sales performance needed to be explored across regions, months, distributors, and cement types.",
    ],
    action: [
      "Processed and organized cement sales data using Microsoft Excel.",
      "Developed an interactive Power BI dashboard to visualize key sales indicators.",
      "Created visualizations to explore sales across different business dimensions.",
    ],
    result: [
      "Delivered an interactive dashboard consolidating important sales indicators.",
      "Presented performance by region, month, distributor, and cement type.",
      "Made sales information easier to explore through interactive visualizations.",
    ],
  },

  {
    slug: "simponi-document-management-dashboard",
    title: "SIMPONI Document Management Dashboard",
    tool: "Microsoft Power BI",
    context: "Dashboard Project",
    summary:
      "An interactive dashboard designed to monitor document information, expiration status, and document distribution.",
    tools: ["Microsoft Power BI"],
    gallery: [
      {
        src: base + "simponi/dashboard-overview.png",
        caption:
          "Power BI dashboard displaying document status, yearly trends, document categories, and interactive filters.",
      },
    ],
    problem: [
      "Document records contained multiple categories and statuses that required structured monitoring.",
      "Expired and approaching-expiration documents needed clearer identification.",
      "Static records made document information less convenient to explore across departments.",
    ],
    action: [
      "Organized document records by status, type, department, and work unit.",
      "Developed Power BI visuals for document status, yearly trends, and document categories.",
      "Added interactive filters for document type, department, status, and year.",
    ],
    result: [
      "Delivered a centralized dashboard for monitoring document information.",
      "Improved visibility of active, expired, and approaching-expiration documents.",
      "Enabled flexible exploration of records through interactive filters.",
    ],
  },

  {
    slug: "covid-19-data-analysis-dashboard",
    title: "COVID-19 Data Analysis Dashboard",
    tool: "Microsoft Power BI",
    context: "Academic Project",
    summary:
      "An academic visualization project transforming 31,824 records and 37 columns into an interactive COVID-19 dashboard.",
    tools: ["Microsoft Power BI"],
    gallery: [
      {
        src: base + "covid-dashboard/dashboard-overview.png",
        caption:
          "COVID-19 dashboard featuring KPI cards, monthly trends, province-level information, and geographic visualization.",
      },
    ],
    problem: [
      "The dataset contained 31,824 rows and 37 columns, making raw records difficult to interpret.",
      "Cases, recoveries, and deaths needed to be presented through clear indicators.",
      "Changes across months, years, and provinces required different visualization perspectives.",
    ],
    action: [
      "Reviewed the dataset structure and selected relevant fields for analysis.",
      "Developed KPI cards for cases, recoveries, and deaths using Power BI.",
      "Created monthly trends, province-level visuals, a map, and interactive filters.",
    ],
    result: [
      "Transformed a large dataset into an interactive COVID-19 dashboard.",
      "Presented key indicators and trends through complementary visualizations.",
      "Enabled users to explore information by date and province.",
    ],
  },

  {
    slug: "global-superstore-sales-analysis",
    title: "Global Superstore Sales Analysis",
    tool: "Tableau",
    context: "Academic Project",
    summary:
      "A Tableau visualization project exploring retail sales and profitability across products and geographic regions.",
    tools: ["Tableau"],
    gallery: [
      {
        src: base + "global-superstore/dashboard-overview.png",
        caption:
          "Tableau dashboard presenting sales trends, top products, country-level sales, and category analysis.",
      },
    ],
    problem: [
      "Retail data contained multiple dimensions that required structured analysis.",
      "Sales and profitability needed to be explored across products and geographic regions.",
      "Comparing business performance through raw records was less convenient.",
    ],
    action: [
      "Used the Global Superstore Orders 2016 dataset for retail sales analysis.",
      "Created Tableau worksheets for sales trends, top products, countries, and categories.",
      "Combined visualizations into an interactive dashboard with filters.",
    ],
    result: [
      "Delivered a Tableau dashboard presenting multiple perspectives of retail performance.",
      "Enabled comparisons across countries, product categories, and time periods.",
      "Made sales information easier to explore through interactive visualizations.",
    ],
  },
];

