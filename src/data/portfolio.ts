export const meta = {
  name: "Doruk Karademirler",
  title: "Software Engineering Student & Developer",
  tagline:
    "CS student at the University of Toronto with 5 years of experience building problem-solving algorithms, compiler toolchains, and full-stack applications.",
  email: "doruk.karademirler@mail.utoronto.ca",
  phone: "647-271-1591",
  github: "https://github.com/dorukkarademirler",
  linkedin: "https://linkedin.com/in/doruk-karademirler-00402b254",
  tiktok: "https://www.tiktok.com/@doruk_karademirler",
  location: "Toronto / Mississauga, ON",
};

export const skills = [
  "Java", "Python", "JavaScript", "TypeScript",
  "C", "React", "PHP", "SQL",
  "Git", "CI/CD", "GCC / LLVM", "R",
];

export const education = [
  {
    degree: "Honors Bachelor of Science",
    school: "University of Toronto",
    period: "Sep. 2021 - Nov. 2026 (Expected)",
    location: "Mississauga / Toronto, ON",
    details: [
      "Computer Science Specialist, Economics Minor, GPA 3.50",
      "Participated in the PEY Co-op Program",
      "Relevant courses: Algorithm Design & Analysis, Intro to AI, Software Tools & Systems Programming, Data Structures, Intro to Machine Learning, Intro to Databases, Software Design, Intro to Software Engineering",
    ],
  },
];

export const experience = [
  {
    role: "Software Toolchains Engineering Intern",
    company: "Qualcomm",
    logo: { bg: "#3253DC", fg: "#ffffff", label: "Q" },
    period: "July 2024 - September 2025",
    location: "Markham, ON",
    bullets: [
      "Diagnosed and resolved a performance bottleneck in the expf.c function of Android's math library, eliminating 4K page crossing and achieving a 28% performance boost in Geekbench benchmarks.",
      "Designed and implemented a comprehensive CI/CD pipeline using GitLab to automate build, test, and publish stages for GCC and LLVM toolchains across AArch64 and X86 targets with SPEC CPU 2017 benchmarking.",
      "Implemented a pointer chase optimization algorithm for GCC and LLVM, reducing execution cycles for load instructions that reuse the same register, resulting in a 3% performance gain in SPEC benchmarks.",
    ],
  },
  {
    role: "Teaching Assistant",
    company: "University of Toronto",
    logo: { bg: "#002A5C", fg: "#ffffff", label: "U of T" },
    period: "Sept. 2023 - January 2024",
    location: "Mississauga, ON",
    bullets: [
      "Conducted 6 tutorial sections (40 students/session) and office hours for CSC236 (Introduction to the Theory of Computation), achieving a 15% improvement in student assessment performance.",
      "Graded assignments and exams with timely, consistent feedback; collaborated with the course instructor to align teaching strategies with course objectives.",
    ],
  },
];

export const projects = [
  {
    title: "UniWithUs",
    description:
      "AI-powered study abroad planning platform for high school students. Includes a 5-step onboarding wizard, 500+ universities with real admission data, a personalized scoring engine across 5 factors, and a recommendation engine for application improvement.",
    tags: ["Next.js 14", "TypeScript", "Prisma", "NextAuth.js", "Tailwind"],
    href: "#",
    repo: "#",
    date: "2024 - Present",
    current: true,
  },
  {
    title: "Security Vulnerability Assessment & Remediation",
    description:
      "Analyzed a vulnerable C account-management application, identifying and documenting 15 security vulnerabilities spanning path traversal, buffer handling, authentication, password storage, and transaction validation. Developed and tested fixes for 11 issues using input validation, safer string handling, account identity verification, password hashing, and file-operation error handling, then reproduced each vulnerability in a controlled environment to assess impact against the CIA triad.",
    tags: ["C", "Linux", "OpenSSL", "Secure Coding"],
    href: "/files/csc347-security-report.pdf",
    repo: "/files/csc347-vulnerable-account.c",
    date: "Fall 2025",
    current: false,
  },
  {
    title: "CourseBind Website",
    description:
      "Full-stack educational platform designed to enhance student productivity. Built as part of a five-person Agile team, from concept to deployment.",
    tags: ["ReactJS", "PHP", "JavaScript", "CSS", "SQL"],
    href: "#",
    repo: "#",
    date: "Jan 2024",
    current: false,
  },
  {
    title: "Causal Inference with DAGs",
    description:
      "Implemented Variable Elimination and Likelihood Sampling for exact and approximate inference on Directed Acyclic Graphs. Applied Causal Bayesian Networks to real COVID-19 mortality data.",
    tags: ["Python", "Bayesian Networks", "pandas"],
    href: "#",
    repo: "#",
    date: "Nov 2023",
    current: false,
  },
  {
    title: "Price of Empire",
    description:
      "Research project (ROP) building a meta-database of Canadian trade data for the UTM Economics website. Developed a Python pipeline to cleanse and structure complex economic datasets under Prof. Nicholas Zammit.",
    tags: ["Python", "R", "pandas", "VSCode"],
    href: "#",
    repo: "#",
    date: "Summer 2023",
    current: false,
  },
];
