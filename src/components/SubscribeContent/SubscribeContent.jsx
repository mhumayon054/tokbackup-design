import React from 'react'
import "./SubscribeContent.css"
import { MdEmail } from "react-icons/md";

const SubscribeContent = () => {
  return (
    <div class="newsletter-section">
        <div className="shade-parent">
        <div className="shade"></div>
        </div>
    <div class="newsletter-box">
        <span class="newsletter-icon">🇺🇸</span>
        <span class="newsletter-text">Tokbackup Newsletter</span>
    </div>

    <h1 class="title">Subscribe to TokBackup Updates</h1>
    <p class="description">
        Stay in the loop! Subscribe to our newsletter for the latest features, tips, and exclusive offers. 
        Enter <br /> your email below and join the TokBackup community.
    </p>
<div className="subscriber-form-parent">
    <div class="subscribe-form">
        <input type="email" placeholder="Enter your email here" class="email-input"/>
        <button class="subscribe-button">
            Subscribe <MdEmail/>
        </button>
    </div>
    </div>
</div>
  )
}

export default SubscribeContent