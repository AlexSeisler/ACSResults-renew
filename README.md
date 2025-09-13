# ACS Results - Digital Portfolios for Trades Students 🛠️  

[![Live Demo on Netlify](https://img.shields.io/badge/Live-Demo-green?logo=netlify)](https://acsresults.netlify.app)  

ACS Results was my **first entrepreneurial project**, launched in my first year of college.  
Its mission: give **blue-collar and vocational students** a professional digital presence through **personalized portfolio websites** - bridging the gap between static resumes and real-world skill showcases.  

It also served as a **business funnel**, leading to my **first paid client (RougeStoryBookWorld)**.  

---

## 🌐 Live Demo  

- **Landing Page:** [https://acsresults.netlify.app](https://acsresults.netlify.app)  

- **Repo Owner:** [Alex Seisler](https://github.com/AlexSeisler)  

---

## ✨ Features  

- 🎓 **Student Portfolios** → skills, certifications, and projects visualized.  
- 📸 **Before/After Project Showcases** → welding and fabrication demos.  
- 🎨 **Custom Templates** → baseline template + student-specific builds.  
- 💬 **AI Assistant (Voiceflow)** → lead capture + service inquiries.  
- 🏷️ **Pricing Tiers** → 1-page portfolio ($45), multi-page portfolio ($200), full business site ($1000).   
- 📱 **QR Codes** → distributed on posters for campus campaign.  

---

## 📊 Impact  

👥 **Dozens of student portfolios built** at Thaddeus Stevens College  

📸 **Visual showcase** of welding & trade student projects  

🎯 **On-campus marketing campaign** → posters + QR funnel  

💼 **First external client** → RougeStoryBookWorld (small business site)  


---

## 🛠 Tech Stack  

**Frontend**  
- React 18 + TypeScript  
- Vite (build system)  
- Tailwind CSS + shadcn/ui components  
- lucide-react (icons)  

**Infrastructure**  
- Hosting: Netlify (CI/CD from GitHub)  
- Forms: Stubbed local handler (Supabase removed for recruiter-facing build)  
- Distribution: QR codes + poster campaign  

---

## 📂 Repository Structure  

```text
ACS-Results/
├── public/                   # Static assets
├── src/
│   ├── components/
│   │   ├── Testimonials/     # Recruiter-facing validation
│   │   ├── Pricing/          # Pricing + purchase flow
│   │   ├── StudentPortfolios/# Student portfolio cards
│   │   └── Onboarding/       # Stubbed form flow
│   ├── lib/                  # Utilities (form.ts stubbed)
│   ├── types/                # Shared TypeScript types
│   └── App.tsx               # Root component
├── netlify.toml              # Netlify build config
├── package.json
├── ARCHITECTURE.md
└── README.md
```

## 📖 Additional Documentation  

- [ARCHITECTURE.md](./ARCHITECTURE.md) → System design and data flow  
- [BUSINESS_PLAN/](./BUSINESS_PLAN/) → Business plan PDFs and supporting documents  
- [ARTIFACTS/](./ARTIFACTS/) → Campaign Posters

📌 Supporting System: **ACS Results AI** (successor project) → automated portfolio builder & scaling vision.

## 📄 License
MIT — Open for educational and referenced use.