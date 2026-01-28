# The Good Contractors List

A modern Next.js website connecting homeowners with vetted, professional contractors. Built with React, TypeScript, and Tailwind CSS.

## Overview

The Good Contractors List is a platform that facilitates connections between homeowners seeking professional home services and thoroughly vetted contractors. Every project is backed by our comprehensive guarantee program, providing coverage up to $350,000 for Elite projects.

## Features

- **Contractor Directory**: Search for vetted contractors by service type and location
- **Guarantee Program**: Two-tier protection system (Standard: $25K, Elite: $350K)
- **Homeowner Registration**: Free registration to access contractor network
- **Contractor Application**: Apply to join our elite network
- **Comprehensive Legal Pages**: Full Terms of Service and Privacy Policy
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Modern UI**: Clean, professional design with Tailwind CSS

## Technology Stack

- **Framework**: Next.js 16.1.6 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: React 19
- **Build Tool**: Turbopack

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
/app
  ├── page.tsx                 # Homepage
  ├── layout.tsx               # Root layout
  ├── globals.css              # Global styles
  ├── /contact                 # Contact page
  ├── /find-contractors        # Contractor search
  ├── /for-contractors         # Contractor application info
  ├── /guarantee               # Guarantee program details
  ├── /how-it-works           # Platform explanation
  ├── /privacy-policy         # Privacy policy
  ├── /register               # Homeowner registration
  └── /terms-of-service       # Terms of service

/components
  ├── Navigation.tsx           # Main navigation
  └── Footer.tsx               # Site footer
```

## Key Pages

### For Homeowners
- **Homepage**: Value proposition and feature overview
- **Find Contractors**: Search for contractors by service and location
- **How It Works**: Step-by-step platform guide
- **Guarantee**: Detailed guarantee program information
- **Register**: Homeowner registration form

### For Contractors
- **For Contractors**: Benefits and application process
- **Contact**: Contact form for inquiries

### Legal
- **Terms of Service**: Complete legal terms
- **Privacy Policy**: Data collection and usage policy

## Guarantee Program

### Standard Guarantee - Up to $25,000
- Register before work begins
- Hire contractors from our network
- Residential projects only
- Written Statement of Work required

### Elite Guarantee - Up to $350,000
- All Standard requirements PLUS:
- Elite Contractor network only
- Elite Project Acknowledgement Form (EPAF) required
- Statement of Work approved by Good Contractors

## Contact

**Good Contractors, LLC**
- Email: careteam@goodlistmail.com
- Website: The Good Contractors List

## License

Copyright © 2026 Good Contractors, LLC. All rights reserved.
