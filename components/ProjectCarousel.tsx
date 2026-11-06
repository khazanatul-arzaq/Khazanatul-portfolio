
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Target,
  Wrench,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
} from "lucide-react";
import type { Project } from "@/lib/data";

type SectionColor = "berry" | "teal" | "green";

const numberLabel = (number: number) =>
  String(number).padStart(2, "0");

const sectionStyles: Record<
  SectionColor,
  {
    icon: string;
    border: string;
    background: string;
    number: string;
    bullet: string;
  }
> = {
  berry: {
    icon: "text-[#AE0947]",
    border: "border-[#AE0947]/20",
    background: "bg-[#AE0947]/[0.035]",
    number: "bg-[#AE0947]/10 text-[#AE0947]",
    bullet: "bg-[#AE0947]",
  },
  teal: {
    icon: "text-[#318192]",
    border: "border-[#318192]/20",
    background: "bg-[#318192]/[0.035]",
    number: "bg-[#318192]/10 text-[#318192]",
    bullet: "bg-[#318192]",
  },
  green: {
    icon: "text-[#438D3B]",
    border: "border-[#6BC658]/30",
    background: "bg-[#6BC658]/[0.07]",
    number: "bg-[#6BC658]/15 text-[#438D3B]",
    bullet: "bg-[#6BC658]",
  },
};

function PARSection({
  title,
  number,
  icon: Icon,
  points,
  color,
}: {
  title: string;
  number: string;
  icon: LucideIcon;
  points: string[];
  color: SectionColor;
}) {
  const style = sectionStyles[color];

  return (
    <section
      className={`rounded-xl border ${style.border} ${style.background} p-4`}
    >
      <div className="mb-2.5 flex items-center gap-2.5">
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[11px] font-extrabold ${style.number}`}
        >
          {number}
        </span>

        <Icon size={16} className={style.icon} />

        <h4 className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#26382D] sm:text-sm">
          {title}
        </h4>
      </div>

      <ul className="space-y-2 pl-1">
        {points.map((point, index) => (
          <li
            key={`${title}-${index}`}
            className="flex items-start gap-2.5"
          >
            <span
              className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full ${style.bullet}`}
            />
            <p className="text-[13px] leading-relaxed text-[#26382D]/80 sm:text-sm">
              {point}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ProjectImage({ project }: { project: Project }) {
  const [enlarged, setEnlarged] = useState(false);

  const shot = project.gallery?.find((item) => item.src);

  const imageSrc = shot?.src
    ? `/${shot.src.replace(/^\/+/, "")}`
    : null;

  useEffect(() => {
    if (!enlarged) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setEnlarged(false);
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [enlarged]);

  return (
    <>
      <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#318192]/20 bg-[#E7E8DA] shadow-md shadow-[#26382D]/10">
        {imageSrc ? (
          <button
            type="button"
            onClick={() => setEnlarged(true)}
            aria-label={`Enlarge image of ${project.title}`}
            className="absolute inset-0 h-full w-full cursor-zoom-in"
          >
            <Image
              src={imageSrc}
              alt={shot?.caption || project.title}
              fill
              sizes="(min-width: 1024px) 42vw, 90vw"
              className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
            />

            <span className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full bg-[#26382D]/85 px-3 py-2 text-xs font-semibold text-white opacity-100 transition-all sm:opacity-0 sm:group-hover:opacity-100">
              <Maximize2 size={13} />
              Enlarge image
            </span>
          </button>
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 text-[#318192]">
            <BarChart3 size={42} strokeWidth={1.5} />
            <p className="text-sm font-semibold">
              Project image coming soon
            </p>
          </div>
        )}
      </div>

      {shot?.caption && (
        <p className="mt-2.5 text-xs leading-relaxed text-[#26382D]/60">
          {shot.caption}
        </p>
      )}

      {enlarged && imageSrc && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} enlarged image`}
          onClick={() => setEnlarged(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#26382D]/95 p-4 backdrop-blur-md"
        >
          <button
            type="button"
            onClick={() => setEnlarged(false)}
            aria-label="Close enlarged image"
            className="absolute right-5 top-5 z-10 rounded-full bg-white/15 p-3 text-white transition-colors hover:bg-[#AE0947]"
          >
            <X size={22} />
          </button>

          <div
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[90vh] max-w-[95vw]"
          >
            <Image
              src={imageSrc}
              alt={shot?.caption || project.title}
              width={1600}
              height={1200}
              sizes="95vw"
              className="max-h-[90vh] w-auto rounded-xl object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default function ProjectCarousel({
  projects,
}: {
  projects: Project[];
}) {
  const [active, setActive] = useState(0);
  const [startX, setStartX] = useState<number | null>(null);

  const total = projects.length;

  const goTo = (index: number) => {
    setActive(Math.max(0, Math.min(total - 1, index)));
  };

  if (total === 0) return null;

  return (
    <section
      id="projects"
      aria-label="Selected projects"
      className="w-full"
    >
      {/* HEADER */}
      <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <div className="mb-2 flex items-center gap-2 text-[#318192]">
            <BarChart3 size={17} />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">
              Selected Work
            </span>
          </div>

          <h2 className="font-display text-3xl font-bold text-[#26382D] sm:text-4xl">
            Projects & Analysis
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#26382D]/65">
            A collection of data analysis and visualization projects,
            highlighting the problems addressed, approaches taken,
            and outcomes delivered.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="font-display text-lg font-bold tabular-nums text-[#318192]">
            {numberLabel(active + 1)}
            <span className="text-[#26382D]/35">
              {" "}/ {numberLabel(total)}
            </span>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => goTo(active - 1)}
              disabled={active === 0}
              aria-label="Previous project"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#318192]/30 bg-white text-[#318192] transition-all hover:bg-[#318192] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={() => goTo(active + 1)}
              disabled={active === total - 1}
              aria-label="Next project"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#318192]/30 bg-white text-[#318192] transition-all hover:bg-[#318192] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* PROJECT SLIDES */}
      <div
        className="overflow-hidden rounded-3xl"
        onTouchStart={(event) => {
          setStartX(event.touches[0].clientX);
        }}
        onTouchEnd={(event) => {
          if (startX === null) return;

          const endX = event.changedTouches[0].clientX;
          const distance = endX - startX;

          if (Math.abs(distance) > 60) {
            goTo(active + (distance < 0 ? 1 : -1));
          }

          setStartX(null);
        }}
      >
        <div
          className="flex items-start transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${active * 100}%)`,
          }}
        >
          {projects.map((project, index) => (
            <article
              key={project.slug}
              aria-hidden={index !== active}
              className="grid w-full shrink-0 items-start gap-5 rounded-3xl border border-[#318192]/15 bg-white p-4 shadow-xl shadow-[#26382D]/[0.06] sm:gap-6 sm:p-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-7 lg:p-7"
            >
              {/* LEFT: IMAGE AND TOOLS */}
              <div className="min-w-0">
                <ProjectImage project={project} />

                <div className="mt-4">
                  <div className="mb-2.5 flex items-center gap-2">
                    <Wrench size={15} className="text-[#318192]" />
                    <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#26382D]/60">
                      Tools & Technologies
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-[#6BC658]/30 bg-[#6BC658]/10 px-3 py-1.5 text-xs font-semibold text-[#438D3B]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT: PROJECT DETAILS */}
              <div className="min-w-0">
                <div className="mb-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#318192] sm:text-xs">
                      {project.context}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-[#F17585]" />
                    <span className="text-xs font-bold text-[#6BC658]">
                      {numberLabel(index + 1)}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold leading-tight text-[#26382D] sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 border-l-[3px] border-[#6BC658] pl-3 text-sm leading-relaxed text-[#26382D]/70">
                    {project.summary}
                  </p>
                </div>

                <div className="space-y-3">
                  <PARSection
                    title="Problem"
                    number="01"
                    icon={Target}
                    points={project.problem}
                    color="berry"
                  />

                  <PARSection
                    title="Action"
                    number="02"
                    icon={Wrench}
                    points={project.action}
                    color="teal"
                  />

                  <PARSection
                    title="Result"
                    number="03"
                    icon={TrendingUp}
                    points={project.result}
                    color="green"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* PAGINATION */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {projects.map((project, index) => (
          <button
            key={project.slug}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Show project ${index + 1}: ${project.title}`}
            aria-current={index === active ? "true" : undefined}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              index === active
                ? "w-9 bg-[#318192]"
                : "w-2.5 bg-[#6BC658]/40 hover:bg-[#6BC658]"
            }`}
          />
        ))}
      </div>

      <p className="mt-3 text-center text-xs text-[#26382D]/50">
        Navigate using the arrows, swipe, or select a project indicator.
      </p>
    </section>
  );
}
