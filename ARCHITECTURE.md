# ACS Results - Architecture Overview 🏗️  

This document outlines the **system flow** and **technical structure** behind ACS Results.  
The platform was intentionally lightweight but designed to prove the **portfolio builder concept** and deliver real value to students.  

---

## 🔄 System Flow  

```text
Student Resume / Media Upload
          │
          ▼
     Google Form Intake
          │
          ▼
 Manual Portfolio Build (based on Main Template)
          │
          ▼
  Student Portfolio Website (HTML/CSS/JS)
          │
          ▼
  **QR Code → Shared on Resume / Posters → Recruiter Access**  

```

- **Input:** Students submitted resumes, project photos, and certifications via a **Google Form**.  
- **Processing:** I manually built portfolios using the **Main-Template** (customized HTML/CSS).  
- **Output:** Students received live portfolio sites hosted on **Netlify**.  
- **Distribution:** QR codes linked directly to their portfolios for use at **career fairs and job applications**.  

---

## 🧩 Components

### Landing Page (React SPA)
- Value proposition, testimonials, pricing tiers, portfolio demos.

### Testimonials (`/src/components/Testimonials/`)
- Academic + industry validation  
- Includes: Ashraful, James Marcus, Dr. Laughner, Spencer Harper  

### Pricing (`/src/components/Pricing/`)
- Recruiter-facing price tiers  
- Real links to case study flows  

### Student Portfolios (`/src/components/StudentPortfolios/`)
- Modernized student showcase cards  
- Replaces static HTML templates  

### Onboarding Form (`/src/components/Onboarding/OnboardingForm.tsx`)
- Demo intake flow  
- Backed by a **stubbed `form.ts` utility** (no external DB)  

### Assets (`/public/`)
- Static resources (logos, screenshots, posters)  

---

## 📊 Architecture Notes

- **Modernized Frontend** → React + Vite replaces static HTML/Bootstrap  
- **Removed Backend Dependency** → Supabase integration removed for simplicity; replaced with a stub for recruiter demo  
- **Hosting & Deployment** → Netlify build pipeline (`npm run build`, publish `dist/`)  
- **Data Handling** → Only demo data included; no sensitive or personal student data stored in repo  
- **Recruiter Lens** → Repo cleaned of scaffolding, `.bolt/` removed, `.env` sanitized, docs updated  

---

## 📖 Related Docs  

- [README.md](./README.md) → Recruiter-facing project overview  
- [BUSINESS_PLAN/](./BUSINESS_PLAN/) → Business plans and scaling vision  
