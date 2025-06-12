import React from 'react'
import { Routes, Route } from 'react-router-dom';
import CheckoutButton from '../../components/CheckoutButton';
import SuccessPage from '../../components/SuccessPage';
import CancelPage from '../../components/CancelPage';

const PaymentAshwini = () => {
  return (

    <Routes>
      <Route path="/" element={<CheckoutButton />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/cancel" element={<CancelPage />} />
    </Routes>

  )
}

export default PaymentAshwini