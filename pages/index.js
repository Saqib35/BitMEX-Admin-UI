import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
const inter = Inter({ subsets: ['latin'] })
import dynamic from "next/dynamic";

export default function Home() {
  const [data, setData] = useState(null);
  const [apiDataCom, setApiDataCom] = useState([]);
  const [apiDataMonth, setApiDataMonth] = useState([]);
  const [apiDataReal, setApiDataReal] = useState([]);
  const { session } = useSession();
  const router = useRouter();

  useEffect(() => {
      const token = localStorage.getItem('token');
  
      if (!token) {
        
        router.push('/login');
      }
      
  }, [router]);




  


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://bitapi.mfhsoltech.com/api/show-statsistics/');
        if (response.ok) {
          const jsonData = await response.json();
        
          setData(jsonData);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchData();
  }, []); 


  useEffect(() => {
    fetch('https://bitapi.mfhsoltech.com/api/comprehensive_reports/index', {
      method: 'GET',
    
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
       
        setApiDataCom(data.comprehensive_reports);
      })
      .catch(error => {
       
        console.error('Error:', error);
      });
  }, []);

  
  useEffect(() => {
    async function fetchDataMonth() {
      try {
        const response = await fetch('https://bitapi.mfhsoltech.com/api/monthly_details/index');
        if (response.ok) {
          const jsonData = await response.json();
          setApiDataMonth(jsonData.monthly_details);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    }

    fetchDataMonth();
  }, []);

  useEffect(() => {
    async function fetchDataReal() {
      try {
        const response = await fetch('https://bitapi.mfhsoltech.com/api/realtime/index');
        if (response.ok) {
          const jsonData = await response.json();
          setApiDataReal(jsonData.real_time_over_view);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    }

    fetchDataReal();
  }, []);



  return (
   
    <div>
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
        

                <div className="col-md-4">
                    <div className="card">
                      <div className="card-body d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="avatar bg-rgba-primary m-0 p-25 mr-75 mr-xl-2">
                            <div className="avatar-content">
                              <i className="bx bx-dollar text-success font-medium-2" />
                            </div>
                          </div>
                          <div className="total-amount">
                          {data ? (
                              <h5 className="mb-0">{data.total_profit}</h5>
                            ) : (
                              <p>Loading profit data...</p>
                            )}                            
                            <small className="text-muted">Total Profit</small>
                          </div>
                        </div>
                      
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-body d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="avatar bg-rgba-primary m-0 p-25 mr-75 mr-xl-2">
                            <div className="avatar-content">
                              <i className="bx bx-dollar text-success font-medium-2" />
                            </div>
                          </div>
                          <div className="total-amount">
                          {data ? (
                              <h5 className="mb-0">{data.total_loss}</h5>
                            ) : (
                              <p>Loading loss data...</p>
                            )}                            
                            <small className="text-muted">Total Loss</small>
                          </div>
                        </div>
                      
                      </div>
                    </div>
                  </div>

                <div className="col-md-4">
                    <div className="card">
                      <div className="card-body d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="avatar bg-rgba-primary m-0 p-25 mr-75 mr-xl-2">
                            <div className="avatar-content">
                              <i className="bx bx-user text-success font-medium-2" />
                            </div>
                          </div>
                          <div className="total-amount">
                          {data ? (
                              <h5 className="mb-0">{data.total_users}</h5>
                            ) : (
                              <p>Loading user data...</p>
                            )}                            
                            <small className="text-muted">Total Users</small>
                          </div>
                        </div>
                      
                      </div>
                    </div>
                  </div>
              
              </div>
              <div className="row">
                   <div className="col-xl-12 col-md-6 col-12">
                      <div className="row">
                        <div className="col-6">
                          <div className="card">
                            <div className="card-body d-flex align-items-center justify-content-between">
                              <div className="d-flex align-items-center">
                                <div className="avatar bg-rgba-primary m-0 p-25 mr-75 mr-xl-2">
                                  <div className="avatar-content">
                                    <i className="bx bx-dollar text-primary font-medium-2" />
                                  </div>
                                </div>
                                <div className="total-amount">
                                {data ? (
                                    <h5 className="mb-0">{data.total_recharge_amount}</h5>
                                  ) : (
                                    <p>Loading recharge data...</p>
                                  )}                            
                                  <small className="text-muted">Total Recharge</small>
                                </div>
                              </div>
                              <div id="primary-line-chart" />
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="card">
                            <div className="card-body d-flex align-items-center justify-content-between">
                              <div className="d-flex align-items-center">
                                <div className="avatar bg-rgba-warning m-0 p-25 mr-75 mr-xl-2">
                                  <div className="avatar-content">
                                    <i className="bx bx-dollar text-warning font-medium-2" />
                                  </div>
                                </div>
                                <div className="total-amount">
                                  {data ? (
                                    <h5 className="mb-0">{data.total_withdrawal_amount}</h5>
                                  ) : (
                                    <p>Loading withdrawal data...</p>
                                  )}
                                  
                                  <small className="text-muted">Total Withdrawal</small>
                                </div>
                              </div>
                              <div id="warning-line-chart" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
              </div>
              <div className="row">
                {/* Task Card Starts */}
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-12">
                      <div className="card widget-todo">
                        <div className="card-header border-bottom d-flex justify-content-between align-items-center flex-wrap">
                          <h4 className="card-title d-flex mb-25 mb-sm-0">
                            <i className="bx bx-check font-medium-5 pl-25 pr-75" /> Real Time Overview
                          </h4>
                        </div>
                        <div className="card-body px-0 py-1">
                          <div className="row p-3">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4 d-flex justify-content-center">
                                  <i className="fa fa-yen" style={{ fontSize: '36px'  }}></i>
                                </div>
                                <div className="col-md-4">
                                  <p><b>Recharge today</b></p>
                                  <p>
                                  {apiDataReal ? (
                                  <>
                                  <b>{apiDataReal.recharge}</b>                                  
                                 </>
                                  ) : (
                                  <p>Loading data...</p>
                                  )}
                                  </p>
                                  <p>Today’s successful recharge amount (yuan)</p>
                                </div>
                                <div className="col-md-4">
                                  <p><b>Withdraw cash today</b></p>
                                  <p>
                                  {apiDataReal ? (
                                  <>
                                  <b>{apiDataReal.withdraw}</b>                                  
                                 </>
                                  ) : (
                                  <p>Loading data...</p>
                                  )}
                                  </p>
                                  <p>Amount successfully withdrawn today (yuan)</p>
                                </div>
                              </div> 
                            </div>
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <i className='fa fa-info-circle' style={{ fontSize: '36px' }}></i>
                                </div>
                                <div className="col-md-4">
                                  <p><b>New today</b></p>
                                  <p><b>Withdraw cash today</b></p>
                                  <p>
                                  {apiDataReal ? (
                                  <>
                                  <b>{apiDataReal.newToday}</b>                                  
                                 </>
                                  ) : (
                                  <p>Loading data...</p>
                                  )}
                                  </p>
                                  <p>Today’s successful recharge amount (yuan)</p>
                                </div>
                                <div className="col-md-4">
                                  <p><b>Online users</b></p>
                                  <p><b>Withdraw cash today</b></p>
                                  <p>
                                  {apiDataReal ? (
                                  <>
                                  <b>{apiDataReal.onlineUsers}</b>                                  
                                 </>
                                  ) : (
                                  <p>Loading data...</p>
                                  )}
                                  </p>
                                  <p>Today’s successful recharge amount (yuan)</p>
                                </div>
                              </div> 
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* Task Card Starts */}
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-12">
                      <div className="card widget-todo">
                        <div className="card-header border-bottom d-flex justify-content-between align-items-center flex-wrap">
                          <h4 className="card-title d-flex mb-25 mb-sm-0">
                            <i className="bx bx-check font-medium-5 pl-25 pr-75" /> Comprehensive report
                          </h4>
                        </div>
                        <div className="card-body px-0 py-1">
                        {apiDataCom.length > 0 ? (
                          <table className="table table-responsive mb-0">
                            <thead>
                              <tr>
                                <th scope="col"  style={{ whiteSpace: 'nowrap' }}>Remark</th>
                                <th scope="col"  style={{ whiteSpace: 'nowrap' }}>Deposit</th>
                                <th scope="col"  style={{ whiteSpace: 'nowrap' }}>Dispensing</th>
                                <th scope="col"  style={{ whiteSpace: 'nowrap' }}>Number of people in the first flush</th>
                                <th scope="col"  style={{ whiteSpace: 'nowrap' }}>Number of active people</th>
                                <th scope="col"  style={{ whiteSpace: 'nowrap' }}>Customer profit and loss</th>
                              </tr>
                            </thead>
                            <tbody>
                              {apiDataCom.map(record => (
                                <tr key={record.id}>
                                  <td>{record.remark}</td>
                                  <td>¥ {record.deposits}</td>
                                  <td>¥ {record.dispensing}</td>
                                  <td>{record.numffpeople} people</td>
                                  <td>{record.numapeople} people</td>
                                  <td>¥ {record.profitloss}</td>
                                </tr>
                                 ))}
                            </tbody>
                          </table>
                          ) : (
                            <p>Loading...</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* Task Card Starts */}
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-12">
                      <div className="card widget-todo">
                        <div className="card-header border-bottom d-flex justify-content-between align-items-center flex-wrap">
                          <h4 className="card-title d-flex mb-25 mb-sm-0">
                            <i className="bx bx-check font-medium-5 pl-25 pr-75" />Details of this month
                          </h4>
                        </div>
                        <div className="card-body px-0 py-1">
                        {apiDataMonth.length > 0 ? (
                          <table className="table table-responsive mb-0">
                            <thead>
                              <tr>
                                <th scope="col" style={{ whiteSpace: 'nowrap' }}>Date</th>
                                <th scope="col" style={{ whiteSpace: 'nowrap' }}>New users</th>
                                <th scope="col" style={{ whiteSpace: 'nowrap' }}>Deposit</th>
                                <th scope="col" style={{ whiteSpace: 'nowrap' }}>Dispensing</th>
                                <th scope="col" style={{ whiteSpace: 'nowrap' }}>Number of people in the first flush</th>
                                <th scope="col" style={{ whiteSpace: 'nowrap' }}>Number of active people</th>
                                <th scope="col" style={{ whiteSpace: 'nowrap' }}>Quantity of order</th>
                                <th scope="col" style={{ whiteSpace: 'nowrap' }}>Customer profit and loss</th>
                                <th scope="col" style={{ whiteSpace: 'nowrap' }}>Running water</th>                                      
                              </tr>
                            </thead>
                            <tbody>
                              {apiDataMonth.map((item) => (
                                <tr key={item.id}>
                                  <td>{item.date}</td>
                                  <td>{item.newUsers}</td>
                                  <td>{item.deposits}</td>
                                  <td>{item.dispensing}</td>
                                  <td>{item.numffpeople}</td>
                                  <td>{item.numapeople}</td>
                                  <td>{item.orderquant}</td>
                                  <td>{item.custprofitloss}</td>
                                  <td>{item.runningwater}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                         ) : (
                          <p>Loading...</p>
                         )}
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
