import React, { useState } from 'react';
import '../styles/style.css';

function TransferFunds() {
  // Define state for form fields
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  // Handle form submission
  const handleTransfer = (e) => {
    e.preventDefault();

    // Reset form fields after transfer
    setRecipient('');
    setAmount('');
  };

  return (
    <div className="transfer-funds">
      <h2>Transfer Funds</h2>
      <form onSubmit={handleTransfer}>
        <div className="form-group">
          <label htmlFor="recipient">Recipient:</label>
          <input
            type="text"
            id="recipient"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
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
          Transfer
        </button>
      </form>
    </div>
  );
}

export default TransferFunds;
