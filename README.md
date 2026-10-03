# AquaParts Chemicals — Industrial Water Treatment & RO Solutions

A production-grade web application for **AquaParts Chemicals**, the premier supplier of Reverse Osmosis (RO) chemicals, cartridge & bag filtration media, digital dosing equipment, membranes, and industrial water treatment engineering services based in Karachi, Pakistan.

---

## 🌊 Overview

**AquaParts Chemicals** serves textile processing mills, pharmaceutical facilities, beverage bottling plants, tanneries, power generation units, and municipal water stations across Karachi and Sindh. 

This application provides a complete digital catalog, technical specifications engine, interactive LSI antiscalant dosing calculator, project installation portfolio, engineering service modules, and client-side **real PDF TDS/MSDS datasheet generation**.

---

## 🚀 Key Features & Modules

### 1. Home Page (`/`)
- **Brand Hero & Value Proposition**: *"Clean Water. Better Life."* with visual water treatment asset showcases and direct inquiry CTAs.
- **Value Proposition Ribbon**: Premium Quality, Reliable Performance, Same-Day Karachi Delivery, and Dedicated Technical Support.
- **Product Range Grid**: 8 primary product categories with high-resolution photography, short specs, and instant inquiry actions.
- **Why Choose Us**: Operational statistics (8+ Years Experience, 500+ Industrial Clients, 1,500+ Plant Installations, 99.8% Batch Satisfaction).
- **Direct Calculator Callout**: Instant launcher for the proprietary LSI & Antiscalant Dosage Calculation engine.

### 2. About Us Page
- **Company Foundation**: History and positioning of AquaParts Chemicals as Karachi’s leading water treatment distributor.
- **Mission & Vision**: Clear corporate commitments to water purity, industrial uptime, and environmental stewardship.
- **Facility Spotlight**: Overview of the central warehousing and chemical distribution facility on Hub River Road, Baldia Town.
- **Quality Credentials**: ISO 9001:2015 standards, Halal certified chemicals, NSF compliance, and Sindh EPA guidelines.

### 3. Products Catalog (`ProductsPage.tsx`)
- **Interactive Filtering & Search**: Instant real-time search by chemical name, catalog ID, or application with category filter tabs:
  - RO Chemicals (Antiscalants, Acidic & Alkaline CIP Cleaners, Biocides)
  - Cartridge Filters (PP Spun Melt-Blown, String Wound 1µm & 5µm, Jumbo 10"/20"/30"/40")
  - Liquid Bag Filters & Heavy-Duty Stainless Housings
  - Microprocessor Solenoid & Motor-Driven Dosing Pumps
  - Polyamide Thin-Film Composite RO Membranes (4040 & 8040 brackish and seawater elements)
  - Multimedia FRP Pressure Vessels & Pre-Treatment Valving
- **Technical Specification Drawer / Modal**: Detailed parameter tables (specific gravity, neat pH, active solids, packaging options, and dosing guidelines).
- **Client-Side Vector PDF Export**: Instant generation and download of official **A4 PDF Technical Data Sheets (TDS / MSDS)** via `jspdf`, formatted with official company headers, tables, safety protocols, and laboratory batch release stamps.
- **Direct WhatsApp Procurement**: One-click product-specific inquiry pre-filling for immediate dispatch quotations.

### 4. Engineering & Field Services (`ServicesPage.tsx`)
- **Turnkey RO Plant Installation & Commissioning**: Sizing from 500 LPH to 120,000+ LPH systems.
- **RO Membrane Cleaning & Descaling (CIP)**: Mobile CIP rigs for on-site acid/alkaline restoration achieving up to 98% design flux recovery.
- **Water Testing & Chemical Dosage Optimization**: Certified analytical laboratory testing (TDS, pH, Hardness, SiO₂, Fe, Cl⁻) with computer projections.
- **Annual Maintenance Contracts (AMC)**: SLA-backed preventive maintenance with under-4-hour emergency technician response across Karachi industrial estates.
- **4-Step Engineering Workflow**: Water Analysis -> Sizing & Projection -> Execution & Calibration -> 24/7 SLA Guarantee.

### 5. Technical Knowledge Base & Guides (`BlogPage.tsx`)
- **Featured Technical Guide**: *"Complete Guide to RO Antiscalants: How to Prevent Membrane Scaling & Maximize Plant Lifespan"*.
- **Specialized Engineering Articles**:
  - Solenoid vs. Motor-Driven Diaphragm Dosing Pumps.
  - Signs Your RO Membranes Need CIP Cleaning (Flow drop vs. dP rise).
  - Cartridge Filters 101: Spun Melt-Blown vs. String Wound Performance.
  - Mathematical models for Antiscalant Dosage in High TDS Groundwater.
  - Multi-media depth filtration & activated carbon chlorine reduction.
- **Interactive Article Reader**: Full reading modal with key technical parameters, core takeaways, and chemist consultation triggers.

### 6. Project Gallery & Installations (`GalleryPage.tsx`)
- **Real-World Case Studies**:
  - *SITE Area, Karachi*: 50,000 LPH Industrial RO System for continuous loom textile dyeing.
  - *Korangi Industrial Area*: GMP-verified dual chemical dosing skid for pharmaceutical process water.
  - *Keamari Port Facility*: 25,000 LPH Seawater Desalination Unit operating at 68 bar.
  - *Port Qasim Zone*: 80,000 LPH 2-stage sanitary RO train for beverage bottling.
  - *Leather Cluster Site*: Automated corrosion-proof dosing station for tannery effluent recovery.
  - *Baldia Town, Karachi*: Community municipal drinking water station with WHO potable compliance.
- **Karachi Industrial Delivery Matrix**: Defined response times for SITE (<45 min), Korangi/Landhi (90 min), F.B. Area (60 min), and Port Qasim/Hub (Same Day).

### 7. Contact Us & RFQ Desk (`ContactPage.tsx`)
- **Rapid Inquiry Form**: Full RFQ submission with plant location, product selector, quantity, and raw water parameters.
- **Central Depot Details**: Hub River Road, Baldia Town Industrial Zone, Karachi.
- **Procurement FAQs**: Lead times, MOQ policies, payment credit terms for registered industrial accounts, and Certificate of Analysis (COA) guarantees.

### 8. Interactive Tools & Modals
- **LSI & Antiscalant Dosage Engine (`DosageCalculatorModal.tsx`)**:
  - Live calculations for Langelier Saturation Index (LSI), Stiff & Davis Index (S&DSI), and Silica supersaturation percentages.
  - Computes stoichiometric ppm antiscalant dose, daily and monthly chemical consumption in kilograms, and recommended drum packaging.
  - One-click transfer of computed specifications directly into the RFQ procurement modal.
- **24/7 Emergency Dispatch Modal (`EmergencyModal.tsx`)**: Urgent dispatch hotline and plant triage form for sudden differential pressure spikes or membrane scaling alarms.
- **Floating Quick-Action Buttons**:
  - Floating WhatsApp dispatch button with animated live indicator.
  - Floating LSI Dosage Calculator shortcut.
  - Smooth scroll-to-top button.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | React 19 (Functional components, Custom Hooks) |
| **Language** | TypeScript (Strict type safety, custom interfaces) |
| **Build Tool** | Vite 8 + `@vitejs/plugin-react` |
| **Styling** | Tailwind CSS v4 (`@tailwindcss/vite`) |
| **Icons** | Lucide React + Custom Brand Vector SVGs (Facebook, Instagram, WhatsApp, LinkedIn) |
| **PDF Engine** | `jspdf` (Client-side vector generation for TDS & MSDS documents) |
| **Server/Proxy** | Node.js / Express (for production serving & Cloud Run deployment) |

---

## 🎨 Design System & Branding

- **Brand Color Palette**:
  - **Deep Industrial Navy**: `#092442` (Primary structure, navigation, solid corporate headers)
  - **Engineered Blue**: `#0d5ca8` (Primary brand accent, active states, key CTAs)
  - **Aqua Cyan**: `#009fe3` (Water highlights, badges, borders, technical parameters)
  - **Ecological Green**: `#22a048` (Pure water indicators, success states, WhatsApp branding)
  - **Surface Neutrals**: `#f8fafc` (Slate 50), `#ffffff` (White), `#e2e8f0` (Slate 200)
- **Zero Glassmorphism Discipline**: Crisp solid surfaces, high contrast, clean 1px borders, and solid cards designed for industrial legibility without performance overhead.
- **Collision-Free Desktop Navigation**: Proportional responsive spacing (`gap-3 xl:gap-6`, `text-xs xl:text-sm font-bold whitespace-nowrap`) ensuring zero overlap with the logo or action buttons on all viewports (1024px to 1920px+).

---

## 📁 Project Structure

```
├── .env.example              # Environment variables template
├── index.html                # HTML entry point with SEO metadata and Google Fonts
├── metadata.json             # AI Studio applet metadata & capabilities
├── package.json              # Project dependencies & build scripts
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite & Tailwind configuration
├── src/
│   ├── main.tsx              # Application mount point
│   ├── App.tsx               # Main layout, tab router, floating widgets & modals
│   ├── index.css             # Tailwind CSS imports & global utilities
│   ├── types/
│   │   └── index.ts          # Comprehensive TypeScript interfaces & types
│   ├── data/
│   │   └── mockData.ts       # Central catalog data, specs, articles, & project history
│   ├── utils/
│   │   └── generatePdf.ts    # Client-side A4 TDS/MSDS vector PDF generator (jsPDF)
│   ├── components/
│   │   ├── Header.tsx        # Responsive collision-free header with utility ribbon
│   │   ├── Footer.tsx        # 4-column structured corporate footer
│   │   ├── SocialIcons.tsx   # Pixel-accurate SVG vector icons (FB, IG, WA, LinkedIn)
│   │   ├── QuoteModal.tsx    # Procurement RFQ modal with auto-selected items
│   │   ├── EmergencyModal.tsx# 24/7 urgent plant troubleshooting dispatch modal
│   │   ├── ArticleModal.tsx  # Technical knowledge base publication reader
│   │   └── DosageCalculatorModal.tsx # Interactive LSI & stoichiometric dosing engine
│   └── pages/
│       ├── HomePage.tsx      # Landing page, hero, product highlights, trust badges
│       ├── AboutPage.tsx     # Company foundation, mission, vision, warehouse
│       ├── ProductsPage.tsx  # Filterable product catalog, tech specs, PDF downloads
│       ├── ServicesPage.tsx  # Industrial RO installation, CIP descaling, AMC, lab testing
│       ├── BlogPage.tsx      # Technical publications & engineering guides
│       ├── GalleryPage.tsx   # Verified Karachi industrial installations & delivery zones
│       └── ContactPage.tsx   # Procurement desk, RFQ form, Karachi logistics coverage
```

---

## 💻 Development & Build Scripts

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Starts the Vite dev server on port `3000`.

### 3. Validate TypeScript & Linting
```bash
npm run lint
```
Runs `tsc --noEmit` to ensure zero compilation or type errors.

### 4. Build for Production
```bash
npm run build
```
Creates an optimized static bundle in the `dist` directory.

---

## 📄 PDF Generation Specifications

When users click **"PDF TDS / MSDS"** or **"Export PDF Data Sheet"** on any product, `generateProductPdf` dynamically constructs an official vector PDF:
- **Dimensions**: Standard A4 (210mm x 297mm).
- **Header**: Official AquaParts navy masthead with company registration, email, phone, and Baldia Town address.
- **Document Metadata**: Reference ID (`AP-TDS-[CatID]`), generation date, and categorization.
- **Structured Specification Table**: Alternating rows detailing chemical class, active content %, specific gravity, neat pH, test standards, and packaging.
- **Performance Highlights**: Key chemical or mechanical engineering benefits.
- **Safety & Handling (MSDS Summary)**: Personal protective equipment (PPE), eye/skin first aid, and spill neutralization in accordance with SEPA guidelines.
- **Sign-Off Block**: Quality Assurance certification notice and direct dispatch hotline.

---

## 🏢 Company & Contact Information

- **Company Name**: AquaParts Chemicals
- **Facility Address**: Hub River Road, Baldia Town Industrial Zone, Karachi, Sindh 75760, Pakistan
- **Hotline & WhatsApp**: +92 333 3307845
- **Procurement Email**: aquapartchemicals@gmail.com
- **Operating Hours**: Monday – Saturday: 9:00 AM – 7:00 PM PKT (Sunday: 24/7 Emergency Dispatch)

---

## ⚖️ License

Copyright © 2026 AquaParts Chemicals. All rights reserved.
