# HUSH 🌲 — Cottage Retreat Booking Website

> A React frontend for **HUSH**, a boutique cottage rental brand built for people who value privacy, calm, and a sense of control. Guests can browse private forest cottages, view amenities and pricing, and book a stay.

Design reference (Behance case study): https://www.behance.net/gallery/251530501/Cottage-Rent-House-rent-Hotel-Web-design-UXUI

---

## ✨ Features

- **Hero section** — full-bleed forest/cottage imagery with the HUSH brand statement and a "Choose a Cottage" call to action
- **Explore Our Cottages** — a gallery grid of available cottages (e.g. *Pine Haven*, *Cedar Grove*) with preview images
- **Included With Your Cottage** — amenities list (balanced breakfast, BBQ area, tub/sauna/swimming pool, private transfer, pet-friendly stay)
- **Cottage detail view** — territory area, guest capacity, bedroom count, nightly price, check-in/check-out times, and an "About Cottage" description
- Fully responsive layout (desktop, tablet, mobile)

## 🛠️ Tech Stack

- **React JS** (Create React App / Vite)
- CSS (component-scoped stylesheets, no global overrides)
- Git + GitHub for version control and team collaboration

## 📁 Project Structure & Team Division

This project is split across a 3-person team by **section ownership** — each person owns a set of components and their matching CSS file, so no one edits someone else's files directly.

```
src/
├── App.jsx                # Integrator only — wires all sections together
├── App.css                # Integrator only — global layout/resets
├── index.js
├── assets/                 # Shared images/icons
└── components/
    ├── Navbar.jsx           # Person A
    ├── Navbar.css           # Person A
    ├── Hero.jsx              # Person A
    ├── Hero.css               # Person A
    ├── CottageGallery.jsx      # Person B  (Explore Our Cottages)
    ├── CottageGallery.css      # Person B
    ├── Amenities.jsx            # Person B  (Included With Your Cottage)
    ├── Amenities.css             # Person B
    ├── CottageDetail.jsx          # Person C (individual cottage page)
    ├── CottageDetail.css          # Person C
    └── Footer.jsx                  # Person C
    └── Footer.css                   # Person C
```

| Team Member | Owns | Branch |
|---|---|---|
| Person A | Navbar, Hero | `feature/navbar-hero` |
| Person B | Cottage Gallery, Amenities | `feature/gallery-amenities` |
| Person C | Cottage Detail page, Footer | `feature/detail-footer` |

## 🚀 Getting Started

```bash
git clone https://github.com/<your-username>/hush-cottage-retreat.git
cd hush-cottage-retreat
npm install
npm start
```

## 🌿 Git Workflow

1. Branch off `main` for your section: `git checkout -b feature/your-section`
2. Work only inside your own component/CSS files
3. Commit and push your branch: `git push origin feature/your-section`
4. Open a Pull Request into `main`
5. Integrator reviews and merges one PR at a time, resolving `App.jsx` wiring as needed

## 👥 Contributors

| Name | Role | GitHub |
|---|---|---|
| — | Navbar & Hero | @— |
| — | Gallery & Amenities | @— |
| — | Cottage Detail & Footer | @— |

## 📄 License

This project is created for academic purposes as part of a frontend development assignment.
