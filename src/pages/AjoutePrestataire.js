/* eslint-disable jsx-a11y/alt-text */
import imsService from '../assets/service.svg'
const AjoutePrestataire = () => {
    return (
        <div>
        <div className='flex flex-col items-center md:flex-row md:justify-center md:space-x-4 mt-8'>
            <h1 className="text-center text-lg md:text-4xl">
                Devenez prestataire de services à domicile <br /> et développez votre activité 
            </h1> 
            <img className='w-80 md:96' src={imsService}  />
        </div>
        <button className="bg-sky-600 hover:bg-sky-500 hidden md:inline p-2 rounded-2xl text-white">
            Je m'inscris
        </button>
        </div>
    );
}

export default AjoutePrestataire;