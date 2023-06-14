import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function Register() {

  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [password, passwordchange] = useState("");
  const [email, emailchange] = useState("");
  const [phone, phonechange] = useState("");
  const [country, countrychange] = useState("");
  const [address, addresschange] = useState("");
  const [gender, genderchange] = useState("male");

  const navigate = useNavigate();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    let regobj = { id, name, password, email, phone, country, address, gender };
    // console.log(regobj);
    fetch("http://localhost:8000/user", {
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(regobj)
    }).then((res) => {
      toast.success("Registered successfully");
      navigate('/login');
    }).catch((err) => {
      toast.error("Failed: " + err.message);
    });

  }

  return (
    <div>
      {/* <h2>Login</h2> */}
      <form className='container col-lg-6' onSubmit={handleSubmit}>
        <div className='card'>
          <div className='card-header'>
            <h1>User registration</h1>
          </div>
          <div className='card-body'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='form-group'>
                  <input required value={id} onChange={e => idchange(e.target.value)} className='form-control' placeholder='username' /><br></br>
                </div>
              </div>

              <div className='col-lg-6'>
                <div className='form-group'>
                  <input required value={password} onChange={e => passwordchange(e.target.value)} type="password" className='form-control' placeholder='password' /><br />
                </div>
              </div>

              <div className='col-lg-6'>
                <div className='form-group'>
                  <input required value={name} onChange={e => namechange(e.target.value)} className='form-control' placeholder='full name' /><br />
                </div>
              </div>

              <div className='col-lg-6'>
                <div className='form-group'>
                  <input required value={email} onChange={e => emailchange(e.target.value)} className='form-control' placeholder='Email' /><br />
                </div>
              </div>

              <div className='col-lg-6'>
                <div className='form-group'>
                  <input required value={phone} onChange={e => phonechange(e.target.value)} className='form-control' placeholder='Phone' /><br />
                </div>
              </div>

              <div className='col-lg-6'>
                <div className='form-group'>
                  <select required value={country} onChange={e => countrychange(e.target.value)} className='form-control'>
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                    <option value="singapore">Singapore</option>
                  </select>
                </div>
              </div>
              <br></br>

              <div className='col-lg-6'>
                <div className='form-group'>
                  <textarea required value={address} onChange={e => addresschange(e.target.value)} className='form-control' placeholder='Address'></textarea>
                </div>
              </div>

              <div className='col-lg-6'>
                <div className='form-group'>
                  <label>Male</label>
                  <input type='radio' checked={gender === 'male'} onChange={e => genderchange(e.target.value)} name="gender" value="male" /><br />
                  <label>Female</label>
                  <input type='radio' checked={gender === 'female'} onChange={e => genderchange(e.target.value)} name="gender" value="female" />
                </div>
              </div>

            </div>
            <div className='card-footer'>
              <button type='submit' className='btn btn-primary'>Register</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Register