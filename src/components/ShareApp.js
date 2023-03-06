import React from 'react';
import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function ShareApp() {

  const url = window.location.href; // obtenir l'URL actuelle du site

    return (
    <div className='hidden absolute bg-gray-50 shadow-2xl ml-48 rounded-t-2xl items-center transform translate-x-full translate-y-full'>
        <div className=' flex justify-evenly items-center w-96 h-40 bg-gray-50 shadow-2xl rounded-2xl'>
        <Link className='p-8 rounded-full shadow-2xl bg-white transition ease-in-out delay-150 hover:scale-105' to={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank" rel="noopener noreferrer">
            <FaFacebook className='text-sky-600 text-xl' />
        </Link>
        <Link className='p-8 rounded-full shadow-2xl bg-white transition ease-in-out delay-150 hover:scale-105' to={`https://twitter.com/intent/tweet?url=${url}`} target="_blank" rel="noopener noreferrer">
            <FaTwitter className='text-sky-600 text-xl'/>
        </Link>
        <Link className='p-8 rounded-full shadow-2xl bg-white transition ease-in-out delay-150 hover:scale-105' to={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='text-sky-600 text-xl'/>
        </Link>
        <Link className='p-8 rounded-full shadow-2xl bg-white transition ease-in-out delay-150 hover:scale-105' to={`mailto:?subject=Regardez ceci!&body=Je voulais partager ceci avec vous:%0D%0A${url}`} target="_blank" rel="noopener noreferrer">
            <FaGoogle className='text-sky-600 text-xl'/>
        </Link>
        </div>
    </div>
    );
}

export default ShareApp;
