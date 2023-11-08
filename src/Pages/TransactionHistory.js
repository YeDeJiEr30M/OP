import React from 'react';
import '../styles/style.css'; 

function TransactionHistory() {
  // Dummy data (replace with real data as needed)
  const transactions = [
    { id: 1, description: 'Utility Bill', amount: -100, date: '2023-10-15' },
    { id: 2, description: 'Deposit', amount: 1000, date: '2023-10-10' },
    { id: 3, description: 'Groceries', amount: -50, date: '2023-10-05' },
    // Add more transaction data here
  ];

  return (
    <div className="transaction-history">
      <h2>Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td className={`transaction-amount ${transaction.amount < 0 ? 'expense' : 'income'}`}>
                ${Math.abs(transaction.amount)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionHistory;
