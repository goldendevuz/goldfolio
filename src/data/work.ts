import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "Backend Developer (Volunteer)",
    company: "Madad IT Academy",
    region: "Uzbekistan",
    description:
      "Built the company’s Telegram bot for course information, integrated Google Sheets to send calculated results via SMS, and deployed projects using Docker on Contabo with custom subdomains via Nginx.",
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "FastAPI",
      "Aiogram",
      "PostgreSQL",
      "Docker",
      "Nginx",
      "Gunicorn",
      "Uvicorn",
    ],
  },
  {
    title: "Telegram Automation Bots",
    company: "GoldenDevs",
    region: "Uzbekistan",
    description:
      "Developed bots with Aiogram, integrated Google Sheets for data storage, and automated Google Forms response submission and analysis.",
    technologies: [
      "Python",
      "Aiogram",
      "Google Sheets API",
      "pandas",
      "NumPy",
      "PostgreSQL",
    ],
  },
  {
    title: "API Monitoring Dashboard",
    company: "GoldenDevs",
    region: "Uzbekistan",
    description:
      "Built a Postman-style API monitoring tool with scheduled checks via crontab, integrated Google Sheets reporting, and Telegram notifications.",
    technologies: [
      "Python",
      "FastAPI",
      "crontab",
      "Google Sheets API",
      "Telegram API",
    ],
  },
  {
    title: "Custom API Platforms (AudioBook & EduPess)",
    company: "GoldenDevs",
    region: "Uzbekistan",
    description:
      "Designed APIs for audiobook and education platforms, handling user authentication, content delivery, and scalable architecture.",
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Swagger",
      "Docker",
    ],
  },
];

export type WorkItem = (typeof work)[number];
