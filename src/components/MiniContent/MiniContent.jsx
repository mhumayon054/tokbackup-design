import React from 'react';
import './MiniContent.css';
import { IoCheckbox } from "react-icons/io5";

const MiniContent = () => {
    return (
        <div className="mini-content-container">
            <div className="content-wrapper">
                {/* 1 */}
                <section className="content-section">
                    <div className="left-content">

                        <div className="feature-item-mini">
                            <div>
                            <h3>Analyze Any Profile</h3>
                                <p>Start by selecting a payment plan on TokBackup’s <br /> website. Enter the social media handle you want to <br /> analyze, and instantly access detailed performance <br /> metrics and growth trends.</p>
                            </div>
                        </div>
                    </div>
                    <div className="right-content">
                        <img
                            src="src/assets/analytics.png"
                            alt="Default Analytics"
                            className="content-image"
                        />
                    </div>
                </section>
                {/* 2 */}
                <section className="content-section">
                    <div className="right-content">
                        <img
                            src="src/assets/second.png"
                            alt="Default Analytics"
                            className="content-image"
                        />
                    </div>
                    <div className="left-content">

                        <div className="feature-item-mini">
                            <div>
                        <h3>See Their Top-Performing Content</h3>
                                <p>Discover their most successful posts effortlessly. <br /> TokBackup reveals which content receives the most <br /> likes, comments, and shares, providing valuable <br /> insights into effective content strategies.</p>
                            </div>
                        </div>
                    </div>

                </section>
                {/* 3 */}
                <section className="content-section">
                    <div className="left-content">

                        <div className="feature-item-mini">
                            <div>
                                <h3>Analyze Their Content Strategy</h3>
                                <p>Explore their posting schedules, hashtag usage, and <br /> preferred content formats. TokBackup uncovers the <br /> secrets behind their successful social media <br /> strategy.</p>
                            </div>
                        </div>
                    </div>
                    <div className="right-content">
                        <img
                            src="src/assets/third.png"
                            alt="Default Analytics"
                            className="content-image"
                        />
                    </div>
                </section>
                {/* 4 */}
                <section className="content-section">
                    <div className="right-content">
                        <img
                            src="src/assets/fourth.png"
                            alt="Default Analytics"
                            className="content-image"
                        />
                    </div>
                    <div className="left-content">

                        <div className="feature-item-mini">
                            <div>
                            <h3>Identify Outliers & Posting Secrets</h3>
                                <p>Uncover those exceptional posts that drive <br /> engagement. TokBackup helps you pinpoint unique <br /> content and optimal posting times to maximize your <br /> impact.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* 5 */}
                <section className="content-section">
                    <div className="left-content">

                        <div className="feature-item-mini">
                            <div>
                            <h3>Create a Content Strategy</h3>
                                <p>Utilize TokBackup’s insights to develop your own strategic <br /> approach. Plan your content, enhance engagement, and <br /> elevate your social media presence with confidence.</p>
                            </div>
                        </div>
                    </div>
                    <div className="right-content">
                        <img
                            src="src/assets/fifth.png"
                            alt="Default Analytics"
                            className="content-image"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default MiniContent;
