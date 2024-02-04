import React, { useState, useEffect } from 'react';
import Table from './components/Table';
import Form from './components/Form';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch transactions from the local server
    fetch('http://localhost:3001/transactions')
      .then((response) => response.json())
      .then((transactions) => setTransactions(transactions))
      .catch((error) => console.error('Error fetching transactions:', error));
  }, []);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const searchTransactions = (searchTerm) => {
    // Filter transactions based on the search term
    const filteredTransactions = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTransactions(filteredTransactions);
  };

  return (
    <div>
      <h1>Bank Transactions App</h1>
      <SearchBar onSearch={searchTransactions} />
      <Form onAddTransaction={addTransaction} />
      <Table transactions={transactions} />
      
    </div>
  );
};

export default App;
