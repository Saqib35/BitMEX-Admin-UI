import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { toast } from 'react-toastify';
import axios from 'axios';
import GoogleTranslate from '../components/GoogleTranslate';



const inter = Inter({ subsets: ['latin'] })

export default function Profile() {
  

  
  const [error, setError] = useState(null);
  const [newName, setNewName] = useState('');
  const [newNameEmail, setEmailName] = useState('');
  


  useEffect(() => {
    const fetchData = async () => {
      try {


        const accessToken = localStorage.getItem('token');

        const response = await fetch('https://bitapi.mfhsoltech.com/api/profile', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();

        if (response.status === 200) {
          setNewName(data.details.name)
          
          
        } else if (response.status === 401) {
          
          toast.error('Login Session Expired'); 
        } else {
         
          toast.error('Something Went wrong');
          
        }
      } catch (error) {
        
          toast.error('Something Went wrong');
          
      }
    };

    fetchData();
  }, []);



  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailName(e.target.value);
  };



  const updateProfile = async (username, password) => {
    
        const accessToken = localStorage.getItem('token');

    const apiUrl = 'https://bitapi.mfhsoltech.com/api/profile';
  
    try {
      // Make a POST request using the fetch function
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: username,
          password: password,
        }),
      });
  
      // Check if the request was successful (status code 2xx)
      if (response.status === 200) {
        const data = await response.json();

        toast.success('Profile Updated Successfully'); 

      } else if (response.status === 401) {

        toast.error('Login Session Expired'); 

      } else {

        toast.error('Something Went wrong');

      }

    } catch (error) {
      
      console.error('Error during API request:', error);
    }
  };
  
  const handleUpdateProfile = () => {
    updateProfile(newName, newNameEmail);
  };


  return (
    <div>
    
    <div className="app-content content">
    <div className="content-overlay" />
    <div className="content-wrapper">
      <div className="content-header row">
        
      </div>
      <div className="content-body">
        <section id="dashboard-analytics">
          <div className="row">
            {/* Task Card Starts */}
            <div className="col-lg-12">
              <div className="row">
                <div className="col-12">
                  <div className="card widget-todo">
                    <div className="card-header border-bottom d-flex justify-content-between align-items-center flex-wrap">
                      <h4 className="card-title d-flex mb-25 mb-sm-0">
                        <i className="bx bx-check font-medium-5 pl-25 pr-75" /> Profile
                      </h4>
                      
                    </div>
                    <div className="card-body px-0 py-1">
                    
                   <form  className='p-3'>
                    <div className='container'>
                      <div className='row'>
                       
                        <div className='col-md-6'>
                            <label>Name:  </label>
                            
                            <input type="text" className='form-control' value={newName} onChange={(e) => setNewName(e.target.value)} />

                        </div>
                        
                        <div className='col-md-6'>
                            <label>Password:  </label>
                            <input type="password" className='form-control' value={newNameEmail} onChange={(e) => setEmailName(e.target.value)} />

                        </div>
                        <div className='col-md-12 mt-3'>
                            
                        <button type="button" className='form-control btn btn-success' onClick={handleUpdateProfile}>Update Prfile</button>

                        </div>

                      </div>
                     </div> 
                    
                  </form>
                  
                    </div>
                   <div>
                   </div>
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
</div> 
 );
}
