"use client"
import axios from 'axios';
import Swal from 'sweetalert2'
import React, { useState } from 'react'

export default function page() {
  //1. Hooks Area/ BInd variables/ Hook Variable
    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const [cpass,setCpass] = useState("");
    const [role_type,setRoleType] = useState("");


  //2. //Function Defination area
  let send = (e)=>{
    console.log("OK");

    let payload = {
                    "fname":fname,  // P:"Value"  Hardcoded value ---> Dynamic
                    "lname":lname,
                    "email":email,
                    "pass":pass,
                    "cpass":cpass,
                    "role_type":role_type
                  }

    console.log(payload);

    try {
      // API Calling
      axios.post('http://localhost:3000/api/v1/register', payload)
      .then(function (response) {
        console.log(response);
          Swal.fire({
            title: "User Registered Successfully!",
            text: "User Registered Successfully!!",
            icon: "success"
          });
      })
      .catch(function (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Use Not registered",
          text: "Use Not registered",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      });
      //DB Operation
    } catch(err) {
        console.log(err);
    }
    //We have to call the api
    

    //Client Side Validatio
    
  }

  //3. Return Statemnt
  return (
    <>
      <form className="mt-5 w-50 offset-3">
          <input type="text" name="fname" value={fname} onChange={ (e)=>{ setFname(e.target.value)  } } className="form-control mb-2" placeholder="Please enter your fname" />
          <input type="text" name="lname" value={lname} onChange={ (e)=>{ setLname(e.target.value)  } } className="form-control mb-2" placeholder="Please enter your lname" />
          <input type="email" name="email" value={email} onChange={ (e)=>{ setEmail(e.target.value)  } } className="form-control mb-2" placeholder="Please enter your email" />
          <input type="password" name="pass" value={pass} onChange={ (e)=>{ setPass(e.target.value)  } } className="form-control mb-2" placeholder="Please enter your password" />
          <input type="password" name="cpass" value={cpass} onChange={ (e)=>{ setCpass(e.target.value)  } } className="form-control mb-2" placeholder="Please enter your confirm password" />
          <select className="form-control" name="role_type" value={role_type} onChange={ (e)=>{ setRoleType(e.target.value)  } }>
              <option value="importer">Importer</option>
              <option value="exporter">Expoter</option>
              <option value="importer_exporter">Importer & Expoter</option>
          </select>
          <input type="button" onClick={send} value="SignUp" className="btn btn-success mt-5"  />
      </form>
    </>
  )
}
