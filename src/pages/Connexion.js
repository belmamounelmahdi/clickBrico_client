import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Inputs from "../components/Inputs";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../redux/actions/authActions";



const Connexion = () => {
    const [ form, setForm ] = useState({})
    const dispatch = useDispatch()
    const errors = useSelector( state => state.errors)
    const navigate = useNavigate()


    const handelSubmit = (e) => {
        e.preventDefault();
        dispatch(LoginAction(form, navigate))
    }

    const handelChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    
    return ( 
        <div>
            <div className="modal fade flex justify-center items-center top-44 md:top-36 left-1 md:left-1/3 w-auto h-screen outline-none"
        id="exampleModal" 
        tabindex="-1" 
        aria-labelledby="exampleModalLabel" 
        aria-hidden="true">

    
    <div className="modal-dialog  md:w-auto pointer-events-none">
    <div
        className="modal-content border-none shadow-lg  flex flex-col w-auto pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
        <div
        className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <div>

        <div className="space-y-2 md:flex md:flex-col ">
        <h5 className="text-xl font-medium  text-gray-800" id="exampleModalLabel">
        Content de vous revoir !
        </h5>
        <p className="text-center">
            Connectez-vous pour accéder à votre compte
        </p>
        <button className="flex items-center ml-16 md:ml-2 space-x-2 md:pl-16 border-2 border-gray-100 hover:bg-gray-100 p-3 text-sky-600">
            <FaGoogle />
            <p>
                Continuer avec Google
            </p>
        </button>
        </div>
        <br />
        <p className="text-red-600">

        </p>
        <hr />


        <form className="space-y-4 mt-6 flex flex-col items-center">
            <Inputs name="email" placeholder="Email" type="email" icon={faEnvelope} handelChange={handelChange} errors={errors.email}/>
            <Inputs name="password" placeholder="Mot de passe" type="password" icon={faLock} handelChange={handelChange} errors={errors.password}/>
            <button onClick={handelSubmit} className="bg-sky-600 text-white p-3 w-40 md:w-56">
                Se connecter
            </button>
        </form>
            <p className="text-center">
                Pas encore membre ? <Link to="/register" className="text-sky-500">
                    Créez un compte
                </Link>
            </p>
        </div>
        </div>
    </div>
    </div>
    </div>
        </div>
    );
}

export default Connexion;