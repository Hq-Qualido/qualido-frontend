import React from 'react'
import './Dashboard.css'
import DashCards from './DashCards.js'

export default function Dashboard() {
  const name = localStorage.getItem('Name');

  return (
    <>
    <div className="container my-4">
        <div className="row">
        <div className="container my-5">
      <h1 className="text-center section-heading mb-5 ">Hello 👋, {name}</h1>
        <div className="row dashboard-row">
        <DashCards image="FaBoxOpen" title="My Orders" description="Track , return , check history or buy things again." />
        <DashCards image="FaUserLock" title="Login & Security" description="Edit login, , name , mobile number , address." />
        <DashCards image="TiLocation" title="My Addresses" description="Edit addresses for your orders and gifts." />

        </div>
      </div>
        </div>
    </div>
    </>
  )
}
