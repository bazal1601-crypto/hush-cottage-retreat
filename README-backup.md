# HUSH 🌲 — Home Page (Frontend Assignment)

> React frontend for the **HUSH** cottage retreat brand — "a place for those who truly value privacy, calm, and a sense of control." This repo covers the **Home Page only**, built from the provided UI/UX design.

Design reference (Behance case study): https://www.behance.net/gallery/251530501/Cottage-Rent-House-rent-Hotel-Web-design-UXUI

---

## 📌 Scope

Only the **Home Page** is being built for this assignment — 6 sections, matching the provided design layout exactly.

## ✨ Sections

1. **Navbar** — HUSH logo, Cottages / Restaurant / Wellness & SPA / About Us / Contacts, "Choose a Cottage" button
2. **Hero** — "A Quiet Place You Can Rely On" headline, subtext, CTA button, forest cottage background image
3. **Brand Statement** — "HUSH is a place for those who truly value privacy, calm, and a sense of control" + supporting paragraph
4. **Explore Our Cottages** — gallery of cottages (Pine Haven, Cedar Grove, etc.)
5. **Included With Your Cottage** — amenities list (balanced breakfast, BBQ area, tub/sauna/swimming pool, private transfer, pet-friendly stay)
6. **Footer** — closing CTA / contact / links

## 🛠️ Tech Stack

- **React JS** (Create React App / Vite)
- CSS (component-scoped stylesheets, no global overrides)
- Git + GitHub for version control and team collaboration

## 📁 Project Structure & Team Division

Split across a **2-person team** by section ownership — each person owns their components and matching CSS file, so no one edits someone else's files directly.

```
src/
├── App.jsx                     # Integrator only — wires all sections together
├── App.css                     # Integrator only — global layout/resets
├── index.js
├── assets/                     # Shared images/icons
└── components/
    ├── Navbar.jsx               # Bazal
    ├── Navbar.css               # Bazal
    ├── Hero.jsx                 # Bazal
    ├── Hero.css                 # Bazal
    ├── BrandStatement.jsx       # Bazal
    ├── BrandStatement.css       # Bazal
    ├── CottageGallery.jsx       # Mamoona  (Explore Our Cottages)
    ├── CottageGallery.css       # Mamoona
    ├── Amenities.jsx            # Mamoona  (Included With Your Cottage)
    ├── Amenities.css            # Mamoona
    ├── Footer.jsx                # Mamoona
    └── Footer.css                # Mamoona
```

| Team Member | Owns | Branch |
|---|---|---|
| Bazal Ansar | Navbar, Hero, Brand Statement | `feature/navbar-hero-brand` |
| Mamoona Waqar | Cottage Gallery, Amenities, Footer | `feature/gallery-amenities-footer` |

## 🚀 Getting Started

```bash
git clone https://github.com/<your-username>/hush-cottage-retreat.git
cd hush-cottage-retreat
npm install
npm start
```

## 🌿 Git Workflow

1. Branch off `main` for your half: `git checkout -b feature/your-section`
2. Work only inside your own component/CSS files
3. Commit and push your branch: `git push origin feature/your-section`
4. Open a Pull Request into `main`
5. Integrator reviews and merges each PR, resolving `App.jsx` wiring as needed
6. After a merge, both run `git checkout main && git pull` before continuing

## 👥 Contributors

| Name | Role | GitHub |
|---|---|---|
| Bazal Ansar | Navbar, Hero & Brand Statement | [@bazal1601-crypto](https://github.com/bazal1601-crypto) |
| Mamoona Waqar | Cottage Gallery, Amenities & Footer | [@mamoonawaqar79](https://github.com/mamoonawaqar79) |

## 📄 License

This project is created for academic purposes as part of a frontend development assignment.
