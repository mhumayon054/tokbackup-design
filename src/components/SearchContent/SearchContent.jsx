import React from 'react';
import { LiaMagicSolid } from "react-icons/lia";
import "./SearchContent.css"

const SearchContent = () => {
return(
    <div className="searchbar-container">
<div class="input-wrapper">
  <input type="text" placeholder="Enter TikTok, Instagram or Youtube account..."/>
  <button>
    Generate Insight <LiaMagicSolid/>
  </button>
</div>
<div class="search-profile-wrapper">
<div class="search-profile-container">
  <img class="search-profile-image" src="https://www.rollingstone.com/wp-content/uploads/2023/08/who-is-kai-cenat.jpg" alt="Profile Image"/>
  <span class="profile-name">
    KaiCenat
  </span>
</div>
<div class="search-profile-container">
  <img class="search-profile-image" src="https://cdn.britannica.com/68/216668-050-DD3A9D0A/United-States-President-Donald-Trump-2017.jpg?w=400&h=300&c=crop" alt="Profile Image"/>
  <span class="profile-name">
  DonaldTrump
  </span>
</div>
<div class="search-profile-container">
  <img class="search-profile-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-A4LXnlQNoejzVF3Kq0EP3xYbxlgvvC0sWw&s" alt="Profile Image"/>
  <span class="profile-name">
  BellaPoarch
  </span>
</div>
<div class="search-profile-container">
  <img class="search-profile-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqRoeFk6zFYeMR_ixIAhhFrpitnjOnxGJoGA&s" alt="Profile Image"/>
  <span class="profile-name">
  KimKardashian
  </span>
</div>
<div class="search-profile-container">
  <img class="search-profile-image" src="https://fortune.com/img-assets/wp-content/uploads/2024/07/Copy-of-FeatTemplate-2.png?w=1440&q=75" alt="Profile Image"/>
  <span class="profile-name">
  MrBeast
  </span>
</div>
</div>
</div>
)
}
export default SearchContent;