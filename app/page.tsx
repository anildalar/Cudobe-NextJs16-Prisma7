"use client"
import React from 'react'

export default function page() {
  //1. Hooks Area

  //2. //Function Defination area
  let send = (e)=>{
    console.log("OK");

    //Client Side Validatio
    
  }

  //3. Return Statemnt
  return (
    <>
      <form className="mt-5 w-50 offset-3">
          <input type="text" name="fname" className="form-control mb-2" placeholder="Please enter your fname" />
          <input type="text" name="lname" className="form-control mb-2" placeholder="Please enter your lname" />
          <input type="email" name="email" className="form-control mb-2" placeholder="Please enter your email" />
          <input type="password" name="pass" className="form-control mb-2" placeholder="Please enter your password" />
          <input type="password" name="cpass" className="form-control mb-2" placeholder="Please enter your confirm password" />
          <select className="form-control" name="role_type">
              <option value="importer">Importer</option>
              <option value="exporter">Expoter</option>
              <option value="importer_exporter">Importer & Expoter</option>
          </select>
          <input type="button" onClick={send} value="SignUp" className="btn btn-success mt-5"  />
      </form>
    </>
  )
}
