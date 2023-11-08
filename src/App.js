import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import TransactionHistory from './Pages/TransactionHistory';
import TransferFunds from './Pages/TransferFunds';
import BillPayment from './Pages/BillPayment';
import Profile from './Pages/Profile';
import Support from './Pages/Support';
import ChatBot from './Components/ChatBot';

function App() {
  return (
    <>

    <BrowserRouter>    
        <Header/>
          <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/dashboard' element={<Dashboard/>}/>
          <Route exact path='/history' element={<TransactionHistory/>}/>
          <Route exact path='/funds' element={<TransferFunds/>}/>
          <Route exact path='/payment' element={<BillPayment/>}/>
          <Route exact path='/profile' element={<Profile/>}/>
          <Route exact path='/support' element={<Support/>}/>

          </Routes>
        <Footer/>
        <ChatBot/>
    </BrowserRouter>

    </>
  )
}

export default App;
