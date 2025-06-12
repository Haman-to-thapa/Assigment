import React, { useEffect, useRef } from 'react';
import './style.css';

const HomePage = () => {
  const counter1Ref = useRef(null);
  const counter2Ref = useRef(null);
  const counter3Ref = useRef(null);
  const progressFillRef = useRef(null);
  const progressPercentRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const animateCounter = (element, target, duration) => {
    let start = 0;
    const increment = target / (duration / 5);

    function updateCounter() {
      start += increment;
      if (start < target) {
        element.textContent = Math.floor(start);
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target;
      }
    }
    updateCounter();
  };

  const animateProgressBar = () => {
    const targetPercent = 73;
    let currentPercent = 0;
    const increment = targetPercent / 120;

    function updateProgress() {
      currentPercent += increment;
      if (currentPercent < targetPercent) {
        if (progressFillRef.current) progressFillRef.current.style.width = `${currentPercent}%`;
        if (progressPercentRef.current) progressPercentRef.current.textContent = Math.floor(currentPercent);
        requestAnimationFrame(updateProgress);
      } else {
        if (progressFillRef.current) progressFillRef.current.style.width = `${targetPercent}%`;
        if (progressPercentRef.current) progressPercentRef.current.textContent = targetPercent;
      }
    }
    updateProgress();
  };

  useEffect(() => {
    setTimeout(() => animateProgressBar(), 100);
    setTimeout(() => {
      animateCounter(counter1Ref.current, 2847, 2000);
      animateCounter(counter2Ref.current, 158, 2000);
      animateCounter(counter3Ref.current, 12500, 2000);
    }, 1300);
  }, []);

  const toggleMenu = () => {
    mobileMenuRef.current.classList.toggle('active');
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header_container">
            <a href="#" className="logo">KonnectImpact</a>

            <nav className="nav">
              <ul className="nav_links">
                <li><a href="#" className="nav_link">Discover projects</a></li>
                <li><a href="#" className="nav_link">How it works</a></li>
                <li><a href="#" className="nav_link">About</a></li>
              </ul>
              <a href="#" className="start_proj_button">Start project</a>
            </nav>

            <button className="menu_toggle" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div className="mobile_menu" ref={mobileMenuRef}>
              <ul className="mobile-nav_links">
                <li><a href="#" className="mobile-nav_link">Discover projects</a></li>
                <li><a href="#" className="mobile-nav_link">How it works</a></li>
                <li><a href="#" className="mobile-nav_link">About</a></li>
                <li><a href="#" className="mobile-nav_link">Start project</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <main className="hero">
        <div className="container">
          <div className="hero_container">
            <h1 className="hero_title">
              Connecting <span className="highlight_text">social-impact projects</span> with funders
            </h1>
            <p className="hero_tagline">
              Standing for <span className="highlight_text">transparency</span>, community-driven
              impact, and seamless contributions
            </p>

            <div className="progress_section">
              <div className="progress_bar_container">
                <div className="progress_label">
                  <span>Platform impact goal</span>
                  <span><span ref={progressPercentRef}>0</span>%</span>
                </div>
                <div className="progress_bar">
                  <div className="progress_fill" ref={progressFillRef}></div>
                </div>
              </div>
            </div>

            <div className="stats_section">
              <div className="stat_card">
                <div className="counter" ref={counter1Ref}>0</div>
                <div className="counter_label">Projects funded</div>
              </div>
              <div className="stat_card">
                <div className="counter" ref={counter2Ref}>0</div>
                <div className="counter_label">Active campaigns</div>
              </div>
              <div className="stat_card">
                <div className="counter" ref={counter3Ref}>0</div>
                <div className="counter_label">Total backers</div>
              </div>
            </div>

            <a href="#" className="primary_cta">Discover Projects</a>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
