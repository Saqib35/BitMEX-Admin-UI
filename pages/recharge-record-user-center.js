import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';
import axios from 'axios';
import DataTable from '../components/DataTableRechargeRecord';


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
                    <div className="card-body px-0 py-1 p-3">
                       <DataTable data={data}/>
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
