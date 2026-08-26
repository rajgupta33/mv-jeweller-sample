M.V ORNAMENTS
SILVER-FIRST ECOMMERCE REVAMP & COMPLETION SPECIFICATION
React / Hydrogen + Shopify Basic + M.V Control Center
Version 2.0  |  25 August 2026
Primary commercial focus: Silver Jewellery, Silver Gifts & Articles, Silver Idols
Gold: bullion/coins/biscuits by enquiry & quotation only
PROJECT DECISION - FINAL DIRECTION
M.V Ornaments will be positioned as an aspirational, premium, comfortable-to-shop SILVER-FIRST brand. Gold jewellery is removed from the commerce experience. Gold appears only as bullion products (coins/biscuits/bars) through a quote/enquiry flow. MCX rates are informational display only. M.V selling/reference rates are manually entered daily by authorized admins and are the sole rate source for M.V pricing and quotations.
Contents
1. Executive Decisions & Non-Negotiables
2. Current Site Assessment
3. Brand Positioning & Visual Design System
4. Information Architecture & Navigation
5. Homepage Redesign Specification
6. Silver Catalogue Taxonomy & Product Data
7. Product Listing / Search / Wishlist UX
8. Product Detail Page Specification
9. SIARA Premium Collection
10. Silver Gifts, Articles & Idols
11. Gold Bullion Quote-Only Experience
12. M.V Control Center (Custom Admin Panel)
13. Manual Rate Management & Pricing Engine
14. MCX Market Reference Display
15. Bulk & Corporate Orders
16. M.V Economy Purchase Plan
17. Offers, Warranty, Replacement & Shipping
18. Our Story, Founder & Partner With Us
19. Shopify / Hydrogen Technical Architecture
20. SEO, Performance & Analytics
21. Implementation Roadmap
22. QA, Security & Definition of Done
1. Executive Decisions & Non-Negotiables
Commercial model
Retail ecommerce is primarily SILVER. Gold jewellery is not sold. Gold bullion products are visible only as an enquiry catalogue and must never enter the normal Shopify retail cart/checkout.
Area
Final Decision
Primary brand focus
925 sterling silver jewellery and silver-led gifting.
Additional silver range
Silver gifts/articles and silver idols are included and separated into their own taxonomy.
Gold
Gold bullion only: coins, biscuits/bars or other approved bullion SKUs. Quote/enquiry only; no direct ecommerce checkout.
Rates
M.V rates are manually updated daily in an authenticated admin panel. These are the operational source of truth.
MCX
Display-only market reference. MCX data must not change product prices automatically.
Public product weight
Do NOT display weight on product cards, PDPs, images or public structured content. Internal weights may be stored privately for pricing/inventory controls.
Warranty
6-month limited warranty for eligible silver jewellery, subject to terms.
Replacement
15-day replacement window for eligible domestic orders, subject to condition and exclusions.
First purchase
20% off first eligible SILVER JEWELLERY purchase; exclude SIARA, bullion, bulk orders, silver idols/articles and already-discounted products unless admin intentionally overrides.
SIARA
Premium sub-collection with its own editorial styling and stricter discount rules.
Economy Plan
Jewellery purchase plan, not an EMI product: customer pays 6 eligible instalments and M.V funds the 7th equivalent instalment per final approved terms.
International shipping
Available where serviceable; shipping charge varies by country. International orders are final sale/no standard return, with only legally/operationally necessary exception handling for wrong/damaged delivery.
Franchise
Dedicated “Partner With Us” page and lead form.
Experience goal
The site must feel aspirational enough to compete visually with established jewellery brands, while remaining comfortable and low-friction for a first-time silver buyer. Premium should come from restraint, consistency, product photography, typography, spacing and trust - not from making the interface dark, heavy or difficult to browse.
Silver is the hero. Gold-toned brand accents support the logo but must not visually imply that M.V is a gold-jewellery-first brand.
The product must dominate the screen; UI chrome should recede.
Mobile is the primary design baseline. Desktop is an enhancement, not a separate product.
2. Current Site Assessment
Current full-page homepage snapshot supplied by M.V Ornaments
What should be retained
Overall ivory + charcoal luxury direction.
Dark hero concept with strong product photography.
Shop by Category, New Arrivals, Most Loved, M.V Promise and editorial story modules.
Wishlist presence, gifting, bulk/corporate section, reviews/social proof and newsletter.
Premium serif display type paired with a clean sans-serif UI font.
What must change
Remove all “Explore Gold”, “Gold jewellery”, gold necklace/ring merchandising and mixed gold/silver brand messaging.
Rebuild navigation around Silver Jewellery, SIARA, Silver Gifts & Articles, Silver Idols and Gold Bullion (quote only).
Reduce beige-on-beige monotony. Introduce platinum/soft-silver neutrals so silver products remain crisp and premium.
Add a clear M.V Economy Purchase Plan section and page.
Add “Partner With Us” / franchise route and lead funnel.
Add a dedicated custom admin panel for M.V rates, quote requests and operational settings.
Ensure MCX display is informational only and visually separated from M.V administered rates.
Remove public weight from all product UI even if weight remains in the private product data model.
Tighten long vertical gaps, strengthen product scale, and ensure responsive category/product grids do not clip on mobile.
3. Brand Positioning & Visual Design System
3.1 Positioning statement
Recommended brand expression
Modern silver, made aspirational. M.V should feel refined and contemporary rather than traditional-heavy: warm hospitality, jewellery-store trust, editorial luxury and a clear focus on wearable 925 silver.
3.2 Updated palette
Token
Hex
Usage
Pearl Ivory
#F8F6F1
Primary page background; soft, premium, comfortable.
Porcelain
#FCFBF8
Product cards and high-clarity content surfaces.
Soft Platinum
#E8E6E1
Alternate sections; reinforces silver identity.
Mist Silver
#D9D8D4
Borders, chips, subtle dividers.
M.V Charcoal
#1C1C1A
Header, footer, premium editorial sections.
Graphite
#2C2B28
Secondary dark surfaces.
Muted Champagne
#B9A46F
Logo-compatible accent, focus state, fine details.
Emerald Accent
#0D6B55
Use very sparingly for selected premium/stone accents.
Success Green
#277A4F
Availability/positive rate movement.
Muted Red
#A8473B
Negative market movement/errors only.
Colour rule
Target visual ratio across shopping pages: ~68% ivory/porcelain, 15% platinum/soft neutrals, 12% charcoal/graphite and <=5% champagne/emerald accents. Dark backgrounds should be reserved for hero/editorial moments, not continuous browsing surfaces.
3.3 Typography
Role
Recommended
Guideline
Display / H1-H2
Cormorant Garamond or equivalent premium serif
Use for large headings only; avoid excessive tracking.
Body / UI
Manrope
Primary navigation, buttons, filters, product data and forms.
Numbers / rates
Manrope with tabular figures
Prevents jumping widths when rate values update.
3.4 UI characteristics
Rounded corners: 10-14px for cards; 14-18px for key feature modules. Avoid excessive pill shapes.
Shadows: very soft; use border + tonal surface first. No floating-card-heavy SaaS look.
Buttons: primary charcoal fill, ivory text; secondary ivory/transparent with charcoal border; champagne used as accent/focus, not as low-contrast body text.
Motion: 160-240ms ease-out. Use subtle image zoom, drawer transitions and number fades. No glitter/sparkle animation.
Photography: real SKU fidelity first. Clean, consistent warm-neutral backgrounds; editorial images may use charcoal/black satin/stone.
4. Information Architecture & Navigation
4.1 Desktop primary navigation
Nav Item
Destination / Behaviour
NEW IN
/collections/new-arrivals
SILVER JEWELLERY
Mega menu: Rings, Necklaces, Earrings, Pendants, Bracelets, Anklets, Chains, Bangles (only categories actually stocked).
SIARA
/collections/siara - premium editorial collection.
SILVER GIFTS
Mega menu: Gifts & Articles, Silver Idols, Gifting by Occasion, Gifting by Budget.
GOLD BULLION
/pages/gold-bullion - quote/enquiry only.
GIFTS
/collections/gifts
COLLECTIONS
New Arrivals, Most Loved, Everyday, Festive, Wedding, SIARA.
MORE
Economy Plan, Bulk Orders, Partner With Us, Our Story, Metal Rates.
4.2 Mobile navigation
Use an accordion drawer. Do not compress the desktop nav horizontally. The mobile sticky bottom nav remains: Home / Categories / Search / Wishlist / Account. Bag remains in the top header.
4.3 URL map
Route
Route
/
/collections/new-arrivals
/collections/silver-jewellery
/collections/rings
/collections/necklaces
/collections/earrings
/collections/bracelets
/collections/siara
/collections/silver-gifts
/collections/silver-idols
/collections/gifts
/products/:handle
/search
/wishlist
/cart
/account
/pages/gold-bullion
/pages/metal-rates
/pages/bulk-orders
/pages/economy-plan
/pages/partner-with-us
/pages/about-us
/pages/jewellery-care
/pages/size-guide
/pages/contact-us
/pages/faqs
/pages/warranty
/pages/replacement-policy
/pages/shipping-policy
/pages/international-shipping
/pages/privacy-policy
/pages/terms-conditions
5. Homepage Redesign Specification
5.1 Homepage objective
Within the first 5-8 seconds, the user should understand: M.V is a premium silver jewellery brand; there is a clear first-purchase benefit; shopping is safe; products are easy to discover; gold is available only as bullion enquiry, not gold jewellery.
5.2 Recommended homepage order
#
Section
Developer / Content Direction
01
Utility announcement
Rotate: “20% off first eligible Silver Jewellery order” / “15-day replacement” / “6-month limited warranty” / “International shipping available”.
02
Header
M.V logo, silver-first navigation, search, account, wishlist, bag.
03
Market reference strip
Compact MCX Gold + Silver delayed reference. Explicitly informational.
04
Hero
Silver-only editorial hero. No gold-jewellery CTA.
05
Shop Silver by Category
Rings, Necklaces, Earrings, Bracelets first; vertical 2x2 cards on mobile.
06
New Arrivals
4 mobile / 5-6 desktop; Shopify-driven.
07
SIARA editorial feature
Premium collection with stronger visual identity.
08
Most Loved
Sales/curation driven.
09
Silver Gifts & Articles
Editorial entry to gifting/articles.
10
Silver Idols
Dedicated discovery block, separate from wearable jewellery.
11
Shop by Occasion
Everyday / Wedding / Festive / Gifts.
12
Gift Edit
Premium gifting banner.
13
M.V Economy Plan
Simple benefit explanation + Learn More/Join CTA.
14
Bulk & Corporate Orders
Concierge-style bulk enquiry.
15
Gold Bullion
Compact high-trust quote-only feature; no add-to-cart.
16
M.V Promise
Quality / Warranty / Replacement / Secure Checkout / Delivery.
17
Customer reviews
Real review data only.
18
Follow Us / UGC
Optimized static social tiles rather than heavy embed.
19
Brand & founder preview
Our Story + founder teaser.
20
Partner With Us
Franchise/partnership CTA.
21
Newsletter + Footer
Retention + support + policies.
5.3 Hero copy - recommended
Eyebrow
MODERN SILVER, MADE TO BELONG
H1
Silver Jewellery, Crafted to Shine
Supporting copy
Discover contemporary 925 silver jewellery designed for everyday elegance, thoughtful gifting and moments worth remembering.
Primary CTA: SHOP SILVER    |    Secondary CTA: DISCOVER SIARA
Trust microcopy: 925 Sterling Silver  |  6-Month Limited Warranty  |  Secure Shopping
5.4 Homepage rate strip
The homepage must NOT show “M.V selling price = MCX”. Use a small market-reference label. Recommended copy:
TODAY'S MARKET REFERENCE
GOLD  ₹xx,xxx / 10g     SILVER  ₹x,xx,xxx / kg     MCX • DELAYED • Updated hh:mm     View Rates →
A separate /pages/metal-rates page may show both: (a) M.V manually administered daily reference rates and (b) MCX delayed market reference, with explicit separation and disclaimers.
6. Silver Catalogue Taxonomy & Product Data
6.1 Recommended taxonomy
Level
Examples
Wearable Silver
Rings, Earrings, Necklaces, Pendants, Bracelets, Anklets, Chains, Bangles.
Silver Gifts & Articles
Gift items, decorative articles, religious gifting, keepsake pieces.
Silver Idols
Lakshmi-Ganesha, Radha-Krishna, Bal Krishna, Hanuman, other approved idol categories.
SIARA
Premium curated collection; may contain selected wearable silver only unless M.V later expands.
Gold Bullion
Coins/biscuits/bars; enquiry only, isolated from retail silver collections.
6.2 Shopify product fields
Public data and internal-only data must be deliberately separated. “No weight should be mentioned” means weight is not rendered publicly; it may still exist as a protected/internal operational field.
Field
Public?
Purpose
Title
Yes
SEO + PDP/PLP title.
SKU / product code
Yes
Customer support/reference.
Metal
Yes
e.g. 925 Sterling Silver.
Purity
Yes
925 where applicable.
Category
Yes
Filtering and collection routing.
Short description
Yes
1-2 sentence product value description.
Price / compare-at price
Yes
Shopify source of truth.
Inventory availability
Yes
Availability and cart eligibility.
Product media
Yes
Shopify Product Media.
Internal metal weight
NO
Rate/pricing logic only. Never render in Storefront API UI.
Gross/package weight
NO
Logistics/admin only.
Making component
NO
Internal pricing rule where used.
Stone/other component
NO
Internal pricing rule where used.
Warranty eligibility
Yes as badge / policy link
Controls warranty badge.
Replacement eligibility
Yes as policy link
Controls replacement messaging.
SIARA flag
Yes
Collection styling and offer exclusion.
First-order discount eligibility
No direct display except offer badge
Controls discount eligibility.
6.3 Images
Primary: 1:1, ideally 1600x1600, WebP/AVIF delivery, real SKU fidelity.
Use warm neutral backgrounds (#F8F6F1 / #FCFBF8) for wearable products; idols/articles may use the same neutral studio system.
Do not bake price, weight, SKU text, offer labels or watermarks into product images.
Preserve actual product details; AI may assist cleanup/background but must not redraw or change the merchandise.
Filename example: mv-925-silver-lakshmi-ganesha-idol-01.webp.
7. Product Listing, Search & Wishlist UX
7.1 PLP
Desktop: 4-column grid with left filter panel or 5-column grid if filters are in a top drawer. Mobile: fixed two-column grid. Product image should visually occupy at least ~68-75% of the card.
Filters
Price, Category, Style, Stone Colour, Occasion, Availability, SIARA/Premium (where useful). Do NOT expose weight as a filter.
Sort
Featured, Newest, Best Selling, Price Low-High, Price High-Low.
7.2 Search
Search must query Shopify storefront data, not a static array. Support product title, category, SKU and relevant tags/metafields. Mobile search should be full-screen with suggested searches and recent searches.
7.3 Wishlist
Wishlist is a first-class user journey. Signed-in customer wishlist should persist. Guest wishlist may use local storage and merge after login. All product cards show a heart control with accessible label and optimistic feedback.
8. Product Detail Page Specification
8.1 Above-the-fold layout
Left / Media
Right / Purchase
4-6 product images, zoom, swipe on mobile
Product title + short description
Real SKU imagery only
Price + compare-at price (if legitimate)
Optional lifestyle/editorial image
Metal: 925 Sterling Silver
Packaging visual
Variant selector (size/length only where applicable)
Pincode check / delivery estimate
ADD TO BAG + Wishlist
Warranty + 15-day replacement + secure checkout microcopy
8.2 Public content rules
Do not display product weight anywhere on PDP.
Every SKU must have a 1-3 sentence unique product description; no generic duplicated copy across 200 products.
Show warranty eligibility and replacement terms through concise badges linking to policy pages.
If a product is excluded from WELCOME20 or any offer, state it near the offer module, not hidden at checkout.
8.3 Accordion sections
Product Details
Styling / Gifting Note
Care Instructions
Warranty
Replacement & Shipping
International Shipping (when available)
8.4 Recommendations
You May Also Like + Complete the Look + Recently Viewed. Do not mix Gold Bullion into jewellery recommendations.
9. SIARA Premium Collection
SIARA should feel more editorial and exclusive while remaining inside the same M.V system. It is not a second website.
Element
Direction
URL
/collections/siara
Visuals
More negative space, deeper graphite editorial imagery, minimal champagne detail, premium close-ups.
Typography
Larger serif headlines; restrained body copy.
Product cards
Same core component, optional “SIARA” badge.
Discounts
Excluded from first-order 20% offer by default. Admin may explicitly override.
Hero copy
SIARA by M.V - A refined edit of silver pieces chosen for presence, detail and enduring style.
10. Silver Gifts, Articles & Idols
10.1 Separate commerce journeys
Do not mix religious/decorative silver items into jewellery grids without context. Create dedicated collections and visual cards so customers understand category, use case and gifting intent.
10.2 Silver Idols
Use clean studio photography with the complete supplied product presentation (e.g. glass dome/base where sold with the SKU). Public copy may mention “silver idol” / “925 silver” only if verified for that item; do not infer purity from appearance.
10.3 Product copy pattern
Example
A thoughtfully presented silver devotional piece designed for home gifting and meaningful occasions. Finished with detailed accents and presented in a protective display dome. Exact product specifications should come from verified Shopify data.
11. Gold Bullion - Quote-Only Experience
Non-negotiable
Gold bullion must NOT use Add to Bag or Shopify checkout. It is an enquiry/quotation funnel only.
11.1 Gold Bullion landing page
URL: /pages/gold-bullion
Hero: “Gold Bullion for Serious Requirements” with high-trust photography of coins/biscuits/bars. Avoid gold-jewellery imagery.
Product cards
Each bullion card can show denomination/format, purity/certification only when verified, availability status and CTA: REQUEST RATE / REQUEST QUOTE. Do not show an ecommerce sale price unless M.V later changes the commercial model.
Quote form fields
Name
Mobile
Email
City
Buyer type (Personal / Business)
Product / denomination
Quantity
Required date
GSTIN (business only)
Notes
Consent to contact
11.2 Rate communication
The page may display “M.V Gold Reference Rate - updated daily” if admin enters it. It must say “Indicative/reference rate; final bullion quote is confirmed by M.V at the time of quotation.” MCX remains a separate delayed market reference.
12. M.V Control Center - Custom Admin Panel
Architecture principle
Do NOT rebuild Shopify Admin. Shopify continues to own products, inventory, customers, retail orders and checkout. The custom M.V Control Center handles only M.V-specific operations: rates, price preview/publishing, bullion quotes, bulk requests, Economy Plan, warranty/replacement queues and selected site settings.
12.1 Recommended implementation
Build as a protected server-rendered admin application / Shopify custom app (preferred) using Node.js + TypeScript. It may be embedded in Shopify Admin or hosted at an authenticated M.V admin subdomain. Never expose Admin API credentials in browser code.
12.2 Roles
Role
Permissions
Owner/Admin
All settings, rates, price publish, quote approvals, roles, audit log.
Pricing Manager
Create/preview rates and pricing updates; cannot manage roles.
Sales/Bulk
View/update bulk and bullion quote requests; no pricing-engine configuration.
Customer Care
Warranty/replacement requests, customer notes; no rate publishing.
Content
Homepage editorial toggles / copy where implemented; no rate/order permissions.
12.3 Admin modules
Dashboard: today’s manual rates, MCX feed status, pending quotes, bulk enquiries, warranty/replacement tickets.
Rate Management: enter today’s M.V Silver and Gold reference rates; effective date/time; notes; status; audit trail.
Price Preview: calculate impacted silver SKU prices internally before writing changes to Shopify; show old/new price, delta and margin-floor violations.
Publish Prices: explicit approval step; batch update Shopify variant prices; never auto-publish on rate entry unless owner enables it later.
Gold Bullion Quotes: request pipeline NEW → REVIEW → QUOTED → ACCEPTED → CLOSED.
Bulk Orders: request pipeline and Shopify Draft Order creation when approved.
Economy Plan: lead/member records, instalment ledger, eligibility and redemption notes (Phase 2; subject to commercial/legal sign-off).
Warranty/Replacement: request intake, evidence upload links, inspection status and resolution.
Site Settings: first-order offer toggle, homepage notices, international shipping status, support contacts.
Audit Log: who changed what and when; immutable operational log for rate/pricing actions.
13. Manual Rate Management & Pricing Engine
13.1 Source of truth
IMPORTANT
M.V manually administered daily rates are the ONLY operational pricing reference. MCX never writes product prices. MCX never triggers Shopify price updates.
13.2 Rate fields
Field
Example / Rule
Effective date
2026-08-25
M.V Silver 999 reference
Admin-entered; unit defined consistently (e.g. ₹/g).
M.V Silver 925 reference
Admin-entered OR derived from 999 with configurable factor; admin can override.
M.V Gold 24K/999 reference
Admin-entered; used for bullion indication/quote workflow only.
Status
Draft / Active / Superseded.
Entered by / approved by
Authenticated user IDs.
Notes
Supplier/market note or internal reference.
13.3 Internal silver price formula
Recommended internal model (fields are NOT all public):
Illustrative formula
Internal metal weight × active M.V 925 rate + making component + stone/other component + product-specific margin/rounding = pre-tax selling basis; final retail price and applicable tax handling must be implemented according to M.V accountant-approved rules.
Developer must not hard-code a tax assumption without written business approval. Keep tax configuration externalized.
13.4 Publish workflow
1. Admin enters new daily M.V rate → saves as DRAFT.
2. System calculates all affected SKU prices privately.
3. Preview screen shows old price, proposed price, absolute/% change, margin floor and validation warnings.
4. Authorized admin presses PUBLISH.
5. Server uses Shopify Admin GraphQL API to batch-update relevant variant prices.
6. System verifies successful writes, logs errors and creates a rate/version audit record.
7. Storefront receives new Shopify prices automatically through Storefront API/cache revalidation.
13.5 Safeguards
Minimum selling price / margin floor per SKU or category.
Maximum single-day price change warning threshold.
Draft + approval workflow.
Idempotent batch job with retry.
Rate version ID stored with publish event.
Rollback option to prior published price set.
No public weight rendering.
14. MCX Market Reference Display
14.1 Purpose
MCX is a trust/market-awareness feature only. It does not drive retail silver prices or bullion quotes automatically.
14.2 Architecture
Data flow
Licensed/authorized MCX data provider → server-side M.V adapter → cache → /api/market-reference → React/Hydrogen rate component. API keys remain server-side.
14.3 API response contract
{ source: "MCX", feedType: "delayed", delayMinutes: N, marketStatus: "open|closed|stale|unavailable", updatedAt: ISO8601, gold: {...}, silver: {...} }
14.4 UX rules
Label clearly: “MCX • DELAYED” or provider-approved equivalent.
Never label public MCX widget as M.V selling rate.
Use a subtle number fade; no stock-ticker flashing.
If stale/unavailable, show last update or “Market data temporarily unavailable”; never show zero.
Cache the provider feed; do not request the vendor API on every visitor page view.
Add a rates page explaining that product/bullion pricing is set by M.V and may differ from market reference.
15. Bulk & Corporate Orders
Homepage placement
Recommended: Gift Edit → Economy Plan → Bulk & Corporate Orders → Gold Bullion → M.V Promise. Keep bulk visible without making the homepage feel B2B-first.
Dedicated page
Use concierge positioning: Corporate Gifting / Weddings & Events / Retail & Resellers / Large Personal Orders.
Form
Full Name, Company, Phone, Email
Order Type
Expected Quantity
City/State/Required By
Add Products via Shopify product picker OR “I need help choosing”
Budget per piece (when product help selected)
Packaging / custom branding requirements
GSTIN for business enquiries
Notes + contact consent
Backend
Create an M.V enquiry record and request ID. Staff reviews availability/rate and sends quotation. After approval, staff may create a Shopify Draft Order/payment link where commercially appropriate for silver bulk orders. Gold bullion remains quote-confirmation specific and should not be forced through retail cart rules.
16. M.V Economy Purchase Plan
Business model
Treat as a jewellery purchase plan, not an EMI product. Customer pays 6 eligible instalments; M.V funds the 7th equivalent instalment, subject to final terms. The accumulated entitlement is redeemed against eligible jewellery.
16.1 Public page
Hero: “Plan Your Next M.V Piece, One Month at a Time.” Explain the 6+1 benefit in three simple steps. Add calculator examples only after exact minimum instalment, maximum benefit, missed-payment rules, redemption window and eligible collections are legally/commercially approved.
16.2 Phase recommendation
Phase 1: lead/enrolment interest form + staff-assisted onboarding. Phase 2: payment/ledger automation only after accountant/legal/payment-gateway review of recurring collections, KYC, cancellation and redemption terms.
16.3 Terms required before automation
Minimum/maximum monthly instalment
Due date/grace period
Missed instalment consequences
Whether benefit equals exact instalment or has a cap
Eligible products/collections
Whether SIARA is eligible
Redemption validity
Refund/cancellation rules
Transferability
Tax treatment
International eligibility
17. Offers, Warranty, Replacement & Shipping
17.1 First purchase offer
Recommended rule
WELCOME20 = 20% off first eligible Silver Jewellery order only. Exclude SIARA, gold bullion, bulk/corporate orders, silver idols/articles, already-discounted products and any other admin-specified exclusions.
Enforce server-side/Shopify discount eligibility; do not rely on hiding the coupon in the UI. Show exclusions near the offer disclosure.
17.2 Six-month limited warranty - recommended scope
Applies to eligible silver jewellery from delivery date. Coverage should be prominently linked from PDP and M.V Promise.
Covered (subject to inspection)
Excluded
Manufacturing defect
Normal tarnishing/oxidation unless specifically covered by M.V care program
Clasp/lock failure under normal use
Scratches, dents, accidental impact or misuse
Stone-setting defect attributable to workmanship
Stone loss caused by impact/rough handling
Eligible finish/plating issue if M.V chooses to cover it
Chemical/perfume/chlorine exposure and improper storage
Third-party repair/resizing/modification
Final warranty wording must be legally reviewed before publication.
17.3 15-day replacement
Recommended domestic conditions: request within 15 days of delivery; unused/unworn condition; original packaging/invoice/tags; product passes inspection. Exclude customized/engraved items, gold bullion, bulk orders and hygiene-sensitive items where the seal is broken. Developer must make eligibility data-driven per SKU/category.
17.4 International shipping
Provide country selector/serviceability, estimated shipping charge and delivery estimate. Show “International orders are final sale / no standard return” before payment and in order confirmation. Maintain an exception workflow for wrong/damaged deliveries and mandatory consumer-law obligations. Duties/taxes messaging must be explicit (prepaid or recipient-paid according to final logistics setup).
18. Our Story, Founder & Partner With Us
18.1 Our Story
The final page should include the store story supplied by M.V, founder photograph, founder name and a “Man Behind M.V Ornaments” section. Do not invent biography/history until the business provides approved copy.
18.2 Partner With Us
Dedicated franchise/partnership page with aspirational business imagery and a qualified-lead form.
Lead fields
Name
Phone
Email
City/State
Business background
Current business (if any)
Investment range
Preferred city/territory
Property availability
Message
Consent
Backend status: NEW → CONTACTED → QUALIFIED → MEETING → PROPOSAL → CLOSED. Keep this separate from bulk-order enquiries.
19. Shopify / Hydrogen Technical Architecture
19.1 Target stack
Layer
Technology / Responsibility
Storefront
React + TypeScript + Shopify Hydrogen / React Router
Hosting
Shopify Oxygen unless developer has an approved alternative
Commerce backend
Shopify Basic
Products / collections / inventory
Shopify Admin
Retail cart
Shopify Storefront API Cart
Retail checkout
Shopify hosted checkout via cart.checkoutUrl
Custom backend
Node.js + TypeScript server functions/services
Custom admin
M.V Control Center / Shopify custom app
Database
PostgreSQL/Supabase or managed equivalent for quotes, audit logs, Economy Plan, tickets if Shopify metaobjects are insufficient
MCX
Licensed provider, server-side integration + caching
Payments
Shopify checkout + approved Indian payment gateway for retail; quote/payment workflow for non-retail cases
19.2 Data ownership
Rule
Shopify is the source of truth for retail product price visible to customer and checkout. The custom rate engine may calculate and publish prices, but React must never display a price that differs from Shopify checkout.
19.3 Security
No owner password sharing. Use Shopify Partner collaborator access.
Storefront private token and Admin credentials stored in server/Oxygen secrets.
No Admin API client secret in browser bundle or VITE_PUBLIC variables.
Admin panel protected with strong authentication, role-based authorization and 2FA where available.
Audit every rate/publish action.
Validate all quote/form input server-side; rate limit public endpoints.
CSRF/session controls for admin write actions.
20. SEO, Performance & Analytics
20.1 SEO focus
Shift keyword/topic architecture from “silver & gold jewellery” to silver-first intent. Gold SEO is isolated to bullion informational/quote pages.
Page
Example SEO direction
Home
M.V Ornaments | Premium 925 Silver Jewellery Online
Silver hub
925 Sterling Silver Jewellery Online | M.V Ornaments
Rings
925 Silver Rings for Women | M.V Ornaments
SIARA
SIARA Premium Silver Collection | M.V Ornaments
Silver Idols
Silver Idols & Devotional Gifts | M.V Ornaments
Gold Bullion
Gold Coins & Bullion Enquiry | M.V Ornaments
20.2 Structured data
Organization + WebSite on home
Product + Offer + BreadcrumbList on eligible retail PDPs
Collection/breadcrumb semantics on PLPs
FAQ structured data only where content genuinely exists and complies with search guidelines
20.3 Image SEO
Descriptive filenames
Useful alt text without keyword stuffing
Responsive srcset/sizes
Do not lazy-load LCP hero
Lazy-load below-fold grids
Use Shopify image CDN transformations where available
20.4 Performance budgets
Metric / Resource
Target
LCP
<= 2.5s on representative mobile connection
CLS
<= 0.1
INP
<= 200ms target
Hero image
Optimized responsive AVIF/WebP; no oversized desktop asset on mobile
Product card image
Responsive; visually crisp, no 1600px transfer into a 170px card
Third-party scripts
Minimize; defer non-critical marketing tags
20.5 Analytics events
view_home
select_category
view_item_list
select_item
view_item
add_to_wishlist
add_to_cart
view_cart
begin_checkout
purchase
view_market_rates
bulk_order_start
bulk_order_submit
bullion_quote_start
bullion_quote_submit
economy_plan_lead
partner_with_us_submit
21. Implementation Roadmap
Phase
Scope
Exit Criteria
0 - Freeze & cleanup
Freeze new visual direction, remove gold-jewellery references, fix routes/assets, confirm Shopify access.
No legacy gold-jewellery CTA/text remains; route inventory complete.
1 - Design system + navigation
Apply silver-first palette, typography, header/mega menu/mobile nav, common components.
Responsive components approved at 360/390/430/768/1440.
2 - Shopify core
Connect Shopify, collections, product data, search, cart, checkout, wishlist.
Real test product → cart → Shopify checkout works end-to-end.
3 - Silver catalogue
Import/clean initial ~200 SKUs, taxonomy, images, descriptions, eligibility flags.
Catalogue QA passes; no weight rendered publicly.
4 - Admin & rates
M.V Control Center, daily manual rates, preview/publish workflow, audit log.
Admin can publish rate-driven Shopify price changes safely.
5 - MCX display
Licensed delayed feed, cache, states, rates page.
MCX visible as reference only; failure states tested.
6 - Growth modules
SIARA, Bulk, Gold Bullion quote, Economy Plan Phase 1, Partner With Us.
Forms create trackable records and confirmation flows.
7 - Policies / international
Warranty, replacement, international shipping controls and content.
Eligibility and checkout messaging consistent.
8 - SEO / analytics / launch
Metadata, structured data, redirects, analytics, performance, UAT.
Launch checklist signed off.
Recommended build order for the next developer sprint
1. Remove all gold-jewellery merchandising and rename affected navigation/collections.
2. Apply the silver-first palette and rebuild header/navigation.
3. Create Shopify collection taxonomy and metafields; load 5-10 real test SKUs.
4. Replace dummy data with real Storefront API on Home + PLP + PDP.
5. Complete cart + checkoutUrl + wishlist.
6. Build M.V Control Center rate-entry prototype with audit trail (no price publish yet).
7. Add Gold Bullion quote page + Bulk Order page skeletons.
8. Implement manual price preview/publish against test SKUs.
9. Then scale catalogue import and MCX display.
22. QA, Security & Definition of Done
22.1 Functional acceptance
All navigation/routes resolve; no accidental 404 from header/footer.
No gold jewellery product/CTA exists in retail journey.
Gold bullion never has Add to Bag / retail checkout.
No public product weight appears in card, PDP, search, wishlist, schema or alt text.
Real Shopify price equals cart and checkout price.
WELCOME20 eligibility/exclusions work as configured.
Warranty/replacement badges match SKU eligibility.
Wishlist persists appropriately.
Manual M.V rate can be created as draft, previewed and published only by authorized role.
MCX failures do not affect M.V price or checkout.
Bulk/Bullion/Partner forms create unique IDs and staff-visible records.
International rules appear before checkout where relevant.
Mobile at 320-430px has no clipping or horizontal scroll.
Keyboard navigation, visible focus, labels and touch targets pass accessibility review.
Core Web Vitals/performance tested on representative mobile network.
SEO metadata is unique by route; canonical/robots/sitemap verified.
22.2 Final launch gate
Definition of Done
The site is complete only when a real silver Shopify SKU can be discovered from category/search, wishlisted, added to cart and purchased through Shopify checkout; a gold bullion item can be discovered and quoted without retail checkout; the admin can safely update M.V daily rates; MCX remains display-only; all policy/offer exclusions are correctly surfaced; and mobile UX meets the approved premium design standard.
22.3 Items M.V must provide before final publication
Approved store/founder story + founder name and photograph.
Final warranty wording and service process.
Final replacement exclusions and inspection process.
International shipping countries, carrier/fees/duties approach.
Economy Plan commercial/legal terms.
Gold bullion product list/denominations/purity/certification and quotation process.
Verified product attributes and final photography for the ~200 SKU catalogue.
Support phone/WhatsApp/email and business address details.
Licensed MCX/data-provider credentials and display rights.
Appendix A - Recommended Customer-Facing Copy Blocks
Hero
MODERN SILVER, MADE TO BELONG
Silver Jewellery, Crafted to Shine
Discover contemporary 925 silver jewellery designed for everyday elegance, thoughtful gifting and moments worth remembering.
CTA: SHOP SILVER   |   DISCOVER SIARA
M.V Economy Plan
YOUR NEXT M.V PIECE, PLANNED BEAUTIFULLY
Pay 6 eligible instalments. Your 7th equivalent instalment is on M.V - subject to plan terms.
CTA: EXPLORE THE M.V ECONOMY PLAN
Bulk
FOR BUSINESS & CELEBRATIONS
Bulk & Corporate Jewellery Orders
Corporate gifting, weddings, retail requirements or larger purchases - get personalised assistance with products, quantities and packaging.
CTA: REQUEST A BULK QUOTE
Gold bullion
GOLD BULLION
Coins & Bullion, Quoted with Care
Explore available bullion formats and request a confirmed M.V quote based on your quantity and requirement. Final pricing is confirmed by our team.
CTA: REQUEST A GOLD BULLION QUOTE
M.V Promise
Quality You Can Trust | 6-Month Limited Warranty | 15-Day Replacement | Secure Checkout | Thoughtful Packaging
Appendix B - Developer “Do Not” List
Do not create or display gold jewellery categories/products.
Do not use MCX to automatically alter Shopify prices.
Do not expose product weight publicly.
Do not calculate one price in React while Shopify checkout has another price.
Do not expose Admin API credentials in client code.
Do not upload all ~200 SKUs before taxonomy/metafields and 5-10 test products are validated.
Do not use AI-generated product redraws as final SKU photography if details differ from the real merchandise.
Do not apply the 20% first-order offer to excluded ranges by default.
Do not create a custom payment form for retail checkout.
Do not make every page dark; premium browsing should remain light, calm and product-first.