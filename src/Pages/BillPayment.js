import React, { useState } from 'react';
import '../styles/style.css'; 

function BillPayment() {
  // Define state for form fields
  const [billName, setBillName] = useState('');
  const [amount, setAmount] = useState('');

  // Handle form submission
  const handlePayment = (e) => {
    e.preventDefault();

    setBillName('');
    setAmount('');
  };

  return (
    <div className="bill-payment">
      <h2>Bill Payment</h2>
      <form onSubmit={handlePayment}>
        <div className="form-group">
          <label htmlFor="billName">Bill Name:</label>
          <input
            type="text"
            id="billName"
            value={billName}
            onChange={(e) => setBillName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button className="cta-button" type="submit">
          Pay Bill
        </button>
      </form>
    </div>
  );
}

export default BillPayment;
