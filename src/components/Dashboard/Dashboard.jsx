import React from 'react';
import "./Dashboard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FaFolderPlus } from "react-icons/fa6";
import { IoIosVideocam } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { MdVerified } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import 'chart.js/auto';

const Dashboard = () => {


  return (
    <div className="dashboard">
      {/* User Section */}
      <div className="upper">
  <div className="grid-lines"></div> 
    {/* <div className="grid-lines"></div>  */}
  <div className="followers">
    <div className="social-tiktok-p">
      <FontAwesomeIcon icon={faTiktok} className="social-icon tiktok" />
    </div>

    <span className="follow"><FaUser color='#FF6400'/>Followers</span>
  </div>

  {/* Stats Section */}
  <div className="stats-section">
    <div className="img-section">
      <img src="https://s3-alpha-sig.figma.com/img/739f/8ca2/95e0a576b35054622aebf0b77dcbcaae?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mEHoTPpVUV~7Y1HeDReiM3Y4V6UBjWYHTGrP1bQx93rVwEN~PPzhNSSP7jT8M01FzzibHKXyy5n4M-bB4BHFohacPEE2cYOx1QUVlKV~39ZnEM6BfvpmIGPyF~UBpZDOHe8k76xIVDrFJ8ltWDRpgJIgxVFo-RLrcmAVFtbXRPhNsJv5d0EMcRIU-gob2xGtwMK7A474rJAsmFoqWvFA-SpqU6~8OgqBYtQFdSkwBekOEI-ntFlTP3prJo2GBdXSKW55nV7oS-A1hVQe~ZEP9PzFlus5SvVd4rlu97ruXgGh6K30iqLD68Y4AMU0hq8xTJw6SOj81mBMY9Av3GjNTA__" alt="" />
    </div>
    <div className="stat-box videos">
      <h3 className="stat-title">Total Videos (Last 30 Days)</h3>
      <h2 className="stat-value">14.5k</h2>
      <span className="average"><GoDotFill color='#FF6400'/><p>Average</p></span>

    </div>
  </div>

  <div className="followers">
    <div className="col2-fol">
      <span className="follow"><IoIosVideocam size={20} color='#FF165D'/>Videos</span>
    </div>
    <div className="insta">
    <FontAwesomeIcon icon={faInstagram} className="social-icon instagram" />
</div>
    <span className="folder">
      <div className="icon-circle">
        <FaFolderPlus className="icon" />
      </div>
      Add to folder
    </span>
  </div>
</div>

      <div className="lower">
      <div className="prof-container">
            <div className="prof">
              <img className="profile-img" src="https://s3-alpha-sig.figma.com/img/6741/bc45/5600bdd68990eabc5bdc6fe5d8c02210?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pc2b7PDVoi3gg4IaFLJmAUlQTo7iz3BzL3sVzztOyy6psWcM92n~JdRbKARZkBp-wEflwB-hozPX-BMwexSmZSbetiWTwo1zimLxo~MjF78EbdW7f8MeMzOqtRNmFxuFWzfnwk-VppKqO4U6SxlVtHTWImnd4sb9EDGu2bqlY1Lbx~W7jkaWjFKZF~lDyo5ZMfVtcm3Ce4GCQbvPE1gsihj~zKNk5W9AZBUMHKPUVws9Yh33HGtjufNRkgiZ3Ge2t7rlJR8HZujG6H-uXkKzZf5KE6NlJKKKu5Zjsd-YawvkaSZsKQ2e4GkDPAyHsTNr5iu4gRbWduPZYavv8nb4WA__" alt="Profile" />
              <div className="profile-details">
                <h4>Michael Sanchez</h4>
                <p>@michaelsanchez</p>
              </div>
              <div className="verfied-icon">
              <MdVerified/>
              </div>
            </div>
              <div className="social-icons">
              <FontAwesomeIcon icon={faYoutube} className="social-icon youtube" />
              </div>
          </div>
      <div className="stat-box-views">
          <div className="circle">
          <h3 className="stat-title">Short Views</h3>
          <span>67</span>
    </div>
        </div>
      
      {/* Social Media Icons */}
      
      </div>
    </div>
  );
};

export default Dashboard;
