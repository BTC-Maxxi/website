import Link from "next/link";
import { Suspense } from "react";

import { ThemeToggle } from "@/components/theme-toggle";

interface BuildCard {
  icon: string;
  title: string;
  description: string;
}

interface ProjectCard {
  name: string;
  status: string;
  description: string;
  tags: string[];
}

const buildCards: BuildCard[] = [
  {
    icon: "🤖",
    title: "Agent Orchestration",
    description:
      "Dispatch tasks to specialized AI agents — Claude Code, Codex, Cursor — each matched to the right job. Automatic retries, cost control, and progress tracking.",
  },
  {
    icon: "📋",
    title: "Smart Planning",
    description:
      "Opus-powered planning that researches tools, identifies gaps, and produces execution-ready task lists. Every plan follows a strict, proven template.",
  },
  {
    icon: "🔄",
    title: "Ship While You Sleep",
    description:
      "Queue up tasks before bed. Overnight agents execute, test, and commit. Wake up to pull requests, not problems.",
  },
];

const projects: ProjectCard[] = [
  {
    name: "Agent Dashboard",
    status: "Active",
    description:
      "Mission control interface for AI agent orchestration. Real-time kanban board, system health monitoring, and cost tracking.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
  {
    name: "Agentic Library",
    status: "Active",
    description:
      "Knowledge engine that compounds learnings across projects. Rules, skills, research, lessons, and execution plans.",
    tags: ["Markdown", "Shell", "Python", "MCP"],
  },
  {
    name: "Crypto Tracker",
    status: "Active",
    description:
      "Real-time cryptocurrency portfolio tracking with Supabase backend and responsive dark-mode interface.",
    tags: ["Next.js", "Supabase", "TypeScript", "Tailwind"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/80">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <span className="text-xl font-bold">OpenClaw</span>
          <div className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full focus-within:ring-2 focus-within:ring-gray-900/40 focus-within:ring-offset-2 focus-within:ring-offset-white dark:focus-within:ring-gray-100/40 dark:focus-within:ring-offset-gray-950">
            <Suspense
              fallback={
                <div
                  className="h-11 w-11 rounded-full bg-gray-200 dark:bg-gray-800"
                  aria-hidden
                />
              }
            >
              <ThemeToggle />
            </Suspense>
          </div>
        </nav>
      </header>

      <main>
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              AI Agents That Ship Software
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400 md:text-xl">
              An autonomous agent orchestration system for solo founders. Plan,
              execute, and deploy software — even while you sleep.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-gray-900 px-8 py-3 font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-white dark:text-gray-900 dark:focus-visible:ring-gray-100/40 dark:focus-visible:ring-offset-gray-950"
                href="#projects"
              >
                View on GitHub
              </Link>
              <Link
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-gray-300 px-8 py-3 font-medium transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-gray-700 dark:hover:bg-gray-800 dark:focus-visible:ring-gray-100/30 dark:focus-visible:ring-offset-gray-950"
                href="#projects"
              >
                See Projects
              </Link>
            </div>
          </div>
        </section>

        <section id="about" className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-center text-3xl font-bold">What We Build</h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600 dark:text-gray-400">
              OpenClaw is a suite of tools for autonomous software development.
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {buildCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900/50"
                >
                  <div className="mb-4 text-2xl" aria-hidden>
                    {card.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="bg-gray-50 px-6 py-20 dark:bg-gray-900/30">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-center text-3xl font-bold">Projects</h2>
            <p className="mb-12 text-center text-gray-600 dark:text-gray-400">
              Built with and for the OpenClaw ecosystem.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="rounded-2xl border border-gray-200 bg-white p-6 transition-colors hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{project.name}</h3>
                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      {project.status}
                    </span>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={`${project.name}-${tag}`}
                        className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 px-6 py-8 dark:border-gray-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-sm text-gray-500">
            © 2026 OpenClaw. Built by agents, for builders.
          </p>
          <div className="flex items-center gap-6">
            <Link
              className="inline-flex min-h-[44px] items-center text-sm text-gray-500 transition-colors hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:hover:text-gray-300 dark:focus-visible:ring-gray-100/30 dark:focus-visible:ring-offset-gray-950"
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
