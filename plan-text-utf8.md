

M.V ORNAMENTS

NEXT IMPLEMENTATION PLAN

Developer Handoff - Production Completion Roadmap



Architecture

Hydrogen / React Router / TypeScript + Shopify Basic

Commerce

Shopify products, inventory, cart and hosted checkout

Catalogue

600-700 SKUs planned

Document version

1.0 - 16 August 2026

Purpose

Direct implementation instructions for the development team



INSTRUCTION TO DEVELOPER: Treat this document as the production roadmap. Preserve the approved visual direction; focus the next development cycle on commerce integration, routing, data architecture, MCX rate service, bulk orders, SEO, QA and launch readiness.





How to Use This Document

P0 = launch blocker. Complete before any production launch.

P1 = required for V1 quality and customer experience.

P2 = can follow immediately after core commerce is stable.

Do not upload all 600-700 SKUs until the 20-SKU pilot passes the complete browse -> cart -> checkout -> order flow.

All dummy images/data must remain replaceable by Shopify data without redesigning React components.

Contents

1. Frozen Product & Architecture Decisions

2. Current Prototype Audit

3. Target Production Architecture

4. Completion Roadmap & Indicative Schedule

Phase 0 - Freeze, Backup & Repository Discipline

Phase 1 - Shopify Basic & Product Data Model

Phase 2 - Migrate Current UI to Hydrogen

Phase 3 - Routing & Global Page Shell

Phase 4 - Shopify Catalogue Integration

Phase 5 - Cart, Checkout & Payment Flow

Phase 6 - MCX Gold/Silver Rate Integration

Phase 7 - Bulk & Corporate Orders

Phase 8 - Internal Pages & Customer Journeys

Phase 9 - SEO, Analytics, Performance & Accessibility

Phase 10 - Full 600-700 SKU Migration

11. QA, UAT, Security & Launch

12. Post-Launch Stabilisation

13. Definition of Done / Acceptance Criteria

14. Inputs Required from M.V Ornaments

Appendices - Routes, Metafields, API Contracts & Technical References



1. Frozen Product & Architecture Decisions

DO NOT REOPEN VISUAL ARCHITECTURE: The homepage visual direction is approved enough to move from prototyping to production integration. Refinement is allowed, but do not rebuild the site from scratch.



Decision

Approved Direction

Developer Rule

Frontend

Hydrogen + React Router + TypeScript

Custom M.V UI remains fully controlled by the development team.

Commerce backend

Shopify Basic

Products, collections, variants, inventory, discounts, customers, orders and checkout.

Hosting

Shopify Oxygen

Use the Hydrogen channel/Oxygen deployment path unless the owner later approves a different host.

Checkout

Shopify hosted checkout

React cart redirects using the cart checkout URL returned by Shopify; no custom card-data handling.

Product count

600-700 SKUs

Pilot with 20 representative SKUs first.

Market rates

MCX delayed website display

Fetch server-side through an authorised/licensed source; never hard-code production rates.

Bulk orders

Dedicated quote journey

Homepage entry + /pages/bulk-orders; retail checkout must not be the only bulk workflow.

Design system

Warm ivory + charcoal + champagne

Retain premium, light-commerce pages with dark editorial sections.

2. Current Prototype Audit

The uploaded project is a useful visual prototype, but it is not yet a production ecommerce system. The following findings are based on the current source package.

Priority

Task

Implementation Instruction

Definition of Done

P0

No Shopify connection

Current package uses React/Vite with local dummy product data.

Replace dummy data layer with Shopify Storefront API through Hydrogen.

P0

Cart is not real commerce

Cart drawer and product actions are prototype logic.

Implement Shopify cart creation, line add/update/remove, totals and persistence.

P0

Checkout is not connected

Checkout button does not complete a Shopify checkout journey.

Use the Shopify cart checkout URL to redirect to hosted checkout.

P0

MCX prices are hard-coded

MetalRates.jsx contains fixed gold/silver values and timestamp.

Replace with server-side delayed-rate service and resilient UI states.

P0

Bulk order feature is missing

No homepage component, route, quote form or workflow exists.

Add homepage CTA + dedicated bulk orders page + server-side quote submission.

P1

Routing is incomplete

Several footer/header links resolve to 404; generic collection routing is insufficient.

Implement explicit route map and correct collection/page templates.

P1

SEO is SPA-level only

Static document title/meta are insufficient for product/collection routes.

Move to server-rendered route metadata, canonicals and structured data.

P1

Asset paths risk production breakage

Current dummy product/banner assets are outside a robust production media workflow.

During migration use valid public/import paths; then replace product media with Shopify CDN assets.

P1

Filters/search are prototype-level

UI exists but data behavior is not backed by Shopify metadata.

Define product metafields first, then implement real search/filter queries.

P2

Wishlist persistence

Wishlist experience requires a defined persistence strategy.

V1: local persistence for guests; later optional customer-linked sync.

Current Source Files That Must Be Reworked

src/App.jsx - Replace SPA-only routing with Hydrogen/React Router route architecture and complete route map.

src/pages/Home.jsx - Keep visual composition; replace dummy collections/products and insert BulkOrderBanner.

src/components/MetalRates.jsx - Remove hard-coded values; consume /api/metal-rates data and handle loading/error/stale states.

src/data/dummy.js - Use only during pilot fallback; remove as production source of truth.

src/components/CartDrawer.jsx - Replace fake lines with Shopify cart state/actions.

src/pages/ProductDetail.jsx - Fetch Shopify product by handle; variants and availability must be real.

src/pages/ProductListing.jsx - Connect filters/sort/pagination to Shopify collection/search data.

3. Target Production Architecture

The frontend remains fully customised while Shopify becomes the source of truth for commerce. Custom services should be isolated server-side so the storefront is not tied directly to any market-data or third-party vendor format.



SECURITY RULE: Private Shopify tokens, MCX/provider credentials, Admin API credentials and other secrets must never be bundled into browser JavaScript or VITE_* variables.



Recommended Repository Structure

app/  components/  routes/  lib/    shopify/    metalRates.server.ts    bulkOrders.server.ts  graphql/  styles/public/  assets/    brand/    editorial/.env (local only; never committed)

4. Completion Roadmap & Indicative Schedule

Recommended sequence for one experienced developer or a small development team. The sequence is more important than the exact calendar. Product photography/data readiness can extend the schedule.

Window

Primary Work

Output

Gate

Days 1-2

Freeze UI, Git backup, Shopify store/channel access

Stable baseline + migration branch

No new dummy features

Week 1

Shopify product schema + Hydrogen migration

Current homepage running in Hydrogen/Oxygen

Build/deploy successful

Week 2

Routes + 20-SKU pilot + PLP/PDP/search

Real Shopify catalogue browsing

Product/variant data correct

Week 3

Cart + checkout + payment + customer state

End-to-end test order

Order appears in Shopify Admin

Week 4

MCX delayed rates + Bulk Orders + internal pages

Custom service features complete

Error states and submissions verified

Week 5

SEO, analytics, performance + 600-700 SKU import

Production catalogue

Data QA sample passes

Week 6

UAT, responsive QA, security, launch rehearsal

Release candidate

Owner sign-off

Week 7-8 if required

Content/data cleanup, photography replacement, post-UAT fixes

Final production launch

No P0/P1 launch blockers

PHASE 0  |  FREEZE, BACKUP & REPOSITORY DISCIPLINE

Objective: Protect the approved UI and stop accumulating prototype-only debt.

Priority

Task

Implementation Instruction

Definition of Done

P0

Create a clean Git repository/branch strategy

Commit the current working prototype as a tagged baseline. Create a dedicated production-migration branch. Exclude node_modules, .env and local build output.

Current prototype can be restored at any time; secrets are not tracked.

P0

Freeze homepage visual hierarchy

Do not redesign section order while commerce migration is underway. Only make agreed refinement fixes.

Homepage screenshot remains visually recognisable after migration.

P1

Inventory reusable components

Mark components as reusable, to be migrated, or obsolete. Preserve Header, Hero, ProductCard, rails, banners, promise, story and footer where possible.

A component migration checklist exists before coding starts.

P1

Clean build assets

Move temporary static assets into valid public/import paths so development builds do not silently rely on root files.

Production build contains all required temporary assets until Shopify media replaces them.

PHASE 1  |  SHOPIFY BASIC & PRODUCT DATA MODEL

Objective: Make Shopify the source of truth before importing the full catalogue.

1.1 Shopify Store Setup

Create/confirm Shopify Basic production store and staff/admin access.

Install/configure the Hydrogen channel for the storefront.

Create development/staging and production environment values separately.

Configure store currency, India market, taxes/GST settings with the business/accounting team, shipping zones and checkout branding.

Configure the approved India payment provider in Shopify Checkout after merchant KYC/onboarding is complete.

Reserve main storefront domain and checkout subdomain/DNS plan; do not switch production DNS until UAT passes.

1.2 Product & Variant Schema - Define Before Import

Priority

Task

Implementation Instruction

Definition of Done

P0

Create product categories/collections

At minimum: Silver Jewellery, Gold Jewellery, Rings, Necklaces, Earrings, Bracelets, New Arrivals, Bestsellers, Gifts.

Handles and navigation mapping are stable and documented.

P0

Define SKU/variant rules

Use M.V SKU as primary internal SKU. Ring size/colour/purity variations must be variants rather than duplicated products where appropriate.

20-SKU pilot proves all required variant patterns.

P0

Create jewellery metafields

Create structured metafields for metal, purity, gross weight, net weight, stone type, stone colour, finish, gender, occasion, style, hallmark/certification information, care and dimensions.

PDP and filters read structured fields rather than parsing descriptions.

P1

Create collection metafields

Optional fields for hero media, subtitle, SEO copy and collection editorial content.

Collection templates can render marketing content without hard-coded page-specific JSX.

P1

Define product status/content rules

Draft products stay hidden; publish only complete products with price, inventory, primary image, SKU and required attributes.

No incomplete product can appear on storefront.

1.3 20-SKU Pilot Dataset

Do not begin the full 600-700 SKU upload yet. First create a representative pilot containing:

5 necklaces/pendants

5 rings including at least two size variants

4 earrings

3 bracelets

3 additional products with discount/out-of-stock/new-arrival cases

At least 2 products with multiple variants

At least 2 temporarily out-of-stock products

At least 2 products with compare-at pricing

At least 1 gold product if gold inventory is ready

PHASE 2  |  MIGRATE CURRENT UI TO HYDROGEN

Objective: Retain the approved React UI but move it onto Shopify's headless commerce framework and server-rendered routing.

Priority

Task

Implementation Instruction

Definition of Done

P0

Create Hydrogen app

Start a TypeScript Hydrogen/React Router project connected to the Shopify development storefront.

Local dev server reads real Shopify data and production build succeeds.

P0

Migrate design system

Move global colours, typography, spacing tokens and reusable components into the Hydrogen project.

Homepage matches the existing prototype at desktop and mobile breakpoints.

P0

Set server/client boundaries

Shopify private access and third-party secrets remain server-only. Client components receive only required public data.

No secret appears in built JS or browser network source code.

P1

Deploy staging to Oxygen

Connect repository/deployment and create a shareable staging URL.

Owner can review every milestone on a stable staging site.

P1

Add error boundaries

Implement route-level 404/500 behavior and graceful data failure UI.

Storefront never renders a blank screen on API failure.

PHASE 3  |  ROUTING & GLOBAL PAGE SHELL

Objective: Create a stable route map so navigation, SEO and analytics can be implemented once.

Route

Template / Purpose

/

Homepage

/collections/silver-jewellery

Silver landing/PLP

/collections/gold-jewellery

Gold landing/PLP

/collections/rings

Rings PLP

/collections/necklaces

Necklaces PLP

/collections/earrings

Earrings PLP

/collections/bracelets

Bracelets PLP

/collections/new-arrivals

New arrivals PLP

/collections/gifts

Gifting landing

/products/:handle

PDP

/search

Search

/wishlist

Wishlist

/cart

Cart

/account

Customer account entry

/pages/metal-rates

Metal rates

/pages/bulk-orders

Bulk & corporate orders

/pages/about-us

About M.V

/pages/contact-us

Contact

/pages/size-guide

Size guide

/pages/jewellery-care

Care guide

/pages/faqs

FAQ

/pages/shipping-policy

Shipping policy

/pages/returns-exchanges

Returns/exchanges

/pages/privacy-policy

Privacy

/pages/terms-conditions

Terms

PHASE 4  |  SHOPIFY CATALOGUE INTEGRATION

Objective: Replace dummy products/collections with real Storefront API queries and reusable server-rendered data loading.

Priority

Task

Implementation Instruction

Definition of Done

P0

Homepage collections

Map New Arrivals and Most Loved rails to Shopify collections/merchandising. Do not hard-code product arrays.

Changing a collection in Shopify Admin changes the homepage without code deployment.

P0

Collection/PLP queries

Fetch collection by handle with pagination, prices, availability, product options and filter metadata.

PLP renders real products and pagination/load-more does not duplicate items.

P0

PDP by handle

Fetch product, media, variants, selected options, price/compare-at price, availability and metafields.

PDP supports real variant selection and prevents invalid add-to-cart.

P1

Search

Use Shopify storefront search; implement query parameter and no-results state.

Search is driven by Shopify data and URLs are shareable.

P1

Filters & sorting

Map UI filters to Shopify product attributes/metafields; keep state in URL where practical.

Filters persist on refresh/back navigation and return correct products.

P1

Image component

Use responsive Shopify images with proper dimensions, alt text, lazy loading below fold and no layout shift.

Product grid remains visually stable and fast on mobile.

PHASE 5  |  CART, CHECKOUT & PAYMENT FLOW

Objective: Complete the full revenue path using Shopify cart state and hosted checkout.

Priority

Task

Implementation Instruction

Definition of Done

P0

Cart creation/persistence

Create/retrieve Shopify cart and retain cart ID securely across sessions as supported by Hydrogen.

Refresh does not unexpectedly lose cart.

P0

Add to bag

PDP/ProductCard adds the selected product variant with correct quantity.

Added item, price and variant match Shopify Admin.

P0

Cart drawer

Display real line items, variants, images, quantity controls, remove action, discount/estimated totals.

Every drawer action updates Shopify cart and UI immediately.

P0

Cart page

Use same cart source of truth; support gift message/attributes only if approved.

Cart drawer and cart page never disagree.

P0

Checkout redirect

Retrieve Shopify Cart checkoutUrl and send customer to hosted Shopify checkout.

Test order completes and appears in Shopify Admin.

P0

Payment test

Configure approved payment gateway in Shopify and execute test/small real transaction per gateway rules.

Success, failure and cancellation paths are understood and documented.

P1

Order attribution/analytics

Ensure Hydrogen/storefront channel attribution and analytics events are present.

Purchase can be traced back to storefront channel and marketing analytics.

CHECKOUT RULE: Do not build a custom React card/UPI form. Shopify checkout/payment integrations should handle sensitive payment entry.



PHASE 6  |  MCX GOLD & SILVER RATE INTEGRATION

Objective: Replace hard-coded prices with a compliant, server-side delayed market reference service.



6.1 Business / Data Subscription Prerequisite

M.V must obtain the required MCX data subscription/permission directly or through an authorised data distributor before public website display.

For a public website, implement delayed MCX data, not a frontend claim of unrestricted real-time/live MCX data.

Choose the exact Gold and Silver instruments/contracts to display and document the contract/expiry selection rule.

Do not scrape exchange pages or use an undocumented third-party endpoint in production.

6.2 Server-Side Implementation

Priority

Task

Implementation Instruction

Definition of Done

P0

Provider adapter

Create metalRates.server.ts that fetches the approved provider/MCX feed and maps vendor-specific fields into M.V normalized fields.

Changing vendor requires changing adapter, not UI components.

P0

Cache and refresh

Cache the delayed rate; target 30-60 second internal refresh unless the provider agreement/API specifies otherwise.

100 visitors do not trigger 100 provider calls.

P0

Validation

Reject missing/negative/obviously malformed prices and timestamps. Keep last-known-good response with status STALE when appropriate.

Bad vendor payload never displays Γé╣0 or corrupt values.

P0

API endpoint

Expose a storefront endpoint such as /api/metal-rates containing normalized non-secret data only.

Browser response contains no API key/token.

P0

Status handling

Return marketStatus OPEN/CLOSED/STALE/UNAVAILABLE plus updatedAt and delayMinutes.

Frontend communicates data freshness clearly.

P1

Rate page

Create /pages/metal-rates with market-reference explanation, timestamp, selected contract/expiry details and disclaimer.

Customer can distinguish MCX market reference from M.V jewellery selling price.

P1

Logging/alerts

Log provider failures and repeated stale data; optional error monitoring.

Operations team can diagnose rate outages.

6.3 Normalized API Contract

GET /api/metal-rates{  "source": "MCX",  "feedType": "delayed",  "delayMinutes": 1,  "marketStatus": "open",  "updatedAt": "2026-08-16T17:03:00+05:30",  "gold": {    "symbol": "GOLD",    "expiry": "YYYY-MM-DD",    "price": 0,    "unit": "10g",    "change": 0,    "changePercent": 0  },  "silver": {    "symbol": "SILVER",    "expiry": "YYYY-MM-DD",    "price": 0,    "unit": "kg",    "change": 0,    "changePercent": 0  }}

6.4 Homepage Component States

OPEN: show rates, change %, MCX ΓÇó DELAYED and last-updated time.

CLOSED: show last market rate and MARKET CLOSED; do not animate as if values are moving.

STALE: show last available rate + ΓÇ£Last updated ΓÇªΓÇ¥ and a subtle stale indicator.

UNAVAILABLE: show ΓÇ£Market data temporarily unavailableΓÇ¥; never substitute zero or a made-up rate.

PRICING DISTINCTION: MCX reference rates must not be presented as the final selling price of M.V jewellery. Product prices include product-specific purity, weight, making/stone costs, taxes and business pricing rules.



PHASE 7  |  BULK & CORPORATE ORDERS

Objective: Add the missing B2B entry point and quote workflow without damaging the premium retail journey.



7.1 Homepage Placement

Insert the new section in Home after GiftBanner and before PromiseSection:

<OccasionGrid /><GiftBanner /><BulkOrderBanner /><PromiseSection /><BrandStory />

7.2 Homepage Content

Eyebrow: FOR BUSINESS & CELEBRATIONS

Heading: Bulk & Corporate Jewellery Orders

Body: Planning corporate gifting, wedding jewellery, retail requirements or a large-volume purchase? M.V Ornaments offers personalised assistance for bulk orders and special requirements.

Primary CTA: REQUEST A BULK QUOTE

Route: /pages/bulk-orders

7.3 Quote Form Fields

Full name *

Company/organisation

Phone *

Email *

GSTIN

City *

Business type: Corporate / Retailer / Distributor / Wedding-Event / Personal / Other

Expected quantity: 25-50 / 50-100 / 100-250 / 250-500 / 500+

Products interested in / selected products and quantities

Required-by date

Custom packaging: Yes/No

Additional requirements

Consent/acknowledgement checkbox if required by privacy policy

7.4 Recommended V1 Processing

1.  Submit through a server-side endpoint; validate and rate-limit the request.

2.  Store request in an approved database/CRM or send structured email to the sales/admin team; avoid only client-side mailto behavior.

3.  M.V team reviews stock, requested quantity, delivery date and market/pricing conditions.

4.  After approval, create a Shopify Draft Order manually in Shopify Admin and send the approved invoice/checkout link to the buyer.

5.  Automate Draft Order creation later only after V1 process and permissions are stable.

PHASE 8  |  INTERNAL PAGES & CUSTOMER JOURNEYS

Objective: Complete every route already exposed by the navigation/footer and make each page production-ready.

Page / Template

Minimum V1 Content

Silver/Gold landing

Editorial hero, category discovery, featured collection, SEO copy.

Category PLP

Breadcrumb, H1, count, filters, sort, 2-column mobile / 4-column desktop target, load-more/pagination.

PDP

Media gallery, price, variant/size, availability, delivery check placeholder/integration, add to bag, details accordions, recommendations.

Search

Search box, results count, product grid, related terms, empty state.

Wishlist

Persistent saved products, add-to-bag, empty state. V1 guest persistence may use local storage.

Account

Customer account entry and order history using Shopify-supported customer account architecture.

Gifting

Recipient/occasion/budget discovery and premium gifting content.

Metal Rates

MCX reference data, explanation and disclaimer.

Bulk Orders

Dedicated quote page/form as defined above.

About

Brand story, Quality With Creativity, values and craftsmanship.

Size Guide

Ring/bracelet/necklace measuring instructions.

Jewellery Care

Silver/gold/stone care content.

Contact / FAQ

Support channels and accordion FAQ.

Policy pages

Shipping, returns, privacy, terms; content supplied/approved by M.V, not invented by developer.

404 / error

Premium empty state with home/shop links.

PHASE 9  |  SEO, ANALYTICS, PERFORMANCE & ACCESSIBILITY

Objective: Make the custom React storefront indexable, measurable, fast and usable before the catalogue scales.

Priority

Task

Implementation Instruction

Definition of Done

P0

Route metadata

Unique title, meta description, canonical and robots behavior for home, collection, product and content routes.

No important route shares only the homepage metadata.

P0

Server-rendered commerce content

Important product/collection title, price, availability and copy must be present in server-rendered HTML.

View-source/server response contains core page content.

P1

Structured data

Add valid Organization/WebSite on site level; Product/Offer/BreadcrumbList on applicable pages.

Schema validation has no critical errors.

P1

Analytics

Track view_item_list, select_item, view_item, add_to_cart, view_cart, begin_checkout, purchase, search, wishlist, metal_rate_view and bulk_order_submit.

Events fire once with correct product/value context.

P1

Performance

Optimise hero and product media, lazy-load below fold, reserve image dimensions, avoid unnecessary client JS and large app bundles.

Mobile release candidate passes agreed performance review/Core Web Vitals target.

P1

Accessibility

Semantic headings, keyboard navigation, visible focus, labels, alt text, contrast and usable touch targets.

Critical purchase journey can be completed by keyboard and basic accessibility audit passes.

P1

Sitemap/robots

Ensure Shopify/headless routing has production sitemap and correct robots behavior.

Published products/collections are discoverable; staging is not indexed.

Homepage SEO Content Baseline

Title: M.V Ornaments | Premium Silver & Gold Jewellery Online

H1: Modern Jewellery, Crafted to Shine

Meta description: Shop premium silver and gold jewellery at M.V Ornaments. Discover elegant rings, necklaces, earrings, bracelets, gifts and contemporary designs crafted for every occasion.

PHASE 10  |  FULL 600-700 SKU MIGRATION

Objective: Scale the catalogue only after the pilot proves the data model and commerce path.

10.1 Import Gate

Proceed to full import only when all of the following are true:

20 pilot SKUs display correctly on PLP/PDP

Variants and inventory behave correctly

Cart and checkout complete successfully

Metafields drive filters and product details

Shopify images display correctly with no broken asset paths

SEO metadata is generated per product/collection

Owner has approved naming, price and product-data conventions

10.2 Full Import Process

1.  Clean and validate master product spreadsheet.

2.  Generate/import Shopify-compatible product data in controlled batches (for example 100-150 products at a time).

3.  Attach correct media and alt text.

4.  Assign collections/tags/metafields.

5.  Spot-check every batch before proceeding.

6.  Reconcile SKU counts, inventory and pricing between source sheet and Shopify.

7.  Publish only complete products.

10.3 Data Quality Checks

Duplicate SKU

Duplicate handle

Missing primary image

Missing price

Invalid compare-at price

Inventory mismatch

Incorrect metal/purity

Variant size mapping

Incorrect collection

Broken alt text / filename dependency

Out-of-stock behavior

Product draft/published status

11. QA, UAT, Security & Launch

LAUNCH GATE: Do not switch the main domain until all P0 issues are closed and M.V has completed a successful end-to-end test order on the release candidate.



11.1 Device / Browser Matrix

Mobile: 360, 375, 390, 412/430 px representative widths

Tablet: portrait and landscape representative devices

Desktop: 1366 and 1440+ widths

Chrome, Safari/WebKit, Edge; current mainstream mobile browser engines

Real-device test for at least one iPhone and one Android device if available

11.2 Commerce UAT Scenarios

Browse home -> silver -> ring -> PDP

Select ring size -> add to bag

Update quantity -> remove -> re-add

Discounted product compare-at pricing

Out-of-stock variant cannot be purchased

Search exact and broad term

Apply filters/sort and use browser back button

Wishlist save/remove

Begin checkout as guest

Successful payment/order

Payment failure/cancel then return

Order confirmation and Shopify Admin order record

Metal rate normal/closed/unavailable state

Bulk quote submission and admin receipt

404 and broken-route check

Policy/footer links

11.3 Security / Release Checklist

No secrets in client bundle or repository

Production environment values configured in Shopify/Oxygen

Staging environment protected from search indexing

Forms have validation and anti-spam/rate limiting

MCX/provider endpoint is server-side and cached

Checkout uses Shopify URL and HTTPS

Error messages do not expose tokens/internal stack details

Remove unused prototype packages/assets and console debug logs

Run dependency/security review before launch

Back up product master data before bulk import

11.4 DNS & Launch Sequence

1.  Freeze production content changes during final launch window.

2.  Run final build and staging UAT.

3.  Confirm Shopify checkout/payment production mode.

4.  Configure main storefront domain to Hydrogen/Oxygen.

5.  Configure checkout domain/subdomain according to Shopify headless setup and final DNS plan.

6.  Verify SSL, redirect rules, canonical host and www/non-www behavior.

7.  Place one live low-value order and verify order, email and fulfilment workflow.

8.  Monitor logs, checkout conversion and error rate closely for the first 48 hours.

12. Post-Launch Stabilisation

Daily error/log review for first 7 days

Verify MCX timestamps and stale-state behavior each trading day

Check failed search terms and zero-result queries

Review abandoned-cart/checkout behavior

Review top collection/product traffic and mobile conversion

Fix broken images/metadata found after full catalogue indexing

Confirm bulk quote submissions are reaching the assigned team

Schedule first performance and SEO review after enough production traffic exists

13. Definition of Done / Acceptance Criteria

Area

Acceptance Requirement

Architecture

Production storefront runs on Hydrogen/React Router/TypeScript and is deployed to an approved production host/Oxygen.

Shopify

Products, collections, inventory, prices and variants are read from Shopify; dummy.js is not production source of truth.

Catalogue

600-700 SKUs can be managed from Shopify Admin without developer edits to product data.

Cart

All cart actions modify a real Shopify cart and survive expected navigation/refresh behavior.

Checkout

Checkout uses Shopify hosted checkout and at least one production/test transaction has been verified.

MCX

Metal rate widget uses an approved delayed source server-side, shows freshness/status and has a metal-rates detail page.

Bulk

Homepage contains a visible Bulk & Corporate Orders entry; quote form submits successfully and has an operational business follow-up path.

Routes

All header/footer links resolve to intentional pages; no accidental 404s.

SEO

Important routes have unique metadata/canonicals; product/collection content is server-rendered and structured data is present.

Responsive

Core journeys are approved on mobile-first widths and desktop.

Performance

Images and JS are optimised and the release candidate passes the agreed mobile performance review.

Security

No credentials/secrets in client bundle; forms and custom APIs are server-side validated.

Operations

M.V staff can add/edit a product, update stock/price and see the storefront change without developer intervention.

14. Inputs Required from M.V Ornaments

The developer cannot complete production without the following owner/business inputs. Track these in parallel with development.

Input

Required from M.V

Shopify

Store/admin access; business/KYC details; approved plan.

Domain

Final domain/registrar access and DNS approval.

Payments

Selected gateway account/KYC and settlement details.

MCX data

Approved direct subscription or authorised data provider credentials/agreement.

Product master

Validated 600-700 SKU sheet with names, SKUs, prices, inventory, categories, attributes and variants.

Photography

Final product images and campaign/banner assets; dummy images may remain only until replacement.

Policies

Approved shipping, return/exchange, cancellation, privacy and terms content.

Shipping

Serviceable regions, shipping fees/free-shipping thresholds, courier/aggregator decision and tracking workflow.

Bulk orders

Sales contact/email, quote approval owner, MOQ/pricing policy and SLA for replying to enquiries.

Brand/contact

Customer support phone, WhatsApp, email, social links and business address/required disclosures.

Immediate Next Sprint - Developer Action List

RECOMMENDED NEXT ACTION: The next sprint should be integration-first, not more dummy-page design. Complete the following tasks in order and demo each gate on staging.



Priority

Task

Implementation Instruction

Definition of Done

P0

1. Backup and tag current prototype

Create Git baseline and migration branch.

Baseline can be restored.

P0

2. Create Shopify Basic/Hydrogen staging

Connect Hydrogen channel and deploy minimal storefront to Oxygen/staging.

Staging URL is live.

P0

3. Define metafields + 20 pilot products

Build product schema and load representative products.

Pilot data covers variants, discount and stock states.

P0

4. Migrate homepage shell

Port existing approved components; preserve visual direction.

Homepage looks like prototype on staging.

P0

5. Replace dummy homepage data

New Arrivals/Most Loved/categories read Shopify collections.

Admin merchandising changes storefront.

P0

6. Build real PLP/PDP

Real Shopify data, variants, media, filters/pagination.

Browse to real products reliably.

P0

7. Implement cart + checkout

Shopify cart and hosted checkoutUrl.

Successful order reaches Admin.

P0

8. Add BulkOrderBanner + page

Insert section after GiftBanner and build quote endpoint/form.

Test quote reaches business team.

P0

9. Implement MCX server service

Use authorised delayed source, cache, status/error handling.

Homepage no longer hard-coded.

P1

10. Finish routes + SEO + analytics

Resolve footer pages and route metadata/events.

No broken links; measurable journeys.

P1

11. Full catalogue batch import

Import after pilot sign-off.

SKU count and data audit pass.

P0

12. UAT and launch rehearsal

Run all launch scenarios before DNS.

Owner signs release candidate.

Appendix A - Recommended Shopify Metafields

Metafield

Type

Use

custom.metal

Single line text / reference

Silver, Gold

custom.purity

Single line text

925, 18K, 22K, etc.

custom.gross_weight

Decimal + unit

Display on PDP

custom.net_weight

Decimal + unit

If operationally maintained

custom.stone_type

Single line/list

CZ, zircon, etc. as actual data permits

custom.stone_colour

Single line/list

White, Green, etc.

custom.finish

Single line

High polish, rhodium plated, etc.

custom.style

Single line/list

Minimal, Floral, Statement, Classic

custom.occasion

List

Everyday, Festive, Wedding, Gift

custom.gender

Single line/list

As applicable

custom.hallmark

Single line / boolean / reference

Only factual verified information

custom.dimensions

Multi-line / structured

Length, width, pendant size

custom.care

Multi-line text

Product care instructions

Appendix B - Bulk Quote Data Object (Suggested)

{  "requestId": "BULK-2026-0001",  "createdAt": "ISO_TIMESTAMP",  "name": "",  "company": "",  "phone": "",  "email": "",  "gstin": "",  "city": "",  "businessType": "corporate|retailer|distributor|event|personal|other",  "quantityBand": "",  "items": [{"productId":"","variantId":"","sku":"","quantity":0}],  "requiredBy": "YYYY-MM-DD",  "customPackaging": false,  "notes": "",  "status": "new"}

Appendix C - Technical Reference Notes

Technical assumptions in this plan were checked against official documentation on 16 August 2026. The development team should re-check current documentation during implementation, especially before production launch.

Shopify Developer - Options for building headless

Shopify Developer - Create and update a cart with the Storefront API

Shopify Developer - Storefront API

MCX - Datafeed


