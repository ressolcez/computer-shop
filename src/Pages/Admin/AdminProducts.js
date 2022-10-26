import React from 'react'
import Products from '../../AdminComponents/Products';
import Topbar from '../../AdminComponents/TopBar';

function AdminProducts() {
  return (
    <>
      <Topbar/>
        Produkty:
      <Products/>
    </>
  )
}

export default AdminProducts