import React from 'react';
import './BoostContent.css';
import { IoCheckbox } from "react-icons/io5";
import analytics from "../../assets/analytics.png"

const BoostContent = () => {
  return (
    <section className="boost-content-container">
      {/* Left side */}
      <div className="optimize-left">
        <h1>Boost Content Engagement</h1>

        <div className="feature-item-boost">
          <span className="feature-icon"><IoCheckbox color='rgb(47, 188, 188)'/></span>
          <div>
            <h3>Analyze Engagement Metrics</h3>
            <p>Track views, likes, shares, and comments for each post. TokBackup’s performance metrics allow you to understand which posts are performing well and why.</p>
          </div>
        </div>

        <div className="feature-item-boost">
          <span className="feature-icon"><IoCheckbox color='rgb(47, 188, 188)'/></span>
          <div>
            <h3>Identify Resonating Content</h3>
            <p>Discover what type of content your audience loves by analyzing engagement data. This helps in identifying high-engagement posts and understanding audience behavior.</p>
          </div>
        </div>

        <div className="feature-item-boost">
          <span className="feature-icon"><IoCheckbox color='rgb(47, 188, 188)'/></span>
          <div>
            <h3>Optimize Posting Times</h3>
            <p>Use insights from TokBackup to post when engagement is highest. Detailed analysis of posting behavior ensures your content reaches the maximum audience at the right times.</p>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="optimize-right">
        <img
          src={analytics}
          alt="Default Analytics"
          className="default-image"
        />
      </div>
    </section>
  );
};

export default BoostContent;
