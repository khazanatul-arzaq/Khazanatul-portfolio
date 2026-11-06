# Khazanatul Arzaq – Portfolio (Next.js + TypeScript + Tailwind)
1. **Install:** `npm install`
2. **Run locally:** `npm run dev` → http://localhost:3000 (production check: `npm run build && npm start`)
3. **Add project screenshots:** copy images into `public/images/<project-folder>/` (semen-padang, simponi, covid-dashboard, global-superstore), then in `lib/data.ts` add `{src:"images/<folder>/<file>.png", caption:"..."}` to that project's `gallery` (replace a "coming soon" entry).
4. **Update info:** everything lives in `lib/data.ts` (profile, skills, projects). Write findings only after verifying them.
5. **GitHub:** `git init && git add . && git commit -m "Initial portfolio"`, create an empty repo on github.com, then `git remote add origin <url> && git push -u origin main`.
6. **Vercel:** vercel.com → Add New → Project → import the repo → Deploy (framework auto-detected). Optionally set `NEXT_PUBLIC_SITE_URL` to your live URL for correct Open Graph links.
