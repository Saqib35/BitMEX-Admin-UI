import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';
import axios from 'axios';


const inter = Inter({ subsets: ['latin'] })

export default function Product() {
  

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {  
        const response = await axios.get('https://bitapi.mfhsoltech.com/api/recharge/index');
        setData(response.data.recharge_records);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


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
                        <i className="bx bx-check font-medium-5 pl-25 pr-75" /> Record Recharge
                      </h4>
                      
                    </div>
                    <div className="card-body px-0 py-1">
                    {data.length > 0 ? (
                    <table className="table table-responsive">
                      <thead>
                        <tr>
                                          
                          <th scope="col" style={{ whiteSpace: 'nowrap' }}>Order Number</th>
                          <th scope="col" style={{ whiteSpace: 'nowrap' }}>Account</th>
                          <th scope="col" style={{ whiteSpace: 'nowrap' }}>Name</th>
                          <th scope="col" style={{ whiteSpace: 'nowrap' }}>Recharge Amount (Yuan)</th>
                          <th scope="col" style={{ whiteSpace: 'nowrap' }}>Gift Amount (Yuan)</th>
                          <th scope="col" style={{ whiteSpace: 'nowrap' }}>Payment Method</th>
                          <th scope="col" style={{ whiteSpace: 'nowrap' }}>Submission Time</th>
                          <th scope="col" style={{ whiteSpace: 'nowrap' }}>State</th>
                          <th scope="col" style={{ whiteSpace: 'nowrap' }}>Reason for Rejection</th>
                          <th scope="col" style={{ whiteSpace: 'nowrap' }}>Action</th>
                          
                            
                        </tr>
                      </thead>
                      <tbody>
                      {data.map((record) => (
                        <tr key={record.id}>
                            <td>{record.id}</td>
                            <td>{record.MemberId}</td>
                            <td>{record.username}</td>
                            <td>{record.rechargeAmount}</td>
                            <td>{record.giftAmount}</td>
                            <td>{record.paymentMethod}</td>
                            <td>{record.submissionTime}</td>
                            <td>
                              
                            {record.state === 'complete' ? (
                              <p className='btn btn-success'>Completed</p>
                            ) : record.state === 'pending' ? (
                              <p className='btn btn-danger'>Pending Review</p>
                            ) : (
                              // Handle other cases or provide a default
                              <p className='btn btn-default'>Other State</p>
                            )}

                              
                            </td>
                            <td>{record.reasonRejection}</td>

                          <td>
                          
                            {record.state === 'complete' ? (
                              <button className='btn btn-danger'><i className='fa fa-trash'></i></button>
                            ) : record.state === 'pending' ? (
                              <>
                                <button className='btn btn-success mb-1'><i className='fa fa-check'></i></button>
                                <button className='btn btn-danger'><i className='fa fa-ban'></i></button>
                              </>
                            ) : (
                              // Handle other cases or provide a default
                              <p className='btn btn-default'>Other State</p>
                            )}

                          </td>
                        </tr>
                         ))}
                      </tbody>
                     
                    </table>   
                       ) : (
                        <p>Loading...</p>
                     )} 
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
