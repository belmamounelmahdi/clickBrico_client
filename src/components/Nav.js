/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import logo from "../assets/LogoClickBrico.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCaretDown,
  faEnvelope,
  faLock,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FaGoogle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../redux/actions/authActions";
import axios from "axios";
import { API_URL } from "../config";

export default function Nav({ user }) {
  const auth = useSelector(state => state.auth);
  const [messages, setMessages] = useState([]);
  const [unreadMessagesCount, setUnreadMessagesCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [display, setDisplay] = useState("hidden");
  const [displayList, setDisplayList] = useState(false);
  const profiles = useSelector((state) => state.profiles);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchMessages() {
      try {
        const response = await axios.get(`${API_URL}/message-accepted/${auth.user.id}`);

        setMessages(response.data);
    
        // Incrémenter le nombre de messages non lus
        const newMessagesCount = response.data.filter((message) => !message.read).length;
        setUnreadMessagesCount(newMessagesCount);
      } catch (error) {
        console.error("Error fetching messages:", error); // Modifier cette ligne pour voir les erreurs éventuelles
      }
    }
    if (user.isConnected) {
      fetchMessages();
      const intervalId = setInterval(fetchMessages, 5000); // Appeler fetchMessages toutes les 5 secondes
      return () => clearInterval(intervalId); // Annuler l'intervalle lorsque le composant est démonté
    }
  }, [user]); // Ajoutez la dépendance 'messages' ici
  
  

  const LogoutHandler = () => {
    dispatch(Logout());
  };

  const handleOpen = () => {
    setDisplayList(true);
  };

  const handleClose = () => {
    setDisplayList(false);
  };

  const handelClose = () => {
    setDisplay("hidden");
  };

  // console.log(profiles.profile === null)
  return (
    <>
      <div className="sticky top-0 z-10 shadow-md">
        <nav className="bg-white ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center md:space-x-40">
                <div className="flex-shrink-0">
                  <Link to="/">
                    <img className="w-16" src={logo} alt="Workflow" />
                  </Link>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {/* {
                      user.role === "ADMIN" ? (
                  <Link
                    to="/admin"
                    className=" hover:bg-gray-300 text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {user.role}
                    </Link>
                      ) : ""
                    } */}
                    <Link
                      to="/"
                      className=" hover:bg-gray-300 text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Accueil
                    </Link>

                    <Link
                      to="/ajoutePrestataire"
                      className=" hover:bg-gray-300 text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Devenir prestataire
                    </Link>
                    {!user.isConnected ? (
                      <>
                        <Link
                          to="/login"
                          className=" hover:bg-gray-300 text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                        >
                          Connexion
                        </Link>
                        <Link
                          to="register"
                          className=" hover:bg-gray-300 text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                        >
                          Inscription
                        </Link>
                      </>
                    ) : (
                      <>
                        <div className="md:flex md:justify-between items-center">
                          <Link
                            to="#"
                            onClick={LogoutHandler}
                            className=" hover:bg-gray-300 text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                          >
                            Déconnexion
                          </Link>
                          <div>
                            {user.role === "ADMIN" ? (
                              <h1
                                className="text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                                to="#"
                              >
                                {user.firstname.charAt(0).toUpperCase() +
                                  user.firstname.slice(1)}{" "}
                                {user.role}
                              </h1>
                            ) : (
                              <Link to="#">
                                <h1 className="md:ml-60">
                                  {user.firstname.charAt(0).toUpperCase() +
                                    user.firstname.slice(1)}
                                </h1>
                              </Link>
                            )}
                          </div>

                          <div className="relative">
                            <div
                              className="flex items-center space-x-3"
                              onMouseEnter={handleOpen}
                              onMouseLeave={handleClose}
                            >
                              <button className="hover:bg-gray-300 rounded-3xl p-2">
                                <FontAwesomeIcon icon={faCaretDown} />
                              </button>
                              <div>
        <span className="relative inline-block">
          <FontAwesomeIcon className="text-gray-500" icon={faBell} />
          {/* Afficher le nombre de messages non lus */}
          {unreadMessagesCount > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              {unreadMessagesCount}
            </span>
          )}
        </span>
      </div>

                            </div>
                            {displayList && (
                              <ul
                                className="listDown absolute transform transition-transform  translate-y-6 translate-x-6 ease-in-out duration-500 bg-white w-56 z-10 -left-56 top-4 space-y-3 shadow-2xl"
                                onMouseEnter={handleOpen}
                                onMouseLeave={handleClose}
                              >
                                <li className="text-gray-600 p-2">
                                  {user.email}
                                </li>
                                <Link to="/messages">
                                  <li className="hover:bg-gray-300 p-2 cursor-pointer">
                                  Messages
                                  </li>
                                </Link>


                                <Link to={user.role === 'ADMIN' ? '/utilisateurs' : '/setting-user'}>
                                  <li className="hover:bg-gray-300 p-2 cursor-pointer w-auto">
                                    {user.role === 'ADMIN' ? 'DashBoard' :  'Paramétre du compte'}
                                  </li>
                                </Link>
                              </ul>
                            )}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <Link to={user.isConnected ? '/profile' : '/login'} className="bg-sky-600 hover:bg-sky-500 hidden md:inline p-2 rounded-2xl text-white">
                <FontAwesomeIcon
                  className="mr-2"
                  icon={faPlusCircle}
                ></FontAwesomeIcon>
                Demander un service
              </Link>
              <div className="-mr-2 flex md:hidden">
              {user.isConnected ? (
    <span className="relative inline-block mr-5 mt-2">
      <FontAwesomeIcon className="text-gray-500" icon={faBell} />
      {/* Afficher le nombre de messages non lus */}
      {unreadMessagesCount > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
          {unreadMessagesCount}
        </span>
      )}
    </span>
  ) : null}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-sky-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <Transition
  show={isOpen}
  enter="transition ease-out duration-100 transform"
  enterFrom="opacity-0 scale-95"
  enterTo="opacity-100 scale-100"
  leave="transition ease-in duration-75 transform"
  leaveFrom="opacity-100 scale-100"
  leaveTo="opacity-0 scale-95"
>
  {(ref) => (
    <div className="md:hidden" id="mobile-menu">
      <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <Link
          to="/"
          className="text-stone-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Accueil
        </Link>
        <Link
          to="/ajoutePrestataire"
          className="text-stone-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Devenir prestataire
        </Link>
        {!user.isConnected ? (
          <>
            <Link
              to="/login"
              className="text-stone-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Connexion
            </Link>
            <Link
              to="register"
              className="text-stone-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Inscription
            </Link>
          </>
        ) : (
          <>
            
            <Link to="/messages">
              <span className="text-stone-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Messages
              </span>
            </Link>
            <Link to={user.role === 'ADMIN' ? '/utilisateurs' : '/setting-user'}>
              <span className="text-stone-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                {user.role === 'ADMIN' ? 'DashBoard' : 'Paramétre du compte'}
              </span>
            </Link>
            <div className="flex justify-between items-center">
              <Link
                to="#"
                onClick={LogoutHandler}
                className="text-stone-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Déconnexion
              </Link>
              
            </div>
          </>
        )}

      </div>
    </div>
  )}
</Transition>

        </nav>

        {/** Start Modal Connexion */}

        <div
          className={
            display +
            " modal fade fixed top-44 md:top-36 left-1 md:left-1/3 w-auto h-auto outline-none overflow-x-hidden overflow-y-auto z-10 shadow-2xl"
          }
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
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
        hover:no-underline
        hover:font-bold"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            ╳
          </button>
          <div className="modal-dialog relative md:w-auto pointer-events-none">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-auto pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <div>
                  <div className="space-y-2 md:flex md:flex-col ">
                    <h5
                      className="text-xl font-medium leading-normal text-gray-800"
                      id="exampleModalLabel"
                    >
                      Content de vous revoir !
                    </h5>
                    <p className="text-center">
                      Connectez-vous pour accéder à votre compte
                    </p>
                    <button className="flex items-center ml-16 md:ml-2 space-x-2 md:pl-16 border-2 border-gray-100 hover:bg-gray-100 p-3 text-sky-600">
                      <FaGoogle />
                      <p>Continuer avec Google</p>
                    </button>
                  </div>
                  <br />
                  <hr />

                  <form
                    className="space-y-4 mt-6 flex flex-col items-center"
                    action=""
                  >
                    <div className="relative ml-4">
                      <FontAwesomeIcon
                        className="absolute left-2 top-3 text-gray-500"
                        icon={faEnvelope}
                      ></FontAwesomeIcon>
                      <input
                        className="bg-gray-100 p-2 pl-8 w-80 focus:outline-sky-600"
                        type="email"
                        placeholder="Adresse e-mail"
                      />
                    </div>

                    <div className="relative ml-4">
                      <FontAwesomeIcon
                        className="absolute left-2 top-3 text-gray-500"
                        icon={faLock}
                      ></FontAwesomeIcon>
                      <input
                        className="bg-gray-100 p-2 pl-8 w-80 focus:outline-sky-600"
                        type="password"
                        placeholder="Mot de passe"
                      />
                    </div>

                    <button className="bg-sky-600 text-white p-3 w-40 md:w-56">
                      Se connecter
                    </button>
                  </form>
                  <p className="text-center">
                    Pas encore membre ?{" "}
                    <Link className="text-sky-500" to="inscription">
                      Créez un compte
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/** End Modal Connexion */}
      </div>
    </>
  );
}
