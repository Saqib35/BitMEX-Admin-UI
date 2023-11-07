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
                    <li className="nav-item d-none d-lg-block"><a className="nav-link" href="app-email.html" data-toggle="tooltip" data-placement="top" title="Email"><i className="ficon bx bx-envelope" /></a></li>
                    <li className="nav-item d-none d-lg-block"><a className="nav-link" href="app-chat.html" data-toggle="tooltip" data-placement="top" title="Chat"><i className="ficon bx bx-chat" /></a></li>
                    <li className="nav-item d-none d-lg-block"><a className="nav-link" href="app-todo.html" data-toggle="tooltip" data-placement="top" title="Todo"><i className="ficon bx bx-check-circle" /></a></li>
                    <li className="nav-item d-none d-lg-block"><a className="nav-link" href="app-calendar.html" data-toggle="tooltip" data-placement="top" title="Calendar"><i className="ficon bx bx-calendar-alt" /></a></li>
                  </ul>
                  <ul className="nav navbar-nav">
                    <li className="nav-item d-none d-lg-block"><a className="nav-link bookmark-star"><i className="ficon bx bx-star warning" /></a>
                      <div className="bookmark-input search-input">
                        <div className="bookmark-input-icon"><i className="bx bx-search primary" /></div>
                        <input className="form-control input" type="text" placeholder="Explore Frest..." tabIndex={0} data-search="template-search" />
                        <ul className="search-list" />
                      </div>
                    </li>
                  </ul>
                </div>
                <ul className="nav navbar-nav float-right">
                  <li className="dropdown dropdown-language nav-item"><a className="dropdown-toggle nav-link" id="dropdown-flag" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="flag-icon flag-icon-us" /><span className="selected-language">English</span></a>
                    <div className="dropdown-menu" aria-labelledby="dropdown-flag"><a className="dropdown-item" href="#" data-language="en"><i className="flag-icon flag-icon-us mr-50" /> English</a><a className="dropdown-item" href="#" data-language="fr"><i className="flag-icon flag-icon-fr mr-50" /> French</a><a className="dropdown-item" href="#" data-language="de"><i className="flag-icon flag-icon-de mr-50" /> German</a><a className="dropdown-item" href="#" data-language="pt"><i className="flag-icon flag-icon-pt mr-50" /> Portuguese</a></div>
                  </li>
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
                        <div className="d-flex justify-content-between read-notification cursor-pointer">
                          <div className="media d-flex align-items-center">
                            <div className="media-left pr-0">
                              <div className="avatar mr-1 m-0"><img src="images/portrait/small/avatar-s-16.jpg" alt="avatar" height={39} width={39} /></div>
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading"><span className="text-bold-500">New Message</span> received</h6><small className="notification-text">You have 18 unread messages</small>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between cursor-pointer">
                          <div className="media d-flex align-items-center py-0">
                            <div className="media-left pr-0"><img className="mr-1" src="images/icon/sketch-mac-icon.png" alt="avatar" height={39} width={39} /></div>
                            <div className="media-body">
                              <h6 className="media-heading"><span className="text-bold-500">Updates Available</span></h6><small className="notification-text">Sketch 50.2 is currently newly added</small>
                            </div>
                            <div className="media-right pl-0">
                              <div className="row border-left text-center">
                                <div className="col-12 px-50 py-75 border-bottom">
                                  <h6 className="media-heading text-bold-500 mb-0">Update</h6>
                                </div>
                                <div className="col-12 px-50 py-75">
                                  <h6 className="media-heading mb-0">Close</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between cursor-pointer">
                          <div className="media d-flex align-items-center">
                            <div className="media-left pr-0">
                              <div className="avatar bg-primary bg-lighten-5 mr-1 m-0 p-25"><span className="avatar-content text-primary font-medium-2">LD</span></div>
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading"><span className="text-bold-500">New customer</span> is registered</h6><small className="notification-text">1 hrs ago</small>
                            </div>
                          </div>
                        </div>
                        <div className="cursor-pointer">
                          <div className="media d-flex align-items-center justify-content-between">
                            <div className="media-left pr-0">
                              <div className="media-body">
                                <h6 className="media-heading">New Offers</h6>
                              </div>
                            </div>
                            <div className="media-right">
                              <div className="custom-control custom-switch">
                                <input className="custom-control-input" type="checkbox" defaultChecked id="notificationSwtich" />
                                <label className="custom-control-label" htmlFor="notificationSwtich" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between cursor-pointer">
                          <div className="media d-flex align-items-center">
                            <div className="media-left pr-0">
                              <div className="avatar bg-danger bg-lighten-5 mr-1 m-0 p-25"><span className="avatar-content"><i className="bx bxs-heart text-danger" /></span></div>
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading"><span className="text-bold-500">Application</span> has been approved</h6><small className="notification-text">6 hrs ago</small>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between read-notification cursor-pointer">
                          <div className="media d-flex align-items-center">
                            <div className="media-left pr-0">
                              <div className="avatar mr-1 m-0"><img src="images/portrait/small/avatar-s-4.jpg" alt="avatar" height={39} width={39} /></div>
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading"><span className="text-bold-500">New file</span> has been uploaded</h6><small className="notification-text">4 hrs ago</small>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between cursor-pointer">
                          <div className="media d-flex align-items-center">
                            <div className="media-left pr-0">
                              <div className="avatar bg-rgba-danger m-0 mr-1 p-25">
                                <div className="avatar-content"><i className="bx bx-detail text-danger" /></div>
                              </div>
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading"><span className="text-bold-500">Finance report</span> has been generated</h6><small className="notification-text">25 hrs ago</small>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between cursor-pointer">
                          <div className="media d-flex align-items-center border-0">
                            <div className="media-left pr-0">
                              <div className="avatar mr-1 m-0"><img src="images/portrait/small/avatar-s-16.jpg" alt="avatar" height={39} width={39} />111111</div>
                            </div>
                            <div className="media-body">
                              <h6 className="media-heading"><span className="text-bold-500">New customer</span> comment recieved</h6><small className="notification-text">2 days ago</small>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown-menu-footer"><a className="dropdown-item p-50 text-primary justify-content-center" href="javascript:void(0)">Read all notifications</a></li>
                    </ul>
                  </li>
                  <li className="dropdown dropdown-user nav-item"><a className="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown">
                      <div className="user-nav d-sm-flex d-none"><span className="user-name">John Doe</span><span className="user-status text-muted">Available</span></div><span><img className="round" src="images/portrait/small/avatar-s-11.jpg" alt="avatar" height={40} width={40} /></span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right pb-0"><a className="dropdown-item" href="page-user-profile.html"><i className="bx bx-user mr-50" /> Edit Profile</a><a className="dropdown-item" href="app-email.html"><i className="bx bx-envelope mr-50" /> My Inbox</a><a className="dropdown-item" href="app-todo.html"><i className="bx bx-check-square mr-50" /> Task</a><a className="dropdown-item" href="app-chat.html"><i className="bx bx-message mr-50" /> Chats</a>
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
