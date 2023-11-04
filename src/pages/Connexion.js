import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Inputs from "../components/Inputs";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../redux/actions/authActions";



const Connexion = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
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
<div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="bg-white rounded-md shadow-lg p-6 max-w-md w-full">

        <h5 className="text-xl font-medium text-gray-800 mb-4">
            Content de vous revoir !
        </h5>

        <p className="text-center mb-4">
            Connectez-vous pour accéder à votre compte
        </p>

        <button className="flex items-center justify-center space-x-2 border-2 border-gray-100 hover:bg-gray-100 p-3 text-sky-600 mb-4">
            <FaGoogle />
            <p>
                Continuer avec Google
            </p>
        </button>

        <hr className="mb-4" />

        <form className="space-y-4">
            <Inputs name="email" placeholder="Email" type="email" icon={faEnvelope} handelChange={handelChange} errors={errors.email}/>
            <Inputs name="password" placeholder="Mot de passe" type="password" icon={faLock} handelChange={handelChange} errors={errors.password}/>
            <button onClick={handelSubmit} className="bg-sky-600 text-white p-3 w-full">
                Se connecter
            </button>
        </form>

        <p className="text-center mt-4">
            Pas encore membre ? <Link to="/register" className="text-sky-500">
                Créez un compte
            </Link>
        </p>

    </div>
</div>

    
    );
}

export default Connexion;