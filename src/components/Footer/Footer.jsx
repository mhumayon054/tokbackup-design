import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-logo-description">
                <div class="footer-logo">
                    <img src="https://s3-alpha-sig.figma.com/img/125f/531c/f5e242c2dfd1901fd3ffbefaa07188be?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nkr7lwG8mf09rX8D7x9NghrSK~XZPUGz-selPrjgpFGXbZ7OqteYQwesf1zJAeKD8dzG86Y4LkuigkThBuIJRKtdWcQhdvh31Xl2T4yBnNmoecvfBZgAwhSj8rUvrV~YhZcE29-cFnV5bei2o0YiX8SmyBqLVjrmjz00zzRdwJ9bPgiuscKnPQ2DRjxtijk6KIGxJy7ijRMUb5-0E8uiR73OE5dm5fkBVTlrKjmBmW9qoVmClVE~CaPdkTgdTsXf3Axlf2YUcBMUh2T6yAeLPt27iKB-job~6NYsOhBojQKUztc3WBytM~G5ijTaFneB1RQgbp6seKMt4VNHRSIrkg__" alt="TokBackup Logo"/>
                </div>
                <p class="description">
                    Your ultimate destination for effortless <br /> video downloads from TikTok, YouTube <br /> Shorts, and Instagram Reels. 
                    TokBackup <br /> offers simplicity, satisfaction, and powerful <br /> analytics features, helping you refine your <br /> content strategy with valuable insights.
                </p>
            </div>
            <div class="footer-links">
                <div class="link-column">
                    <h4>Other Tools</h4>
                    <ul>
                        <li><a href="#">TokTools</a></li>
                        <li><a href="#">TokBackup</a></li>
                        <li><a href="#">TokDownload</a></li>
                        <li><a href="#">TokScript</a></li>
                    </ul>
                </div>
                <div class="link-column">
                    <h4>Product Tours</h4>
                    <ul>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Chrome Extension</a></li>
                    </ul>
                </div>
                <div class="link-column">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">Help Docs</a></li>
                        <li><a href="#">Video Tutorials</a></li>
                        <li><a href="#">Feedback</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div class="link-column">
                    <h4>Account</h4>
                    <ul>
                        <li><a href="#">Affiliates</a></li>
                        <li><a href="#">Refund Policy</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Use</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>© 2024 TokBackup. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer