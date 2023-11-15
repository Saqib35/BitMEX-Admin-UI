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
   <>
      {data.length > 0 ? (
                    <table className="table table-responsive" ref={tableRef}>
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
                              <p  style={{ whiteSpace: 'nowrap' }} className='btn btn-success'>Completed</p>
                            ) : record.state === 'pending' ? (
                              <p  style={{ whiteSpace: 'nowrap' }} className='btn btn-danger'>Pending Review</p>
                            ) : (
                              // Handle other cases or provide a default
                              <p  style={{ whiteSpace: 'nowrap' }} className='btn btn-default'>Other State</p>
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
   </>
   
  );
};

export default DataTable;
