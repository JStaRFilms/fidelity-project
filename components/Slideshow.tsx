"use client";

import { useState } from "react";
import Link from "next/link";

export default function Slideshow() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    { id: 0, label: "Start investing", img: "/img/img2.PNG", alt: "Start investing" },
    { id: 1, label: "Save for retirement", img: "/img/img3.PNG", alt: "Save for retirement" },
    { id: 2, label: "Save for healthcare", img: "/img/img4.PNG", alt: "Save for healthcare" },
    { id: 3, label: "Invest for a child", img: "/img/img5.PNG", alt: "Invest for a child" },
  ];

  return (
    <section className="slideshow-section">
      <div className="container">
        <div className="slideshow-nav">
          {slides.map((slide) => (
            <button
              key={slide.id}
              className={`slideshow-btn ${activeSlide === slide.id ? "active" : ""}`}
              onClick={() => setActiveSlide(slide.id)}
            >
              <span>{slide.label}</span>
            </button>
          ))}
        </div>
        <div className="slideshow-content">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={`slide ${activeSlide === slide.id ? "active" : ""}`}
              data-slide={slide.id}
            >
              <div className="slide-image">
                <img src={slide.img} alt={slide.alt} />
                {slide.id === 0 && (
                  <>
                    <Link
                      href="/pages/open-account"
                      className="slide-link-area"
                      style={{ top: "73%", left: "4%", width: "20%", height: "5%" }}
                    ></Link>
                    <Link
                      href="/pages/learn-more"
                      className="slide-link-area"
                      style={{ top: "73%", left: "26%", width: "16%", height: "5%" }}
                    ></Link>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
