import React from 'react';
import "./Content.css";
import { LiaMagicSolid } from "react-icons/lia";
import { VscStarHalf } from "react-icons/vsc";
import { IoMdStar } from "react-icons/io";

const Content = () => {
    return (
        <div className='content-container'>
            <div className="content-btn"><button>AI Powered <LiaMagicSolid/></button></div>
            <div className="content-grid-lines"></div> 
            <div className="heading">
                <h1>Unlock the Power of Data</h1>
                <br />
                <h1>Insights For TikTok</h1>
            </div>
            <div className='para-parent'>
                <div className="para">
                    <h5><VscStarHalf style={{marginBottom:"10px"}} size={35} color='#51B27E'/>TrustPilot</h5>
                    <p>5.5 <span style={{color:"#a1a1aa", fontSize:"16px"}}>/5.0</span>
                        <span style={{color:"red", display:"inline-block", marginLeft:"5px"}}>
                            <IoMdStar size={12} color='rgb(255,22,94)'/>
                            <IoMdStar size={12} color='rgb(255,22,94)'/>
                            <IoMdStar size={12} color='rgb(255,22,94)'/>
                            <IoMdStar size={12} color='rgb(255,22,94)'/>
                            <IoMdStar size={12} color='rgb(255,22,94)'/>
                        </span>
                        <br />
                        <span style={{color:"rgb(185 185 195)"}}> Based on 10,000+ users</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Content;
