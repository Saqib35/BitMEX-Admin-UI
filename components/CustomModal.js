// components/CustomModal.js
import React from 'react';

const CustomModal = ({ isOpen, onClose , data }) => {
  return (
    <>
      {isOpen && (
        <div className="custom-modal-overlay" onClick={onClose}>
          <div className="custom-modal-content" onClick={(e) => e.stopPropagation()}>
            <h5>Details</h5>
            <p>Member ID : {data.MemberId}</p>
            <p>Order number : {data.id}</p>
            <p>product Info : {data.productInfo}</p>
            <p>Order Status : {data.state}</p>
            <p>Entry price : {data.positionOpenPoint}</p>
            <p>Closing price : {data.closingPoint}</p>
            <p>Entry amount : {data.commissionBalance}</p>
            <p>Warehousing  Time : {data.ordertime}</p>
            <p>Closing time : Null</p>
            <p>Profit and loss of this order : {data.actualProfitAndLoss}</p>
            <button className='btn btn-danger' onClick={onClose}>Close Modal</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .custom-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .custom-modal-content {
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </>
  );
};

export default CustomModal;
