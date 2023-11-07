import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<div className="app-content content">
        <div className="content-overlay" />
        <div className="content-wrapper">
          <div className="content-header row">
          </div>
          <div className="content-body">
            {/* Dashboard Analytics Start */}
            <section id="dashboard-analytics">
              <div className="row">
                {/* Website Analytics Starts*/}
                <div className="col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <h4 className="card-title">Website Analytics</h4>
                      <i className="bx bx-dots-vertical-rounded font-medium-3 cursor-pointer" />
                    </div>
                    <div className="card-content">
                      <div className="card-body pb-1">
                        <div className="d-flex justify-content-around align-items-center flex-wrap">
                          <div className="user-analytics">
                            <i className="bx bx-user mr-25 align-middle" />
                            <span className="align-middle text-muted">Users</span>
                            <div className="d-flex">
                              <div id="radial-success-chart" />
                              <h3 className="mt-1 ml-50">61K</h3>
                            </div>
                          </div>
                          <div className="sessions-analytics">
                            <i className="bx bx-trending-up align-middle mr-25" />
                            <span className="align-middle text-muted">Sessions</span>
                            <div className="d-flex">
                              <div id="radial-warning-chart" />
                              <h3 className="mt-1 ml-50">92K</h3>
                            </div>
                          </div>
                          <div className="bounce-rate-analytics">
                            <i className="bx bx-pie-chart-alt align-middle mr-25" />
                            <span className="align-middle text-muted">Bounce Rate</span>
                            <div className="d-flex">
                              <div id="radial-danger-chart" />
                              <h3 className="mt-1 ml-50">72.6%</h3>
                            </div>
                          </div>
                        </div>
                        <div id="analytics-bar-chart" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-12 dashboard-referral-impression">
                  <div className="row">
                    {/* Referral Chart Starts*/}
                    <div className="col-xl-12 col-12">
                      <div className="card">
                        <div className="card-content">
                          <div className="card-body text-center pb-0">
                            <h2>$32,690</h2>
                            <span className="text-muted">Referral</span> 40%
                            <div id="success-line-chart" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Impression Radial Chart Starts*/}
                    <div className="col-xl-12 col-12">
                      <div className="card">
                        <div className="card-content">
                          <div className="card-body donut-chart-wrapper">
                            <div id="donut-chart" className="d-flex justify-content-center" />
                            <ul className="list-inline d-flex justify-content-around mb-0">
                              <li> <span className="bullet bullet-xs bullet-warning mr-50" />Search</li>
                              <li> <span className="bullet bullet-xs bullet-info mr-50" />Email</li>
                              <li> <span className="bullet bullet-xs bullet-primary mr-50" />Social</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-12 col-sm-12">
                  <div className="row">
                    {/* Conversion Chart Starts*/}
                    <div className="col-xl-12 col-md-6 col-12">
                      <div className="card">
                        <div className="card-header d-flex justify-content-between pb-xl-0 pt-xl-1">
                          <div className="conversion-title">
                            <h4 className="card-title">Conversion</h4>
                            <p>60%
                              <i className="bx bx-trending-up text-success font-size-small align-middle mr-25" />
                            </p>
                          </div>
                          <div className="conversion-rate">
                            <h2>89k</h2>
                          </div>
                        </div>
                        <div className="card-content">
                          <div className="card-body text-center">
                            <div id="bar-negative-chart" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-md-6 col-12">
                      <div className="row">
                        <div className="col-12">
                          <div className="card">
                            <div className="card-body d-flex align-items-center justify-content-between">
                              <div className="d-flex align-items-center">
                                <div className="avatar bg-rgba-primary m-0 p-25 mr-75 mr-xl-2">
                                  <div className="avatar-content">
                                    <i className="bx bx-user text-primary font-medium-2" />
                                  </div>
                                </div>
                                <div className="total-amount">
                                  <h5 className="mb-0">$38,566</h5>
                                  <small className="text-muted">Conversion</small>
                                </div>
                              </div>
                              <div id="primary-line-chart" />
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="card">
                            <div className="card-body d-flex align-items-center justify-content-between">
                              <div className="d-flex align-items-center">
                                <div className="avatar bg-rgba-warning m-0 p-25 mr-75 mr-xl-2">
                                  <div className="avatar-content">
                                    <i className="bx bx-dollar text-warning font-medium-2" />
                                  </div>
                                </div>
                                <div className="total-amount">
                                  <h5 className="mb-0">$53,659</h5>
                                  <small className="text-muted">Income</small>
                                </div>
                              </div>
                              <div id="warning-line-chart" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* Activity Card Starts*/}
                <div className="col-xl-3 col-md-6 col-12 activity-card">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Activity</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body pt-1">
                        <div className="d-flex activity-content">
                          <div className="avatar bg-rgba-primary m-0 mr-75">
                            <div className="avatar-content">
                              <i className="bx bx-bar-chart-alt-2 text-primary" />
                            </div>
                          </div>
                          <div className="activity-progress flex-grow-1">
                            <small className="text-muted d-inline-block mb-50">Total Sales</small>
                            <small className="float-right">$8,125</small>
                            <div className="progress progress-bar-primary progress-sm">
                              <div className="progress-bar" role="progressbar" aria-valuenow={50} style={{width: '50%'}} />
                            </div>
                          </div>
                        </div>
                        <div className="d-flex activity-content">
                          <div className="avatar bg-rgba-success m-0 mr-75">
                            <div className="avatar-content">
                              <i className="bx bx-dollar text-success" />
                            </div>
                          </div>
                          <div className="activity-progress flex-grow-1">
                            <small className="text-muted d-inline-block mb-50">Income Amount</small>
                            <small className="float-right">$18,963</small>
                            <div className="progress progress-bar-success progress-sm">
                              <div className="progress-bar" role="progressbar" aria-valuenow={80} style={{width: '80%'}} />
                            </div>
                          </div>
                        </div>
                        <div className="d-flex activity-content">
                          <div className="avatar bg-rgba-warning m-0 mr-75">
                            <div className="avatar-content">
                              <i className="bx bx-stats text-warning" />
                            </div>
                          </div>
                          <div className="activity-progress flex-grow-1">
                            <small className="text-muted d-inline-block mb-50">Total Budget</small>
                            <small className="float-right">$14,150</small>
                            <div className="progress progress-bar-warning progress-sm">
                              <div className="progress-bar" role="progressbar" aria-valuenow={60} style={{width: '60%'}} />
                            </div>
                          </div>
                        </div>
                        <div className="d-flex mb-75">
                          <div className="avatar bg-rgba-danger m-0 mr-75">
                            <div className="avatar-content">
                              <i className="bx bx-check text-danger" />
                            </div>
                          </div>
                          <div className="activity-progress flex-grow-1">
                            <small className="text-muted d-inline-block mb-50">Completed Tasks</small>
                            <small className="float-right">106</small>
                            <div className="progress progress-bar-danger progress-sm">
                              <div className="progress-bar" role="progressbar" aria-valuenow={30} style={{width: '30%'}} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Profit Report Card Starts*/}
                <div className="col-xl-3 col-md-6 col-12 profit-report-card">
                  <div className="row">
                    <div className="col-md-12 col-sm-6">
                      <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                          <h4 className="card-title">Profit Report</h4>
                          <i className="bx bx-dots-vertical-rounded font-medium-3 cursor-pointer" />
                        </div>
                        <div className="card-content">
                          <div className="card-body pb-0 d-flex justify-content-around">
                            <div className="d-inline-flex mr-xl-2">
                              <div id="profit-primary-chart" />
                              <div className="profit-content ml-50 mt-50">
                                <h5 className="mb-0">$12k</h5>
                                <small className="text-muted">2019</small>
                              </div>
                            </div>
                            <div className="d-inline-flex">
                              <div id="profit-info-chart" />
                              <div className="profit-content ml-50 mt-50">
                                <h5 className="mb-0">$64k</h5>
                                <small className="text-muted">2019</small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 col-sm-6">
                      <div className="card">
                        <div className="card-header">
                          <h4 className="card-title">Registrations</h4>
                        </div>
                        <div className="card-content">
                          <div className="card-body">
                            <div className="d-flex align-items-end justify-content-around">
                              <div className="registration-content mr-xl-2">
                                <h4 className="mb-0">56.3k</h4>
                                <i className="bx bx-trending-up success align-middle" />
                                <span className="text-success">12.8%</span>
                              </div>
                              <div id="registration-chart" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Sales Chart Starts*/}
                <div className="col-xl-3 col-md-6 col-12 sales-card">
                  <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <div className="card-title-content">
                        <h4 className="card-title">Sales</h4>
                        <small className="text-muted">Calculated in last 7 days</small>
                      </div>
                      <i className="bx bx-dots-vertical-rounded font-medium-3 cursor-pointer" />
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <div id="sales-chart" className="mb-2" />
                        <div className="d-flex justify-content-between my-1">
                          <div className="sales-info d-flex align-items-center">
                            <i className="bx bx-up-arrow-circle text-primary font-medium-5 mr-50" />
                            <div className="sales-info-content">
                              <h6 className="mb-0">Best Selling</h6>
                              <small className="text-muted">Sunday</small>
                            </div>
                          </div>
                          <h6 className="mb-0">28.6k</h6>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                          <div className="sales-info d-flex align-items-center">
                            <i className="bx bx-down-arrow-circle icon-light font-medium-5 mr-50" />
                            <div className="sales-info-content">
                              <h6 className="mb-0">Lowest Selling</h6>
                              <small className="text-muted">Thursday</small>
                            </div>
                          </div>
                          <h6 className="mb-0">986k</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Growth Chart Starts*/}
                <div className="col-xl-3 col-md-6 col-12 growth-card">
                  <div className="card">
                    <div className="card-body text-center">
                      <div className="dropdown">
                        <button className="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButtonSec" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          2019
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButtonSec">
                          <a className="dropdown-item" href="#">2019</a>
                          <a className="dropdown-item" href="#">2018</a>
                          <a className="dropdown-item" href="#">2017</a>
                        </div>
                      </div>
                      <div id="growth-Chart" />
                      <h6 className="mb-0"> 62% Company Growth in 2019</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* Task Card Starts */}
                <div className="col-lg-7">
                  <div className="row">
                    <div className="col-12">
                      <div className="card widget-todo">
                        <div className="card-header border-bottom d-flex justify-content-between align-items-center flex-wrap">
                          <h4 className="card-title d-flex mb-25 mb-sm-0">
                            <i className="bx bx-check font-medium-5 pl-25 pr-75" />Tasks
                          </h4>
                          <ul className="list-inline d-flex mb-25 mb-sm-0">
                            <li className="d-flex align-items-center">
                              <i className="bx bx-check-circle font-medium-3 mr-50" />
                              <div className="dropdown">
                                <div className="dropdown-toggle mr-1 cursor-pointer" role="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Task
                                </div>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                  <a className="dropdown-item" href="#">Option 1</a>
                                  <a className="dropdown-item" href="#">Option 2</a>
                                  <a className="dropdown-item" href="#">Option 3</a>
                                </div>
                              </div>
                            </li>
                            <li className="d-flex align-items-center">
                              <i className="bx bx-sort mr-50 font-medium-3" />
                              <div className="dropdown">
                                <div className="dropdown-toggle cursor-pointer" role="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Task</div>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                  <a className="dropdown-item" href="#">Option 1</a>
                                  <a className="dropdown-item" href="#">Option 2</a>
                                  <a className="dropdown-item" href="#">Option 3</a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="card-body px-0 py-1">
                          <ul className="widget-todo-list-wrapper" id="widget-todo-list">
                            <li className="widget-todo-item">
                              <div className="widget-todo-title-wrapper d-flex justify-content-between align-items-center mb-50">
                                <div className="widget-todo-title-area d-flex align-items-center">
                                  <i className="bx bx-grid-vertical mr-25 font-medium-4 cursor-move" />
                                  <div className="checkbox checkbox-shadow">
                                    <input type="checkbox" className="checkbox__input" id="checkbox1" />
                                    <label htmlFor="checkbox1" />
                                  </div>
                                  <span className="widget-todo-title ml-50">Add SCSS and JS files if required</span>
                                </div>
                                <div className="widget-todo-item-action d-flex align-items-center">
                                  <div className="badge badge-pill badge-light-success mr-1">frontend</div>
                                  <div className="avatar bg-rgba-primary m-0 mr-50">
                                    <div className="avatar-content">
                                      <span className="font-size-base text-primary">RA</span>
                                    </div>
                                  </div>
                                  <div className="dropdown">
                                    <span className="bx bx-dots-vertical-rounded font-medium-3 dropdown-toggle nav-hide-arrow cursor-pointer icon-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="menu" />
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a className="dropdown-item" href="#"><i className="bx bx-edit-alt mr-1" /> edit</a>
                                      <a className="dropdown-item" href="#"><i className="bx bx-trash mr-1" /> delete</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="widget-todo-item">
                              <div className="widget-todo-title-wrapper d-flex justify-content-between align-items-center mb-50">
                                <div className="widget-todo-title-area d-flex align-items-center">
                                  <i className="bx bx-grid-vertical mr-25 font-medium-4 cursor-move" />
                                  <div className="checkbox checkbox-shadow">
                                    <input type="checkbox" className="checkbox__input" id="checkbox2" />
                                    <label htmlFor="checkbox2" />
                                  </div>
                                  <span className="widget-todo-title ml-50">Check your changes, before commiting</span>
                                </div>
                                <div className="widget-todo-item-action d-flex align-items-center">
                                  <div className="badge badge-pill badge-light-danger mr-1">backend</div>
                                  <div className="avatar m-0 mr-50">
                                    <img src="images/profile/user-uploads/social-2.jpg" alt="img placeholder" height={32} width={32} />
                                  </div>
                                  <div className="dropdown">
                                    <span className="bx bx-dots-vertical-rounded font-medium-3 dropdown-toggle nav-hide-arrow cursor-pointer icon-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="menu" />
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a className="dropdown-item" href="#"><i className="bx bx-edit-alt mr-1" /> edit</a>
                                      <a className="dropdown-item" href="#"><i className="bx bx-trash mr-1" /> delete</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="widget-todo-item completed">
                              <div className="widget-todo-title-wrapper d-flex justify-content-between align-items-center mb-50">
                                <div className="widget-todo-title-area d-flex align-items-center">
                                  <i className="bx bx-grid-vertical mr-25 font-medium-4 cursor-move" />
                                  <div className="checkbox checkbox-shadow">
                                    <input type="checkbox" className="checkbox__input" id="checkbox3" defaultChecked />
                                    <label htmlFor="checkbox3" />
                                  </div>
                                  <span className="widget-todo-title ml-50">Dribble, Behance, UpLabs &amp; Pinterest Post</span>
                                </div>
                                <div className="widget-todo-item-action d-flex align-items-center">
                                  <div className="badge badge-pill badge-light-primary mr-1">UI/UX</div>
                                  <div className="avatar bg-rgba-primary m-0 mr-50">
                                    <div className="avatar-content">
                                      <span className="font-size-base text-primary">JP</span>
                                    </div>
                                  </div>
                                  <div className="dropdown">
                                    <span className="bx bx-dots-vertical-rounded font-medium-3 dropdown-toggle nav-hide-arrow cursor-pointer icon-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="menu" />
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a className="dropdown-item" href="#"><i className="bx bx-edit-alt mr-1" /> edit</a>
                                      <a className="dropdown-item" href="#"><i className="bx bx-trash mr-1" /> delete</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="widget-todo-item">
                              <div className="widget-todo-title-wrapper d-flex justify-content-between align-items-center mb-50">
                                <div className="widget-todo-title-area d-flex align-items-center">
                                  <i className="bx bx-grid-vertical mr-25 font-medium-4 cursor-move" />
                                  <div className="checkbox checkbox-shadow">
                                    <input type="checkbox" className="checkbox__input" id="checkbox4" />
                                    <label htmlFor="checkbox4" />
                                  </div>
                                  <span className="widget-todo-title ml-50">Fresh Design Web &amp; Responsive Miracle</span>
                                </div>
                                <div className="widget-todo-item-action d-flex align-items-center">
                                  <div className="badge badge-pill badge-light-info mr-1">Design</div>
                                  <div className="avatar m-0 mr-50">
                                    <img src="images/profile/user-uploads/user-05.jpg" alt="img placeholder" height={32} width={32} />
                                  </div>
                                  <div className="dropdown">
                                    <span className="bx bx-dots-vertical-rounded font-medium-3 dropdown-toggle nav-hide-arrow cursor-pointer icon-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="menu" />
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a className="dropdown-item" href="#"><i className="bx bx-edit-alt mr-1" /> edit</a>
                                      <a className="dropdown-item" href="#"><i className="bx bx-trash mr-1" /> delete</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="widget-todo-item">
                              <div className="widget-todo-title-wrapper d-flex justify-content-between align-items-center mb-50">
                                <div className="widget-todo-title-area d-flex align-items-center">
                                  <i className="bx bx-grid-vertical mr-25 font-medium-4 cursor-move" />
                                  <div className="checkbox checkbox-shadow">
                                    <input type="checkbox" className="checkbox__input" id="checkbox5" />
                                    <label htmlFor="checkbox5" />
                                  </div>
                                  <span className="widget-todo-title ml-50">Add Calendar page, source, credit page in
                                    documentation</span>
                                </div>
                                <div className="widget-todo-item-action d-flex align-items-center">
                                  <div className="badge badge-pill badge-light-warning mr-1">Javascript</div>
                                  <div className="avatar bg-rgba-primary m-0 mr-50">
                                    <div className="avatar-content">
                                      <span className="font-size-base text-primary">AK</span>
                                    </div>
                                  </div>
                                  <div className="dropdown">
                                    <span className="bx bx-dots-vertical-rounded font-medium-3 dropdown-toggle nav-hide-arrow cursor-pointer icon-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="menu" />
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a className="dropdown-item" href="#"><i className="bx bx-edit-alt mr-1" /> edit</a>
                                      <a className="dropdown-item" href="#"><i className="bx bx-trash mr-1" /> delete</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="widget-todo-item">
                              <div className="widget-todo-title-wrapper d-flex justify-content-between align-items-center mb-50">
                                <div className="widget-todo-title-area d-flex align-items-center">
                                  <i className="bx bx-grid-vertical mr-25 font-medium-4 cursor-move" />
                                  <div className="checkbox checkbox-shadow">
                                    <input type="checkbox" className="checkbox__input" id="checkbox6" />
                                    <label htmlFor="checkbox6" />
                                  </div>
                                  <span className="widget-todo-title ml-50">Add Angular Starter-kit</span>
                                </div>
                                <div className="widget-todo-item-action d-flex align-items-center">
                                  <div className="badge badge-pill badge-light-primary mr-1">UI/UX</div>
                                  <div className="avatar m-0 mr-50">
                                    <img src="images/profile/user-uploads/user-05.jpg" alt="img placeholder" height={32} width={32} />
                                  </div>
                                  <div className="dropdown">
                                    <span className="bx bx-dots-vertical-rounded font-medium-3 dropdown-toggle nav-hide-arrow cursor-pointer icon-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="menu" />
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a className="dropdown-item" href="#"><i className="bx bx-edit-alt mr-1" /> edit</a>
                                      <a className="dropdown-item" href="#"><i className="bx bx-trash mr-1" /> delete</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Daily Financials Card Starts */}
                <div className="col-lg-5">
                  <div className="card ">
                    <div className="card-header">
                      <h4 className="card-title">
                        Order Timeline
                      </h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <ul className="widget-timeline mb-0">
                          <li className="timeline-items timeline-icon-primary active">
                            <div className="timeline-time">September, 16</div>
                            <h6 className="timeline-title">1983, orders, $4220</h6>
                            <p className="timeline-text">2 hours ago</p>
                            <div className="timeline-content">
                              <img src="../../../app-assets/images/icon/pdf.png" alt="document" height={23} width={19} className="mr-50" />New Order.pdf
                            </div>
                          </li>
                          <li className="timeline-items timeline-icon-primary active">
                            <div className="timeline-time">September, 17</div>
                            <h6 className="timeline-title">12 Invoices have been paid</h6>
                            <p className="timeline-text">25 minutes ago</p>
                            <div className="timeline-content">
                              <img src="images/icon/pdf.png" alt="document" height={23} width={19} className="mr-50" />Invoices.pdf
                            </div>
                          </li>
                          <li className="timeline-items timeline-icon-primary active pb-0">
                            <div className="timeline-time">September, 18</div>
                            <h6 className="timeline-title">Order #37745 from September</h6>
                            <p className="timeline-text">4 minutes ago</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Dashboard Analytics end */}
          </div>
        </div>
      </div>
  )
}
