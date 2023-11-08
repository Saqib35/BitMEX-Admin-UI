import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })
import axios from 'axios';

export default function Product() {
  

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {  
        const response = await axios.get('https://bitapi.mfhsoltech.com/api/product/index');
        setData(response.data.products);
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
         <Link href="/add-product" className='btn btn-success ml-1 mb-2'>Add Product</Link>
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
                        <i className="bx bx-check font-medium-5 pl-25 pr-75" /> Product List
                      </h4>
                    </div>
                    <div className="card-body px-0 py-1">
                    <table className="table table-responsive">
                      <thead>
                        <tr>
                          <th scope="col" style={{ whiteSpace: 'nowrap' }}>Refresh</th>
                          <th scope="col" style={{ whiteSpace: 'nowrap' }}>Product title</th>
                          <th scope="col" style={{ whiteSpace: 'nowrap' }}>Product code</th>
                          <th scope="col" style={{ whiteSpace: 'nowrap' }}>Home page recommendation</th>
                          <th scope="col" style={{ whiteSpace: 'nowrap' }}>State</th>
                          <th scope="col" style={{ whiteSpace: 'nowrap' }}>Ramdom value</th>
                          <th scope="col" style={{ whiteSpace: 'nowrap' }}>Minimum risk control</th>
                          <th scope="col" style={{ whiteSpace: 'nowrap' }}>Maximum risk control</th>
                          <th scope="col" style={{ whiteSpace: 'nowrap' }}>Operate</th>
                          <th scope="col" style={{ whiteSpace: 'nowrap' }}>Close market</th>
                          <th scope="col" style={{ whiteSpace: 'nowrap' }}>Edit</th>
                          <th scope="col" style={{ whiteSpace: 'nowrap' }}>Delete</th>
                          <th scope="col" style={{ whiteSpace: 'nowrap' }}>Show profit</th>
                          <th scope="col" style={{ whiteSpace: 'nowrap' }}>Show loss</th>
                        </tr>
                      </thead>
                      <tbody>
                      {data.map((product) => (
                        <tr key={product.id}>
                          <td className="no-line-break"> 0 </td>
                          <td className="no-line-break">{product.name}</td>
                          <td className="no-line-break">{product.ProductCode}</td>
                          <td className="no-line-break">
                            {product.HomePageRecommendation === 1 ? (
                               <p className='btn btn-success'>Recommended</p>
                            ) : product.HomePageRecommendation === 0 ? (
                              <p className='btn btn-primary'>Not recommended</p>
                            ) : (
                              <p className='btn btn-danger'>Something went wrong</p>
                            )}


                          </td>
                          <td className="no-line-break">open market/ close</td>
                          <td>{product.HomePageRecommendation}</td>
                          <td>{product.HomePageRecommendation}</td>
                          <td>{product.HomePageRecommendation}</td>
                          <td>
                            <button className="btn btn-danger">Turn On</button>
                          </td>
                          <td>
                            <button className="btn btn-danger">Click to Close the Market</button>
                          </td>
                          <td>
                            <button className="btn btn-primary">Edit</button>
                          </td>
                          <td>
                            <button className="btn btn-danger">Delete</button>
                          </td>
                          <td>
                            <button className="btn btn-success">Show profit</button>
                          </td>
                          <td>
                            <button className="btn btn-secondary">Obvious loss</button>
                          </td>
                        </tr>
                         ))}
                      </tbody>
                    </table>    
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
