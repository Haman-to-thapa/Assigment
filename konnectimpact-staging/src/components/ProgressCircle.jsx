import React, { useEffect, useState } from 'react';

const ProgressCircle = () => {
  const [progress, setProgress] = useState(0);
  const outerRadius = 54;
  const innerRadius = 44;
  const innerCircumference = 2 * Math.PI * innerRadius;
  const innerOffset = innerCircumference * (1 - progress / 100);

  useEffect(() => {
    const startTime = performance.now();
    const duration = 1500;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progressValue = Math.min((elapsed / duration) * 100, 100);
      setProgress(Math.round(progressValue));
      if (progressValue < 100) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <>
      <div className="circular-progress-container" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
        <div className="circular-progress">
          <svg className="progress-outer" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r={outerRadius} stroke="#CDDC39" />
            <circle cx="60" cy="60" r={outerRadius} stroke="#b2f2d7" />
            <circle cx="60" cy="60" r={outerRadius} stroke="#00897B" />
          </svg>

          <svg className="progress-inner" viewBox="0 0 120 120">
            <circle className="progress-track" cx="60" cy="60" r={innerRadius} />
            <circle
              className="progress-fill"
              cx="60"
              cy="60"
              r={innerRadius}
              strokeDasharray={innerCircumference}
              strokeDashoffset={innerOffset}
            />
          </svg>

          <div className="ui-values">{progress}%</div>
          <div className="ui-labels">Impact</div>
        </div>

      </div>
      <div style={{ textAlign: 'center', color: '#888', fontSize: '0.95rem', margin: '2rem 0 1rem 0', letterSpacing: '0.5px' }}>
        Made with <span style={{ color: '#e57373' }}>♥</span>, dedication and hope.
      </div>
    </>
  );
};

export default ProgressCircle;