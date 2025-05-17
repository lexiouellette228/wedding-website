# Lexi & Mason's Wedding Website

Welcome to the official wedding website for the happy couple. This site allows invited guests to RSVP securely, view event details, browse travel and accommodation info, and more — all behind a password-protected login. The files have been modified for security precautions. 

## Tech Stack

- **Frontend:** React (with React Router)
- **Styling:** Bootstrap & custom CSS
- **Hosting & Backendless Functions:** Vercel (API Routes)
- **Authentication:** Password + JWT
- **Domain Management:** Namecheap (custom domain connected via Vercel)

---

## Features

- Password-protected access using JWT tokens
- Session expiration and logout logic
- RSVP form with dynamic party guest assignment
- Travel, Registry, Dress Code, and Gallery pages
- Mobile-responsive, custom-designed UI
- Backendless API endpoints deployed via Vercel:
  - `/api/login` – verifies password and returns JWT
  - `/api/verify` – validates JWT token on protected routes
