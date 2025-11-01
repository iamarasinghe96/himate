# Design Guidelines: Enhanced Dynamic Portfolio Website

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern portfolio platforms like Dribbble, Behance, and Linear's clean aesthetic while maintaining your existing gradient-based visual identity. The design will transform from a compact business card into a comprehensive portfolio showcase while preserving the current modern, professional aesthetic.

## Layout System & Structure

### Overall Architecture
Transform the single-card layout into a full-page scrolling portfolio with distinct sections:

1. **Hero/Header Section** (existing enhanced)
   - Maintain gradient background treatment
   - Expand to full-width with centered content container (max-w-4xl)
   - Add subtle profile image (circular, 120px diameter) above name
   - Keep existing name, tagline, and quick contact buttons

2. **About Me Section**
   - Full-width section with max-w-4xl inner container
   - Two-column layout on desktop (60/40 split): biography text + key highlights/stats
   - Single column on mobile
   - Include professional headshot (square, 300x300px) floating right on desktop
   - Display skills as pill-shaped tags with subtle backgrounds
   - Professional summary paragraph with comfortable line-height

3. **Project Portfolio Section**
   - Full-width with max-w-6xl container
   - Card-based grid: 3 columns desktop, 2 tablet, 1 mobile
   - Each project card includes: featured image (16:9 ratio), project title, brief description, tech stack tags, "View Project" link
   - Swappable categories with tab navigation above grid (All, Web Apps, Design, Development)
   - Smooth fade transitions when switching categories

4. **Certificate Library Section**
   - Full-width with max-w-5xl container
   - Grid layout: 3 columns desktop, 2 tablet, 1 mobile
   - Certificate cards with: thumbnail image (4:3 ratio), certification name, issuing organization, issue date, "View Credential" link
   - Subtle card elevation on hover

5. **Contact/CTA Section** (existing preserved)
   - Maintain current action buttons grid
   - Add newsletter signup form (optional expansion)

### Spacing System
Use consistent Tailwind spacing units: **4, 8, 12, 16, 20, 24** for all margins and padding.

**Section Vertical Rhythm:**
- Desktop: py-20 to py-24 between major sections
- Mobile: py-12 to py-16 between sections
- Inner component spacing: gap-8 for grids, gap-4 for card internals
- Container horizontal padding: px-8 desktop, px-4 mobile

## Typography Hierarchy

### Font Family
Continue using **Inter** from Google Fonts with weights: 300, 400, 500, 600, 700

### Type Scale
- **Hero Name**: text-5xl (desktop) / text-4xl (mobile), font-weight 700
- **Section Headings**: text-3xl, font-weight 700
- **Subsection Titles**: text-xl, font-weight 600
- **Card Titles**: text-lg, font-weight 600
- **Body Text**: text-base, font-weight 400, line-height relaxed
- **Supporting Text**: text-sm, font-weight 400
- **Labels/Tags**: text-xs, font-weight 500, uppercase tracking-wide

## Component Library

### Navigation Tabs (Project Categories)
- Horizontal tab bar with equal-width buttons
- Active state: gradient background treatment (matching hero)
- Inactive: transparent with subtle border
- Smooth underline indicator animation
- Spacing: gap-2 between tabs, px-6 py-3 internal padding

### Project Cards
- Rounded corners (16px border-radius)
- Featured image with 16:9 aspect ratio, object-cover
- Image overlay gradient on hover
- Card padding: p-6
- Subtle shadow with elevated shadow on hover
- Tech stack tags displayed as small pills below description
- "View Project" link with arrow icon

### Certificate Cards
- Rounded corners (12px border-radius)
- Certificate thumbnail (4:3 ratio) at top
- Organization logo (small, 40x40px) overlapping image bottom-left
- Card padding: p-5
- Issue date displayed with calendar icon
- "View Credential" external link icon

### Skill Pills
- Rounded-full design
- Padding: px-4 py-2
- Font: text-sm, font-weight 500
- Flexbox wrap layout with gap-2
- Subtle background (no borders)

### Action Buttons (existing maintained)
- Keep current gradient button styles
- Rounded corners: 12px
- Padding: px-6 py-4
- Icon + text layout with gap-3
- Elevated shadow with increased shadow on hover
- Transform: translateY(-2px) on hover

### Contact Information Display
- Icon + text horizontal layout
- Icons: 20x20px
- Gap between icon and text: 3 units
- Clickable items with subtle hover background
- Rounded containers: 8px

### Google Sheets Data Integration Display
- Loading states: Skeleton loaders (pulsing rectangles) matching content dimensions
- Error states: Friendly message with retry button
- Real-time indicator: Small "Live" badge with pulse animation in header
- Manual refresh button: Icon-only circular button in top-right

## Images Strategy

### Required Images
1. **Profile/Headshot Image** (Hero): Circular crop, 120px diameter, centered above name
2. **About Me Professional Photo**: Square format, 300x300px, positioned right side of bio on desktop
3. **Project Featured Images**: 16:9 ratio, minimum 800x450px, high-quality screenshots or mockups
4. **Certificate Thumbnails**: 4:3 ratio, 400x300px, certificate preview images
5. **Organization Logos**: Small square icons, 40x40px, for certificate issuers

### Image Treatment
- All images use rounded corners matching their container
- Project images: subtle grayscale filter at rest, full saturation on hover
- Profile images: subtle border treatment
- Lazy loading for performance
- Placeholder backgrounds while loading

## Interaction Patterns

### Page Load
- Staggered fade-in animation for sections (200ms delay between each)
- Google Sheets data fetches immediately, shows skeleton loaders
- Smooth content replacement when data arrives

### Category Switching (Projects)
- Tab click triggers cross-fade transition (300ms)
- Filtered projects fade out, new ones fade in
- No loading spinners (instant client-side filtering)

### Card Interactions
- Subtle scale transform on hover (scale: 1.02)
- Shadow elevation increase
- Image treatments (saturation/overlay changes)
- Smooth transitions: all properties 300ms ease

### Scroll Behavior
- Smooth scrolling between sections
- Optional: Subtle parallax effect on hero background (10-15% slower scroll)
- Sticky section headers on scroll (optional enhancement)

## Responsive Behavior

### Breakpoints
- Mobile: < 768px (single column everything)
- Tablet: 768px - 1024px (2-column grids)
- Desktop: > 1024px (3-column grids, two-column layouts)

### Mobile Optimizations
- Hero section maintains gradient but reduces padding
- About Me stacks vertically: image full-width, then bio
- Project grid: single column, full-width cards
- Certificate grid: single column or 2-column on larger phones
- Action buttons remain full-width single column
- Touch-friendly hit targets (minimum 44px height)

## Data-Driven Content Updates

### Dynamic Content Areas
All following content pulls from Google Sheets:
- Name, tagline, contact info (phone, email, address)
- About Me: biography text, skills list, stats/highlights
- Projects: title, description, image URLs, tech stack, project links, category tags
- Certificates: name, organization, issue date, credential URL, thumbnail URL
- Social links, CV download URL, appointment booking URL

### Update Indicators
- "Last updated" timestamp in footer
- Subtle refresh icon that user can click to manually reload
- Auto-refresh every 5 minutes (configurable)
- Visual feedback during data fetch (skeleton loaders)

---

**Design Philosophy**: Transform a compact business card into a comprehensive portfolio while maintaining the existing modern gradient aesthetic, clean spacing, and professional tone. The design prioritizes visual hierarchy, scannable content, and seamless data integration while ensuring every section feels purposeful and polished.