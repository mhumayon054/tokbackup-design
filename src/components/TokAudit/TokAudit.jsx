import React from 'react';
import './TokAudit.css';

function TokAudit() {
  return (
    <div className="tok-container">
      <div className="tok-image">
        <img 
          src="https://s3-alpha-sig.figma.com/img/bb1a/ed78/d20e9e47a6fbbddca2dafe840ddbf85d?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m8Q92upRBceCXaPJN18OX4eQnqjjupiPKHjtHBK4iF3xi5RSq4N~RorD2rrZOVZBt6ItMiZMtd8x339yr7xxTlk1aJkgpjueWaGdjUUgG2DeHgcgWfbCRNdTJ9n5Lb-c4JcFfnoi~cDVyP48Iz2seWuqUYw7FikkVxwbabGXa9-zHPpKsvwOeFyrN-5X8vWc6P71MOcq9beoYgJiXan9D6zFV8DDfJQd6SIeyUgxIV5XrRuIsXz-JQuMlnaPtgZhbfOGZV2XNb-wkPTfaIefvTIphbItfKiP-PiQCbnc72daOPLYnnkIphpqFXx2le3Vx-geRmMDEYWlvKU9jBGa4w__" 
          alt="Mobile Preview" 
        />
      </div>
      <div className="tok-txt-p">
      <div className="tok-content">
        <h1>Enhance Your Experience<br/> <span className="highlight">With Our Chrome Extension</span></h1>
        <p>
          Seamlessly track and analyze social media insights with <br />
          TokBackup's Chrome extension, empowering effortless <br /> access 
          to powerful analytics right from your browser.
        </p>
        <button className="tok-button">Get started for free</button>
      </div>
      </div>
    </div>
  );
}

export default TokAudit;
