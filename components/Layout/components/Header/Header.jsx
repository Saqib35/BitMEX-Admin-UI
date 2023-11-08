import React from 'react'

export default function Header() {
  return (
    <div>
        <div className="header-navbar-shadow" />
        <nav className="header-navbar main-header-navbar navbar-expand-lg navbar navbar-with-menu fixed-top ">
          <div className="navbar-wrapper">
            <div className="navbar-container content">
              <div className="navbar-collapse" id="navbar-mobile">
                <div className="mr-auto float-left bookmark-wrapper d-flex align-items-center">
                  <ul className="nav navbar-nav">
                    <li className="nav-item mobile-menu d-xl-none mr-auto"><a className="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i className="ficon bx bx-menu" /></a></li>
                  </ul>
                  <ul className="nav navbar-nav bookmark-icons">
                    {/* <li className="nav-item d-none d-lg-block"><a className="nav-link" href="app-email.html" data-toggle="tooltip" data-placement="top" title="Email"><i className="ficon bx bx-envelope" /></a></li> */}
                    {/* <li className="nav-item d-none d-lg-block"><a className="nav-link" href="app-chat.html" data-toggle="tooltip" data-placement="top" title="Chat"><i className="ficon bx bx-chat" /></a></li> */}
                    {/* <li className="nav-item d-none d-lg-block"><a className="nav-link" href="app-todo.html" data-toggle="tooltip" data-placement="top" title="Todo"><i className="ficon bx bx-check-circle" /></a></li> */}
                    {/* <li className="nav-item d-none d-lg-block"><a className="nav-link" href="app-calendar.html" data-toggle="tooltip" data-placement="top" title="Calendar"><i className="ficon bx bx-calendar-alt" /></a></li> */}
                  </ul>
                  {/* <ul className="nav navbar-nav">
                    <li className="nav-item d-none d-lg-block"><a className="nav-link bookmark-star"><i className="ficon bx bx-star warning" /></a>
                      <div className="bookmark-input search-input">
                        <div className="bookmark-input-icon"><i className="bx bx-search primary" /></div>
                        <input className="form-control input" type="text" placeholder="Explore Frest..." tabIndex={0} data-search="template-search" />
                        <ul className="search-list" />
                      </div>
                    </li>
                  </ul> */}
                </div>
                <ul className="nav navbar-nav float-right">
                  {/* <li className="dropdown dropdown-language nav-item"><a className="dropdown-toggle nav-link" id="dropdown-flag" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="flag-icon flag-icon-us" /><span className="selected-language">English</span></a>
                    <div className="dropdown-menu" aria-labelledby="dropdown-flag"><a className="dropdown-item" href="#" data-language="en"><i className="flag-icon flag-icon-us mr-50" /> English</a><a className="dropdown-item" href="#" data-language="fr"><i className="flag-icon flag-icon-fr mr-50" /> French</a><a className="dropdown-item" href="#" data-language="de"><i className="flag-icon flag-icon-de mr-50" /> German</a><a className="dropdown-item" href="#" data-language="pt"><i className="flag-icon flag-icon-pt mr-50" /> Portuguese</a></div>
                  </li> */}
                  <li className="nav-item d-none d-lg-block"><a className="nav-link nav-link-expand"><i className="ficon bx bx-fullscreen" /></a></li>
                  <li className="nav-item nav-search"><a className="nav-link nav-link-search"><i className="ficon bx bx-search" /></a>
                    <div className="search-input">
                      <div className="search-input-icon"><i className="bx bx-search primary" /></div>
                      <input className="input" type="text" placeholder="Explore Frest..." tabIndex={-1} data-search="template-search" />
                      <div className="search-input-close"><i className="bx bx-x" /></div>
                      <ul className="search-list" />
                    </div>
                  </li>
                  <li className="dropdown dropdown-notification nav-item"><a className="nav-link nav-link-label" href="#" data-toggle="dropdown"><i className="ficon bx bx-bell bx-tada bx-flip-horizontal" /><span className="badge badge-pill badge-danger badge-up">5</span></a>
                    <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
                      <li className="dropdown-menu-header">
                        <div className="dropdown-header px-1 py-75 d-flex justify-content-between"><span className="notification-title">7 new Notification</span><span className="text-bold-400 cursor-pointer">Mark all as read</span></div>
                      </li>
                      <li className="scrollable-container media-list"><a className="d-flex justify-content-between" href="javascript:void(0)">
                          <div className="media d-flex align-items-center">
                            <div className="media-left pr-0">
                              <div className="avatar mr-1 m-0"><img src="images/portrait/small/avatar-s-11.jpg" alt="avatar" height={39} width={39} /></div>
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading"><span className="text-bold-500">Congratulate Socrates Itumay</span> for work anniversaries</h6><small className="notification-text">Mar 15 12:32pm</small>
                            </div>
                          </div>
                        </a>
                       
                      </li>
                      <li className="dropdown-menu-footer"><a className="dropdown-item p-50 text-primary justify-content-center" href="javascript:void(0)">Read all notifications</a></li>
                    </ul>
                  </li>
                  <li className="dropdown dropdown-user nav-item"><a className="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown">
                      <div className="user-nav d-sm-flex d-none"><span className="user-name">Admin</span><span className="user-status text-muted">Available</span></div><span><img className="round" src="images/portrait/small/avatar-s-11.jpg" alt="avatar" height={40} width={40} /></span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right pb-0">
                      <a className="dropdown-item" href="page-user-profile.html"><i className="bx bx-user mr-50" /> Edit Profile</a>
                      <div className="dropdown-divider mb-0" /><a className="dropdown-item" href="auth-login.html"><i className="bx bx-power-off mr-50" /> Logout</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
  )
}
