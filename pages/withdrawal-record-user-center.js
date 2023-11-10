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
        const response = await axios.get('https://bitapi.mfhsoltech.com/api/withdrawal/index');
        setData(response.data.withdrawal_records);
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
                        <i className="bx bx-check font-medium-5 pl-25 pr-75" /> Record WithDrawal
                      </h4>
                      
                    </div>
                    <div className="card-body px-0 py-1">
                    {data.length > 0 ? (
                    <table className="table table-responsive">
                      <thead>
                        <tr>
                          <th scope="col" style={{ whiteSpace: 'nowrap' }}>serial number</th>
                          <th scope="col" style={{ whiteSpace: 'nowrap' }}>Account</th>
                          <th scope="col" style={{ whiteSpace: 'nowrap' }}>Name</th>
                          <th scope="col" style={{ whiteSpace: 'nowrap' }}>Withdrawal amount (yuan)</th>
                          <th scope="col" style={{ whiteSpace: 'nowrap' }}>handling fee</th>
                          <th scope="col" style={{ whiteSpace: 'nowrap' }}>Actual arrival (yuan)</th>
                          <th scope="col" style={{ whiteSpace: 'nowrap' }}>Bank of deposit</th>
                          <th scope="col" style={{ whiteSpace: 'nowrap' }}>Denial Reason</th>
                          <th scope="col" style={{ whiteSpace: 'nowrap' }}>Submission time</th>
                          <th scope="col" style={{ whiteSpace: 'nowrap' }}>Processing progress</th>
                          <th scope="col" style={{ whiteSpace: 'nowrap' }}>operate</th>
                        </tr>
                      </thead>
                      <tbody>
                      {data.map((record) => (
                        <tr key={record.id}>
                            <td>{record.serialNum}</td>
                            <td></td>
                            <td></td>
                            <td>{record.withdrawalAmount}</td>
                            <td>{record.handlingFee}</td>
                            <td>{record.actualArrival}</td>
                            <td>{record.bankDeposit}</td>
                            <td>{record.denialReason}</td>
                            <td>{record.created_at}</td>
                            <td>{record.processingProgress}</td>
                            <td>
                              <button className='btn btn-success mb-1'>Check Details</button>
                              <button className='btn btn-danger'><i className='fa fa-trash'></i></button>
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
