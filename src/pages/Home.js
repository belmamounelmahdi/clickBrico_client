/* eslint-disable jsx-a11y/alt-text */
import { faCheckCircle, faMoneyBill, faPhone, faSearch, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import peinture from '../assets/peinture.svg'
import électricité from '../assets/électricité.svg'
import demenage from '../assets/demenage.svg'
import plombrie from '../assets/plombrie.svg'
import jardinage from '../assets/jardinage.svg'
import menage from '../assets/menage.svg'
import cFait from '../assets/c_fait.svg'
import reserverJobber from '../assets/reserver_jobber.svg'
import demanderService from '../assets/demander_service.svg'
import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import { useSelector } from "react-redux";






const Home = () => {
    const auth = useSelector(state => state.auth)
  const user = {
    isConnected: auth.isConnected,
    firstname: auth.user.name,
    lastname: auth.user.lastname,
    email: auth.user.email,
    role: auth.user.role
  }

    return ( 
        <>
        {/** Start Landing */}
        
            <div className="landing md:flex flex flex-col md:items-start justify-center items-center">
                <div className="md:ml-28">
                <h1 className="text-3xl md:text-5xl">
                    Trouvez le prestataire idéal 
                    <br /> 
                    pour tous les services du 
                    <br /> 
                    quotidien
                </h1>
                <button className="flex items-center bg-white p-2 rounded-2xl w-60 mt-8">
                    <h1>
                            Bricolage, jardinage...
                    </h1>
                    <span className="bg-sky-600 p-2 rounded-2xl ml-10">
                        <FontAwesomeIcon className="text-white" icon={faSearch}></FontAwesomeIcon>
                    </span>
                </button>
                </div>
            </div>

        {/** End Landing */}

        {/** Start Services */}

            <div className="mt-2 md:mt-36 ">
                <h1 className="text-center font-semibold m-4 text-xl md:text-4xl md:text-left md:ml-4">
                    De quel service avez-vous besoin ? 
                </h1>
                <div className="flex flex-wrap justify-center mt-12">
                    <div className="svc w-72 md:w-auto shadow-2xl ml-6 mr-6 mb-6 rounded-lg cursor-pointer transition ease-in-out delay-150 hover:scale-105">
                        <Link  to={user.isConnected ? '/electriciens' : '/login'}>
                        <img className="rounded-t-xl" src={électricité}  />
                        <h1 className="ml-2">
                            Électricité
                        </h1>
                        </Link>
                    </div>
                    <div className="svc w-72 md:w-auto shadow-2xl ml-6 mr-6 mb-6 rounded-lg cursor-pointer transition ease-in-out delay-150 hover:scale-105">
                        <Link to={user.isConnected ? '/peintres' : "/login"} >
                        <img className="rounded-t-xl" src={peinture}/>
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
                        <Link to={user.isConnected ? '/jardinier' : "/login"}>
                        <img className="rounded-t-xl" src={jardinage}/>
                        <h1 className="ml-2">
                            Jardinage
                        </h1>
                        </Link>
                    </div>
                    <div className="svc w-72 md:w-auto shadow-2xl ml-6 mr-6 mb-6 rounded-lg cursor-pointer transition ease-in-out delay-150 hover:scale-105">
                        <Link to={user.isConnected ? '/menage' : "/login"}>
                        <img className="rounded-t-xl" src={menage}/>
                        <h1 className="ml-2">
                            Ménage
                        </h1>
                        </Link>
                    </div>
                    <div className="svc w-72 md:w-auto shadow-2xl ml-6 mr-6 mb-6 rounded-lg cursor-pointer transition ease-in-out delay-150 hover:scale-105">
                        <Link to={user.isConnected ? '/plombie' : "/login"}>
                        <img className="rounded-t-xl" src={plombrie}/>
                        <h1 className="ml-2">
                            Plombrie
                        </h1>
                        </Link>
                    </div>

                </div>

        {/** Start Info Services */}
        
                <div className="md:mt-36 hidden md:block">
                    <h1 className="text-4xl ml-4">
                        Le service à domicile en toute sérénité
                    </h1>
                    <div className="info-svc w-72 md:w-auto flex justify-center mt-12">
                    <div className="w-80 ml-4 mr-4">
                        <FontAwesomeIcon className="text-sky-600" icon={faCheckCircle}></FontAwesomeIcon>
                        <h1 className="text-lg font-semibold">
                            Prestataires qualifiés
                        </h1>
                        <p>
                            Tous les prestataires sont vérifiés, suivis et évalués pour chaque service rendu afin de vous garantir le meilleur niveau de satisfaction.
                        </p>
                    </div>
                    <div className="w-80 ml-4 mr-4">
                        <FontAwesomeIcon className="text-sky-600" icon={faUserCheck}></FontAwesomeIcon>
                        <h1 className="text-lg font-semibold">
                            Prestations assurées
                        </h1>
                        <p>
                            Toutes les prestations sont couvertes, qu’il s’agisse de dommages corporels ou matériels occasionnés chez vous, sans franchise.
                        </p>
                    </div>
                    <div className="w-80 ml-4 mr-4">
                        <FontAwesomeIcon className="text-sky-600" icon={faMoneyBill}></FontAwesomeIcon>
                        <h1 className="text-lg font-semibold">
                            Budget respecté
                        </h1>
                        <p>
                            Tous les prix sont définis à l’avance, les jobbers s’engagent à les respecter. Toutes les rémunérations sont déclenchées en ligne après votre accord.
                        </p>
                    </div>
                    <div className="w-80 ml-4 mr-4">
                        <FontAwesomeIcon className="text-sky-600" icon={faPhone}></FontAwesomeIcon>
                        <h1 className="text-lg font-semibold">
                            Service encadré
                        </h1>
                        <p>
                            Notre service client est à votre disposition 7j/7 pour vous assurer une expérience parfaite de la prise de commande jusqu'à la fin de la prestation.
                        </p>
                    </div>
                    </div>

                </div>

        {/** End Info Services */}

            </div>        

        {/** End Services */}


        {/** Start Comment Ca Marche */}
    <div className="mt-8 md:mt-44">
            <h1 className="text-center text-xl md:ml-4 md:text-4xl md:text-left">
                Comment ça marche ?
            </h1>        
        <div className="flex flex-col items-center md:flex md:flex-row md:justify-center mt-12 space-y-10 md:space-y-0">
            <div className="text-center space-y-1 w-56 md:w-64 ml-6 mr-6">
                <img className="ml-12 w-32 md:w-44" src={demanderService} alt="Demander service" />
                <h1 className="text-lg font-semibold">
                    Demandez un service
                </h1>
                <p className="text-gray-500">
                    Remplissez le formulaire et obtenez une estimation du prix et de la durée
                </p>
            </div>
            <div className="text-center space-y-1 w-56 md:w-64 ml-6 mr-6">
                <img className="ml-12 w-32 md:w-44" src={reserverJobber} alt="Réservez votre jobber" />
                <h1 className="text-lg font-semibold">
                    Réservez votre jobber
                </h1>
                <p className="text-gray-500">
                    Des jobbers compétents et proches de chez vous vous proposent leurs services
                </p>
            </div>
            <div className="text-center space-y-1 w-56 md:w-64 ml-6 mr-6">
                <img className="ml-12 w-32 md:w-44" src={cFait} alt="Souriez, c'est fait !" />
                <h1 className="text-lg font-semibold">
                    Souriez, c'est fait !
                </h1>
                <p className="text-gray-500">
                    Votre jobber vous rend service au prix et à la date convenus
                </p>
            </div>
        </div>
    </div>
        {/** End Comment Ca Marche */}

        {/** Start Avis Clients */}

        <div className="flex flex-col space-y-16 md:flex-row md:justify-between border-solid border-2 rounded-3xl m-6 md:m-36 p-10 md:pl-24 md:pr-24 md:pt-10 md:pb-10">
            <div className="content-left w-auto md:w-96">
                <h1 className="text-lg font-semibold">
                    Les utilisateurs nous font confiance
                </h1>
                <p>
                    La satisfaction de nos utilisateurs est notre priorité. Vous souhaitez être convaincu que ClickBrico est la bonne plateforme ? Découvrez les avis !
                </p>
                <Link to="/avis" className="text-sky-700 underline">
                    Voir tous les avis clients           
                </Link>
            </div>
        <div className="w-80 ">
            <Slider />
        </div>
            </div>
        {/** End Avis Clients */}
        </>
    );
}

export default Home;