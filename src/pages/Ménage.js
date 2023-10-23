/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Loading from '../components/Loading';
import {API_URL} from '../config';

function Menage() {

    const auth = useSelector(state => state.auth)
    const user = {
        name: auth.user.name,
        email: auth.user.email
    }
    const [photoUrl, setPhotoUrl] = useState('');
    const [jobberProfiles, setJobberProfiles] = useState([]);
    const [selectedProviderEmail, setSelectedProviderEmail] = useState("");
    const [ display, setDisplay ] = useState("hidden")
    

    const sendMessage = async (message) => {
        const response = await fetch(`${API_URL}/send-message`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            sender: user.name,
            recipient: selectedProviderEmail,
            body: message
            })
        });
        const data = await response.json();
    }
    

    const handelClose = () => {
        setDisplay("hidden")
    }


    const handleSelectProvider = (email) => {
        setSelectedProviderEmail(email);
        setDisplay("inline")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        axios.get(`${API_URL}/service-menage`)
        .then(res => {
            setJobberProfiles(res.data);
        }) 
        .catch(err => console.log(err));
    }, []);
    return (
    <div>
        <h1 className='font-semibold text-xl text-center m-4'>
            Nos femmes de ménage sont à votre service
        </h1>
        {jobberProfiles.length === 0 ? 
        <div className='flex flex-col items-center mt-24 space-y-10'> 
            <Loading /> 
            <h1 className='font-bold text-lg'>
                Désolé ce service ne dispose pas des prestataires
            </h1>
        </div> : 
        <div className='flex flex-col md:flex-row md:flex-wrap'>
            {jobberProfiles.map((ele, index) => (
                <div key={index} className="w-full md:w-80 h-auto md:h-64 p-4 shadow-2xl m-2 md:m-8">
                    <img className='w-24 rounded-full' src={ele.profile.photo && `data:${ele.profile.photo.contentType};base64,${ele.profile.photo.data.toString('base64')}`} alt="Profile Photo" />

                    <h1>{ele.name}</h1>
                    <h1 className='hidden'>{ele.email}</h1>
                    <h1>{ele.profile.city}</h1>
                    <h1>{ele.profile.address}</h1>

                    <button data-toggle="modal" data-target="#exampleModal" onClick={() => handleSelectProvider(ele.email)} className='bg-sky-600 hover:bg-sky-500 p-2 text-white'>
                        Envoyer un message
                    </button>
                </div>
            ))}
        </div>
    }
{/* () => handleSelectProvider(ele.email) <div className={display+ " modal fade fixed w-1/4 h-screen right-0 top-20 outline-none overflow-x-hidden overflow-y-auto"}>
  <div className="modal-dialog relative transform translate-x-full transition-transform duration-500 pointer-events-none">
    <div className="modal-content border-none shadow-lg relative pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div className="modal-header p-4 border-b border-gray-200 rounded-t-md">
        <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Envoyer un message</h5>
      </div>
      <div className="p-4">
        <form className="flex flex-col space-y-1" onSubmit={(e) => {
          e.preventDefault();
          sendMessage(e.target.message.value);
          e.target.message.value = "";
        }}>
          <label htmlFor="message">Message</label>
          <textarea name="message" className="border-2 border-sky-200 bg-gray-100 rounded-lg p-3 w-72 h-60 focus:outline-sky-600"  placeholder="Bonjour, est ce que ..." ></textarea>
          <input className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1" type="submit" value="Envoyer" />
        </form>
      </div>
      <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
        <button onClick={handelClose} type="button" className="px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">Fermer</button>
      </div>
    </div>
  </div>
</div> modal-dialog fade fixed w-1/4 h-screen right-0 top-20 transform transition-transform duration-500 outline-none overflow-x-hidden overflow-y-auto */}

        <div className={display + " modal-dialog fade fixed h-screen right-0 top-20 duration-500 outline-none overflow-x-hidden overflow-y-auto"}
             id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
    <div className="modal relative pointer-events-none">
    <div
        className="modal-content border-none shadow-lg relative pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
        <div
        className="modal-header p-4 border-b border-gray-200 rounded-t-md">
        <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Envoyer un message</h5>
        </div>
        <div className="p-4">
            <form className="flex flex-col space-y-1" onSubmit={(e) => {
        e.preventDefault();
        sendMessage(e.target.message.value);
        e.target.message.value = "";
    }}>
            <label htmlFor="message">Message</label>
            <textarea name="message" className="border-2 border-sky-200 bg-gray-100 rounded-lg p-3 w-72 h-60 focus:outline-sky-600"  placeholder="Veuillez décrire en détail la panne que vous souhaitez réparer, y compris les informations pertinentes sur l'équipement, la situation et les symptômes observés. Plus vous fournissez d'informations, plus il sera facile pour le prestataire de comprendre et de résoudre votre problème rapidement." ></textarea>
            <input className="px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out
            ml-1" type="submit" value="Envoyer" />
            </form>
        
        </div>
        <div
        className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
        <button onClick={handelClose} type="button" className="px-6
            py-2.5
            bg-purple-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-purple-700 hover:shadow-lg
            focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-purple-800 active:shadow-lg
            transition
            duration-150
            ease-in-out" data-bs-dismiss="modal">Fermer</button>
        </div>
    </div>
    </div>
            </div>
    </div>
    )
}

export default Menage