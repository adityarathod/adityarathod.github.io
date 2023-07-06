export interface ProjectData {
  title: string;
  type: string;
  description: string | null;
  image: string | null;
  color: string | null;
  link?: string;
}

export const projects: Record<number, ProjectData[]> = {
  2023: [
    {
      title: "Voidling: Chatbot for League of Legends Lore",
      type: "Class Project",
      description:
        "Developed information retrieval pipeline for a League of Legends lore Discord chatbot. Used TF-IDF and SVD to generate a dense vector space model of the corpus for document retrieval. Leveraged DistilBERT-based model for extractive Q&A and FLAN-T5 finetuned model to generate conversational answers to queries on the corpus.",
      image: null,
      color: null,
      link: "https://github.com/adityarathod/voidling",
    },
    {
      title: "Travyl: Tailored Travel Itineraries Using Large Language Models",
      type: "Hackathon Project",
      description:
        "Worked in a team to build and pitch a solution in 24 hours that uses React and the OpenAI API to generate detailed travel itineraries based on customers' preferences, even enabling them to book flights based on the itinerary. First place winner of the American Airlines challenge at TAMUhack.",
      image: null,
      color: null,
      link: "https://devpost.com/software/travyl",
    },
  ],
  2022: [
    {
      title: "Virtual TA Chatbot",
      type: "Computer Science Capstone Project",
      description:
        "Developed a Python chatbot with a React frontend that can answer open-ended knowledge-based questions about data structures & algorithms and class administrivia.",
      image: null,
      color: null,
      link: "https://github.com/adityarathod/virtual-ta",
    },
    {
      title: "EyeAlert: Eye Movement Tracking For Proactive Fatigue Alerts",
      type: "Hackathon Project",
      description:
        "Worked in a team to build and pitch a solution in 36 hours that uses React Native and a machine learning model to track eye movements and display trends of fatigue during critical situations. Winner of the Lockheed Martin and Children's Health challenge at HackDFW.",
      image: null,
      color: null,
      link: "https://devpost.com/software/defatigue",
    },
    {
      title: "React Wordle Clone Workshop: Intro to Backends & Databases",
      type: "Workshop",
      description:
        "Collaborated as part of the HackUTD Experience team to develop and present an introductory backend workshop to 50+ students.",
      image: null,
      color: null,
      link: "https://github.com/adityarathod/react-wordle-clone",
    },
    {
      title: "Internal Tool @ AWS BlackWatch",
      type: "Internship Project",
      description:
        "Developed data pipeline and analysis tools to ingest, process, and search over packets, enabling analysis of high-volume cross-region DDOS mitigation traffic.",
      image: null,
      color: null,
      link: "https://linkedin.com/in/aditya-rathod",
    },
    {
      title: "Robot Simulator",
      type: "Class Project",
      description:
        "React + HTML canvas based robot simulator that allows users to create and control simulated robots in a 2D grid. Developed motion planning and parsed robotic simulation language.",
      image: null,
      color: null,
      link: "https://github.com/adityarathod/robot-simulator",
    },
    {
      title: "jajapi",
      type: "Joke Full-Stack Project",
      description:
        "Joke API to generate repetitive strings of text (i.e. 'jaja')",
      image: null,
      color: null,
      link: "https://github.com/adityarathod/jajapi",
    },
    {
      title: "ACM Stream Graphics",
      type: "Graphics Project",
      description:
        "React-based dynamic, animated broadcast graphics toolkit used for live in-person and streamed events, of sizes ranging from 500 to 1k+ attendees.",
      image: null,
      color: null,
      link: "https://github.com/adityarathod/acm-stream-graphics",
    },
  ],
  2021: [
    {
      title: "Log Ingest/Query Service @ Paycom",
      type: "Internship Project",
      description:
        "Developed large-scale log event ingestion and query service leveraging C# and Elasticsearch. Created novel query language and query parser to enable users to query logs using simplified syntax.",
      image: null,
      color: null,
      link: "https://linkedin.com/in/aditya-rathod",
    },
    {
      title: "Comparison of Online Portfolio Selection Algorithms",
      type: "Research Project",
      description:
        "Compared the real-world performance of current approaches to OLPS on a variety of portfolios and trading frequencies.",
      image: null,
      color: null,
      link: "https://github.com/ACM-Research/online-portfolio-selection",
    },
    {
      title: "Texas Grid Load Tracker: Real-Time Power Capacity Graph",
      type: "Web Scraper + Dashboard",
      description:
        "Collected, stored, and displayed ERCOT capacity and usage data graphs throughout the Texas winter storm crisis.",
      image: null,
      color: null,
      link: "/texas-grid-load-tracker",
    },
    // {
    //   title:
    //     "Hackback: Jamstack-Friendly Hackathon Registration & Hosting System",
    //   type: "Web App",
    //   description: null,
    //   image: null,
    //   color: null,
    //   link: "//github.com/adityarathod/hackback",
    // },
    {
      title: "Zetaboard: Mental Math Practice for Trading Interviews",
      type: "Web App",
      description:
        "Prototyped a competitive mental math practice game aimed at preparing for trading interviews.",
      image: null,
      color: null,
      link: "https://zetaboard.vercel.app/",
    },
  ],
  2020: [
    {
      title: "ACM Hacktoberfest: On-Brand Interactive Event Site",
      type: "Website",
      description:
        "Collaborated with an team of designers and writers to develop a centralized hub for event information.",
      image: null,
      color: null,
      link: "https://hacktoberfest.acmutd.co/",
    },
    {
      title: "Leasing Tablet Hybrid @ RealPage",
      type: "Internship Project",
      description:
        "Developed hybrid redesign of existing Leasing Tablet mobile application using React Native, allowing it to run on iOS and Android.",
      image: "/leasing-tab-react.svg",
      color: "#61DAFB",
      link: "https://linkedin.com/in/aditya-rathod",
    },
    {
      title: "Accepted: College Application Mentorship Platform",
      type: "Web App",
      description:
        "Worked on a platform connecting high school students to undergraduate college applications mentors.",
      image: "/accepted.svg",
      color: "#EFEBE3",
      link: "https://github.com/acceptedlabs/frontend",
    },
  ],
  2019: [
    {
      title: "Liform: Medical Billing Analytics",
      type: "Web App",
      description:
        "I built an app to compare treatment costs across multiple providers with my hackathon team. I wrote an ETL pipeline in Python to extract pricing data.",
      image: "/liform.svg",
      color: "#7DFFCF",
      link: "https://github.com/TheGradientGroup/liform-backend",
    },
    {
      title: "Reportik: Abstractive Text Summarization Model",
      type: "Machine Learning Model",
      description:
        "Attempted to repurpose LSTM-based neural sequence-to-sequence language model to the domain of long-form text summarization.",
      image: "/reportik.svg",
      color: "#713FFF",
      link: "https://github.com/adityarathod/reportik",
    },
    {
      title: "Credit Card Fraud Detection",
      type: "Machine Learning Model",
      description:
        "Trained a small machine learning model to detect fraudulent transactions. Learned how to deal with skewed data and metrics such as F₁ score.",
      image: "/ccf.svg",
      color: "#FF6F6F",
      link: "https://github.com/adityarathod/fraud-detection",
    },
  ],
  2018: [
    {
      title: "HQ Trivia QAS",
      type: "Console App",
      description:
        "Developed a question-answering system for HQ Trivia app with realtime OCR in a weekend, with blog post explaining how to mitigate such approaches. Blog post was referenced in articles by The Verge and the Washington Post.",
      image: "/hqtrivia.svg",
      color: "#36399a",
      link: "/blog/protect-trivia-from-bots",
    },
  ],
};

export default projects;
