/* eslint-disable react-hooks/exhaustive-deps */
import { faCity, faEnvelope, faMapLocation, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Inputs from '../components/Inputs'
import { AddProfile, GetProfile } from '../redux/actions/profileAction'










function SettingUser() {

  const auth = useSelector(state => state.auth)
  const user = {
      name: auth.user.name,
      email: auth.user.email
  }
  
  const [ form, setForm ] = useState({})
  const dispatch = useDispatch()
  const errors = useSelector( state => state.errors)
  const profiles = useSelector( state => state.profiles)
  const [message, setMessage] = useState("")
  const [show, setShow] = useState(false)


  const handelSubmit = (e) => {
      e.preventDefault();
      dispatch(AddProfile(form, setShow, setMessage))
  }

  const handelChange = (e) => {
      setForm({
          ...form,
          [e.target.name]: e.target.value
      })
  }

  useEffect( () => {
    async function fetchData () {
    await dispatch(GetProfile())
    setForm(profiles.profile)
  }
  fetchData()
  }, [])
  console.log(form);
  return (
    <div className='h-screen m-8 flex flex-col items-center'>
        <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-center" style={{ display: show ? "block" : "none"}} role="alert">
            {message}
        </div>
          <h1 className='font-medium text-center'>Tout ce qui est sur cette page peut être vu par tout le monde</h1>
          <div className="modal mt-10 fade w-auto ml-6 mr-6 md:w-1/3 h-auto outline-none overflow-x-hidden overflow-y-auto shadow-2xl"
            id="exampleModal" 
            tabindex="-1" 
            aria-labelledby="exampleModalLabel" 
            aria-hidden="true">

<div className="modal-dialog relative pointer-events-none">
<div
    className="modal-content border-none shadow-lg w-auto relative flex flex-col pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
    <div
    className="modal-header 
    flex 
    flex-col 
    w-auto 
    items-center 
    p-4 
    border-b 
    border-gray-200 
    rounded-t-md">

    <div className="space-y-2 flex flex-col ">
    <p className="text-xl text-left">
        Information du profile
    </p>

    </div>       
    <div>
    <br />
    <hr />
    <form className="space-y-4 mt-6 flex flex-col items-center">
        <Inputs name="name" placeholder="Nom" value={user.name} type="text" icon={faUser} />
        <Inputs name="email" placeholder="Email" value={user.email} type="text" icon={faEnvelope} />
        <Inputs name="tel" placeholder="Téléphone" value={form && form.tel ? form.tel: ""} type="text" icon={faPhone} handelChange={handelChange} errors={errors.tel} />
        <Inputs name="city" placeholder="Ville" value={form && form.city ?form.city: ""} type="text" icon={faCity} handelChange={handelChange} errors={errors.city} />
        <Inputs name="address" placeholder="Address" value={form && form.address ? form.address: ""} type="text" icon={faMapLocation} handelChange={handelChange} errors={errors.address} />
        <button onClick={handelSubmit} className="bg-sky-600 text-white p-3 w-40 md:w-56">
            Enregistrer
        </button>
    </form>
    </div>

    </div>

</div>
</div>
        </div>


    </div>
    
  )
}

export default SettingUser;