# Science under Sail — nettside (scienceundersail.no)

## Project state (updated 2026-11-09, after GSC/SEO rework, commit 30333f6)

Jekyll site on GitHub Pages (custom domain, HTTPS enforced). Repo:
`C:\Users\Marie\Documents\ScienceUnderSail\github\scienceundersail-no`
Branch `master`, deployed by GitHub Pages on push. No Ruby/Jekyll locally —
all verification via git history + post-push visual checks by user.

## SEO / Search Console (2026-11-09, commit 30333f6 — user approved commit+push)

- GSC reported "Page with redirect" + "Crawled - currently not indexed".
  Root causes fixed: (1) head.html canonical was HARDCODED to homepage on
  every page -> Google dropped all subpages as duplicates; (2) sitemap listed
  only homepage with stale 2026-02-23 lastmod; (3) every page had identical
  title "Science under Sail"
- Now: canonical per page via `site.url + page.url`; titles
  `{{ page.title }} | Science under Sail` (homepage stays bare, title==blank
  guard for layoutless pages); hreflang trio ONLY on homepage
  (scienceundersail.org is a real live English one-pager (lang=en) that
  reciprocates hreflang - intentional, do not remove; it 404s on all
  subpages); OG/Twitter tags added
- sitemap.xml (HAND-MAINTAINED, no Jekyll plugin): 9 indexable URLs
  (/, vildanden, salka-valka, medlemskap, medlemskap/forsker-for-en-dag,
  medlemskap/rydding-og-bekjempelse, ekspedisjoner,
  ekspedisjoner/accidental-epiphytes, personvern) with current lastmod.
  NOT listed: /takk/ (form success page), /404.html. Update lastmod when
  pages change meaningfully
- Per-page meta descriptions in front matter `description:` of the 8 content
  pages; head.html falls back to site.description. Trailing-slash-less URLs
  (e.g. /medlemskap) 301 -> slashed (GitHub Pages, normal); www/http 301 ->
  https apex (normal, not errors)
- GA4 (GTM-KTRBC4SF, contains G-D38VB20PKB): user chose KEEP + consent banner.
  Consent-gated loader in head.html (no gtm.js before consent; localStorage
  key `sus-cookie-consent`, values granted/denied; banner injected by JS,
  styled inline in head.html <style>); "Kakeinnstillinger" link in
  credits.html footer re-opens banner (clears choice)
- personvern.md: Google (Google Ireland/LLC, USA) now listed as databehandler
  for GA4 (consent-gated); Cookies section rewritten (accurate, _ga ~2 years);
  "ingen andre sporingsverktøy" phrasing
- JSON-LD in head.html: logo -> logo.png (was .ico), inLanguage nb (was "no")
- Academicons CDN bumped to pinned @1.9.4 (was floating @1)
- Merriweather 300/800 etc. IS used (body text via _sass/_mixins.scss
  serif-font) - do not trim Google Fonts weight lists as "optimization"

## Site structure

- `_layouts/front.html` (homepage): nav, header, about, fleet, medlemskap,
  forskning, oppdrag, contact, credits, scripts
- `_layouts/project.html` (vildanden, salka-valka, takk, ekspedisjoner,
  accidental-epiphytes, medlemskap*): loads `css/project.css`, includes
  contact + credits + scripts
- `_layouts/default.html` (404)
- Sections as `_includes/`: about (#about), fleet (#fleet), medlemskap
  (#medlemskap, renamed from bli-forsker 2026-11-09 per user), oppdrag
  (#oppdrag), forskning (#forskning), contact (#contact contains heading +
  form anchored at #kontaktskjema; envelope row above form REMOVED per user)
- Nav order (updated 2026-11-09, commit 72f91ff): Om oss (dropdown:
  Om oss → #about, Vår motivasjon → /ekspedisjoner/) · Flåten (dropdown) ·
  Medlemskap (dropdown: Om medlemskap → #medlemskap,
  /medlemskap/forsker-for-en-dag/, /medlemskap/rydding-og-bekjempelse/) ·
  Forskning (dropdown: Forskning → #forskning, Tilfeldige epifytter →
  accidental-epiphytes) · Oppdrag · Kontakt · language globe. Homepage
  SECTION heading in forskning.html still reads "Forskning og ekspedisjoner"
- Scroll story: about "Bli med om bord" → #fleet; fleet "Slik kan du være
  med" → #medlemskap; medlemskap "Finn ut hva vi gjør" → #forskning;
  forskning: icon tile → /ekspedisjoner/accidental-epiphytes/ (fixed
  3e5a382 - was /ekspedisjoner/ = Var motivasjon) + "Slik finansierer vi
  aktivitetene våre" → #oppdrag; oppdrag ends with envelope icon "Ta
  kontakt" → #kontaktskjema (replaced old "Ta kontakt" button per user).
  All `page-scroll` (1250ms). Order/wording intentional, do not "fix"
- Footer credits: © line + `hr.footer-rule` + profiler icons — "Finn oss
  her" strip is CENTERED below Personvern with a horizontal rule (per user
  2026-11-09); CSS in css/main.scss `.credits hr.footer-rule` +
  `text-align: center` on .profiler-icons
- Bootstrap 3 + jQuery (Start Bootstrap Creative theme); most files CRLF —
  edit tool often fails to match (CRLF/mixed endings): use Python heredoc
  scripts for edits in CRLF files (nav.html, oppdrag.html)

## Medlemskap (renamed from "Bli forsker for en dag", 2026-11-09)

- Homepage section `_includes/medlemskap.html` id=#medlemskap: intro
  (medlemskap gratis, støttemedlemskap kommer), 3 cards (1) Dugnad om bord
  2) Forsker for en dag 3) Rydding og bekjempelse), membership note →
  kontaktskjemaet, closing scroll → #forskning. Old
  `_includes/bli-forsker.html` is UNREFERENCED, delete after user checks
- `medlemskap.md` (/medlemskap/, project layout, default VA header):
  membership explainer — gratis medlemskap w/ bullet benefits, Støttemedlem
  500 kr/år (faktura sendes etter påmelding; kontingent to boat/equipment/
  expeditions), links to the two sub-pages, "Bli medlem" button →
  #kontaktskjema (homepage section, not its own page)
- `medlemskap/forsker-for-en-dag.md` (/medlemskap/forsker-for-en-dag/):
  what a day on board contains, why folkeforskning (links to
  /ekspedisjoner/), register interest → kontaktskjemaet
- Medlemskap subpage header images (72f91ff): forsker-for-en-dag.md →
  fleet/bliforsker.jpg (live), rydding-og-bekjempelse.md → fleet/rydding.jpg
  (FILE NOT YET ADDED by user - header shows gradient only until added)
- All three medlemskap md pages: CTA button (Bli medlem / Registrer
  interesse) is centered `.btn-primary.page-scroll` → `#kontaktskjema`
  (the form is in the project layout, so it scrolls to the form ON the
  subpage; fixed ef04fc3 — was a link to the front page form). White text
  on the button: css/project.css `#kontaktskjema .btn-primary, .project-content
  .btn-primary { color: #fff }` (project-content a orange link color outranked
  the old kontaktskjema-only rule; fixed 72f91ff)
- `medlemskap/rydding-og-bekjempelse.md` (/medlemskap/rydding-og-bekjempelse/):
  ryddedag contents (strandrydding, kystskog, parkslirekne, stillehavsøsters),
  reporting as data, register interest → kontaktskjemaet
- Tiers: "medlemskap gratis + støttemedlem VALGFRI sum/år (suggested 500 kr,
  user picks own sum, 2026-11-09)"; money goes to association bank account;
  manual Vipps/eFaktura invoicing after sign-up; NO payment processor (would
  add databehandler to personvern). Form has third mode "Jeg vil bli
  støttemedlem": navn, e-post + belop (number, kr per år, required when
  visible); 3-mode JS in contact.html disables hidden blocks so their fields
  are NOT submitted; mode values: medlemskap / stottemedlem / oppdrag.
  Stottemedlem mode has fodselsdato (left) + belop (right) since 72f91ff
  (per user, same layout as medlemskap mode)
- Nav Medlemskap item is a dropdown (per user) with subpages; medlemskap
  dropdown added to hover-open CSS in nav.html (<style> block)

## Salka Valka page (commit 55500f8)

- Narrative: she's the overseas boat; expedition resulted in published study
  Hoensbroech, de Rivera & Zotz (2026) 'Multiscale drivers of accidental
  epiphytism in temperate Europe', Frontiers of Biogeography 19: e207331,
  https://doi.org/10.21425/fob.19.207331 (verified live); sustainable-science
  section - wording is intentional, keep it
- Per-page header images: ekspedisjoner.md -> img/fleet/exp.JPG (UPPERCASE -
  GitHub Pages paths are case-sensitive, fixed 6827b04), accidental-epiphytes.md
  -> img/fleet/accepi.jpg (fixed a94f2d0)
- Embedded interactive map: Connect Cloud Shiny app
  https://marie-hoensbroech-accidental-epiphytes-expedition.share.connect.posit.cloud/
  (public, allows iframe embedding); iframe styled in css/project.css;
  'Åpne kartet i eget vindu' fallback link below
- personvern.md: Posit Connect Cloud (Posit, USA) listed as databehandler
  for the map; sist oppdatert november 2026
- Location maps (f8925be): OSM embed iframes, height 360, geocoded via
  Nominatim. Vildanden: Holmen, Strusshamn, Askøy in vildanden.md; Salka
  Valka: Marina Coruña in salka-valka.md. OSM embeds need OSM credit if
  user asks about attribution
- `_layouts/project.html` reads `header_image` front matter -> style attr
  background (VA_landscape.jpg on vildanden, SV.jpg on salka-valka, exp.JPG
  on ekspedisjoner, accepi.jpg on accidental-epiphytes); pages without it
  keep css default (VA)
- ekspedisjoner.md (/ekspedisjoner/): own page, ONLY the motivation:
  'Bærekraftig vitenskap' + closing link to study sub-page. TITLE now
  'Vår motivasjon' (72f91ff, matches nav label), subtitle 'Vår motivasjon'
- accidental-epiphytes.md: 'Ekspedisjonen og studien' (expedition + DOI
  study link, one line) + 'Utforsk observasjonene' (Connect Cloud map
  iframe 720px + fallback). iNaturalist link points at
  https://www.inaturalist.org (platform), NOT the user profile
- Homepage 'Forskning og ekspedisjoner' section (forskning.html, id stays
  #forskning): intro text + wiggly fa-location-arrow icon tile 'Tidligere
  ekspedisjoner' → /ekspedisjoner/ + separator + finansierer button →
  #oppdrag. NOTE: fa-map-o does NOT exist in bundled Font Awesome 4.3
  (only fa-map-marker) - fa-location-arrow used instead
- Profiler symbols (iNaturalist, ResearchGate, ORCID, GitHub) in
  _includes/profiler.html (icons only), included INSIDE
  _includes/credits.html below the ©/Personvern line + footer-rule - so
  they appear on every page incl. 404. CSS: .credits .profiler-icons
- kramdown gotcha: markdown links must be on ONE line - [text] newline
  (url) does NOT render as a link (broke the DOI link, fixed f8925be)

## Form (form.taxi, EU/GDPR — user rejected Formspree for US transfer)

- Endpoint `https://form.taxi/s/ghkelxkw` in `_includes/contact.html`, wired and live
- Hidden: `_subject`, `_next` → https://scienceundersail.no/takk/, `_gotcha` honeypot; UTF-8; consent checkbox
- Four modes via dropdown + vanilla JS: medlemskap (navn, email, fødselsdato
  required; adresse field DROPPED per user, commit 268cca6) / stottemedlem
  (fodselsdato + belop) / oppdrag (navn, email, tjeneste, melding) / annet
  (hint text only + shared navn/email/melding fields)
- **fødselsdato NOT fødselsnummer** (user confirmed; strictly personal data under Norwegian law)
- Success page `takk.md` (/takk/, "Den ligger trygt i havn")
- User must still test both form modes end-to-end on the live site

## Privacy

- `personvern.md` (/personvern/) follows standard.no's section structure
  (Hvorfor → Utlevering → Lagringstid → Rettigheter → Klager → Endringer → Cookies → Kontakt)
- No email address published anywhere. GA4 cookies ONLY after consent
  (see SEO section); no other cookies/analytics
- Known cleanup: Google Fonts still loaded from Google CDN in head.html —
  IP transfer to Google; self-host fonts if user wants full compliance

## Content decisions (user's choices)

- Community-first framing: volunteer association, "bli forsker for en dag"
  (now a sub-page under /medlemskap/), startup honesty ("i startgropen",
  cards marked "Under utvikling")
- Section names: oppdrag (paid work, funds the association), forskning
  (profiles), medlemskap (activities + membership)
- English comms with user, Norwegian (nb) site content

## Fixed gotchas (do not regress)

- Scripts/styles use `{{ site.baseurl }}/` absolute paths (relative broke on subpages)
- Nav section links point at `{{ site.baseurl }}/#section` — work from subpages;
  `js/creative.js` smooth-scrolls on page load with a hash (1250ms easeInOutExpo)
- `page-scroll` handler must use `this.hash` as the jQuery selector, NOT
  `$anchor.attr('href')` - hrefs like `/#fleet` are invalid selectors and threw,
  killing the handler so buttons jumped instead of scrolled (fixed 268cca6)
- CSS for oppdrag images keyed to `#oppdrag` (was #portfolio pre-rename)
- vildanden.md content was truncated at commit f9629ad; intact version at 07eac16
- Git: user commits via RStudio Git pane (needs commit message; unstage is harmless);
  assistant may commit+push on explicit user request (ef04fc3). AGENTS.md is tracked
- Edit tool often fails on CRLF files with "String not found" — use Python
  heredoc scripts for nav.html, oppdrag.html and other CRLF files (incl. all
  new medlemskap md files)
- Hash-arrival scroll (js/creative.js): target must be measured BEFORE
  `$('html, body').hide()` — hidden body reports offset().top = 0, which
  scrolled every subpage arrival to the top (fixed ef04fc3). Scroll re-runs
  on img one('load') + window load because subpage images shift layout.
  Do not regress to hide-then-measure
