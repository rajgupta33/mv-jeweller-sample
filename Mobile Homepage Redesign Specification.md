# Mobile Homepage Redesign Specification
## Luxury Jewellery E-commerce Website

### Project Goal

Transform the current mobile homepage into a premium, luxury jewellery shopping experience comparable to leading brands such as CaratLane, Tanishq, Bluestone, and Mia while maintaining a unique brand identity.

The design must prioritize:

- Mobile-first UX
- Premium visual appeal
- High trust factor
- Faster product discovery
- Better conversion rate
- Improved category navigation
- Bulk order lead generation
- Live precious metal rates visibility

---

# 1. Current Issues Identified

The existing mobile homepage has the following issues:

### Design Issues

- Horizontal category scrolling feels outdated.
- Excessive black background reduces luxury perception.
- Lack of premium spacing.
- Generic ecommerce appearance.
- Weak visual hierarchy.
- Product sections feel crowded.
- Missing luxury brand identity.

### Functional Issues

- No Bulk Order section.
- Live Gold/Silver rates not highlighted.
- Category discovery is weak.
- Trust-building elements are not prominent.

---

# 2. Design Direction

The website should visually communicate:

- Trust
- Luxury
- Elegance
- Craftsmanship
- Authenticity

### Brand Inspiration

- CaratLane
- Tanishq
- Bluestone
- Mia
- Melorra

---

# 3. Color Palette

### Primary Background

```css
background:
linear-gradient(
180deg,
#FFFDF9 0%,
#FFF8EE 35%,
#FFFFFF 100%
);
```

### Accent Gold

```css
#C6A05B
```

### Premium Beige

```css
#F7F1E7
```

### Primary Text

```css
#1B1B1B
```

### Card Background

```css
#FFFFFF
```

---

# 4. Homepage Structure

## Section 1 — Hero Banner

### Height

```css
70vh
```

### Layout

Header

- Logo
- Search Icon
- Menu Icon

Hero Banner Image

Hero Text

```text
Crafted for Every Moment
```

Sub Text

```text
Gold • Silver • Diamond Jewellery
```

Primary CTA

```text
Shop Collection
```

### Styling

```css
backdrop-filter: blur(10px);
border-radius:24px;
```

---

## Section 2 — Live Gold & Silver Rates

Place immediately below Hero Banner.

### Content

```text
LIVE MCX RATES

Gold ₹98,450 ▲

Silver ₹1,12,250 ▲

Updated 2 mins ago
```

### Card Style

```css
border-radius:24px;
box-shadow:0 10px 30px rgba(0,0,0,.08);
```

### Development Notes

Data must be fetched dynamically through MCX pricing API integration.

Auto refresh every 5 minutes.

---

## Section 3 — Category Collection Grid

### IMPORTANT CHANGE

Remove current horizontal scrolling categories.

Replace with:

### 2 × 2 Grid Layout

```text
┌────────┐ ┌────────┐
│ Rings  │ │ Chains │
└────────┘ └────────┘

┌────────┐ ┌────────┐
│ Bangles│ │Earrings│
└────────┘ └────────┘
```

### Card Specifications

```css
width:160px;
height:180px;
border-radius:20px;
```

### Shadow

```css
box-shadow:0 10px 25px rgba(0,0,0,.08);
```

### Card Layout

70% image

30% category title

---

## Section 4 — Most Loved Pieces

### Heading

```text
Most Loved Pieces
```

### Layout

2-column product grid.

### Product Card Structure

Product Image

Product Name

Price

Rating

Button

```text
Add to Cart
```

---

## Section 5 — Why Buy From Us

### Layout

2-column icon grid.

### Cards

#### Hallmarked

BIS Certified

#### Secure Delivery

PAN India Shipping

#### Easy Returns

Simple Return Process

#### Trusted Pricing

Transparent Pricing Model

---

## Section 6 — Bulk Order Section

### Status

Currently missing from homepage.

Must be implemented.

### Placement

After Why Buy From Us section.

### Heading

```text
Need Jewellery in Bulk?
```

### Supporting Text

```text
Wholesale Orders

Retail Jewellery Supply

Corporate Gifting

Wedding Jewellery Orders
```

### CTA

```text
Request Bulk Quote
```

### Background

```css
#F8F3EA
```

### Border Radius

```css
24px
```

---

## Section 7 — Shop By Occasion

### Heading

```text
Shop By Occasion
```

### Categories

Wedding

Anniversary

Festive Collection

Daily Wear

### Layout

2-column grid.

---

## Section 8 — Featured Collections

### Heading

```text
Featured Collections
```

### Carousel Collections

- Gold Rings
- Silver Chains
- Diamond Pendants
- Temple Jewellery

Large premium cards.

---

## Section 9 — Trust Metrics

### Layout

4 counters.

Examples:

```text
600+ Designs

100% Hallmarked

Secure Checkout

Trusted Pricing
```

### Behavior

Animated counter effect.

---

## Section 10 — Customer Reviews

### Layout

Swipeable cards.

### Example

★★★★★

"Beautiful craftsmanship and timely delivery."

— Customer Name

---

## Section 11 — Instagram Gallery

### Grid Layout

```text
□ □ □

□ □ □
```

6 lifestyle jewellery images.

### Notes

Use dummy images initially.

Replace later through Shopify.

---

## Section 12 — Newsletter Signup

### Heading

```text
Join Our Jewellery Circle
```

### Components

Email Field

Subscribe Button

---

## Section 13 — Footer

### Links

- About Us
- Contact Us
- Shipping Policy
- Return Policy
- Privacy Policy
- Terms & Conditions

### Social Icons

Instagram

Facebook

Pinterest

WhatsApp

---

# Mobile Spacing System

### Section Padding

```css
padding-top:60px;
padding-bottom:60px;
```

### Container Padding

```css
padding-left:16px;
padding-right:16px;
```

### Card Padding

```css
padding:20px;
```

---

# Mobile Typography System

## Hero Heading

```css
font-size:32px;
font-weight:700;
```

## Section Heading

```css
font-size:24px;
font-weight:600;
```

## Body Text

```css
font-size:15px;
line-height:1.7;
```

---

# Image Guidelines

Use premium jewellery photography.

Requirements:

- White or beige backgrounds.
- Soft luxury lighting.
- High-resolution PNG/WebP.
- Consistent image styling.
- Avoid black backgrounds.

Developer should use dummy images temporarily and later connect all images dynamically through Shopify product APIs.

---

# Shopify Integration Notes

Products should not be hardcoded.

All products must load dynamically through Shopify Storefront API.

Fields Required:

- Product Image
- Product Name
- SKU
- Price
- Collection
- Availability

---

# MCX Rates Integration

Create dedicated API service.

Display:

- Gold Price
- Silver Price
- Last Updated Time

Auto refresh every 5 minutes.

Show:

- Up Arrow (Green)
- Down Arrow (Red)

Based on latest price movement.

---

# Final Expected Result

After implementation, the mobile homepage should feel:

- Premium
- Luxury
- Trustworthy
- Mobile-first
- Faster to navigate
- Better for conversions
- Better for SEO
- Better category discovery
- Stronger lead generation through Bulk Orders
- Comparable to premium jewellery brands in India