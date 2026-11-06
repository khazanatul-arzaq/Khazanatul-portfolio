
import Link from "next/link";
import { profile } from "@/lib/data";
import { ArrowUp, BarChart3, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#26382D] text-white">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-20 -top-28 h-64 w-64 rounded-full bg-[#318192]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#6BC658]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-12 md:px-8">
        {/* Main footer */}
        <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-9 md:flex-row md:items-center">
          {/* Brand */}
          <div>
            <Link
              href="/#home"
              className="group inline-flex items-center gap-3"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#318192] text-white shadow-lg transition duration-300 group-hover:-rotate-6 group-hover:bg-[#6BC658] group-hover:text-[#26382D]">
                <BarChart3 size={23} />
              </span>

              <span className="font-display text-xl font-bold tracking-tight">
                {profile.name}
                <span className="text-[#F17585]">.</span>
              </span>
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
              Turning data into insights through analysis, visualization,
              and meaningful storytelling.
            </p>
          </div>

          {/* Social links */}
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#6BC658]">
              Connect with me
            </p>

            <div className="flex gap-3">
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send email"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-[#6BC658] hover:bg-[#6BC658] hover:text-[#26382D]"
              >
                <Mail size={19} />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-[#318192] hover:bg-[#318192] hover:text-white"
              >
                <Linkedin size={19} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>

          <p>{profile.location}</p>

          <Link
            href="/#home"
            className="group inline-flex items-center gap-2 font-semibold text-white/70 transition hover:text-[#6BC658]"
          >
            Back to top
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition group-hover:-translate-y-1 group-hover:bg-[#6BC658] group-hover:text-[#26382D]">
              <ArrowUp size={15} />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
