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

- **Landing Page (`index.html`)**  
  - Marketing site → value proposition, student demos, pricing tiers, lead capture (AI assistant).  

- **Main Template (`/Main-Template/`)**  
  - Base portfolio design → projects, skills, certifications, and contact info.  
  - Reused + customized per student.  

- **Student Portfolios (`/Kaleb-Portfolio/`, `/Alexander-Thomas-Portfolio/`, `/Christian-Portfolio/`)**  
  - Real builds delivered to students.  
  - Example: *Kaleb (Welding)* → showcased welding projects, OSHA certification, skill progress bars.  

- **Assets (`/images/`, `/bootstrapThemes/`)**  
  - Shared resources → logos, Bootstrap CSS themes, icons.  

- **Payment Flow (`/payment/`)**  
  - Simple checkout interface for purchasing portfolio tiers.  
  - Not a full payment processor — served as proof of pricing structure.  

- **AI Agent (Voiceflow Integration)**  
  - Embedded assistant for answering FAQs + capturing leads.  

---

## 📊 Architecture Notes  

- **Lightweight by design** → no backend database; forms + manual builds ensured fast MVP delivery.  
- **Manual Build Process** → validated student demand before scaling into **ACS Results AI** automation.  
- **Hosting & Deployment** → Netlify static hosting for landing + portfolios.  
- **Data Handling** → only resumes + public project media collected; no sensitive personal data stored.  

---

## 📖 Related Docs  

- [README.md](./README.md) → Recruiter-facing project overview  
- [BUSINESS_PLAN/](./BUSINESS_PLAN/) → Business plans and scaling vision  
