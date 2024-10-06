import React from 'react';
import './Info.css';
import Dashboard from '../Dashboard/Dashboard';
import { PiCircleHalfTiltFill } from "react-icons/pi";
import { MdOutlineLiveTv } from "react-icons/md";

const Info = () => {
  return (
    <div className="parent-container">
    <div className="cards-container">
      <div className="custom-card">
        <div className="combine-div">
        <div className="icon-container">
          <PiCircleHalfTiltFill color='#EE5E8F' className="card-icon" />
        </div>
        <div className="headings-container">
          <h1 style={{color:"white"}}>Get Smart with Analytics & Uncover</h1>
          <h1 style={{color:"#C5C5C5"}}>Hidden Gems</h1>
        </div>
        </div>
        <p style={{color:"#A7A7A7", lineHeight:"25px"}}>Why do some posts go viral? TokBackup’s analytics reveal the secrets. Track performance, analyze engagement, find the best times to post and a lot more!</p>
        <a href="/learn-more" style={{color:"#EE5E8F"}} className="learn-more-link">Learn More</a>
      </div>

      <div className="custom-card">
                <div className="combine-div">

        <div className="icon-container">
          <MdOutlineLiveTv color='rgb(70, 255, 255)' className="card-icon" />
        </div>
        <div className="headings-container">
          <h1 style={{color:"white"}}>On Click Bulk Video Download</h1>
          <h1 style={{color:"#C5C5C5"}}>Backup!</h1>
        </div>
        </div>
        
        <p style={{color:"#A7A7A7"}}>Never lose videos! With TokBackup, bulk download any profile's videos in one click. Everything is backed up automatically for fast, secure, and hassle-free content management.</p>
        <a href="/learn-more" style={{color:"#46FFFF"}} className="learn-more-link">Learn More</a>
      </div>
      <div className='nav-button-cards'>
        <div className="btn-adjust">
            <button>Get Started for free</button>
        </div>
        </div>
    </div>
    <div className='dashboard-content'>
        <Dashboard/>
    </div>
    </div>
  );
};

export default Info;
