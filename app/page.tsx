
import Link from "next/link";
import {
  Mail,
  Linkedin,
  ArrowDown,
  BarChart3,
  GraduationCap,
  MapPin,
  BriefcaseBusiness,
  Award,
  Sparkles,
  Leaf,
  ExternalLink,
} from "lucide-react";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

import Decor from "@/components/Decor";
import ProjectCarousel from "@/components/ProjectCarousel";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { profile, skills, projects } from "@/lib/data";

// Reusable section heading
function Sec({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-berry">
            {label}
          </p>
          <h2 className="font-display text-3xl font-bold text-[#26382D] md:text-4xl">
            {title}
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-meadow" />
        </div>
        {children}
      </div>
    </section>
  );
}

// Reusable information card
function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="soft-card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-meadow/20 text-lagoon">
        <Icon size={23} />
      </div>
      <h3 className="mb-3 font-bold text-[#26382D]">{title}</h3>
      <div className="text-sm leading-7 text-gray-600">{children}</div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-cream">
      <Nav />

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-[90vh] items-center overflow-hidden"
      >
        <Decor />

        <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <div className="rise">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lagoon/20 bg-white/70 px-4 py-2 text-sm text-lagoon">
              <Leaf size={16} />
              Welcome to my portfolio
            </div>

            <p className="mb-3 font-medium text-berry">
              Hello, I&apos;m
            </p>

            <h1 className="font-display text-5xl font-bold leading-tight text-lagoon md:text-7xl">
              Khazanatul
              <span className="block text-berry">Arzaq.</span>
            </h1>

            <h2 className="mt-5 text-lg font-semibold text-[#26382D] md:text-xl">
              Information Systems Student
            </h2>

            <p className="mt-5 max-w-lg leading-8 text-gray-600">
              I am interested in data analytics and business intelligence.
              I enjoy transforming data into meaningful insights through
              data visualization, reporting, and dashboard development.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-meadow px-6 py-3 font-semibold text-[#26382D] shadow-md transition hover:bg-lagoon hover:text-white"
              >
                Explore Projects
                <ArrowDown size={17} />
              </a>

              <a
                href="#contact"
                className="rounded-full border border-lagoon px-6 py-3 font-semibold text-lagoon transition hover:bg-lagoon hover:text-white"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-berry" />
                {profile.location}
              </span>
            </div>
          </div>

          {/* Decorative illustration area */}
          <div className="relative flex min-h-[300px] items-center justify-center">
            <div className="absolute h-64 w-64 rounded-full bg-meadow/20 blur-3xl" />
            <div className="absolute h-52 w-52 rounded-full border border-lagoon/20" />

            <div className="float relative flex h-56 w-56 items-center justify-center rounded-[3rem] border border-white bg-white/70 shadow-xl backdrop-blur-sm md:h-72 md:w-72">
              <div className="text-center">
                <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-meadow/20 text-lagoon">
                  <BarChart3 size={52} />
                </div>
                <p className="font-display text-2xl font-bold text-lagoon">
                  Data with
                </p>
                <p className="font-display text-2xl font-bold text-berry">
                  Purpose.
                </p>
                <p className="mt-3 text-xs tracking-widest text-gray-500">
                  ANALYZE · VISUALIZE · INSIGHT
                </p>
              </div>
            </div>

            <div className="absolute right-4 top-5 rounded-2xl bg-white p-4 text-meadow shadow-lg">
              <Sparkles size={25} />
            </div>
            <div className="absolute bottom-5 left-4 rounded-2xl bg-white p-4 text-berry shadow-lg">
              <Leaf size={25} />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <div id="about" className="scroll-mt-20">
        <Sec label="Get to know me" title="About Me">
          <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr]">
            <div className="soft-card p-7 md:p-9">
              <p className="leading-8 text-gray-600">
                I am an Information Systems student at Universitas Putra
                Indonesia YPTK Padang with an interest in data analytics
                and business intelligence.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                Through academic projects and internship experience, I have
                worked with data processing, exploratory data analysis,
                dashboard development, and data visualization using
                Microsoft Power BI, Excel, and Tableau.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                I am continuously developing my analytical and technical
                skills to turn raw data into clear and useful information
                that supports decision-making.
              </p>
            </div>

            <div className="grid gap-4">
              <InfoCard icon={GraduationCap} title="Education">
                <p className="font-semibold text-[#26382D]">
                  Universitas Putra Indonesia YPTK Padang
                </p>
                <p>Information Systems</p>
                <p>Undergraduate Student</p>
              </InfoCard>

              <InfoCard icon={MapPin} title="Location">
                {profile.location}
              </InfoCard>
            </div>
          </div>
        </Sec>
      </div>

      {/* SKILLS */}
      <div id="skills" className="scroll-mt-20 bg-white/40">
        <Sec label="What I can do" title="Skills & Tools">
          <div className="grid gap-5 sm:grid-cols-2">
            {skills.map((skill, index) => (
              <div key={skill.t} className="soft-card p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-meadow/20 text-lagoon">
                    <BarChart3 size={20} />
                  </div>
                  <h3 className="font-bold text-[#26382D]">
                    {skill.t}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skill.i.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-lagoon/15 bg-cream px-3 py-2 text-xs font-medium text-lagoon"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Sec>
      </div>

      {/* EXPERIENCE */}
      <div id="experience" className="scroll-mt-20">
        <Sec label="My journey" title="Experience">
          <div className="relative ml-3 border-l-2 border-meadow pl-8">
            <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-cream bg-lagoon" />

            <div className="soft-card p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-berry">
                    Internship
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-[#26382D]">
                    PT Semen Padang
                  </h3>
                </div>

                <span className="rounded-full bg-meadow/20 px-4 py-2 text-sm font-semibold text-lagoon">
                  August – September 2026
                </span>
              </div>

              <p className="mt-5 leading-8 text-gray-600">
                Worked with cement sales data using Microsoft Excel
                and developed a Power BI dashboard to visualize sales
                performance.
              </p>

              <div className="mt-5">
                <p className="mb-3 font-semibold text-[#26382D]">
                  Activities
                </p>
                <ul className="space-y-2 text-sm leading-7 text-gray-600">
                  <li>• Processed and organized sales data using Excel.</li>
                  <li>• Developed Power BI dashboard visualizations.</li>
                  <li>
                    • Presented sales information through revenue,
                    profit margin, and sales volume indicators.
                  </li>
                </ul>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-cream px-3 py-2 text-xs text-lagoon">
                  Microsoft Excel
                </span>
                <span className="rounded-full bg-cream px-3 py-2 text-xs text-lagoon">
                  Microsoft Power BI
                </span>
                <span className="rounded-full bg-cream px-3 py-2 text-xs text-lagoon">
                  Data Visualization
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <InfoCard icon={Award} title="Volunteer Experience">
              <p className="font-semibold text-[#26382D]">
                PT Semen Padang Fun Run
              </p>
              <p>
                Participated as a volunteer in the annual Fun Run event.
              </p>
            </InfoCard>

            <InfoCard icon={BriefcaseBusiness} title="Academic Experience">
              <p>
                Developed academic projects involving data analysis,
                dashboard creation, and data visualization.
              </p>
            </InfoCard>
          </div>
        </Sec>
      </div>

      {/* PROJECTS */}
      <div id="projects" className="scroll-mt-20 bg-white/40">
        <Sec label="Selected work" title="My Projects">
          <p className="mb-8 max-w-2xl leading-7 text-gray-600">
            A collection of academic and internship projects where I
            explore data, build dashboards, and communicate insights
            through visualization.
          </p>

          <ProjectCarousel projects={projects} />
        </Sec>
      </div>

      {/* CERTIFICATES */}
      <div id="certificates" className="scroll-mt-20">
        <Sec label="Learning & development" title="Certificates">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="soft-card p-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-meadow/20 text-lagoon">
                <Award size={25} />
              </div>

              <p className="text-sm font-semibold text-berry">
                Certificate of Completion
              </p>

              <h3 className="mt-2 text-xl font-bold text-[#26382D]">
                Data Management and Analytics
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Huawei ICT Academy
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Learning areas include data management, data analytics,
                and data infrastructure.
              </p>
            </div>
          </div>
        </Sec>
      </div>

      {/* CONTACT */}
      <div id="contact" className="scroll-mt-20 bg-white/40">
        <Sec label="Let's connect" title="Contact Me">
          <div className="contact-panel overflow-hidden rounded-[2rem] p-8 text-white shadow-xl md:p-12">
            <div className="grid gap-10 md:grid-cols-[1fr_0.8fr] md:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-meadow">
                  Get in touch
                </p>

                <h3 className="font-display text-3xl font-bold md:text-4xl">
                  Let&apos;s connect and create something meaningful.
                </h3>

                <p className="mt-5 max-w-lg leading-8 text-white/80">
                  I am open to connecting, learning, and exploring
                  opportunities related to data analytics and business
                  intelligence.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-4 rounded-2xl bg-white p-4 text-[#26382D] transition hover:-translate-y-1 hover:bg-meadow"
                >
                  <Mail size={22} />
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-gray-500">
                      Email
                    </span>
                    <span className="break-all font-semibold">
                      {profile.email}
                    </span>
                  </span>
                  <ExternalLink size={17} />
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl bg-white p-4 text-[#26382D] transition hover:-translate-y-1 hover:bg-meadow"
                >
                  <Linkedin size={22} />
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-gray-500">
                      LinkedIn
                    </span>
                    <span className="font-semibold">
                      Visit my LinkedIn profile
                    </span>
                  </span>
                  <ExternalLink size={17} />
                </a>

                
              </div>
            </div>
          </div>
        </Sec>
      </div>

      <Footer />
    </main>
  );
}
