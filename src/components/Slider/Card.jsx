import React from 'react';
import './Card.css';
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { RiMessage2Fill } from "react-icons/ri";
import { PiShareFatFill } from "react-icons/pi";
import { TbSquareLetterSFilled } from "react-icons/tb";

import { IoHeartSharp } from "react-icons/io5";

const Card = () => {
  return (
    <div className='con'>
      <div className="card-container">
      <div className="pure-card">
  <div
    className="rounded-card">
    {/* Grid Lines */}
    <div className="card-grid-lines"></div>

    {/* Overlay for darkening the background */}
    <div
      style={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(25, 31, 47, 0.6)',
        zIndex: 1
      }}
    ></div>

    <div className="content1-comp1" style={{ position: 'relative', zIndex: 2 }}>
      <div className="card1-col">
        <div className="card1">
          <div className="text-content-first">
            <p style={{ color: "gray", fontSize: "smaller", display:"flex", alignItems:"center",gap: "5px" }}>
              <PiShareFatFill color='#5FC754'/> Comment Per Video
            </p>
          </div>
          <div className="box1">
            <h1 style={{ fontSize: "38px", padding: "20px", display:"flex",justifyContent:"center"}}>105</h1>
          </div>
          <span className="average-bar-card">
            <GoDotFill color='#FF6400' /><p>Average</p>
          </span>
        </div>
      </div>
      <div className="card1-col2">
        <div className="subcard">
          <div className="subcard-header">
            Saturday
            <p>Best day to post</p>
          </div>
          <div className="info">
            <p>Videos: 23</p>
            <p style={{ paddingTop: "10px" }}>Engagement: 30%</p>
          </div>
        </div>
      </div>
    </div>

    <div className="content2" style={{ position: 'relative', zIndex: 2 }}>
      <div className="datacard">
        <div className="stats-card">
          <div className="stat-item">
            <div className="icon-title">
              <span className="icon">🎥</span>
              <span className="stat-title">Followers:</span>
            </div>
            <span className="stat-value-card-comp1">14.5k</span>
          </div>
          <div className="stat-item">
            <div className="icon-title">
              <span className="icon">💬</span>
              <span className="stat-title">Most viral video:</span>
            </div>
            <span className="stat-value-card-comp1">29.2k</span>
          </div>
          <div className="stat-item">
            <div className="icon-title">
              <span className="icon">❤️</span>
              <span className="stat-title">Created on:</span>
            </div>
            <span className="stat-value-card-comp1">3/12/2019</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="profile-p">
    <div className="profile-container">
      <div className="profile">
        <img className="profile-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT_NXbeLS0zUA9yG4rHivms7le2KfD7N8qBRcS-6A5U9Qy-_HHH79p739HbXia3vfu1-UP3n0BIq-SNLTZG6CgIJOzeNKvvXWxreQsoEQ" alt="Profile" />
        <div className="profile-details">
          <h1>Donald Glover</h1>
          <p>@donaldglover</p>
        </div>
      </div>
      <BsArrowUpRightCircleFill color='rgb(100,255,255)' size={30} />
    </div>
  </div>
</div>

        <div className="pure-card">
          <div
            className="rounded-card">
                <div className="card-grid-lines"></div>
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(25, 31, 47, 0.6)',
                zIndex: 1,
              }}
            ></div>

            <div className="contenttable">
            <div className="content2-card2" style={{ position: 'relative', zIndex: 2 }}>
              <div className="datacard">
                <div className="stats-card">
                  <div className="stat-item">
                  <div className="icon-title">
                    <span className="icon">🎥</span>
                    <span className="stat-title">Total videos:</span>
                    </div>
                    <span className="stat-value-card-comp1">71.9k</span>
                  </div>
                  <div className="stat-item">
                  <div className="icon-title">
                    <span className="icon">💬</span>
                    <span className="stat-title">Total comments:</span>
                    </div>
                    <span className="stat-value-card-comp1">81.7k</span>
                  </div>
                  <div className="stat-item">
                  <div className="icon-title">
                    <span className="icon">❤️</span>
                    <span className="stat-title">Total likes:</span>
                    </div>
                    <span className="stat-value-card-comp1">1.4m</span>
                  </div>
                </div>
              </div>
            </div>

              <div className="contentofcards">
                <div className="card2-col">
                  <div className="engagement-card">
                    <p className="card-title">Average engagement per day</p>

                    <div className="engagement-item">
                      <span className="day-name">Monday</span>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: '25%' }}></div>
                      <span className="engagement-value">25%</span>
                      </div>
                    </div>

                    <div className="engagement-item">
                      <span className="day-name">Tuesday</span>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: '50%' }}></div>
                      <span className="engagement-value">50%</span>
                      </div>
                    </div>

                    <div className="engagement-item">
                      <span className="day-name">Wednesday</span>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: '76%' }}></div>
                      <span className="engagement-value">76%</span>
                      </div>
                    </div>

                    <div className="engagement-item">
                      <span className="day-name">Thursday</span>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: '78%' }}></div>
                      <span className="engagement-value">78%</span>
                      </div>
                    </div>

                    <div className="engagement-item">
                      <span className="day-name">Friday</span>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: '56%' }}></div>
                      <span className="engagement-value">56%</span>
                      </div>
                    </div>

                    <div className="engagement-item">
                      <span className="day-name">Saturday</span>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: '48%' }}></div>
                      <span className="engagement-value">48%</span>
                      </div>
                    </div>

                    <div className="engagement-item">
                      <span className="day-name">Sunday</span>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: '71%' }}></div>
                      <span className="engagement-value">71%</span>
                      </div>
                    </div>

                    <div className="average-engagement">
                      <span style={{fontSize:"11px"}}>Average engagement per day</span>
                      <span className="average-value">823</span>
                    </div>
                  </div>

                </div>

                <div className="card2-col2">
                <div className="card1">
                  <div className="text-content-first">
                    <p style={{ color: "gray", fontSize: "smaller", display:"flex", alignItems:"center",gap: "5px" }}><RiMessage2Fill color='purple'/>Comment Per Video</p>
                  </div>
                  <div className="box1">
                    <h1 style={{ fontSize: "38px", padding: "20px", display:"flex",justifyContent:"center"}}>39k</h1>
                  </div>
                  <span className="average-bar-card"><GoDotFill color='#FF6400' /><p>Average</p></span>
                </div>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-p">
            <div className="profile-container">
              <div className="profile">
                <img className="profile-img" src="https://i.pinimg.com/736x/4e/5c/5d/4e5c5de552bd93e73eb5f7906e1f2c67.jpg" alt="Profile" />
                <div className="profile-details">
                  <h1>Bella Poarch</h1>
                  <p>@bellapoarsh</p>
                </div>
              </div>
              <BsArrowUpRightCircleFill color='rgb(100,255,255)' size={30} />

            </div>
          </div>
        </div>
        <div className="pure-card">
          <div className="rounded-card">
                <div className="card-grid-lines"></div>

            <div
              className="overlay"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: "rgba(25, 31, 47, 0.6)",
                zIndex: 1,
              }}
            ></div>

            <div className="content1-comp3" style={{ position: 'relative', zIndex: 2 }}>
              <div className="card3-col">
              <div className="card1">
                  <div className="text-content-first">
                  <p style={{ color: "gray", fontSize: "smaller", display:"flex", alignItems:"center",gap: "5px" , justifyContent:"center"}}><IoHeartSharp color='#FF165D'/>Likes Per Video</p>
                  </div>
                  <div className="box1">
                  <h1 style={{ fontSize: "38px", padding: "20px", display:"flex",justifyContent:"center"}}>28.7m</h1>
                  </div>
                  <span className="average-bar-card"><GoDotFill color='#33F3ED' /><p>Excellent</p></span>
                </div>
              </div>
            </div>

            <div className="content2-comp3" style={{ position: 'relative', zIndex: 2 }}>
              <div className="videos-card">
                <h3 className="card-title">Top short videos</h3>

                <div className="video-item">
              <TbSquareLetterSFilled size={12} className='S-sign'/>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6kIDN1p-c75jv-DZGlkap5tWROY3ozloycmhTwrgDWWLDd3yOmFewYfGNTu6wFlNTnNM&usqp=CAU"
                    alt="Video thumbnail"
                    className="video-thumbnail"
                  />
                  <div className="video-details">
                    <span className="video-date">Apr/12/2024</span>
                    <span className="video-comments">829k Comments</span>
                  </div>
                  <div className="video-stats">
                    <span className="views">605k</span>
                    <div className="video-progress-bar">
                      <div className="video-progress-fill" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="video-item">
                <TbSquareLetterSFilled size={12} className='S-sign'/>

                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwPQ-KPSOkgnMRNwjB00Gjof_6ugPW1LsNCQ&s"
                    alt="Video thumbnail"
                    className="video-thumbnail"
                  />
                  <div className="video-details">
                    <span className="video-date">Mar/27/2024</span>
                    <span className="video-comments">821k Comments</span>
                  </div>
                  <div className="video-stats">
                  <span className="views">521k</span>
                    <div className="video-progress-bar">
                      <div className="video-progress-fill" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="video-item-active">
                <TbSquareLetterSFilled size={15} style={{    position: "relative",top: "14px",    left: "-18px"}}/>

                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb_vhC-zB0Sy8ODbG1m73uU2dpn9Nj4Sk_AQ&s"
                    alt="Video thumbnail"
                    className="video-thumbnail"
                  />
                  <div className="video-details">
                    <span className="video-date">Jan/15/2024</span>
                    <span className="video-comments">572k Comments</span>
                  </div>
                  <div className="video-stats">
                    <span className="views">499k</span>
                    <div className="video-progress-bar">
                      <div className="video-progress-fill" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-p">
            <div className="profile-container">
              <div className="profile">
                <img className="profile-img" src="https://i.ex-cdn.com/nhadautu.vn/files/content/2024/03/30/mrbeast-steve-kanhn-2147.jpg" alt="Profile" />
                <div className="profile-details">
                  <h1>MrBeast</h1>
                  <p>@mrbeast</p>
                </div>
              </div>
              <BsArrowUpRightCircleFill color='rgb(100,255,255)' size={30} />

            </div>
          </div>
        </div>
      </div>
      <div className='nav-button'>
        <button>Get Started for free</button>
      </div>
    </div>
  );
};

export default Card;