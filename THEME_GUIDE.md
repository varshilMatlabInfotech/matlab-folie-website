# Matlab Infotech Theme Guide

This document explains the theme structure and how to use the reusable components and colors across the application.

## 🎨 Color Palette

All colors are defined in `tailwind.config.js` and can be used with Tailwind classes.

### Primary Brand Colors
```
primary         → #0571D6  (Main brand color)
primary-dark    → #081AE0  (Darker variant)
primary-light   → #03A8D0  (Lighter variant)
primary-blue    → #0822DF  (Blue variant)
primary-cyan    → #048AD3  (Cyan variant)
primary-lighter → #03A7D1  (Lighter cyan)
primary-navy    → #032289  (Navy blue for footer)
```

**Usage:**
```jsx
<div className="bg-primary text-primary hover:bg-primary-dark" />
```

### Background Colors
```
bg-light    → #F8FDFF  (Light blue background)
bg-lighter  → #EAF6FF  (Lighter blue background)
bg-white    → #FFFFFF  (White background)
```

**Usage:**
```jsx
<section className="bg-bg-light" />
```

### Text Colors
```
text-primary      → #000000  (Black - main text)
text-secondary    → #5D5D5D  (Dark gray)
text-muted        → #7C7C7C  (Medium gray)
text-light        → #6C6C6C  (Light gray)
text-gray         → #5C5C5C  (Gray)
text-dark         → #535151  (Dark gray)
text-placeholder  → #919191  (Placeholder text)
```

**Usage:**
```jsx
<p className="text-text-primary" />
<p className="text-text-secondary" />
```

### Border Colors
```
border-primary  → #00B5FF  (Blue border)
border-gray     → #656565  (Gray border)
border-light    → #C5C5C5  (Light gray)
border-muted    → #8C8C8C  (Muted gray)
```

**Usage:**
```jsx
<div className="border border-border-primary" />
```

### Icon Colors
```
icon-gray     → #7E7E7E
icon-light    → #656464
icon-company  → #717171
```

### Special Colors
```
star  → #FFB800  (Star rating color)
```

**Usage:**
```jsx
<Star fill="#FFB800" stroke="#FFB800" />
// Or with Tailwind
<div className="text-star" />
```

---

## 🌈 Gradients

All gradients are defined in `tailwind.config.js` and can be used with Tailwind classes.

### Available Gradients

#### Primary Gradient
Used for: Buttons, badges, headings
```jsx
<button className="bg-gradient-primary" />
```

#### Blue Gradient 1
Used for: Service cards (variant 1)
```jsx
<div className="bg-gradient-blue-1" />
```

#### Blue Gradient 2
Used for: Service cards (variant 2)
```jsx
<div className="bg-gradient-blue-2" />
```

#### Blue Gradient 3
Used for: Some service cards
```jsx
<div className="bg-gradient-blue-3" />
```

#### Contact Gradient
Used for: Contact form buttons
```jsx
<button className="bg-gradient-contact" />
```

---

## 🧩 Reusable Components

All common components are located in `src/components/common/`

### Button Component

**Import:**
```jsx
import { Button } from './common';
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `fullWidth`: boolean (default: false)
- All standard button props (onClick, disabled, etc.)

**Usage:**
```jsx
// Primary button (gradient)
<Button variant="primary">
  Hire Us
</Button>

// Secondary button (white)
<Button variant="secondary">
  Get Quote
</Button>

// Outline button
<Button variant="outline">
  Learn More
</Button>

// Full width button
<Button variant="primary" fullWidth>
  Submit
</Button>

// Small button
<Button variant="primary" size="sm">
  Click Me
</Button>
```

---

### Badge Component

**Import:**
```jsx
import { Badge } from './common';
```

**Usage:**
```jsx
<Badge>Our Services</Badge>
```

---

### Card Component

**Import:**
```jsx
import { Card } from './common';
```

**Props:**
- `hover`: boolean (default: true) - Adds hover shadow effect
- `className`: string - Additional Tailwind classes

**Usage:**
```jsx
<Card className="p-8">
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>

// Without hover effect
<Card hover={false} className="p-6">
  <p>Static card</p>
</Card>
```

---

### SectionHeader Component

**Import:**
```jsx
import { SectionHeader } from './common';
```

**Props:**
- `badge`: string - Badge text
- `title`: string - Section title
- `description`: string (optional) - Section description

**Usage:**
```jsx
<SectionHeader
  badge="Our Services"
  title="Comprehensive Software Development Solutions"
  description="From concept to deployment, we offer end-to-end development services."
/>
```

---

## 📏 Border Radius

Custom border radius values:

```
rounded-card          → 15px  (For cards)
rounded-badge         → 12px  (For badges)
rounded-input         → 5px   (For inputs)
rounded-button        → 10px  (For buttons)
rounded-contact-card  → 26px  (For contact cards)
```

**Usage:**
```jsx
<div className="rounded-card" />
<button className="rounded-button" />
```

---

## 🎯 Font Family

Poppins is the primary font for the entire application.

**Usage:**
```jsx
<p className="font-poppins">Your text here</p>
```

**Note:** Poppins is set as the default body font in `index.css`, so you don't need to add `font-poppins` everywhere unless you want to be explicit.

---

## 📦 Migration Examples

### Before (Old Style):
```jsx
<button className="px-8 h-14 bg-gradient-to-r from-[#081AE0] via-[#0571D6] to-[#03A8D0] rounded-[10px] text-white font-medium text-[20px] leading-[30px] font-['Poppins'] hover:opacity-90 transition">
  Hire Us
</button>
```

### After (New Style):
```jsx
import { Button } from './common';

<Button variant="primary">
  Hire Us
</Button>
```

---

### Before (Old Style):
```jsx
<div className="w-full max-w-[137px] h-[38px] bg-gradient-to-r from-[#081AE0] via-[#0571D6] to-[#03A8D0] rounded-[12px] flex items-center justify-center mb-8">
  <span className="text-white font-medium text-[18px] leading-[27px] font-['Poppins'] text-center">
    Our Services
  </span>
</div>
```

### After (New Style):
```jsx
import { Badge } from './common';

<Badge>Our Services</Badge>
```

---

### Before (Old Style):
```jsx
<div className="bg-white border-[0.5px] border-[#00B5FF] rounded-[15px] p-8 hover:shadow-lg transition">
  {/* Content */}
</div>
```

### After (New Style):
```jsx
import { Card } from './common';

<Card className="p-8">
  {/* Content */}
</Card>
```

---

## ✨ Best Practices

1. **Always use theme colors** instead of hardcoded hex values
   - ✅ `text-text-primary`
   - ❌ `text-[#000000]`

2. **Use common components** for consistent UI
   - ✅ `<Button variant="primary">`
   - ❌ `<button className="bg-gradient-to-r...">`

3. **Use semantic color names**
   - ✅ `bg-bg-light` (describes purpose)
   - ❌ `bg-[#F8FDFF]` (just a color code)

4. **Keep gradient classes consistent**
   - ✅ `bg-gradient-primary`
   - ❌ `bg-gradient-to-r from-[#081AE0]...`

5. **Use Poppins font via theme**
   - ✅ `font-poppins` or rely on body default
   - ❌ `font-['Poppins']`

---

## 🚀 Next Steps

To migrate other components:

1. Replace hardcoded colors with theme colors
2. Replace button tags with `<Button>` component
3. Replace badge divs with `<Badge>` component
4. Replace card divs with `<Card>` component
5. Replace section headers with `<SectionHeader>` component
6. Test each component to ensure UI remains unchanged

---

## 📝 Example Component (Fully Migrated)

```jsx
import { Button, Badge, Card, SectionHeader } from './common';

const MyComponent = () => {
  return (
    <section className="bg-bg-light py-20">
      <div className="container mx-auto">
        <SectionHeader
          badge="Our Work"
          title="Amazing Projects"
          description="Check out our portfolio"
        />

        <div className="grid grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="text-text-primary font-semibold">Project 1</h3>
            <p className="text-text-secondary">Description here</p>
            <Button variant="primary">View More</Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MyComponent;
```

---

## 📞 Support

If you have any questions about the theme structure or need help migrating components, refer to:
- `tailwind.config.js` - All theme colors and gradients
- `src/components/common/` - Reusable components
- `src/index.css` - Global styles

