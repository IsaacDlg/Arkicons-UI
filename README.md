# Arkicons - Arquitectura & Construcción

Modern Landing Page for Arkicons, a premium architecture and construction firm specializing in imported finishes and roofing.

## 🚀 Features Implemented

### 1. Premium UI/UX "Design Overhaul"
- **Glassmorphism**: Frosted glass effects on navigation and cards for a modern, architectural feel.
- **Parallax Effects**: Smooth scrolling depth on the Hero section.
- **Typography**: Migrated to **Montserrat** (Headings) and **Roboto** for a clean, stable industrial look.
- **Watermark**: Subtle brand integration using the logo as a multiply-blended background watermark.

### 2. Dynamic Product Gallery
- **Category System**: Filter products by key categories:
    - Paneles WPC
    - Teja Española PVC
    - Tumbado PVC
    - Láminas Adhesivas
- **Interactive Grid**: Folders open into detailed image grids.
- **Lightbox**: Full-screen image zoom.
- **Direct Quotes**: "Cotizar" button on every image links directly to WhatsApp with the specific reference.

### 3. Animated Statistics
- **Count-Up Animation**: Years of experience and project counts animate from 0 when scrolled into view (Intersection Observer).

## 🛠️ Tech Stack
- **React 18** (Vite)
- **React Router DOM**
- **Vanilla CSS** (Variables for theming, Grid/Flexbox for layout)

## 📦 Data Structure
Images are strictly organized in `public/images/` with sanitized filenames (`category-n.jpg`) to ensure 100% reliability across devices.

## 🏃‍♂️ How to Run

```bash
npm install
npm run dev
```

---
*Developed by IsaacDlg*
