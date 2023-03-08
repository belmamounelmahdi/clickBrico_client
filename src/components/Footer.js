import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/LogoClickBrico.png'
import appleStore from '../assets/apple-store.png'
import playStore from '../assets/play-store.png'

const Footer = () => {
    const navigate = useNavigate()
    return (
    <>
    <hr />
        <div className='flex flex-col space-y-12 items-center md:flex justify-evenly p-4 z-50'>
            <div className='social-media'>
                <div className="logo w-14 ml-2 mr-2">
                    <Link to='accueil'>
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="icon flex ">
                    <Link className='ml-1 mr-1 text-sky-800 hover:text-sky-600'>
                        <FaFacebook />                        
                    </Link>
                    <Link className='ml-1 mr-1 text-sky-800 hover:text-sky-600'>
                        <FaInstagram />                        
                    </Link>
                    <Link className='ml-1 mr-1 text-sky-800 hover:text-sky-600'>
                        <FaLinkedin />                        
                    </Link>
                </div>
            </div>

            <div className='decouvrir hidden md:flex md:flex-col'>
                <h1 className='text-2xl'>
                    Découvrir
                </h1>
                <Link className='text-sky-800 hover:underline'>
                    Demander un service
                </Link>
                <Link className='text-sky-800 hover:underline'>
                    Devenir prestataire
                </Link>
                <Link className='text-sky-800 hover:underline'>
                    Application mobile
                </Link>
                <Link className='text-sky-800 hover:underline'>
                    Avis clients
                </Link>
                <Link to='/shareapp' className='text-sky-800 hover:underline'>
                    Inviter des amis
                </Link>
                <Link className='text-sky-800 hover:underline'>
                    Qui sommes-nous ?
                </Link>
            </div>

            <div className='mobile'>
                <h1 className='text-2xl'>
                    Télécharger l'application mobile
                </h1>
                <div className="img-app flex justify-center">
                    <Link>
                        <img className='w-28 hover:shadow-2xl' src={appleStore} alt="" />
                    </Link>
                    <Link>
                        <img className='w-28 hover:shadow-2xl' src={playStore} alt="" />
                    </Link>
                </div>
            </div>
        </div>
        <hr />
        <div className=' md:inline'>
            <p className='text-center'>
            Copyright © 2023 ClickBrico | Powered by <Link onClick={() => navigate('https://www.belmamounelmahdi.com/')}>El Mahdi Belmamoun</Link>
            </p>
        </div>
    </>
    );
}

export default Footer;