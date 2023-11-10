import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import CustomModal from '../components/CustomModal';
import { toast } from 'react-toastify';


const inter = Inter({ subsets: ['latin'] })
import axios from 'axios';

export default function Product() {
  

  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [datas, setDatas] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {  
        const response = await axios.get('https://bitapi.mfhsoltech.com/api/orders/index');
        setData(response.data.orders);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const closeModal = () => {
    // Close the modal and clear the data
    setIsModalOpen(false);
    setDatas(null);
  };


  const handleButtonClick = async (data) => {
    
    try {
      // Make API request with the provided id
      const response = await fetch(`https://bitapi.mfhsoltech.com/api/orders/${data.id}`);
      const result = await response.json();

      
      setDatas(result);
      // Open the modal
      setIsModalOpen(true);
      
    } catch (error) {
      toast.error('Something went Wrong');
      console.error('Error fetching data:', error);
    }
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
                        <i className="bx bx-check font-medium-5 pl-25 pr-75" /> Transaction Flow
                      </h4>
                      
                    </div>
                    <div className="card-body px-0 py-1">
                    {data.length > 0 ? (
                    <table className="table table-responsive">
                      <thead>
                        <tr>
                                          
                        <th scope="col" style={{ whiteSpace: 'nowrap' }}>order number</th>
                        <th scope="col" style={{ whiteSpace: 'nowrap' }}>Member ID</th>
                        <th scope="col" style={{ whiteSpace: 'nowrap' }}>username</th>
                        <th scope="col" style={{ whiteSpace: 'nowrap' }}>order time</th>
                        <th scope="col" style={{ whiteSpace: 'nowrap' }}>product information</th>
                        <th scope="col" style={{ whiteSpace: 'nowrap' }}>state</th>
                        <th scope="col" style={{ whiteSpace: 'nowrap' }}>direction</th>
                        <th scope="col" style={{ whiteSpace: 'nowrap' }}>time/points</th>
                        <th scope="col" style={{ whiteSpace: 'nowrap' }}>Position opening point</th>
                        <th scope="col" style={{ whiteSpace: 'nowrap' }}>closing point</th>
                        <th scope="col" style={{ whiteSpace: 'nowrap' }}>Commission balance</th>
                        <th scope="col" style={{ whiteSpace: 'nowrap' }}>Invalid order balance</th>
                        <th scope="col" style={{ whiteSpace: 'nowrap' }}>Effective order balance</th>
                        <th scope="col" style={{ whiteSpace: 'nowrap' }}>Actual profit and loss</th>
                        <th scope="col" style={{ whiteSpace: 'nowrap' }}>Balance after purchase</th>
                        <th scope="col" style={{ whiteSpace: 'nowrap' }}>Single control operation</th>
                        <th scope="col" style={{ whiteSpace: 'nowrap' }}>Details</th>
                          
                        </tr>
                      </thead>
                      <tbody>
                      {data.map((record) => (
                        <tr key={record.id}>
                          <td>{record.id}</td>
                          <td>{record.MemberId}</td>
                          <td>{record.username}</td>
                          <td>{record.ordertime}</td>
                          <td>{record.productInfo}</td>
                          <td>{record.state}</td>
                          <td>{record.direction}</td>
                          <td>{record.timePoints}</td>
                          <td>{record.positionOpenPoint}</td>
                          <td>{record.closingPoint}</td>
                          <td>{record.commissionBalance}</td>
                          <td>{record.invalidOrderBalance}</td>
                          <td>{record.effectiveOrderBalance}</td>
                          <td>{record.actualProfitAndLoss}</td>
                          <td>{record.balanceAfterPurchase}</td>
                          <td> {record.singleControlOperation}</td>
                          <td>
                            <button className='btn btn-success mb-1' onClick={() => handleButtonClick({id: record.id })}>Check</button>
                            <button className='btn btn-danger'>Trash</button>
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
 
  <CustomModal isOpen={isModalOpen} onClose={closeModal} data={datas} /> 

</div> 
 );
}
