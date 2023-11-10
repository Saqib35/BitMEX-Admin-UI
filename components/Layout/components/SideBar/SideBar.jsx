import React from 'react'
import Link from 'next/link';

export default function SideBar() {
  return (
    <div className="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true">
    <div className="navbar-header">
      <ul className="nav navbar-nav flex-row">
        <li className="nav-item mr-auto">
          <Link className="navbar-brand" href="/">
            <div className="brand-logo"><img className="logo" src="images/logo/logo.png" /></div>
            <h2 className="brand-text mb-0">BITMEX</h2>
          </Link></li>
        <li className="nav-item nav-toggle"><a className="nav-link modern-nav-toggle pr-0" data-toggle="collapse"><i className="bx bx-x d-block d-xl-none font-medium-4 primary toggle-icon" /><i className="toggle-icon bx bx-disc font-medium-4 d-none d-xl-block collapse-toggle-icon primary" data-ticon="bx-disc" /></a></li>
      </ul>
    </div>
    <div className="shadow-bottom" />
    <div className="main-menu-content">
      <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation" data-icon-style>
        <li className=" nav-item">
          <a href="/">
            <i className="bx bx-home-alt" />
            <span className="menu-title" data-i18n="Dashboard">Background Home</span>
          </a >
          <ul className="menu-content">
            <li className="active">
              
              <Link href="/"><i className="bx bx-right-arrow-alt" />
              <span className="menu-item" data-i18n="Analytics">Analytics</span>
              </Link>
              
            </li>
          </ul>
        </li>
        
         <li className=" nav-item"><a href="#"><i className="bx bx-menu" /><span className="menu-title" data-i18n="Menu Levels">Product System</span></a>
          <ul className="menu-content">
            
             <li>
              <a href="#"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Second Level">Product Manage..</span></a>
              <ul className="menu-content">
                <li>
                  <Link href="/product-management"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Third Level">Product List</span></Link>
                </li>
                <li>
                  <a href="#"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Third Level">Risk Control Manag...</span></a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Second Level">Order Manage...</span></a>
              <ul className="menu-content">
                <li>
                 <Link href="transection-flow-orders"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Third Level">Transection Flow</span></Link>
                </li>
                <li>
                  <a href="#"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Third Level">Closing log</span></a>
                </li>
              </ul>
            </li>
  
  
          </ul>
        </li>


        <li className=" nav-item"><a href="#"><i className="bx bx-menu" /><span className="menu-title" data-i18n="Menu Levels">User Center</span></a>
          <ul className="menu-content">
            
             <li>
              <a href="#"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Second Level">Member Manage..</span></a>
              <ul className="menu-content">
                {/* <li>
                  <Link href="/product-management"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Third Level">Product List</span></Link>
                </li>
                */}
              
              </ul>
            </li>

            <li>
              <a href="#"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Second Level">Financial Manage...</span></a>
              <ul className="menu-content">
                <li>
                 <Link href="recharge-record-user-center"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Third Level">Recharge Record</span></Link>
                </li>
                <li>
                 <Link href="withdrawal-record-user-center"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Third Level">WithDrawal Record</span></Link>
                </li>
                
              </ul>
            </li>
  
  
          </ul>
        </li>


      </ul>
    </div>
  </div>
  )
}
