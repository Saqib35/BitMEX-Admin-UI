import Image from 'next/image'
import React, { useState, useContext,useEffect  } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';




export default function Login() {

  const router = useRouter(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  useEffect(() => {
  
      const token = localStorage.getItem('token');
      if (token) {
        setEmail(token);
      }
      if (token) {
        router.push('/');
      }
  }, [router]);

  
  const handleLogin = async () => {
    try {
      
      const response = await fetch('https://bitapi.mfhsoltech.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Handle successful login
        const data = await response.json();
        // alert(data.access_token);
        localStorage.setItem('token', data.access_token);
        router.push('/');
        // console.log(data.access_token);
        toast.success('Access Granted'); 
     
      } else {
        // Handle login failure
        console.error('Login failed');
        toast.error('Login failed', error); 
      
      }
    } catch (error) {
        console.error('An error occurred during login:', error);
        toast.error('An error occurred during login:', error); 

    }
  };

  return (
   <div className="app-content content">
        <div className="content-overlay" />
        <div className="content-wrapper">
          <div className="content-header row">
          </div>
          <div className="content-body">
            <section id="auth-login" className="row flexbox-container">
              <div className="col-xl-8 col-11">
                <div className="card bg-authentication mb-0">
                  <div className="row m-0">
                    <div className="col-md-6 col-12 px-0">
                      <div className="card disable-rounded-right mb-0 p-2 h-100 d-flex justify-content-center">
                        <div className="card-header pb-1">
                          <div className="card-title">
                            <h4 className="text-center mb-2">Welcome Back</h4>
                          </div>
                        </div>
                        <div className="card-content">
                          <div className="card-body">
                            <form>
                              <div className="form-group mb-50">
                                <label className="text-bold-600" htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" required className="form-control" value={email}  onChange={(e) => setEmail(e.target.value)} id="exampleInputEmail1" placeholder="Email address" /></div>
                              <div className="form-group">
                                <label className="text-bold-600" htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" required className="form-control" id="exampleInputPassword1"  value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                              </div>
                              <button type="button" onClick={handleLogin} className="btn btn-primary glow w-100 position-relative">Login<i id="icon-arrow" className="bx bx-right-arrow-alt" /></button>
                               </form>
                           
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 d-md-block d-none text-center align-self-center p-3">
                      <div className="card-content">
                        <img className="img-fluid" src="images/pages/login.png" alt="branding logo" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
  )
}
