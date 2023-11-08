import React from 'react';
import '../styles/style.css'; 

function Dashboard() {
  // Dummy data (replace with real data as needed)
  const accountBalance = 5000;
  const recentTransactions = [
    { id: 1, description: 'Utility Bill', amount: -100, date: '2023-10-15' },
    { id: 2, description: 'Deposit', amount: 1000, date: '2023-10-10' },
    { id: 3, description: 'Groceries', amount: -50, date: '2023-10-05' },
    // Add more transaction data here
  ];

  return (
    <div className="dashboard">
      <div className="account-summary">
        <h2>Account Summary</h2>
        <p>Current Balance: ${accountBalance}</p>
      </div>
      <div className="recent-transactions">
        <h3>Recent Transactions</h3>
        <ul>
          {recentTransactions.map((transaction) => (
            <li key={transaction.id}>
              <div className="transaction-description">{transaction.description}</div>
              <div className={`transaction-amount ${transaction.amount < 0 ? 'expense' : 'income'}`}>
                ${Math.abs(transaction.amount)}
              </div>
              <div className="transaction-date">{transaction.date}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
