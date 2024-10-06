import React from 'react'
import "./PerfectContent.css"
import { BsStars } from "react-icons/bs";
import { AiFillTikTok } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";

const PerfectContent = () => {
  return (
    <div className="perfect-container">
    <div className="perf-text-container">
<button>💲 Discover Your Plan</button>
<h2>Choose Your Perfect Plan</h2>
<p>Flexible pricing options to fit every need. Whether you're just <br /> starting out or scaling up, TokBackup has a plan for you. </p>
<div className='perf-button-cards'>
            <button><span className='monthly-btn'>Monthly</span> Anual</button>
        </div>
</div>
<div className="price-card-container">
<div class="pricing-card">
        <div class="plan-type">
            <div class="plan-icon">
                <div class="icon-circle"></div>
                <span class="recom-text"><BsStars/>Recommended</span>
            </div>
            <div class="plan-name">Beginner</div>
            <div class="plan-desc">Ideal for newcomers.</div>
        </div>
        
        <div class="plan-price">
            <span class="price">$5</span>
            <span class="per-month">/ per month</span>
        </div>

        <button class="get-started">Get Started</button>

        <hr class="divider"/>

        <div class="features">
            <p class="feature-header">What you will get</p>
            <ul className='gpt'>
                <li>💡 Chat GPT/AI ready downloads</li>
                <li>🔽 Download 3 profiles per month</li>
                <li>🔽 Download all profile data</li>
                <li>📹 Download up to 6000 videos per month</li>
                <li>🔍 Scan and analyze 10 profiles</li>
                <li>💾 Backup: Tiktok only</li>
                <li>📊 Full data reports & analytics</li>
                <li>🚫 No watermarks</li>
                <li>🗂️ Downloadable .csv file</li>
                <li>⏳ Download speed: Average</li>
                <li>🕒 Videos saved for: 24 hours</li>
            </ul>
        </div>
<div className="supported-net-parent">
        <div class="supported-networks">
            <p>Supported Social Networks</p>
            <div className="media-icons-parent">
            <div class="social-media-icons">
                <AiFillTikTok  size={17} style={{color:"black"}}/>
                <AiFillInstagram size={17} color='#d25050'/>
                <FaFacebookSquare size={15} color='#42b6ff'/>
                {/* <img src="https://static.vecteezy.com/system/resources/thumbnails/018/930/575/small_2x/youtube-logo-youtube-icon-transparent-free-png.png" alt="Youtube"/>
                <img src="https://as1.ftcdn.net/v2/jpg/03/20/88/32/1000_F_320883269_YnJTMNxqnr1kO0QqjeE96yeGvemhnkhB.jpg" alt="Youtube"/>
                <img src="https://png.pngtree.com/png-clipart/20230401/original/pngtree-three-dimensional-instagram-icon-png-image_9015419.png" alt="Instagram"/> */}
            </div>
            </div>
        </div>
        </div>
    </div>
<div class="pricing-card">
        <div class="plan-type">
            <div class="plan-icon">
                <div class="icon-circle"></div>
                <span class="recom-text"><BsStars/>Recommended</span>
            </div>
            <div class="plan-name">Creator</div>
            <div class="plan-desc">Designed for growing creators.</div>
        </div>
        
        <div class="plan-price">
            <span class="price">$8</span>
            <span class="per-month">/ per month</span>
        </div>

        <button class="get-started">Get Started</button>

        <hr class="divider"/>

        <div class="features">
            <p class="feature-header">What you will get</p>
            <ul className='gpt'>
                <li>💡 Chat GPT/AI ready downloads</li>
                <li>🔽 Download 3 profiles per month</li>
                <li>🔽 Download all profile data</li>
                <li>📹 Download up to 6000 videos per month</li>
                <li>🔍 Scan and analyze 10 profiles</li>
                <li>💾 Backup: Tiktok only</li>
                <li>📊 Full data reports & analytics</li>
                <li>🚫 No watermarks</li>
                <li>🗂️ Downloadable .csv file</li>
                <li>⏳ Download speed: Average</li>
                <li>🕒 Videos saved for: 24 hours</li>
            </ul>
        </div>
<div className="supported-net-parent">
        <div class="supported-networks">
            <p>Supported Social Networks</p>
            <div className="media-icons-parent">
            <div class="social-media-icons">
                <AiFillTikTok  size={17} style={{color:"black"}}/>
                <AiFillInstagram size={17} color='#d25050'/>
                <FaFacebookSquare size={15} color='#42b6ff'/>
                {/* <img src="https://static.vecteezy.com/system/resources/thumbnails/018/930/575/small_2x/youtube-logo-youtube-icon-transparent-free-png.png" alt="Youtube"/>
                <img src="https://as1.ftcdn.net/v2/jpg/03/20/88/32/1000_F_320883269_YnJTMNxqnr1kO0QqjeE96yeGvemhnkhB.jpg" alt="Youtube"/>
                <img src="https://png.pngtree.com/png-clipart/20230401/original/pngtree-three-dimensional-instagram-icon-png-image_9015419.png" alt="Instagram"/> */}
            </div>
            </div>
        </div>
        </div>
    </div>
<div class="pricing-card">
        <div class="plan-type">
            <div class="plan-icon">
                <div class="icon-circle"></div>
                <span class="recom-text"><BsStars/>Recommended</span>
            </div>
            <div class="plan-name">Unlimited</div>
            <div class="plan-desc">For the power users.</div>
        </div>
        
        <div class="plan-price">
            <span class="price">$20</span>
            <span class="per-month">/ per month</span>
        </div>

        <button class="get-started">Get Started</button>

        <hr class="divider"/>

        <div class="features">
            <p class="feature-header">What you will get</p>
            <ul className='gpt'>
                <li>💡 Chat GPT/AI ready downloads</li>
                <li>🔽 Download 3 profiles per month</li>
                <li>🔽 Download all profile data</li>
                <li>📹 Download up to 6000 videos per month</li>
                <li>🔍 Scan and analyze 10 profiles</li>
                <li>💾 Backup: Tiktok only</li>
                <li>📊 Full data reports & analytics</li>
                <li>🚫 No watermarks</li>
                <li>🗂️ Downloadable .csv file</li>
                <li>⏳ Download speed: Average</li>
                <li>🕒 Videos saved for: 24 hours</li>
            </ul>
        </div>
<div className="supported-net-parent">
        <div class="supported-networks">
            <p>Supported Social Networks</p>
            <div className="media-icons-parent">
            <div class="social-media-icons">
                <AiFillTikTok  size={17} style={{color:"black"}}/>
                <AiFillInstagram size={17} color='#d25050'/>
                <FaFacebookSquare size={15} color='#42b6ff'/>
                {/* <img src="https://static.vecteezy.com/system/resources/thumbnails/018/930/575/small_2x/youtube-logo-youtube-icon-transparent-free-png.png" alt="Youtube"/>
                <img src="https://as1.ftcdn.net/v2/jpg/03/20/88/32/1000_F_320883269_YnJTMNxqnr1kO0QqjeE96yeGvemhnkhB.jpg" alt="Youtube"/>
                <img src="https://png.pngtree.com/png-clipart/20230401/original/pngtree-three-dimensional-instagram-icon-png-image_9015419.png" alt="Instagram"/> */}
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
</div>
  )
}

export default PerfectContent