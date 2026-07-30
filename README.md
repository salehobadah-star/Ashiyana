# 🌿 Ashiyana Group - Building Contracting & Civil Engineering Website

A modern, responsive, nature-inspired multi-page website built for **Ashiyana Group (Ashiyana Contracting LLC)** — Dubai’s premier dedicated building contracting and civil engineering company established in 2002.

![Ashiyana Group Logo](https://ashiyanagroup.com/wp-content/uploads/2024/03/cropped-logo_icon-192x192.png)

---

## 🚀 Live Demo & Pages Overview

The website consists of **7 dedicated, fully interactive HTML pages**:

1. **[Home (`index.html`)](index.html)** — Hero section with particle effects, stats counter, company overview snippet, auto-swiping featured projects carousel with arrow navigation, core capabilities, and call-to-action.
2. **[About Us (`about.html`)](about.html)** — Company history since 2002, **"Who are Ashiyana Group?"** section, centered portrait profile of Founder & Managing Director **Mr. Hasinul Haque Mohammad**, mission, vision, corporate philosophy, and milestones timeline.
3. **[Our Projects (`projects.html`)](projects.html)** — Interactive portfolio featuring **all 89+ real projects** delivered across Dubai, Sharjah, and Abu Dhabi with **6 category filter tabs** and **location dropdown filtering**.
4. **[Services (`services.html`)](services.html)** — Turnkey Building Contracting, Civil Structural Engineering, Heavy Steel Fabrication & Erection, Ashiyana External Landscaping, MEP Contracting, and Industrial Warehouses.
5. **[Contact Us (`contact.html`)](contact.html)** — Contact form integrated with Web3Forms API for direct email delivery, head office details (Burlington Tower, Business Bay, Dubai), and Google Maps location.
6. **[Careers (`careers.html`)](careers.html)** — Talent pool submission form for civil engineers, site foremen, and project managers.
7. **[Employee Corner (`employee-corner.html`)](employee-corner.html)** — Secure portal interface for internal staff, site logs, payslips, leave tracker, and engineering directories.

---

## ✨ Features & Key Highlights

- **🌿 Nature-Inspired Design System**: Custom forest-green palette (`#1a5c2a`, `#4A7C2E`), gold accents (`#8B6914`), floating leaf animations, glassmorphism cards, and organic wave section dividers.
- **🏗️ 89+ Complete Projects Portfolio**:
  - Filterable by **Category** (*ALL, COMMERCIAL, PRIVATE VILLA, RECREATIONAL, RESIDENTIAL, WAREHOUSE*)
  - Filterable by **Location** (*Dubai, Sharjah, Abu Dhabi*)
  - Click any card to launch an **Interactive Multi-Photo Gallery Modal** with built-up area, scope of work, execution status, and detailed engineering specs.
- **🔄 Auto-Swiping Featured Projects Carousel**:
  - Automatic sliding every 3.5 seconds with seamless looping.
  - Manual `❮` Prev & `❯` Next navigation buttons.
  - Auto-pause on mouse hover and touch interactions.
- **📬 Working Email Form Collection**: Integrated with [Web3Forms API](https://web3forms.com) to deliver contact and career submissions straight to your inbox without server-side code.
- **📱 100% Responsive Layout**: Mobile-first fluid design with full slide-out navigation menu for mobile screens.
- **⚡ Lightweight & Fast**: Pure HTML5, CSS3, and ES6 JavaScript with zero external heavy frameworks.

---

## 📁 Repository Directory Structure

```text
Ashiyana Group/
├── index.html            # Home page (Hero, Carousel, Services, Stats)
├── about.html            # About Us (Company profile, Founder info, Mission/Vision)
├── projects.html         # Portfolio (89+ Projects, Category & Location filters)
├── services.html         # Contracting Services (Civil, Steel, Landscaping, MEP)
├── contact.html          # Contact page (Web3Forms email form & Map)
├── careers.html          # Careers page (Application submission form)
├── employee-corner.html  # Internal Employee Portal UI
├── README.md             # Git repository documentation
├── css/
│   └── style.css         # Complete design system & responsive styling
├── js/
│   └── main.js           # 89 project dataset, filters, modal gallery & slider logic
└── images/
    ├── managing_director.jpg # Founder & Managing Director portrait
    └── chief_engineer.jpg    # Technical team asset
```

---

## 🛠️ Tech Stack & Requirements

- **Markup**: HTML5 (Semantic Structure & SEO Metadata)
- **Styles**: Custom Vanilla CSS3 (Variables, Flexbox, Grid, CSS Animations, Glassmorphism)
- **Scripting**: Vanilla JavaScript ES6+ (IntersectionObserver, Modal System, Dynamic Filtering)
- **Icons & Typography**: Google Fonts (*Outfit* & *Inter*) + Native SVG & Emoji Icons
- **Form Backend**: Web3Forms API (Free AJAX JSON Endpoint)

---

## 📧 How to Setup Email Form Submissions

Forms on the **Contact** and **Careers** pages are ready to send emails via Web3Forms.

1. Go to **[web3forms.com](https://web3forms.com)** and create a free Access Key for your email address.
2. Verify the key link sent to your inbox.
3. Open `contact.html` and `careers.html` in your text editor.
4. Replace `YOUR_ACCESS_KEY_HERE` with your Web3Forms Access Key:

```html
<!-- Example in contact.html & careers.html -->
<form data-form="contact" data-key="your-actual-web3forms-access-key">
```

---

## 💻 Local Setup & Deployment

### Run Locally
Since this is a static web application, no server installation or build step is required:
1. Clone or download this repository:
   ```bash
   git clone https://github.com/your-username/ashiyana-group-website.git
   ```
2. Navigate into the project folder:
   ```bash
   cd ashiyana-group-website
   ```
3. Open `index.html` directly in your favorite web browser (Chrome, Firefox, Edge, Safari).

### Free Hosting Options
You can deploy this site in under 1 minute using any free static host:
- **GitHub Pages**: Go to Repository Settings → Pages → Select `main` branch → Save.
- **Netlify**: Drag and drop the root folder into [Netlify Drop](https://app.netlify.com/drop).
- **Vercel**: Run `npx vercel` in the project root directory.

---

## 🏢 About Ashiyana Group

Established in October 2002 by **Mr. Hasinul Haque Mohammad**, Ashiyana Group (Ashiyana Contracting LLC) operates as a dedicated building contracting and civil engineering company based in Business Bay, Dubai, UAE.

- **Headquarters**: Offices 2303 & 2304, Burlington Tower, Business Bay, Dubai, UAE
- **Email**: info@ashiyanagroup.com
- **Core Operations**: Civil Engineering, General Building Contracting, Structural Steel Erection, External Landscaping, MEP Contracting.

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
