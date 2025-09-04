export const studies = [
  {
    title: "Backend Development (Offline)",
    institution: "PDP Academy",
    description:
      "Completed an intensive backend development course covering Django, REST APIs, PostgreSQL, and Docker. Built practical projects solving real-world problems and deployed them to production environments.",
    tags: ["Django", "REST API", "PostgreSQL", "Docker", "Backend"],
  },
  {
    title: "Self-Learning & Online Courses",
    institution: "Mohirdev, Udemy, Coursera, 42, YouTube",
    description:
      "Studied modern backend development, DevOps, and software engineering topics through various online platforms. Currently learning the foundations of Artificial Intelligence and Machine Learning.",
    tags: ["Python", "FastAPI", "DevOps", "AI/ML", "Software Engineering"],
  },
];

export type StudyItem = (typeof studies)[number];
