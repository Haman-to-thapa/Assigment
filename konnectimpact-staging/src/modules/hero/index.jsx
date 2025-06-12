import React, { useEffect } from "react";
import "./style.css";

const Hero = () => {
  useEffect(() => {
    // Mobile menu toggle
    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
      });
    }

    // Progress animation
    const animateProgressBar = () => {
      const progressFill = document.getElementById("progressFill");
      const progressPercent = document.getElementById("progressPercent");
      const targetPercent = 73;
      let currentPercent = 0;
      const increment = targetPercent / 120;

      function updateProgress() {
        currentPercent += increment;
        if (currentPercent < targetPercent) {
          progressFill.style.width = currentPercent + "%";
          progressPercent.textContent = Math.floor(currentPercent);
          requestAnimationFrame(updateProgress);
        } else {
          progressFill.style.width = targetPercent + "%";
          progressPercent.textContent = targetPercent;
        }
      }

      updateProgress();
    };

    const animateCounter = (elementId, target, duration) => {
      let start = 0;
      const increment = target / (duration / 5);
      const el = document.getElementById(elementId);

      function updateCounter() {
        start += increment;
        if (start < target) {
          el.textContent = Math.floor(start);
          requestAnimationFrame(updateCounter);
        } else {
          el.textContent = target;
        }
      }
      updateCounter();
    };

    setTimeout(() => {
      animateProgressBar();
    }, 100);

    setTimeout(() => {
      animateCounter("counter1", 2847, 2000);
      animateCounter("counter2", 158, 2000);
      animateCounter("counter3", 12500, 2000);
    }, 1300);
  }, []);

  return (
    <main className="hero">
      <div className="container">
        <div className="hero_container">
          <h1 className="hero_title">
            Connecting <span className="highlight_text">social-impact projects</span> with funders
          </h1>
          <p className="hero_tagline">
            Standing for <span className="highlight_text">transparency</span>, community-driven impact, and seamless contributions
          </p>

          <div className="progress_section">
            <div className="progress_bar_container">
              <div className="progress_label">
                <span>Platform impact goal</span>
                <span><span id="progressPercent">0</span>%</span>
              </div>
              <div className="progress_bar">
                <div className="progress_fill" id="progressFill"></div>
              </div>
            </div>
          </div>

          <div className="stats_section">
            <div className="stat_card">
              <div className="counter" id="counter1">0</div>
              <div className="counter_label">Projects funded</div>
            </div>
            <div className="stat_card">
              <div className="counter" id="counter2">0</div>
              <div className="counter_label">Active campaigns</div>
            </div>
            <div className="stat_card">
              <div className="counter" id="counter3">0</div>
              <div className="counter_label">Total backers</div>
            </div>
          </div>

          <a href="#" className="primary_cta">Discover Projects</a>
        </div>
      </div>
    </main>
  );
};

export default Hero;
