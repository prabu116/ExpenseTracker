import React from 'react';
import { Header } from './ExpenseTracker/Header';
import { Balance } from './ExpenseTracker/Balance';
import { IncomeExpenses } from './ExpenseTracker/IncomeExpenses';
import { TransactionList } from './ExpenseTracker/TransactionList';
import { AddTransaction } from './ExpenseTracker/AddTransaction';

import { GlobalProvider } from './Context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
