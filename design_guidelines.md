# MCC Hosting Landing Page - Design Guidelines

## Design Approach
**Reference-Based Approach**: Bright, vibrant, and playful aesthetic inspired by MCChampionship.com with energetic colors and modern gaming feel.

## Core Design Elements

### A. Color Palette

**Bright & Vibrant Foundation:**
- Primary Backgrounds: Pure white (#FFFFFF) and soft pastels (purple-50, pink-50, cyan-50)
- Text Colors: Deep purple/dark for primary text, medium tones for secondary
- Gradient Backgrounds: Soft pastel gradients (purple-pink-cyan) for sections

**Vibrant Gradient Accents:**
- Primary Gradient: Electric purple → vibrant pink → cyan for buttons and titles
- Bright, saturated colors: Purple (#a855f7), Pink (#ec4899), Cyan (#06b6d4)
- Glowing orbs: Soft blur effects with bright pastel colors
- Use vibrant gradients prominently for energy and excitement

### B. Typography

**Headers (H1, H2):**
- Style: Blocky/pixelated gaming-inspired font OR bold uppercase sans-serif
- Recommended: Montserrat Black or Poppins ExtraBold in uppercase
- Color: White with optional gradient overlay on H1

**Body Text:**
- Font: Poppins or Inter (clean, modern sans-serif)
- Weight: Regular (400) for paragraphs, Medium (500) for emphasis
- Size: 16-18px base, scale responsively

### C. Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 to py-24
- Card padding: p-6 to p-8
- Element gaps: gap-6 to gap-8

**Container Strategy:**
- Max width: 1280px (max-w-7xl)
- Full-width sections with centered content containers

### D. Component Library

**1. Navigation Bar**
- Fixed position on scroll
- Logo: "MCC HOSTING" left-aligned
- Center navigation links: Início, Hospedagem Minecraft, Servidores VPS, Suporte
- Right CTA: "Área do Cliente" button with gradient background
- Dark background with subtle transparency/blur when scrolled

**2. Hero Section**
- Full viewport height or near-full (80-90vh)
- Headline: "Performance Lendária Para o Seu Mundo"
- Subheadline: "Servidores Minecraft e VPS de alta performance com proteção DDoS de ponta e ativação imediata. Crie, jogue e conquiste sem limites."
- Primary CTA: "VER PLANOS" - gradient button, large and prominent
- Background: Geometric shapes and subtle tech lines in darker tones

**3. Hosting Plan Cards (Minecraft & VPS Sections)**
- Grid Layout: 3-4 cards per row on desktop, stack on mobile
- Card Style: Dark background (#1a1a24 or similar) with rounded corners
- Hover Effect: Gradient border glow, subtle lift/scale transform
- Card Content Structure:
  - Plan name (e.g., "Plano Ender", "VPS Lapis")
  - Price prominently displayed (R$ XX,XX/mês)
  - Icon-based feature list with spacing between items
  - "Contratar Agora" button at bottom with gradient

**Minecraft Hosting Features to Display:**
- Memória RAM (4GB DDR5)
- Slots (Ilimitados)
- CPU (Ryzen 9)
- Armazenamento (50GB NVMe SSD)
- Proteção DDoS Inclusa

**VPS Features to Display:**
- vCores (2 vCores)
- Memória RAM (2GB RAM)
- Armazenamento (80GB NVMe SSD)
- Tráfego (Ilimitado)
- Acesso Root Completo

**4. Advantages Section**
- 4-column grid on desktop, 2-column on tablet, 1-column on mobile
- Each block contains:
  - Large stylized icon (tech-themed)
  - Bold title
  - Descriptive text (2-3 lines)
- Advantages: Hardware de Ponta, Proteção DDoS Avançada, Suporte Técnico 24/7, Ativação Imediata

**5. Footer**
- Multi-column layout: Logo/description, Navigation links, Services, Support
- Social media icons: Discord, Twitter, Instagram (horizontal row)
- Copyright: "© 2025 MCC Hosting. Todos os direitos reservados."
- Dark background, lighter than main sections

### E. Interactive Elements

**Smooth Scroll:**
- Navigation links trigger smooth scroll to respective sections
- Offset for fixed navbar height

**Hover Effects:**
- Buttons: Brightness increase, subtle scale (1.05)
- Cards: Gradient border glow, lift effect (translateY -4px)
- Links: Color shift to gradient accent

**Animations:**
- Use sparingly: fade-in on scroll for sections
- Button hover transitions: 0.3s ease
- Card hover: 0.2s ease-out

### F. Responsive Breakpoints

- Mobile: < 768px (stack cards, center align, larger touch targets)
- Tablet: 768px - 1024px (2-column grids)
- Desktop: > 1024px (full multi-column layouts)

## Images

**No large hero image required** - use geometric shapes, subtle tech lines, and gradient overlays instead for a modern gaming aesthetic. Focus on iconography for features and benefits sections.

**Icons:** Use tech/gaming-themed icons from a library like Heroicons or Font Awesome for:
- Server/RAM/CPU specifications
- Feature highlights (shield for DDoS, lightning for instant activation, headset for support, chip for hardware)

## Visual Style Notes

- **Glow Effects:** Subtle neon-like glows on interactive elements and card borders
- **Geometric Background:** Abstract shapes and diagonal lines in darker shades for depth
- **Gradient Usage:** Bold on primary CTAs, subtle on hover states and accents
- **Contrast:** Ensure high contrast between text and backgrounds for readability
- **Gaming Aesthetic:** Modern and professional, not overly pixelated - polished tech look with gaming DNA