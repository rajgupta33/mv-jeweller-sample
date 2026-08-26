import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, BadgeCheck, RotateCcw, ShieldCheck, Gift } from 'lucide-react';
import './Hero.css';
import { getImageUrl } from '../utils/image-util';

const DEFAULT_AUTOPLAY = 4200; // Unused global, logic moved inside Hero

/*
 * NOTE ON ASSETS: the hero files in /public are named after collections but the
 * artwork inside them does not match those names (the exports were rotated).
 * Each slide below points at the file that actually CONTAINS the right artwork,
 * so copy, palette and photograph belong together:
 *
 *   mv-home-hero-siara-desktop        -> model wearing silver jewellery
 *   mv-home-hero-silver-gifts-mobile  -> model wearing silver jewellery
 *   mv-home-hero-silver-gifts-desktop -> dark slate + diamond set
 *   mv-home-hero-silver-mobile        -> dark slate + diamond set
 *   mv-home-hero-silver-desktop       -> silver idol + gift box
 *   mv-home-hero-siara-mobile         -> silver idol + gift box
 */

// Per-slide palette. Every colour a slide paints (surface, ink, accent, buttons,
// dots) is sampled from its photograph so type never fights the image.
const TONE_IVORY = {
  '--hero-surface': '250, 247, 242',
  '--hero-ink': '#1B1A17',
  '--hero-ink-soft': '#5A554D',
  '--hero-accent': '#7C6428',
  '--hero-rule': 'rgba(124, 100, 40, 0.4)',
  '--hero-cta-bg': '#B99C57',
  '--hero-cta-bg-hover': '#A5883F',
  '--hero-cta-fg': '#1B1A17',
  '--hero-ghost-border': 'rgba(27, 26, 23, 0.30)',
  '--hero-ghost-fg': '#1B1A17',
  '--hero-ghost-hover-bg': '#1B1A17',
  '--hero-ghost-hover-fg': '#FAF7F2',
  '--hero-dot': 'rgba(27, 26, 23, 0.20)'
};

const TONE_ONYX = {
  '--hero-surface': '18, 17, 16',
  '--hero-ink': '#FFFDF9',
  '--hero-ink-soft': '#C9C3B8',
  '--hero-accent': '#D9C68E',
  '--hero-rule': 'rgba(217, 198, 142, 0.45)',
  '--hero-cta-bg': '#C6B47C',
  '--hero-cta-bg-hover': '#D6C591',
  '--hero-cta-fg': '#141312',
  '--hero-ghost-border': 'rgba(255, 253, 249, 0.42)',
  '--hero-ghost-fg': '#FFFDF9',
  '--hero-ghost-hover-bg': '#FFFDF9',
  '--hero-ghost-hover-fg': '#141312',
  '--hero-dot': 'rgba(255, 253, 249, 0.26)'
};

const TONE_CHAMPAGNE = {
  '--hero-surface': '250, 240, 226',
  '--hero-ink': '#2A2113',
  '--hero-ink-soft': '#6B5C45',
  '--hero-accent': '#7A5D22',
  '--hero-rule': 'rgba(122, 93, 34, 0.4)',
  '--hero-cta-bg': '#B08A3C',
  '--hero-cta-bg-hover': '#9A772F',
  '--hero-cta-fg': '#241C0F',
  '--hero-ghost-border': 'rgba(42, 33, 19, 0.30)',
  '--hero-ghost-fg': '#2A2113',
  '--hero-ghost-hover-bg': '#2A2113',
  '--hero-ghost-hover-fg': '#FAF0E2',
  '--hero-dot': 'rgba(42, 33, 19, 0.20)'
};

const slides = [
  {
    id: 1,
    eyebrow: 'THE ART OF SILVER',
    headline: 'Silver Jewellery, Crafted to Shine',
    copy: 'Contemporary 925 silver, created for everyday elegance and moments worth remembering.',
    primaryCta: { text: 'SHOP SILVER JEWELLERY', link: '/collections/silver-jewellery' },
    secondaryCta: { text: 'NEW ARRIVALS', link: '/collections/new-arrivals' },
    mobileImg: '/mv-home-hero-silver-mobile.webp',
    desktopImg: '/mv-home-hero-silver-desktop.webp',
    focusMobile: '52% 24%',
    focusDesktop: '64% 32%',
    isH1: true,
    theme: 'light',
    tone: TONE_IVORY
  },
  {
    id: 2,
    eyebrow: 'THE SIGNATURE COLLECTION',
    headline: 'SIARA — For Those Who Choose Differently',
    copy: 'Distinctive silver jewellery where refined craftsmanship meets contemporary expression.',
    primaryCta: { text: 'DISCOVER SIARA', link: '/collections/siara' },
    secondaryCta: { text: 'VIEW COLLECTION', link: '/collections/siara' },
    mobileImg: '/mv-home-hero-siara-mobile.webp',
    desktopImg: '/mv-home-hero-siara-desktop.webp',
    focusMobile: '60% 46%',
    focusDesktop: '62% 50%',
    isH1: false,
    theme: 'dark',
    tone: TONE_ONYX
  },
  {
    id: 3,
    eyebrow: 'GIFTS WITH MEANING',
    headline: 'Silver Gifts Made to Be Remembered',
    copy: 'Silver idols, keepsakes and articles chosen for celebrations, blessings and gifting.',
    primaryCta: { text: 'EXPLORE SILVER GIFTS', link: '/collections/silver-gifts' },
    secondaryCta: { text: 'SHOP SILVER IDOLS', link: '/collections/silver-idols' },
    mobileImg: '/mv-home-hero-silver-gifts-mobile.webp',
    desktopImg: '/mv-home-hero-silver-gifts-desktop.webp',
    focusMobile: '52% 62%',
    focusDesktop: '58% 52%',
    isH1: false,
    theme: 'light',
    tone: TONE_CHAMPAGNE
  }
];

const trustItems = [
  { Icon: BadgeCheck, title: '6-Month Warranty', note: 'On eligible silver jewellery, subject to terms.' },
  { Icon: RotateCcw, title: '15-Day Replacement', note: 'On eligible purchases, subject to policy.' },
  { Icon: ShieldCheck, title: 'Secure Checkout', note: 'Protected payment experience.' },
  { Icon: Gift, title: 'Premium Packaging', note: 'Presented with care.' }
];

// React sets img.src while the element is still detached, so the browser locks
// currentSrc before <source> children are appended and <picture> art direction
// silently never applies. Choosing the file in JS is the reliable way to do it.
function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(query);
    const sync = () => setMatches(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    // Belt and braces: some engines (and devtools device emulation) resize the
    // viewport without firing the media-query change event.
    window.addEventListener('resize', sync);
    return () => {
      mq.removeEventListener('change', sync);
      window.removeEventListener('resize', sync);
    };
  }, [query]);

  return matches;
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (e) => setReduced(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return reduced;
}

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  // Bumped on every manual interaction so the autoplay timer restarts cleanly.
  const [cycle, setCycle] = useState(0);
  const touchStart = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  
  const autoplaySpeed = isDesktop ? 4500 : 2500;

  const goTo = useCallback((index) => {
    setCurrentSlide((index + slides.length) % slides.length);
    setCycle((c) => c + 1);
  }, []);

  const next = useCallback(() => goTo(currentSlide + 1), [goTo, currentSlide]);
  const prev = useCallback(() => goTo(currentSlide - 1), [goTo, currentSlide]);

  useEffect(() => {
    if (prefersReducedMotion || isPaused) return undefined;
    const timer = setTimeout(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
    }, autoplaySpeed);
    return () => clearTimeout(timer);
  }, [currentSlide, cycle, isPaused, prefersReducedMotion, autoplaySpeed]);

  const onTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStart.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStart.current;
    touchStart.current = null;
    if (Math.abs(delta) < 45) return;
    if (delta < 0) next();
    else prev();
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
  };

  const activeTone = slides[currentSlide].tone;

  return (
    <section className="hero" aria-roledescription="carousel" aria-label="Featured collections">
      <div
        className="hero-carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onKeyDown={onKeyDown}
      >
        <div className="hero-stage">
          {slides.map((slide, index) => {
            const isActive = index === currentSlide;
            const Title = slide.isH1 ? 'h1' : 'h2';

            return (
              <article
                key={slide.id}
                className={`hero-slide hero-slide--${slide.theme} ${isActive ? 'is-active' : ''}`}
                style={{
                  ...slide.tone,
                  '--focus-mobile': slide.focusMobile,
                  '--focus-desktop': slide.focusDesktop
                }}
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${slides.length}`}
                aria-hidden={!isActive}
              >
                {/* Every slide loads eagerly: a lazy image inside a hidden
                    panel is not fetched until the panel is shown, which makes
                    the first transition flash an empty frame. */}
                <div className="hero-media">
                  <img
                    src={getImageUrl(isDesktop ? slide.desktopImg : slide.mobileImg)}
                    alt={slide.headline}
                    className="hero-media__img"
                    width={isDesktop ? 1904 : 1122}
                    height={isDesktop ? 830 : 1402}
                    loading="eager"
                    fetchPriority={index === 0 ? 'high' : 'low'}
                    decoding={index === 0 ? 'sync' : 'async'}
                  />
                  <span className="hero-media__scrim" aria-hidden="true" />
                </div>

                <div className="hero-panel">
                  <div className="container hero-panel__inner">
                    <div className="hero-text">
                      <p className="hero-eyebrow">
                        <span className="hero-eyebrow__rule" aria-hidden="true" />
                        {slide.eyebrow}
                      </p>
                      <Title className="hero-title">{slide.headline}</Title>
                      <p className="hero-copy">{slide.copy}</p>
                      <div className="hero-ctas">
                        <Link className="hero-cta hero-cta--primary" to={slide.primaryCta.link} tabIndex={isActive ? 0 : -1}>
                          {slide.primaryCta.text}
                        </Link>
                        <Link className="hero-cta hero-cta--ghost" to={slide.secondaryCta.link} tabIndex={isActive ? 0 : -1}>
                          {slide.secondaryCta.text}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="hero-controls" style={activeTone}>
          <div className="container hero-controls__inner">
            <button type="button" className="hero-arrow" onClick={prev} aria-label="Previous slide">
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>

            <div className="hero-dots">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  className={`hero-dot ${index === currentSlide ? 'is-active' : ''}`}
                  onClick={() => goTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === currentSlide}
                >
                  <span className="hero-dot__track">
                    {index === currentSlide && (
                      <span
                        key={`${currentSlide}-${cycle}`}
                        className="hero-dot__fill"
                        style={{
                          animationDuration: `${autoplaySpeed}ms`,
                          animationPlayState: isPaused || prefersReducedMotion ? 'paused' : 'running'
                        }}
                      />
                    )}
                  </span>
                </button>
              ))}
            </div>

            <button type="button" className="hero-arrow" onClick={next} aria-label="Next slide">
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      <div className="hero-trust">
        <div className="container hero-trust__inner">
          {trustItems.map(({ Icon, title, note }) => (
            <div className="hero-trust__item" key={title}>
              <Icon size={20} strokeWidth={1.3} className="hero-trust__icon" />
              <div className="hero-trust__text">
                <strong>{title}</strong>
                <span>{note}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
