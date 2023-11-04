/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import imsService from '../assets/service.svg';
import { Link } from 'react-router-dom';
import appleStore from '../assets/apple-store.png'
import playStore from '../assets/play-store.png'

const AjoutePrestataire = () => {
  return (
    <div className="procedure-page">
      {/* <Canvas className="canvas">
        <Stars />
        <OrbitControls />
      </Canvas> */}
<div className='flex flex-col items-center md:flex-row md:justify-center md:space-x-4 mt-8'>
<h1 className="text-center text-lg md:text-4xl">
Devenez prestataire de services à domicile <br /> et développez votre activité 
</h1> 

</div>
      <ol className="procedure-steps">
        <li>
          <h2>Inscription & Connexion</h2>
          <p>Inscrivez-vous sur l'application et connectez-vous à votre compte.</p>
        </li>
        <li>
          <h2>Compléter les informations du profil avec la photo</h2>
          <p>Remplissez les informations de votre profil et ajoutez une photo de profil pour améliorer votre visibilité.</p>
        </li>
        <li>
          <h2>Charger le solde avec 200 DH</h2>
          <p>Ajoutez 200 DH à votre solde pour être éligible en tant que prestataire.</p>
        </li>
        <li>
          <h2>Recevoir une notification pour les pannes</h2>
          <p>Après qu'un client vous a choisi, vous recevrez une notification avec les détails du problème à résoudre.</p>
        </li>
        <li>
          <h2>Accepter ou refuser les demandes</h2>
          <p>Vous avez le choix d'accepter ou de refuser la demande. Si vous acceptez, votre numéro de téléphone sera envoyé au client pour qu'il puisse vous contacter.</p>
        </li>
        <li>
          <h2>Commission de 10% sur chaque transaction</h2>
          <p>Pour chaque transaction acceptée, nous prélevons une commission de 10%.</p>
        </li>
      </ol>
      <div className='mobile mb-20'>
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
  );
};

export default AjoutePrestataire;








// import imsService from '../assets/service.svg'
// const AjoutePrestataire = () => {
//     return (
//         <div className='h-screen'>
//         <div className='flex flex-col items-center md:flex-row md:justify-center md:space-x-4 mt-8'>
//             <h1 className="text-center text-lg md:text-4xl">
//                 Devenez prestataire de services à domicile <br /> et développez votre activité 
//             </h1> 
//             <img className='w-80 md:96' src={imsService}  />
//         </div>
//         </div>
//     );
// }

// export default AjoutePrestataire;