import React , { useEffect } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
export default function Header() {


  const router = useRouter();

  const handleLogout = async () => {
  

    const token = localStorage.getItem('token');

      if (token) {
        try {
          const response = await fetch('https://bitapi.mfhsoltech.com/api/logout', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.ok) {
            console.log('Token invalidated on the server');
          } else {
            console.error('Failed to invalidate token on the server');
          }
        } catch (error) {
          console.error('An error occurred during logout:', error);
        }
        localStorage.removeItem('token');
        router.push('/login');
      }

     
  
  };



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
                 
                  </ul>
               
                </div>
                <ul className="nav navbar-nav float-right">
              
                  <li className="nav-item d-none d-lg-block"><a className="nav-link nav-link-expand"><i className="ficon bx bx-fullscreen" /></a></li>
                 
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
                      <Link className="dropdown-item" href="user-profile"><i className="bx bx-user mr-50" /> Edit Profile</Link>
                      <div className="dropdown-divider mb-0" /><a className="dropdown-item" href="#" onClick={handleLogout}><i className="bx bx-power-off mr-50" /> Logout</a>
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
