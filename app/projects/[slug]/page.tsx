
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  Layers3,
  Sparkles,
  Target,
  Wrench,
  CheckCircle2,
} from "lucide-react";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find(
    (item) => item.slug === params.slug
  );

  return project
    ? {
        title: `${project.title} | Portfolio`,
        description: project.summary,
        openGraph: {
          title: project.title,
          description: project.summary,
        },
      }
    : {};
}

const analysisSections = [
  {
    key: "problem",
    title: "Problem",
    number: "01",
    subtitle: "Understanding the Challenge",
    icon: Target,
    color: "#AE0947",
    background: "bg-[#AE0947]/10",
  },
  {
    key: "action",
    title: "Action",
    number: "02",
    subtitle: "Approach and Implementation",
    icon: Wrench,
    color: "#318192",
    background: "bg-[#318192]/10",
  },
  {
    key: "result",
    title: "Result",
    number: "03",
    subtitle: "Project Outcome",
    icon: CheckCircle2,
    color: "#438D3B",
    background: "bg-[#6BC658]/15",
  },
] as const;

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find(
    (item) => item.slug === params.slug
  );

  if (!project) notFound();

  const shots = project.gallery.map((image) => ({
    ...image,
    src: image.src
      ? `/${image.src.replace(/^\/+/, "")}`
      : undefined,
  }));

  const content = {
    problem: project.problem,
    action: project.action,
    result: project.result,
  };

  return (
    <>
      <Nav />

      <main className="min-h-screen overflow-hidden bg-[#E7E8DA]">
        {/* HERO */}
        <section className="relative overflow-hidden px-5 py-16 sm:py-24">
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#318192]/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-[#6BC658]/20 blur-3xl" />
          <div className="pointer-events-none absolute right-[35%] top-[35%] h-40 w-40 rounded-full bg-[#F17585]/10 blur-3xl" />

          <div className="relative mx-auto max-w-6xl">
            <Link
              href="/#projects"
              className="group inline-flex items-center gap-2 rounded-full border border-[#318192]/20 bg-white/70 px-5 py-2.5 text-sm font-semibold text-[#318192] shadow-sm backdrop-blur transition-all duration-300 hover:-translate-x-1 hover:border-[#318192] hover:bg-[#318192] hover:text-white"
            >
              <ArrowLeft
                size={16}
                className="transition-transform group-hover:-translate-x-1"
              />
              Back to Projects
            </Link>

            <div className="mt-14 max-w-5xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#AE0947]/15 bg-[#AE0947]/5 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#AE0947]">
                <Sparkles size={15} />
                Project Case Study
              </div>

              <p className="mt-7 text-sm font-semibold text-[#318192]">
                {project.context}
                <span className="mx-2 text-[#F17585]">•</span>
                {project.tool}
              </p>

              <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-[#26382D] sm:text-5xl lg:text-6xl">
                {project.title}
                <span className="text-[#318192]">.</span>
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#26382D]/75 sm:text-lg">
                {project.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-[#318192]/20 bg-white/80 px-4 py-2 text-sm font-semibold text-[#318192] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#6BC658] hover:bg-[#6BC658]/10"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-[#318192]/15 pt-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#318192] text-white shadow-md">
                  <BarChart3 size={20} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#318192]">
                    Data Analytics Portfolio
                  </p>
                  <p className="text-sm text-[#26382D]/60">
                    Problem · Action · Result
                  </p>
                </div>
              </div>

              <span className="font-display text-3xl font-bold text-[#318192]/30">
                CASE STUDY
              </span>
            </div>
          </div>
        </section>

        {/* PROJECT GALLERY */}
        <section className="mx-auto max-w-6xl px-5 pb-8">
          <div className="overflow-hidden rounded-3xl border border-[#318192]/15 bg-white p-5 shadow-xl shadow-[#26382D]/[0.06] sm:p-8">
            <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F17585]/15 text-[#AE0947]">
                  <Layers3 size={23} />
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-[#26382D]">
                    Project Gallery
                  </h2>
                  <p className="mt-1 text-sm text-[#26382D]/55">
                    Dashboard and project visuals
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-[#6BC658]/15 px-4 py-2 text-xs font-bold text-[#438D3B]">
                PROJECT VISUALS
              </span>
            </div>

            <Gallery items={shots} />
          </div>
        </section>

        {/* PROBLEM - ACTION - RESULT */}
        <section className="mx-auto max-w-6xl px-5 pb-20 pt-12">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#AE0947]">
              Inside the Project
            </p>

            <h2 className="mt-3 font-display text-3xl font-bold text-[#26382D] sm:text-4xl">
              From Data to Insights
              <span className="text-[#318192]">.</span>
            </h2>

            <p className="mt-3 leading-relaxed text-[#26382D]/65">
              A closer look at the challenges, analytical approach,
              and outcomes of this project.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {analysisSections.map((section) => {
              const Icon = section.icon;
              const points = content[section.key];

              return (
                <article
                  key={section.key}
                  className="group rounded-3xl border border-[#318192]/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#318192]/25 hover:shadow-xl sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${section.background} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon
                        size={22}
                        style={{ color: section.color }}
                      />
                    </div>

                    <span
                      className="text-sm font-extrabold tracking-widest"
                      style={{ color: section.color }}
                    >
                      {section.number}
                    </span>
                  </div>

                  <p
                    className="mt-7 text-xs font-bold uppercase tracking-[0.15em]"
                    style={{ color: section.color }}
                  >
                    {section.subtitle}
                  </p>

                  <h3 className="mt-2 font-display text-2xl font-bold text-[#26382D]">
                    {section.title}
                  </h3>

                  <div className="mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-[#318192] to-[#6BC658] transition-all duration-500 group-hover:w-24" />

                  <ul className="mt-6 space-y-4">
                    {points.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm leading-relaxed text-[#26382D]/75"
                      >
                        <span
                          className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                          style={{ backgroundColor: section.color }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          {/* BOTTOM CTA */}
          <div className="mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-[#318192] to-[#26382D] p-7 text-white shadow-xl sm:p-10">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6BC658]">
                  Explore More
                </p>

                <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
                  Interested in other projects?
                </h2>

                <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/70">
                  Explore more data analysis projects, dashboards,
                  and visualization work.
                </p>
              </div>

              <Link
                href="/#projects"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#6BC658] px-6 py-3 text-sm font-bold text-[#26382D] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Explore Projects
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
