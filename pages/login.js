import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Login() {
  return (
   <div className="app-content content">
        <div className="content-overlay" />
        <div className="content-wrapper">
          <div className="content-header row">
          </div>
          <div className="content-body">
            {/* login page start */}
            <section id="auth-login" className="row flexbox-container">
              <div className="col-xl-8 col-11">
                <div className="card bg-authentication mb-0">
                  <div className="row m-0">
                    {/* left section-login */}
                    <div className="col-md-6 col-12 px-0">
                      <div className="card disable-rounded-right mb-0 p-2 h-100 d-flex justify-content-center">
                        <div className="card-header pb-1">
                          <div className="card-title">
                            <h4 className="text-center mb-2">Welcome Back</h4>
                          </div>
                        </div>
                        <div className="card-content">
                          <div className="card-body">
                            <div className="d-flex flex-md-row flex-column justify-content-around">
                              <a href="#" className="btn btn-social btn-google btn-block font-small-3 mr-md-1 mb-md-0 mb-1">
                                <i className="bx bxl-google font-medium-3" /><span className="pl-50 d-block text-center">Google</span></a>
                              <a href="#" className="btn btn-social btn-block mt-0 btn-facebook font-small-3">
                                <i className="bx bxl-facebook-square font-medium-3" /><span className="pl-50 d-block text-center">Facebook</span></a>
                            </div>
                            <div className="divider">
                              <div className="divider-text text-uppercase text-muted"><small>or login with
                                  email</small>
                              </div>
                            </div>
                            <form action="index.html">
                              <div className="form-group mb-50">
                                <label className="text-bold-600" htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email address" /></div>
                              <div className="form-group">
                                <label className="text-bold-600" htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                              </div>
                              <div className="form-group d-flex flex-md-row flex-column justify-content-between align-items-center">
                                <div className="text-left">
                                  <div className="checkbox checkbox-sm">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="checkboxsmall" htmlFor="exampleCheck1"><small>Keep me logged
                                        in</small></label>
                                  </div>
                                </div>
                                <div className="text-right"><a href="auth-forgot-password.html" className="card-link"><small>Forgot Password?</small></a></div>
                              </div>
                              <button type="submit" className="btn btn-primary glow w-100 position-relative">Login<i id="icon-arrow" className="bx bx-right-arrow-alt" /></button>
                            </form>
                            <hr />
                            <div className="text-center"><small className="mr-25">Don't have an account?</small><a href="auth-register.html"><small>Sign up</small></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* right section image */}
                    <div className="col-md-6 d-md-block d-none text-center align-self-center p-3">
                      <div className="card-content">
                        <img className="img-fluid" src="images/pages/login.png" alt="branding logo" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* login page ends */}
          </div>
        </div>
      </div>
  )
}
