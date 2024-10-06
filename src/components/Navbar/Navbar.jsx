import React from 'react'
import "./Navbar.css"
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className="logo">
    <img src="https://s3-alpha-sig.figma.com/img/125f/531c/f5e242c2dfd1901fd3ffbefaa07188be?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nkr7lwG8mf09rX8D7x9NghrSK~XZPUGz-selPrjgpFGXbZ7OqteYQwesf1zJAeKD8dzG86Y4LkuigkThBuIJRKtdWcQhdvh31Xl2T4yBnNmoecvfBZgAwhSj8rUvrV~YhZcE29-cFnV5bei2o0YiX8SmyBqLVjrmjz00zzRdwJ9bPgiuscKnPQ2DRjxtijk6KIGxJy7ijRMUb5-0E8uiR73OE5dm5fkBVTlrKjmBmW9qoVmClVE~CaPdkTgdTsXf3Axlf2YUcBMUh2T6yAeLPt27iKB-job~6NYsOhBojQKUztc3WBytM~G5ijTaFneB1RQgbp6seKMt4VNHRSIrkg__" alt="Logo" />
</div>

        <div className='ul-div'>
        <ul className='nav-li'>
            <li>Free tools</li>
            <li>Pricing</li>
            <li>How it works</li>
            <li>Use Cases</li>
            <li>Products</li>
            <li>Login</li>
        </ul>
        </div>
        <div className='nav-button'>
            <button>Get Started</button>
        </div>
        <div className="menu-icon">
        <HiMenuAlt3/>
        </div>
    </div>
  )
}

export default Navbar