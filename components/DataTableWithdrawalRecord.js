// components/DataTable.js
import { useEffect, useRef } from 'react';
import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';
import { useRouter } from 'next/router'
const DataTable = ({ data, pagination = true }) => {
  
  const tableRef = useRef();
  const router = useRouter();

  const handleButtonClick = (id) => {
    
    router.push(`/withdrawal-details?id=${id}`);
  };



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
                    <table className="table table-responsive"  ref={tableRef}>
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
                          <th scope="col" style={{ whiteSpace: 'nowrap' }}>operate/Action</th>
                        </tr>
                      </thead>
                      <tbody>
                      {data.map((record) => (
                        <tr key={record.id}>
                            <td>{record.serialNum}</td>
                            <td>{record.MemberId}</td>
                            <td>{record.username}</td>
                            <td>{record.withdrawalAmount}</td>
                            <td>{record.handlingFee}</td>
                            <td>{record.actualArrival}</td>
                            <td>{record.bankDeposit}</td>
                            <td>{record.denialReason}</td>
                            <td>{record.created_at}</td>
                            <td>{record.processingProgress}</td>
                            <td>
                              <button className='btn btn-success mb-1' onClick={() => handleButtonClick(record.id)} style={{ whiteSpace: 'nowrap' }}>Details</button>
                              <button className='btn btn-danger'><i className='fa fa-trash'></i></button>
                            </td>

                        </tr>
                         ))}
                      </tbody>
                     
                    </table>   
                       ) : (
                        <p>Loading...</p>
                     )}     </>
     );
};

export default DataTable;
