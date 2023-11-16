// components/DataTable.js
import { useEffect, useRef } from 'react';
import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';

const DataTable = ({ data, pagination = true }) => {
  const tableRef = useRef();

  useEffect(() => {
    if (window.$) {
      const timeoutId = setTimeout(() => {
        const dataTableOptions = {
          paging: pagination,
          pageLength: 3, // Set the number of rows per page

          // Add more DataTable options as needed
        };
        
        $(tableRef.current).DataTable(dataTableOptions);

    // // Destroy existing DataTable instance if it exists
    // if ($.fn.DataTable.isDataTable(tableRef.current)) {
    //   $(tableRef.current).DataTable().destroy(true);
    // }
        // Destroy DataTable on component unmount
        return () => {
          if ($.fn.DataTable.isDataTable(tableRef.current)) {
            $(tableRef.current).DataTable().destroy(true);
          }
        };
      }, 1000); // Delay initialization by 1 second (adjust as needed)
  
      return () => clearTimeout(timeoutId);
    }

  }, [data, pagination]);
  
  return (
    <table className="table table-responsive" ref={tableRef}>
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
        <th scope="col" style={{ whiteSpace: 'nowrap' }}>Show profit</th>
        <th scope="col" style={{ whiteSpace: 'nowrap' }}>Show loss</th>
        <th scope="col" style={{ whiteSpace: 'nowrap' }}>Action</th>
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
            <p className='btn btn-success' style={{ width: '200px' }}>Recommended</p>
            ) : product.HomePageRecommendation === 0 ? (
            <p className='btn btn-primary'  style={{ width: '200px' }}>Not recommended</p>
            ) : (
            <p className='btn btn-danger'>Something went wrong</p>
            )}


        </td>
        <td style={{ whiteSpace: 'nowrap' }}>open market/ close</td>
        <td>{product.HomePageRecommendation}</td>
        <td>{product.HomePageRecommendation}</td>
        <td>{product.HomePageRecommendation}</td>
        <td>
            <button className="btn btn-danger" style={{ whiteSpace: 'nowrap' }}>Turn On</button>
        </td>
        <td>
            <button className="btn btn-danger" style={{ whiteSpace: 'nowrap' }}>Close the Market</button>
        </td>
        <td>
            <button className="btn btn-success" style={{ whiteSpace: 'nowrap' }}>Show profit</button>
        </td>
        <td>
            <button className="btn btn-secondary" style={{ whiteSpace: 'nowrap' }}>Obvious loss</button>
        </td>
        <td>
        <i className='fa fa-trash text-danger '></i>
        <i className='fa fa-edit text-success' style={{ marginLeft: '10px' }}></i>
            
        </td>
        </tr>
        ))}
    </tbody>
  </table>
  );
};

// If you want to disable server-side rendering, use the following export:
export const getServerSideProps = async () => {
  return {
    props: {},
  };
};


export default DataTable;


