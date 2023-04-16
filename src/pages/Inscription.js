import { useEffect, useState } from "react";
import { FaGoogle } from 'react-icons/fa';
import { faBellConcierge, faBriefcase, faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import Inputs from "../components/Inputs";
import { useDispatch, useSelector } from "react-redux";
import { Registration } from "../redux/actions/authActions";



const Inscription = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const [ display, setDisplay ] = useState("hidden")
    const [ form, setForm ] = useState({})
    const dispatch = useDispatch()
    const errors = useSelector( state => state.errors)
    const navigate = useNavigate()

    const handelSubmit = (e) => {
        e.preventDefault();
        dispatch(Registration(form, navigate))
    
        
    }

    const handelChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }


    const handelOpen = () => {
        setDisplay("inline")
    }

    const handelClose = () => {
        setDisplay("hidden")
    }

    return ( 
        <div className="h-screen mb-10 md:mb-auto">
            <h1 className="text-2xl text-center mt-32">
                Bienvenue chez ClickBrico                
            </h1>
            <div className="flex flex-col md:flex-row md:justify-evenly p-10 mt-10 mb-10 space-y-12 md:space-y-0">
            <Link onClick={handelOpen} className="border-2 border-gray-200 rounded-md p-4 shadow-2xl transition ease-in-out delay-150 hover:scale-105">
                    <FontAwesomeIcon className="text-8xl text-sky-600" icon={faBellConcierge}/>
                    <h1 className="text-xl">
                        J'ai besoin d'un service
                    </h1>
                    <p className="text-gray-500">
                        Trouvez le prestataire idéal pour vos services du quotidien
                    </p>
            </Link>

            {/** Start Modal Inscription */}
    <div className={display+ " modal fade fixed top-14 left-0 md:left-1/3 md:top-24 w-auto md:w-1/3 h-auto outline-none overflow-x-hidden overflow-y-auto z-10 shadow-2xl"}
        id="exampleModal" 
        tabindex="-1" 
        aria-labelledby="exampleModalLabel" 
        aria-hidden="true">

    <button
    onClick={handelClose}
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
        <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">
            Créer un compte
        </h5>
        <p>
            Profitez de votre temps libre grâce à nos jobbers
        </p>
        <button className="flex items-center space-x-2 pl-20 border-2 border-gray-100 hover:bg-gray-100 p-3 text-sky-600">
            <FaGoogle />
            <p>
                Continuer avec Google
            </p>
        </button>
        </div>       
        <div>
        <br />
        <hr />
        


        <form className="space-y-4 mt-6 flex flex-col items-center">
            <Inputs name="firstname" placeholder="prénom" type="text" icon={faUser} handelChange={handelChange} errors={errors.firstname} />
            <Inputs name="lastname" placeholder="Nom" type="text" icon={faUser} handelChange={handelChange} errors={errors.lastname} />
            <Inputs name="email" placeholder="Email" type="email" icon={faEnvelope} handelChange={handelChange} errors={errors.emailname} />
            <Inputs name="password" placeholder="Mot de passe" type="password" icon={faLock} handelChange={handelChange} errors={errors.password} />
            <Inputs name="confirm" placeholder="Confirmer votre mot de passe" type="password" icon={faLock} handelChange={handelChange} errors={errors.confirm} />
            

            <button onClick={handelSubmit} className="bg-sky-600 text-white p-3">
                Je m'inscris
            </button>
        </form>
        </div>

        </div>

    </div>
    </div>
            </div>
            {/** End Modal Inscription */}

            <Link to="/ajoutePrestataire" className="border-2 border-gray-200 rounded-md p-4 shadow-2xl transition ease-in-out delay-150 hover:scale-105" >
                    <FontAwesomeIcon className="text-8xl text-sky-600" icon={faBriefcase}></FontAwesomeIcon>
                    <h1 className="text-xl">
                        Devenir prestataire
                    </h1>
                    <p className="text-gray-500">
                        Augmentez vos revenus en rendant service prés de chez vous
                    </p>
            </Link>
            </div>
            <p className="text-center">
            Vous avez déjà un compte ? <Link to="/login"  className="text-blue-500">Connectez-vous</Link> 
            </p>
        </div>
    );
}

export default Inscription;