# Science under Sail — nettside (scienceundersail.no)

## Project state (updated 2026-11-09, after footer/nav/medlemskap rework)

Jekyll site on GitHub Pages (custom domain, HTTPS enforced). Repo:
`C:\Users\Marie\Documents\ScienceUnderSail\github\scienceundersail-no`
Branch `master`, deployed by GitHub Pages on push. No Ruby/Jekyll locally —
all verification via git history + post-push visual checks by user.

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
- Nav order (order of appearance on homepage, per user 2026-11-09):
  Om oss · Flåten (dropdown) · Medlemskap (dropdown: Om medlemskap →
  #medlemskap, /medlemskap/forsker-for-en-dag/, /medlemskap/rydding-og-bekjempelse/)
  · Forskning og ekspedisjoner (dropdown) · Oppdrag · Kontakt · language globe.
  Old top-level "Bli forsker for en dag" link REMOVED
- Scroll story: about "Bli med om bord" → #fleet; fleet "Slik kan du være
  med" → #medlemskap; medlemskap "Finn ut hva vi gjør" → #forskning;
  forskning: icon tile → /ekspedisjoner/ + "Slik finansierer vi
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
- `medlemskap/rydding-og-bekjempelse.md` (/medlemskap/rydding-og-bekjempelse/):
  ryddedag contents (strandrydding, kystskog, parkslirekne, stillehavsøsters),
  reporting as data, register interest → kontaktskjemaet
- Tiers: "medlemskap gratis + støttemedlem VALGFRI sum/år (suggested 500 kr,
  user picks own sum, 2026-11-09)"; money goes to association bank account;
  manual Vipps/eFaktura invoicing after sign-up; NO payment processor (would
  add databehandler to personvern). Form has third mode "Jeg vil bli
  støttemedlem": navn, e-post + belop (number, kr per år, required when
  visible); 3-mode JS in contact.html disables hidden blocks so their fields
  are NOT submitted; mode values: medlemskap / stottemedlem / oppdrag
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
  'Bærekraftig vitenskap' + closing link to study sub-page. Subtitle
  'Vår motivasjon'
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
- Two modes via dropdown + vanilla JS: medlemskap (navn, email, fødselsdato
  required; adresse field DROPPED per user, commit 268cca6) / oppdrag (navn,
  email, tjeneste, melding)
- **fødselsdato NOT fødselsnummer** (user confirmed; strictly personal data under Norwegian law)
- Success page `takk.md` (/takk/, "Den ligger trygt i havn")
- User must still test both form modes end-to-end on the live site

## Privacy

- `personvern.md` (/personvern/) follows standard.no's section structure
  (Hvorfor → Utlevering → Lagringstid → Rettigheter → Klager → Endringer → Cookies → Kontakt)
- No email address published anywhere; no cookies/analytics set by the site
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
- Git: user commits via RStudio Git pane (needs commit message; unstage is harmless)
- Edit tool often fails on CRLF files with "String not found" — use Python
  heredoc scripts for nav.html, oppdrag.html and other CRLF files
