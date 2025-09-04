import SupabaseIcon from "../assets/logos/Supabase-logo.svg?raw";
import PythonIcon from "../assets/logos/Python-logo.svg?raw";

export const projects = [
  {
    title: "Telegram Automation Bots",
    techStack: "Python • Aiogram • Google Sheets API • PostgreSQL",
    description:
      "Built bots to automate course info, Google Form submissions, and data analysis pipelines. Integrated with Google Sheets and deployed on Docker with custom domains.",
    ctaText: "View Repo →",
    ctaLink: "https://github.com/goldendevuz", // 🔗 replace with specific bot repo if available
    icon: PythonIcon,
  },
  {
    title: "API Monitoring Dashboard",
    techStack: "Python • FastAPI • crontab • Google Sheets • Telegram",
    description:
      "Created a Postman-style API monitoring system with scheduled checks, structured logging, and real-time alerts sent via Telegram.",
    ctaText: "View Repo →",
    ctaLink: "https://github.com/goldendevuz", // 🔗 replace with monitoring repo
    icon: PythonIcon,
  },
  {
    title: "Custom API Platforms (AudioBook & EduPess)",
    techStack: "Python • Django • DRF • PostgreSQL • Docker",
    description:
      "Developed custom REST APIs for audiobook and education platforms. Features include authentication, content delivery, and scalable deployment with Docker + Nginx.",
    ctaText: "View Repo →",
    ctaLink: "https://github.com/goldendevuz", // 🔗 replace with project repo
    icon: PythonIcon,
  },
];
