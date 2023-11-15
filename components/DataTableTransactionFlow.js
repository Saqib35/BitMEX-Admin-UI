
import { useEffect, useRef,useState } from 'react';
import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';
import { toast } from 'react-toastify';
import CustomModal from '../components/CustomModal';

const DataTable = ({ data, pagination = true }) => {
  
  const tableRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [datas, setDatas] = useState(null);


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
                      
        <CustomModal isOpen={isModalOpen} onClose={closeModal} data={datas} /> 

     </>
     );
};

export default DataTable;
