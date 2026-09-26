export type Project = {
  name: string;
  description: string;
  tags: string[];
  url: string;
};

export const skills = [
  `TypeScript`,
  `Java`,
  `Kotlin`,
  `React`,
  `Spring Boot`,
  `PostgreSQL`,
  `AWS`,
  `Domain-Driven Design`,
];

export const projects: Project[] = [
  {
    name: `Traditional Fantasy API`,
    description: `A backend service that pulls iRacing career telemetry and hands it to Claude to write race-by-race narrative recaps instead of just stat lines.`,
    tags: [`Kotlin`, `Spring Boot`, `Claude API`],
    url: `https://github.com/run3wide`,
  },
  {
    name: `Blog API`,
    description: `A small, boring, reliable REST service backing this site's blog. Boring on purpose — it has never paged me.`,
    tags: [`Java`, `PostgreSQL`, `Docker`],
    url: `https://github.com/run3wide`,
  },
  {
    name: `run3wide.com`,
    description: `This site. React 18 + TypeScript + MUI, rebuilt on Vite. Redesigned end to end in a single evening because the old one looked like 2019.`,
    tags: [`React`, `Vite`, `MUI`],
    url: `https://github.com/run3wide`,
  },
];
