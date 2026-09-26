import { Book } from "../../Types";

export const books: Book[] = [
  {
    id: `dd-design`,
    title: `Domain-Driven Design`,
    author: `Eric Evans`,
    summary: `Names the thing good teams already do: model software around the language and boundaries of the business. Dense, but the bounded-context chapters pay for themselves.`,
    tags: [`Architecture`, `Modeling`],
  },
  {
    id: `architect-elevator`,
    title: `The Software Architect Elevator`,
    author: `Gregor Hohpe`,
    summary: `A field guide to organizational physics — riding the elevator between the boiler room and the penthouse, translating between the two.`,
    tags: [`Architecture`, `Leadership`],
  },
  {
    id: `building-microservices`,
    title: `Building Microservices`,
    author: `Sam Newman`,
    summary: `Level-headed and short on hype. Spends as much time on when not to split a service as when to.`,
    tags: [`Distributed Systems`],
  },
  {
    id: `poeaa`,
    title: `Patterns of Enterprise Application Architecture`,
    author: `Martin Fowler`,
    summary: `Twenty years old and still the reference I reach for when naming a pattern I already use.`,
    tags: [`Patterns`, `Classics`],
  },
  {
    id: `clean-craftsmanship`,
    title: `Clean Craftsmanship`,
    author: `Robert Martin`,
    summary: `Uncle Bob at his most opinionated. The TDD case studies are useful; the manifesto chapters less so.`,
    tags: [`Craft`, `Testing`],
  },
  {
    id: `staff-engineer`,
    title: `The Staff Engineer's Path`,
    author: `Tanya Reilly`,
    summary: `Concrete language for the ambiguity of senior IC roles — glue work, writing things down, staying calibrated.`,
    tags: [`Career`, `Leadership`],
  },
  {
    id: `designing-data-intensive`,
    title: `Designing Data-Intensive Applications`,
    author: `Martin Kleppmann`,
    summary: `The book every backend engineer name-drops. The replication and consensus chapters changed how I reason about failure.`,
    tags: [`Distributed Systems`, `Databases`],
  },
  {
    id: `accelerate`,
    title: `Accelerate`,
    author: `Nicole Forsgren, Jez Humble, Gene Kim`,
    summary: `The research behind "ship smaller and more often." Short, dense, and useful to hand to a skeptical manager.`,
    tags: [`DevOps`, `Process`],
  },
];
