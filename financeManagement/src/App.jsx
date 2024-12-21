import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Dashboard from './component/Dashboard/Dashboard';
import Transaction from './component/Transaction/Transaction';
import Layout from './Layout';
import LoginEm from './component/Login/Login-email/LoginEm';
import LoginPh from './component/Login/Login-ph/LoginPh';
import SignUp from './component/signup/SignUp';
import Home from './component/Home/Home';
import BudgetandSaving from './component/BudgetandSaving/BudgetandSaving';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="flex-grow p-4">
        <Routes>
          {/* Authentication Routes */}
          <Route path="/login-email" element={<LoginEm />} />
          <Route path="/login-phone" element={<LoginPh />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Main Application Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} /> {/* Default child route for "/" */}
            <Route path="home" element={<Home />} />
            <Route path="budgetandsaving" element={<BudgetandSaving />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="transaction" element={<Transaction />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
