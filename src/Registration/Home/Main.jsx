import React from 'react'
import './Main.css'
const Main = () => {
  return (
    <>
    <br /><br /><br /> <br /> <br />
    <div className="container">
    <h1 className="wel mt-5">WELCOME TO YOUR  <br /> OWN PAGE</h1>
    <div className="row mt-4">
        <div className="col-md-3 ">
            <h1 className="sec mb-1"><button className="btn btn-outline-secondary  text-white">Get Started</button></h1>
        </div>
         <div className="col-lg-2  mt-2">
            <button className="btn   btn-warning ">Purchase Now</button>
        </div>
    </div>
    </div>
    </>
  )
}

export default Main