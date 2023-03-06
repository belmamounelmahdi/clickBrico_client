/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { faCity, faMapLocation, faPhone } from "@fortawesome/free-solid-svg-icons";
import {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Inputs from "../components/Inputs";
import { AddProfile, GetProfile } from "../redux/actions/profileAction";
import aide from '../assets/aide.svg'
import électricité from '../assets/électricité.svg'
import demenage from '../assets/demenage.svg'
import plombrie from '../assets/plombrie.svg'
import jardinage from '../assets/jardinage.svg'
import menage from '../assets/menage.svg'

const Account = () => {
    const [ display, setDisplay ] = useState("hidden")
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
        setDisplay('hidden')
    
        
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



    return ( 
        
        <div className="h-screen">
        

        <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-center" style={{ display: show ? "block" : "none"}} role="alert">
            {message}
        </div>
        <div className="p-4 flex flex-col md:flex-row md:justify-between md:items-center ">
        <h1>
            <span className="text-lg font-semibold"> 
                Nom :
            </span>
            <span> {user.name}</span>
        </h1>
        <h1>
            <span className="text-lg font-semibold">
                Email : 
            </span>
            <span> {user.email}</span>
        </h1>
        <h1>
            <span className="text-lg font-semibold">
                Télephone :
            </span>
            <span> {profiles.profile === null ? "" : profiles.profile.tel}</span>
        </h1>
        <h1>
            <span className="text-lg font-semibold">
                Ville :
            </span>
            <span> {profiles.profile === null ? "" : profiles.profile.city}</span>
        </h1>
        <h1>
            <span className="text-lg font-semibold">
                Address : 
            </span>
            <span> {profiles.profile === null ? "" : profiles.profile.address}</span>
        </h1>
        <button onClick={() => setDisplay('inline')} className="bg-sky-600 text-white p-2 hover:bg-sky-500">
            Modifié le profile
        </button>
        </div>
        <hr />
        <div className={display+ " modal fade fixed top-14 left-0 md:left-1/3 md:top-24 w-auto md:w-1/3 h-auto outline-none overflow-x-hidden overflow-y-auto z-10 shadow-2xl"}
        id="exampleModal" 
        tabindex="-1" 
        aria-labelledby="exampleModalLabel" 
        aria-hidden="true">

    <button
        onClick={() => setDisplay('hidden')}
        className="btn-close
        z-50
        box-content
        absolute
        top-0
        right-2
        w-4 
        h-4 
        p-1 
        text-black 
        border-none 
        rounded-2xl 
        opacity-50 
        focus:shadow-none 
        focus:outline-none 
        focus:opacity-100 
        hover:text-black
        hover:opacity-75 
        hover:no-underline"
        data-bs-dismiss="modal" 
        aria-label="Close">
            ╳
        </button>
        
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

            <div className="mt-8">
                <h1 className="text-center text-xl md:text-4xl md:text-left md:ml-4">
                    De quel service avez-vous besoin ?
                </h1>
                <div className="flex flex-wrap justify-center mt-12">
                    <div className="svc w-72 md:w-auto shadow-2xl ml-6 mr-6 mb-6 rounded-lg cursor-pointer transition ease-in-out delay-150 hover:scale-105">
                        <Link to="/electriciens">
                        <img className="rounded-t-xl" src={électricité}  />
                        <h1 className="ml-2">
                            électricité
                        </h1>
                        </Link>
                    </div>
                    <div className="svc w-72 md:w-auto shadow-2xl ml-6 mr-6 mb-6 rounded-lg cursor-pointer transition ease-in-out delay-150 hover:scale-105">
                        <Link to="/peintres">
                        <img className="rounded-t-xl" src={aide}/>
                        <h1 className="ml-2">
                            Peinture
                        </h1>
                        </Link>
                    </div>
                    <div className="svc w-72 md:w-auto shadow-2xl ml-6 mr-6 mb-6 rounded-lg cursor-pointer transition ease-in-out delay-150 hover:scale-105">
                        <Link to="/connexion">
                        <img className="rounded-t-xl" src={demenage}/>
                        <h1 className="ml-2">
                            Déménagement
                        </h1>
                        </Link>
                    </div>
                    <div className="svc w-72 md:w-auto shadow-2xl ml-6 mr-6 mb-6 rounded-lg cursor-pointer transition ease-in-out delay-150 hover:scale-105">
                        <Link to="/jardinier">
                        <img className="rounded-t-xl" src={jardinage}/>
                        <h1 className="ml-2">
                            Jardinage
                        </h1>
                        </Link>
                    </div>
                    <div className="svc w-72 md:w-auto shadow-2xl ml-6 mr-6 mb-6 rounded-lg cursor-pointer transition ease-in-out delay-150 hover:scale-105">
                        <Link to="/menage">
                        <img className="rounded-t-xl" src={menage}/>
                        <h1 className="ml-2">
                            Ménage
                        </h1>
                        </Link>
                    </div>
                    <div className="svc w-72 md:w-auto shadow-2xl ml-6 mr-6 mb-6 rounded-lg cursor-pointer transition ease-in-out delay-150 hover:scale-105">
                        <Link to="/plombie">
                        <img className="rounded-t-xl" src={plombrie}/>
                        <h1 className="ml-2">
                            Plombrie
                        </h1>
                        </Link>
                    </div>
                </div>
            </div>
{/* 
            <div className="flex flex-col items-center mt-28 ">
            <p>
            Important: Pour activer votre compte, veuillez compléter votre profile
            </p>
            <form className="space-y-4 mt-6 flex flex-col items-center">
            <Inputs name="tel" placeholder="Téléphone" value={form && form.tel ? form.tel: ""} type="text" icon={faPhone} handelChange={handelChange} errors={errors.tel} />
            <Inputs name="city" placeholder="Ville" value={form && form.city ?form.city: ""} type="text" icon={faCity} handelChange={handelChange} errors={errors.city} />
            <Inputs name="address" placeholder="Address" value={form && form.address ? form.address: ""} type="text" icon={faMapLocation} handelChange={handelChange} errors={errors.address} />
            <button onClick={handelSubmit} className="bg-sky-600 text-white p-3 w-40 md:w-56">
                Enregistrer
            </button>
            </form>
            </div> */}

{/* <>
            <h1 className="text-center text-4xl mt-8">
                        Merci de nous avoir rejoint {user.name} !
                    </h1><p className="text-center text-xl mt-4">
                            On est heureux de vous accueillir dans la communauté Click Brico et de vous aider à trouvez des préstataires idéal pour tous vos besoin .
                        </p><p className="text-center text-xl mt-4">
                        Important: Pour activer votre compte, veuillez compléter votre profile
                        </p><div className="flex justify-center mt-4">
                        <button onClick={() => setDisplay('inline')} className="bg-sky-600 text-white p-3 w-40 md:w-56">
                                Compléter mon profile
                                </button>
                        </div>
            </> */}
        </div>
        
    );
}

export default Account;