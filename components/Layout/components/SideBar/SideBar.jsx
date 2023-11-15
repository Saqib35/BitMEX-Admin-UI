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
    <div className="sidebar">
      <div className="list-group">
      


        <div className="list-group-item list-group-item-action dropdown">
          <a
            href="#"
            className="dropdown-toggle"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
             <i className="bx bx-home-alt" /> Background Home
          </a>
          <div className="dropdown-menu">
            <Link href="/" legacyBehavior>
              <a className="dropdown-item">Analytics</a>
            </Link>
           
          </div>
        </div>


        <div className="list-group-item list-group-item-action dropdown">
          <a
            href="#"
            className="dropdown-toggle"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
             <i className="bx bx-slider-alt" /> Product System
          </a>
          <div className="dropdown-menu">
            <Link href="/product-management" legacyBehavior>
              <a className="dropdown-item">Product List</a>
            </Link>
            <Link href="/transection-flow-orders" legacyBehavior>
              <a className="dropdown-item">Transection Flow</a>
            </Link>
           
          </div>
        </div>

      


        <div className="list-group-item list-group-item-action dropdown">
          <a
            href="#"
            className="dropdown-toggle"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
             <i className="bx bx-user-voice" /> User Center
          </a>
          <div className="dropdown-menu">
            <Link href="/recharge-record-user-center" legacyBehavior>
              <a className="dropdown-item">Recharge Record</a>
            </Link>
            <Link href="/withdrawal-record-user-center" legacyBehavior>
              <a className="dropdown-item">WithDrawal Record</a>
            </Link>
           
          </div>
        </div>

        <div  className="list-group-item list-group-item-action dropdown">
          <Link href="/">
             <i className="bx bxs-cog" /> Settings
          </Link>
         
        </div>
                
      </div>
    </div>
    
    </div>
  </div>
  )
}
