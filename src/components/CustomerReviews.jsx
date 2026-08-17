import React, { useState, useRef, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import './CustomerReviews.css';

const reviews = [
  { id: 1, name: 'Priya S.', rating: 5, text: 'Beautiful craftsmanship and timely delivery. The silver ring exceeded my expectations!', location: 'Mumbai' },
  { id: 2, name: 'Rajesh K.', rating: 5, text: 'Excellent quality and transparent pricing. Will definitely order again.', location: 'Delhi' },
  { id: 3, name: 'Meena D.', rating: 5, text: 'Lovely collection, especially the temple jewellery. Great customer service.', location: 'Bangalore' },
  { id: 4, name: 'Anita R.', rating: 4, text: 'The necklace I ordered was even more beautiful in person. Packaging was premium too.', location: 'Hyderabad' },
];

function CustomerReviews() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
  }, []);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector('.review-card')?.offsetWidth || 300;
    el.scrollBy({ left: direction === 'left' ? -cardWidth - 16 : cardWidth + 16, behavior: 'smooth' });
  };

  return (
    <section className="reviews-section">
      <div className="container">
        <div className="section-header">
          <div className="section-decoration">❦</div>
          <h2 className="section-title">WHAT OUR CUSTOMERS SAY</h2>
          <div className="section-decoration">❦</div>
        </div>

        <div className="reviews-wrapper">
          {canScrollLeft && (
            <button className="reviews-nav reviews-nav--left" onClick={() => scroll('left')} aria-label="Previous review">
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>
          )}
          <div className="reviews-rail" ref={scrollRef} onScroll={checkScroll}>
            {reviews.map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-stars">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="var(--champagne-gold)" stroke="var(--champagne-gold)" />
                  ))}
                </div>
                <p className="review-text">"{review.text}"</p>
                <div className="review-author">
                  <span className="review-name">{review.name}</span>
                  <span className="review-location">{review.location}</span>
                </div>
              </div>
            ))}
          </div>
          {canScrollRight && (
            <button className="reviews-nav reviews-nav--right" onClick={() => scroll('right')} aria-label="Next review">
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default CustomerReviews;
